# LoyaltyOS — SLAM FORM Technical Build Specification

**Platform:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Claude AI (Anthropic SDK)
**Prepared by:** Maker Agent · LoyaltyOS Platform
**Target Client:** Slam Fitness, Stoneybatter, Dublin 7

---

## TABLE OF CONTENTS

1. [Component Inventory](#1-component-inventory)
2. [Data Models](#2-data-models)
3. [Business Config System](#3-business-config-system)
4. [Claude AI Integration](#4-claude-ai-integration)
5. [Mini-Game Spec](#5-mini-game-spec)
6. [Deployment Checklist](#6-deployment-checklist)

---

## 1. COMPONENT INVENTORY

### 1.1 Layout Components

---

#### `AppShell`
**File:** `src/components/layout/AppShell.tsx`

```typescript
interface AppShellProps {
  config: BusinessConfig;
  customer: Customer;
  children: React.ReactNode;
  activePage: 'home' | 'earn' | 'rewards' | 'crew' | 'profile';
}
```

**Behaviour & State:**
- Renders the persistent bottom navigation bar and top header strip
- Injects CSS custom properties from `config.theme` onto `:root` at mount, enabling full white-label theming
- Manages mobile viewport height via `--vh` CSS variable (avoids iOS Safari bottom-bar collapse)
- Active page highlighted in bottom nav using `activePage` prop
- No internal state — purely presentational shell driven by props

**Design Spec:** Implements the persistent navigation frame referenced across all dashboard screens

---

#### `HeaderStrip`
**File:** `src/components/layout/HeaderStrip.tsx`

```typescript
interface HeaderStripProps {
  customerName: string;
  tier: TierLevel;
  tierConfig: TierConfig;
  onProfileTap: () => void;
}
```

**Behaviour & State:**
- Displays member name and tier badge side by side
- Tier badge pulses with a CSS keyframe glow animation using `tierConfig.primaryColour`
- Tapping the badge triggers a micro-interaction: badge scales to 1.15× then returns over 200ms
- `onProfileTap` routes to `/profile`

**Design Spec:** Design Spec §5 — "Header Strip — Member name + tier badge"

---

### 1.2 Dashboard Components

---

#### `RepBalanceCard`
**File:** `src/components/dashboard/RepBalanceCard.tsx`

```typescript
interface RepBalanceCardProps {
  currentReps: number;
  nextTierThreshold: number;
  currentTierName: string;
  nextTierName: string;
  repsCurrencyLabel: string; // "Reps" for Slam, configurable per business
  onCardTap: () => void;
}
```

**Behaviour & State:**
- Local state: `animatedReps: number` — on mount, counts up from 0 to `currentReps` over 1.2s using `requestAnimationFrame` easing (ease-out cubic). Makes the balance feel earned on every visit.
- SVG ring progress bar: `strokeDashoffset` calculated as `circumference × (1 - progress)` where `progress = currentReps / nextTierThreshold`
- Ring colour interpolates between `tierConfig.primaryColour` and `tierConfig.accentColour` based on progress percentage
- Tap opens an animated drawer showing tier benefit summary
- Inner state: `isDrawerOpen: boolean`

**Design Spec:** Design Spec §5 — "Rep Balance Card — Large, centred display of total Reps with ring progress bar"

---

#### `ActivityFeed`
**File:** `src/components/dashboard/ActivityFeed.tsx`

```typescript
interface ActivityFeedProps {
  recentActivities: ActivityRecord[];
  repsCurrencyLabel: string;
  maxItems?: number; // default 5
}
```

**Behaviour & State:**
- Renders a vertically scrollable list of recent activity completions
- Each item has an enter animation: slides in from right with opacity 0→1, staggered by index × 80ms
- Items group by date using a `useMemo` date-grouping function
- New activities (completedAt within last 2 hours) render with a pulsing green dot indicator
- No pagination — truncated to `maxItems`, with "View all" link to `/profile/history`

**Design Spec:** Supports the activity history element of the member dashboard

---

#### `StreakTracker`
**File:** `src/components/dashboard/StreakTracker.tsx`

```typescript
interface StreakTrackerProps {
  currentStreak: number; // weeks
  streakShieldActive: boolean;
  lastSessionDate: string; // ISO 8601
  weeklyAttendanceThisStreak: WeeklyAttendance[];
  onStreakTap: () => void;
}

interface WeeklyAttendance {
  weekStarting: string; // ISO 8601 Monday
  sessionsAttended: number;
  qualified: boolean; // ≥1 session = streak week
}
```

**Behaviour & State:**
- Renders a horizontal row of week bubbles (filled/empty/shield-protected)
- Flame emoji 🔥 displayed with CSS scale animation when `currentStreak >= 7`
- If `streakShieldActive`, the next unfilled bubble renders with a shield icon and gold border
- State: `showStreakDetail: boolean` — tapping opens a modal with full streak history
- Motivational copy updates based on streak length: 0–2 weeks = "Build your base", 3–6 = "Momentum building", 7+ = "You're on fire 🔥"

**Design Spec:** Design Spec §3 — Streak Mechanics

---

#### `ChallengeCard`
**File:** `src/components/dashboard/ChallengeCard.tsx`

```typescript
interface ChallengeCardProps {
  challenge: ActiveChallenge;
  onEnrol: (challengeId: string) => Promise<void>;
  onViewProgress: (challengeId: string) => void;
  isEnrolled: boolean;
}

interface ActiveChallenge {
  id: string;
  name: string;
  description: string;
  cadence: 'daily' | 'weekly' | 'monthly';
  repsReward: number;
  repsCurrencyLabel: string;
  targetCount: number;
  currentProgress: number;
  expiresAt: string; // ISO 8601
  emoji: string;
}
```

**Behaviour & State:**
- Progress bar fills from left to right: `width = (currentProgress / targetCount) * 100%`
- Enrol button shows loading spinner during `onEnrol` async call
- On completion (`currentProgress >= targetCount`): card background transitions to a celebratory gradient, confetti particle burst fires (CSS-only, 12 pseudo-elements)
- Countdown timer updates every minute via `useEffect` interval showing time remaining
- State: `enrolling: boolean`, `justCompleted: boolean`

**Design Spec:** Design Spec §3 — Daily/Weekly Challenges table

---

#### `PersonalisedSuggestions`
**File:** `src/components/dashboard/PersonalisedSuggestions.tsx`

```typescript
interface PersonalisedSuggestionsProps {
  customerId: string;
  businessConfig: BusinessConfig;
  customerProfile: Customer;
  onActivitySelect: (activityId: string) => void;
}
```

**Behaviour & State:**
- On mount, fires `POST /api/personalise` with customer profile + business config
- State: `suggestions: AISuggestion[] | null`, `loading: boolean`, `error: string | null`
- Loading state: three skeleton cards with shimmer animation
- Each suggestion card shows: activity name, emoji, rep value, and a one-line AI-generated reason string
- Reason text renders with a subtle typewriter effect (character-by-character reveal, 30ms per char) to signal AI provenance
- Error state: falls back to static top-3 activities by `defaultPriority` from business config

**Design Spec:** Design Spec §4 — AI Personalisation Layer

---

#### `DynamicOfferBanner`
**File:** `src/components/dashboard/DynamicOfferBanner.tsx`

```typescript
interface DynamicOfferBannerProps {
  businessConfig: BusinessConfig;
  currentDateTime: string; // ISO 8601
  isLowTurnoverSlot: boolean;
  onOfferClaim: (offerId: string) => Promise<void>;
}
```

**Behaviour & State:**
- On mount, fires `POST /api/offers`
- State: `offers: DynamicOffer[] | null`, `loading: boolean`, `claimedOfferIds: Set<string>`
- Renders as a horizontally swipeable carousel (touch events + mouse drag)
- Each offer card has a countdown timer to `validUntil`
- Claimed offers show a checkmark animation and are greyed out but remain visible
- State: `currentSlide: number`, `isDragging: boolean`, `dragStartX: number`

**Design Spec:** Design Spec §4 — AI-Generated Personalised Offers

---

### 1.3 Rewards Components

---

#### `RewardsWallet`
**File:** `src/components/rewards/RewardsWallet.tsx`

```typescript
interface RewardsWalletProps {
  availableReps: number;
  rewards: Reward[];
  redeemedRewards: RedeemedReward[];
  repsCurrencyLabel: string;
  onRedeem: (rewardId: string) => Promise<RedemptionResult>;
}

interface RedemptionResult {
  success: boolean;
  confirmationCode?: string;
  errorMessage?: string;
}
```

**Behaviour & State:**
- State: `activeTab: 'available' | 'redeemed'`, `redeemingId: string | null`, `confirmationModal: RedemptionResult | null`
- Rewards sorted: affordable (reps ≤ available) first, then by rep cost ascending
- Affordable rewards render with full colour; unaffordable render at 60% opacity with "X more Reps needed" label
- The anchor reward (Month Free / highest cost) always renders last with a distinct "Goal Reward" badge regardless of affordability
- On redeem: confirmation modal shows with 3-second countdown before finalising (allows accidental-tap cancellation)

**Design Spec:** Design Spec §2 — Redeemable Rewards

---

#### `RewardCard`
**File:** `src/components/rewards/RewardCard.tsx`

```typescript
interface RewardCardProps {
  reward: Reward;
  availableReps: number;
  repsCurrencyLabel: string;
  onRedeem: () => void;
  isRedeeming: boolean;
  isGoalReward: boolean;
}
```

**Behaviour & State:**
- Purely presentational with redeem button state management lifted to `RewardsWallet`
- `isGoalReward` renders a distinct card style: gradient border, star badge, slightly larger card
- Rep cost displayed as `{cost} {repsCurrencyLabel}` — white-label safe

**Design Spec:** Design Spec §2 — Redeemable Rewards table

---

### 1.4 Social Components

---

#### `CrewPanel`
**File:** `src/components/social/CrewPanel.tsx`

```typescript
interface CrewPanelProps {
  crew: CrewMember[];
  crewCode: string;
  monthlyChallenge: CrewChallenge | null;
  onInvite: () => void;
  onViewLeaderboard: () => void;
}

interface CrewMember {
  id: string;
  displayName: string;
  avatarInitials: string;
  sessionsThisMonth: number;
  isAtRisk: boolean; // attendance below 50% of their baseline
}

interface CrewChallenge {
  id: string;
  name: string;
  targetSessions: number;
  completedSessions: number;
  bonusReps: number;
  expiresAt: string;
  repsCurrencyLabel: string;
}
```

**Behaviour & State:**
- At-risk crew members (low attendance) highlighted with a gentle amber indicator — no alarming language, framed as "check in with them"
- Crew code displayed with one-tap copy-to-clipboard + share sheet trigger
- State: `copiedCode: boolean` — shows "Copied!" for 2 seconds after tap
- Monthly challenge progress bar aggregates all crew member sessions

**Design Spec:** Design Spec §3 — Social and Referral Mechanics, Crew Challenge

---

### 1.5 Notification / Delight Components

---

#### `SurpriseDelightToast`
**File:** `src/components/notifications/SurpriseDelightToast.tsx`

```typescript
interface SurpriseDelightToastProps {
  trigger: 'comeback' | 'pr_celebration' | 'anniversary';
  memberName: string;
  bonusReps: number;
  repsCurrencyLabel: string;
  customMessage?: string;
  prStat?: PRStat; // required if trigger === 'pr_celebration'
  onDismiss: () => void;
}

interface PRStat {
  exerciseName: string;
  newRecord: string; // e.g. "140kg"
  previousRecord: string;
  improvementPercent: number;
}
```

**Behaviour & State:**
- For `pr_celebration`: full-screen overlay, PR stat displayed full-bleed, 🔥 SVG flame animation loops 3 times, then auto-scales to bottom-sheet style
- For `comeback`: slides up from bottom, warm amber background, auto-dismisses after 6 seconds
- For `anniversary`: full-screen celebration with confetti burst (CSS custom property driven colours), scrollable history summary
- State: `phase: 'entering' | 'displaying' | 'exiting'`, managed by a state machine using `useReducer`

**Design Spec:** Design Spec §3 — Surprise and Delight Moments

---

#### `CoachAlertBadge`
**File:** `src/components/notifications/CoachAlertBadge.tsx`

```typescript
interface CoachAlertBadgeProps {
  alerts: CoachAlert[];
  onAlertRead: (alertId: string) => void;
}

interface CoachAlert {
  id: string;
  memberName: string;
  alertType: 'booking_drop' | 'anchor_missed' | 'programme_transition' | 'coach_gap' | 'social_risk';
  contextMessage: string; // AI-generated contextual message
  triggeredAt: string;
  isRead: boolean;
}
```

**Behaviour & State:**
- **This component is coach-facing, not member-facing**
- Renders in a coach admin sidebar panel
- Unread alerts show red badge count on nav icon
- Each alert expands to show the full contextual AI message
- State: `expandedAlertId: string | null`

**Design Spec:** Design Spec §4 — Churn Prediction and Intervention Signals

---

### 1.6 Earn Screen Components

---

#### `ActivityGrid`
**File:** `src/components/earn/ActivityGrid.tsx`

```typescript
interface ActivityGridProps {
  activities: ActivityDefinition[];
  completedActivityIds: string[];
  repsCurrencyLabel: string;
  onActivityInfo: (activityId: string) => void;
}

interface ActivityDefinition {
  id: string;
  name: string;
  emoji: string;
  category: ActivityCategory;
  repValue: number;
  description: string;
  completionType: 'automatic' | 'coach_verified' | 'self_log';
  weeklyCapCount?: number; // e.g. Slam Form Post = once per week
  defaultPriority: number;
}
```

**Behaviour & State:**
- Grid layout: 2 columns on mobile, 3 on tablet
- Activities filter by category via a horizontally scrollable pill filter row
- Completed activities show a checkmark overlay with rep value strikethrough
- State: `activeFilter: ActivityCategory | 'all'`
- `completionType === 'coach_verified'` activities show a small coach icon — sets correct expectation

**Design Spec:** Design Spec §2 — Earnable Activities (14 