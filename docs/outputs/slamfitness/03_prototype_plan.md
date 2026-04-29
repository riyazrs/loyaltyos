# LoyaltyOS — Technical Build Specification
## Client: Slam Fitness | Programme: IRON RECORD
### Maker Agent Output v1.0

---

## PREAMBLE

This document is the authoritative build specification for the IRON RECORD loyalty platform. It translates the Designer agent's specification into implementable technical decisions. Every section maps directly to a design spec section. Where the design spec makes an implicit technical requirement, this document makes it explicit.

**Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Claude API (Anthropic SDK), Prisma ORM, PostgreSQL (Supabase), Vercel deployment.

---

## 1. COMPONENT INVENTORY

### 1.1 Layout Components

---

#### `RootLayout`
**File:** `app/layout.tsx`

```typescript
interface RootLayoutProps {
  children: React.ReactNode;
  businessConfig: BusinessConfig; // injected at build/request time
}
```

**Core behaviour:** Injects CSS custom properties from `BusinessConfig.tokens` into `:root`, sets dark/light mode class, loads brand fonts. All colour tokens become CSS variables consumed by every child component — this is the white-label switching mechanism. No component hardcodes a colour value; all reference `var(--primary)`, `var(--bg)`, etc.

**Design spec:** Section 6, Token Configuration.

---

#### `NavBar`
**File:** `components/layout/NavBar.tsx`

```typescript
interface NavBarProps {
  activePath: 'home' | 'activity' | 'rewards' | 'record';
  memberName: string;
  tier: TierLevel;
  unreadCount?: number;
}
```

**Core behaviour:** Fixed bottom navigation on mobile, sidebar on desktop breakpoint. Renders four tabs: Home / Activity Feed / Rewards / My Record. Active state uses `var(--primary)` fill. Background uses `navBg` token with `backdrop-filter: blur(12px)`. Tab icons are SVG inline — no icon library dependency, allows per-client icon swaps.

**Design spec:** Section 5, Bottom Navigation.

---

#### `GlowBlob`
**File:** `components/layout/GlowBlob.tsx`

```typescript
interface GlowBlobProps {
  state: 'idle' | 'pr-active';
  primaryColor: string;
  accentColor: string;
}
```

**Core behaviour:** Absolutely positioned 200px radial gradient element at top-centre of home screen. In `idle` state: `primaryColor` at 15% opacity. When `state === 'pr-active'`: Framer Motion animates opacity to 25% and transitions colour to `accentColor`, holds for 3 seconds, returns to idle. This is a pure CSS/Framer element — no canvas.

**Design spec:** Section 6, Glow Blob directive.

---

### 1.2 Member Dashboard Components

---

#### `IdentityBar`
**File:** `components/dashboard/IdentityBar.tsx`

```typescript
interface IdentityBarProps {
  memberName: string;
  tier: TierLevel;
  forgePoints: number;
  streakDays: number;
  streakState: 'cold' | 'warm' | 'hot'; // <7, 7-29, 30+
}
```

**Core behaviour:** Three-element horizontal bar. Left: member name + `TierBadge`. Centre: Forge Points total rendered in bold, larger weight, colour `var(--text)`. Right: `StreakCounter`. Points value uses a Framer Motion number counter that animates upward on first render and on point-earning events (subscribe to a Zustand store action).

**Design spec:** Section 5, Top Section — The Identity Bar.

---

#### `TierBadge`
**File:** `components/dashboard/TierBadge.tsx`

```typescript
interface TierBadgeProps {
  tier: TierLevel;
  size: 'sm' | 'md' | 'lg';
  showLabel: boolean;
}

type TierLevel = 'Rookie' | 'Lifter' | 'Competitor' | 'Iron';

const TIER_VISUAL_CONFIG: Record<TierLevel, {
  color: string;
  glowColor: string;
  glowIntensity: string;
  icon: string;
}> = {
  Rookie:     { color: '#6B7280', glowColor: 'transparent', glowIntensity: 'none',                    icon: '🥋' },
  Lifter:     { color: '#0EA5E9', glowColor: '#0EA5E940',   glowIntensity: '0 0 8px #0EA5E940',       icon: '⚡' },
  Competitor: { color: '#F59E0B', glowColor: '#F59E0B60',   glowIntensity: '0 0 12px #F59E0B60',      icon: '⚔️' },
  Iron:       { color: '#DC2626', glowColor: '#DC2626CC',   glowIntensity: '0 0 16px #DC2626CC',      icon: '🔱' },
};
```

**Core behaviour:** Renders a pill-shaped badge with tier icon, tier name, and an ambient glow via `box-shadow`. Glow intensity is applied inline from `TIER_VISUAL_CONFIG`. For `Iron` tier, a subtle pulse animation (Framer Motion keyframes, 3s loop, opacity 0.8→1.0→0.8) keeps the badge alive without being distracting.

**Design spec:** Section 2, Tier Levels; Section 6, Tier Badge Visual.

---

#### `StreakCounter`
**File:** `components/dashboard/StreakCounter.tsx`

```typescript
interface StreakCounterProps {
  currentStreak: number;
  targetStreak: 7 | 30;
  hasFreezeAvailable: boolean;
  onActivateFreeze: () => void;
}
```

**Core behaviour:** Circular progress ring (SVG-based, not CSS border-radius trick — SVG gives clean control over stroke dash offset for animation). Ring stroke colour transitions from `#DC2626` (0%) to `#F97316` (100%) via an SVG linearGradient that updates its stops dynamically based on `currentStreak / targetStreak`. The flame emoji inside the ring grows in size from 14px to 22px proportionally. Tapping the counter opens a bottom sheet showing streak history and the Streak Freeze button if available.

**Design spec:** Section 3, Streak Mechanics; Section 6, Progress Rings.

---

#### `ProgressCard`
**File:** `components/dashboard/ProgressCard.tsx`

```typescript
interface ProgressCardProps {
  personaType: 'competitor' | 'transformer' | 'anchor' | 'default';
  memberData: Customer;
  leaderboardRank?: number;       // competitor only
  cohortsAttending?: string[];    // anchor only — names of classmates
  sessionStats?: {                // transformer only
    totalSessions: number;
    squat1RMGain?: number;
    ohpGain?: number;
    prCount: number;
  };
  nextSession?: {
    time: string;
    dayName: string;
    attendeeCount: number;
  };
}
```

**Core behaviour:** Single dominant card in mid-section. Conditionally renders one of three sub-templates based on `personaType`. Sub-templates are separate named exports in the same file: `<CompetitorCard />`, `<TransformerCard />`, `<AnchorCard />`. The `personaType` is derived from the AI personalisation API response and stored in the customer record. Card animates in with a subtle upward slide on dashboard load (Framer Motion, 300ms, ease-out).

**Design spec:** Section 5, Mid Section — The Progress Card.

---

#### `ChallengeCard`
**File:** `components/dashboard/ChallengeCard.tsx`

```typescript
interface ChallengeCardProps {
  challenge: ActiveChallenge;
  memberProgress: number;       // 0–1 float
  isEnrolled: boolean;
  onEnroll: (challengeId: string) => void;
}

interface ActiveChallenge {
  id: string;
  name: string;
  description: string;
  forgePointsReward: number;
  category: ActivityCategory;
  durationDays: number;
  endsAt: Date;
  requiredCompletions: number;
  currentCompletions: number;
}
```

**Core behaviour:** Card with a left-border accent strip (4px, colour derived from `CATEGORY_COLOURS` map). Progress bar fills in `var(--primary)` colour. Points reward badge in top-right corner. Enroll CTA only visible if `!isEnrolled`. On enroll, optimistic UI update — shows enrolled state immediately, API call in background, reverts on error.

**Design spec:** Section 3, Daily/Weekly Challenges; Section 5, Lower Section.

```typescript
const CATEGORY_COLOURS: Record<ActivityCategory, string> = {
  Workout:   '#EF4444',
  Streak:    '#F97316',
  Challenge: '#F59E0B',
  Achievement: '#D4AF37',
  Referral:  '#A78BFA',
  Community: '#34D399',
  Training:  '#EF4444',
  Special:   '#0EA5E9',
  Service:   '#94A3B8',
};
```

---

#### `QuickActionBar`
**File:** `components/dashboard/QuickActionBar.tsx`

```typescript
interface QuickActionBarProps {
  onLogPR: () => void;
  onBookSession: () => void;
  nextSessionInfo?: { time: string; spotsLeft: number };
}
```

**Core behaviour:** Two CTA buttons side by side. "Log a PR" is primary (`var(--primary)` fill, white text, hover transitions to `var(--accent)`). "Book Next Session" is outlined (transparent fill, `var(--primary)` border and text). If `spotsLeft` is ≤ 5, shows authentic capacity indicator alongside the booking button. Both buttons have a 150ms press-down scale transform (Framer Motion `whileTap={{ scale: 0.97 }}`).

**Design spec:** Section 5, Lower Section — Quick Actions; Section 7, Rule 3 (authentic capacity).

---

### 1.3 Point-Earning Flow Components

---

#### `PointEarnOverlay`
**File:** `components/earn/PointEarnOverlay.tsx`

```typescript
interface PointEarnOverlayProps {
  pointsEarned: number;
  activityName: string;
  progressToNextMilestone: {
    label: string;       // e.g. "7-day streak bonus"
    currentFP: number;
    targetFP: number;
  };
  showPRPrompt: boolean; // true for strength sessions
  onLogPR: () => void;
  onDismiss: () => void;
}
```

**Core behaviour:** Full-screen overlay triggered on session check-in confirmation. Sequence (Framer Motion, orchestrated with `staggerChildren`):
1. **0ms:** Background fades to `rgba(0,0,0,0.85)`
2. **100ms:** Forge-hammer SVG animation — a simplified hammer SVG drops from top, impact at centre triggers an ember particle burst (12–16 CSS-animated `<div>` elements in orange/amber colours, physics approximated with CSS keyframes varying `translateX/Y` and `opacity`)
3. **400ms:** Points value appears: `+{pointsEarned} Forge Points` in 48px bold white, with a brief scale-in (0.5→1.0)
4. **600ms:** Progress bar slides in from left showing milestone progress
5. **800ms:** PR prompt card appears if `showPRPrompt`
6. **2500ms:** Auto-dismiss if no interaction; points total on underlying dashboard pulses once

**Design spec:** Section 5, Activity Completion Flow.

---

#### `PRLogModal`
**File:** `components/earn/PRLogModal.tsx`

```typescript
interface PRLogModalProps {
  memberId: string;
  sessionId: string;
  onSubmit: (pr: PRSubmission) => void;
  onClose: () => void;
}

interface PRSubmission {
  exercise: string;
  weight: number;
  weightUnit: 'kg' | 'lb';
  reps: number;
  notes?: string;
}
```

**Core behaviour:** Bottom sheet modal. Three fields only — `exercise` (autocomplete from a predefined exercise list stored in business config), `weight` (numeric input with kg/lb toggle), `reps` (numeric stepper). Submit sends to `POST /api/prs` which creates a pending PR record and notifies coach dashboard. Points are NOT awarded until coach confirms. Member sees: *"PR logged — waiting for coach confirmation."* in a pending state indicator.

**Design spec:** Section 5, Activity Completion Flow (step 4); Section 2, PR confirmation flow.

---

### 1.4 Rewards Components

---

#### `RewardsCatalogue`
**File:** `components/rewards/RewardsCatalogue.tsx`

```typescript
interface RewardsCatalogueProps {
  rewards: Reward[];
  memberFP: number;
  memberTier: TierLevel;
  onRedeem: (rewardId: string) => void;
}
```

**Core behaviour:** Two-tab layout: "Available Now" (rewards where `memberFP >= reward.pointCost && tierRequirementMet(memberTier, reward)`) and "Coming Up" (all others, sorted by distance from current FP). Tab switching uses a sliding indicator (CSS, no JS animation needed). Rewards in "Coming Up" are not greyed out — they are full colour with a progress bar showing `(memberFP / reward.pointCost * 100)%` filled. The aspiration must feel achievable.

**Design spec:** Section 5, Reward Redemption Flow, step 1.

---

#### `RewardCard`
**File:** `components/rewards/RewardCard.tsx`

```typescript
interface RewardCardProps {
  reward: Reward;
  memberFP: number;
  memberTier: TierLevel;
  isAvailable: boolean;
  onSelect: (reward: Reward) => void;
}
```

**Core behaviour:** Tap expands to `RewardDetailSheet`. Shows reward emoji, name, cost in FP, and category. If `!isAvailable`, shows progress bar with `{reward.pointCost - memberFP} FP to go`. No lock icons, no greyed-out states — the framing is always forward motion, not exclusion.

**Design spec:** Section 5, Reward Redemption Flow, steps 1–2.

---

#### `RewardDetailSheet`
**File:** `components/rewards/RewardDetailSheet.tsx`

```typescript
interface RewardDetailSheetProps {
  reward: Reward;
  memberFP: number;
  onConfirmRedeem: () => void;
  onClose: () => void;
}
```

**Core behaviour:** Full-screen bottom sheet. Shows reward name, emoji (large, 64px), description, cost, and member's current FP balance. Single CTA: "Redeem for {X} Forge Points". Below the CTA: remaining balance preview — *"After redemption: {memberFP - reward.pointCost} FP remaining."* On confirm: transitions to `RedemptionConfirmScreen`.

**Design spec:** Section 5, Reward Redemption Flow, step 2.

---

#### `RedemptionConfirmScreen`
**File:** `components/rewards/RedemptionConfirmScreen.tsx`

```typescript
interface RedemptionConfirmScreenProps {
  reward: Reward;
  redemptionCode?: string;  // for physical rewards — single-use QR
  remainingFP: number;
  fulfilmentMethod: 'qr-code' | 'admin-notification' | 'automatic';
  onDone: () => void;
}
```

**Core behaviour:** Renders appropriate fulfilment UI based on `fulfilmentMethod`. For `qr-code`: generates a QR code (using `qrcode.react`) from `redemptionCode`, displays it at full width, shows 7-day expiry. For `admin-notification`: shows *"Your coach has been notified. They'll confirm your booking."* For `automatic`: shows confirmation with updated FP balance. All variants show the new FP total and the "next aspirational reward" progress bar.

**Design spec:** Section 5, Reward Redemption Flow, steps 3–5.

---

### 1.5 PR History / My Record Components

---

#### `MyRecordView`
**File:** `components/record/MyRecordView.tsx`

```typescript
interface MyRecordViewProps {
  memberId: string;
  prHistory: PRRecord[];
  milestones: Milestone[];
  memberSince: Date;
  totalSessions: number;
}
```

**Core behaviour:** The "My Record" tab. Four sections: PR History (sortable by lift, date, or weight), Milestone Timeline (visual, chronological), Session Count (large number, prominent — the headline statistic), and the PR Anniversary Card when applicable. This view is the "permanent visible history" concept — designed to feel like a document, not a feed. Typography is heavier here; the numbers are the content.

**Design spec:** Section 1, Emotional Journey ("12-month PR history"); Section 4, PR Anniversary surprise moment.

---

#### `PRHistoryChart`
**File:** `components/record/PRHistoryChart.tsx`

```typescript
interface PRHistoryChartProps {
  exercise: string;
  records: Array<{ date: Date; weight: number; reps: number }>;
  unit: 'kg' | 'lb';
}
```

**Core behaviour:** Line chart showing PR progression over time for a single exercise. Uses `recharts` (lightweight, React-native, no D3 dependency). Line colour `#DC2626`. Points on the line are dots; hovering/tapping shows the exact weight, reps, and date. The most recent PR is marked with a distinct filled circle + annotation. The chart's x-axis only shows dates where a PR was logged — not continuous time — to keep the visual reading as an achievement record, not a gap-revealing timeline.

**Design spec:** Section 1, "12-month PR history" moment; Section 5, My Record tab.

---

### 1.6 Admin Panel Components

---

#### `AdminLayout`
**File:** `app/admin/layout.tsx`

```typescript
interface AdminLayoutProps {
  role: 'owner' | 'coach';
  children: React.ReactNode;
}
```

**Core behaviour:** Separate layout from member-facing app. Role determines which nav items are visible. Owner sees: Overview, Members, Challenges, Churn Risk, Referrals, Settings. Coach sees: Today's Actions, Sessions, PR Queue, Member Profiles, Shoutout Queue. Both views use a light variant of the dark theme — `#111318` background — to signal "this is the back office" without abandoning the brand identity.

---

#### `ChurnRiskRegister`
**File:** `components/admin/ChurnRiskRegister.tsx`

```typescript
interface ChurnRiskRegisterProps {
  riskMembers: ChurnRiskMember[];
  onViewBrief: (memberId: string) => void;
  onDismissFlag: (memberId: string) => void;
  onMarkActioned: (memberId: string) => void;
}

interface ChurnRiskMember {
  customer: Customer;
  riskScore: number;           // 1–6, matching signal count
  activeSignals: ChurnSignal[];
  aiInterventionBrief: string; // generated by Claude
  flaggedAt: Date;
  coachActionDue: Date;        // flaggedAt + 72 hours
  isEscalated: boolean;        // true if 72hrs passed without action
}
```

**Core behaviour:** Sorted by risk score descending. Each row shows member name, tier, last session date, signal count, and a "View Brief" button. Clicking "View Brief" opens a side panel with the full AI-generated intervention brief, labelled prominently: *"IRON RECORD AI Suggestion — coach discretion applies."* An action timestamp is recorded when coach marks as actioned. If `isEscalated`, row is highlighted in amber with an owner-visible alert badge.

**Design spec:** Section 5, Owner Dashboard — Churn Risk Register; Section 7, Rule 5 (coach owns relationship, 72-hour escalation).

---

#### `CoachActionList`
**File:** `components/admin/CoachActionList.tsx`

```typescript
interface CoachActionListProps {
  date: Date;
  checkInConfirmations: SessionAttendance[];
  prConfirmations: PRSubmission[];
  memberCheckIns: ChurnRiskMember[];
  shoutoutQueue: MilestoneShoutout[];
}

interface MilestoneShoutout {
  member: Customer;
  milestoneType: 'session-50' | 'session-100' | 'tier-upgrade' | 'streak-30' | 'streak-7';
  suggestedAcknowledgement: string; // AI-generated suggestion
  isActioned: boolean;
}
```

**Core behaviour:** The coach's daily view — a prioritised list of human actions required. Ordered: Escalated churn flags → PR confirmations → Check-in confirmations → Soft check-in nudges → Shoutout queue. Each item is a card with a primary action button (Confirm / Send / Dismiss). PR confirmations have two options: "Confirm ✓" and "Flag for Review ⚑". Confirming releases the 50 FP reward. Flagging opens a notes field.

**Design spec:** Section 5, Coach Dashboard; Section 5, Coach PR Confirmation flow; Section 3, Quiet Milestone surprise moment.

---

#### `FootfallHeatmap`
**File:** `components/admin/FootfallHeatmap.tsx`

```typescript
interface FootfallHeatmapProps {
  data: Array<{
    dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    hour: number;        // 0–23
    attendanceRate: number; // 0–1
    offPeakTarget: boolean;
  }>;
  weeks: number;         // how many weeks of data shown
}
```

**Core behaviour:** 7×24 grid (days × hours). Each cell's background opacity maps to `attendanceRate`. Off-peak target cells (Tue/Thu 10am–3pm) are outlined in `var(--accent)` to make the business objective legible at a glance. Hovering/tapping shows exact count and rate. This is a pure CSS grid — no charting library needed.

**Design spec:** Section 5, Owner Dashboard — Footfall heatmap.

---

### 1.7 Onboarding Components

---

#### `OnboardingConsent`
**File:** `components/onboarding/OnboardingConsent.tsx`

```typescript
interface OnboardingConsentProps {
  onComplete: (consents: ConsentRecord) => void;
}

interface ConsentRecord {
  attendanceTracking: boolean;
  progressLogging: boolean;
  coachingAlerts: boolean;
  socialRecognition: boolean;
  agreedAt: Date;
}
```

**Core behaviour:** Four-screen stepper (not a single form). Each screen: one toggle, one benefit statement, one "Why we need this" expandable (initially collapsed). All toggles default to `false`. Progress indicator (dots) at top. On each screen, "Continue" button is always active — consent is never required to proceed. Final screen summarises chosen consents and shows the reduced-personalisation notice if any are off: *"With coaching alerts off, we won't share your activity patterns with coaches. You'll still earn Forge Points for everything you do."* This copy is hardcoded per the design spec.

**Design spec:** Section 7, Onboarding Consent Flow.

---

## 2. DATA MODELS

```typescript
// ============================================================
// CORE ENUMS
// ============================================================

type TierLevel = 'Rookie' | 'Lifter' | 'Competitor' | 'Iron';

type ActivityCategory =
  | 'Workout'
  | 'Training'
  | 'Achievement'
  | 'Streak'
  | 'Challenge'
  | 'Referral'
  | 'Community'
  | 'Service'
  | 'Special';

type PersonaType = 'competitor' | 'transformer' | 'anchor' | 'default';

type ChurnSignal =
  | 'frequency-drop'
  | 'class-switch'
  | 'ghost-bookings'
  | 'pr-silence'
  | 'streak-break'
  | 'social-cluster-disruption';

// ============================================================
// CUSTOMER
// ============================================================

interface Customer {
  id: string;
  businessId: string;

  // Identity
  name: string;
  email: string;
  phone?: string;
  avatarUrl?: string;
  memberSince: Date;

  // Loyalty State
  tier: TierLevel;
  forgePoints: number;            // current redeemable balance
  lifetimePoints: number;         // total ever earned (for tier calc)
  personaType: PersonaType;       // AI-assigned, updated monthly

  // Streak State
  currentStreak: number;          // days
  longestStreak: number;
  lastSessionDate: Date | null;
  streakFreezeUsedThisQuarter: boolean;
  streakFreezeActive: boolean;

  // Session Metrics
  totalSessions: number;
  sessionsThisMonth: number;
  averageSessionsPerWeek: number; // rolling 8-week average
  lastSessionBaseline: number;    // for churn detection (avg sessions/week)

  // Churn Risk
  churnSignals: ChurnSignal[];
  churnScore: number;             // 0–6, count of active signals
  lastChurnCheck: Date;

  // Consent
  consents: ConsentRecord;

  // Activity History
  activityHistory: Activity[];
  prHistory: PRRecord[];
  milestones: Milestone[];
  redeemedRewards: RedeemedReward[];

  // Referral
  referralCode: string;
  referredByMemberId?: string;
  referredMemberIds: string[];

  // Metadata
  createdAt: Date;
  updatedAt: Date;
}

// ============================================================
// ACTIVITY
// ============================================================

interface Activity {
  id: string;
  businessId: string;
  customerId: string;

  name: string;
  emoji: string;
  pointValue: number;
  category: ActivityCategory;
  description: string;

  completedAt: Date;
  sessionId?: string;             // links to class booking system
  confirmedByCoachId?: string;    // required for PR activities
  isConfirmed: boolean;

  // For streak calculation
  countsTowardStreak: boolean;
}

// ============================================================
// PR RECORD
// ============================================================

interface PRRecord {
  id: string;
  customerId: string;
  sessionId?: string;

  exercise: string;
  weight: number;
  weightUnit: 'kg' | 'lb';
  reps: number;
  notes?: string;

  status: 'pending' | 'confirmed' | 'flagged';
  submittedAt: Date;
  confirmedAt?: Date;
  confirmedByCoachId?: string;

  // For PR Anniversary feature
  firstPRForExercise: boolean;
  previousBest?: number;          // weight in same unit
  improvement?: number;           // calculated field
}

// ============================================================
// MILESTONE
// ============================================================

interface Milestone {
  id: string;
  customerId: string;

  type:
    | 'session-count'       // 50th, 100th session
    | 'tier-upgrade'
    | 'streak-7'
    | 'streak-30'
    | 'anniversary'         // 3, 6, 12 month membership
    | 'pr-anniversary'      // 1 year since first PR
    | 'challenge-complete';

  value?: number;           // e.g. session number, streak length, months
  pointsAwarded: number;
  achievedAt: Date;

  // Human acknowledgement tracking
  coachAcknowledged: boolean;
  coachAcknowledgedAt?: Date;
  publiclyAcknowledged: boolean;  // for 30-day streak community post
}

// ============================================================
// REWARD
// ============================================================

interface Reward {
  id: string;
  businessId: string;

  name: string;
  emoji: string;
  description: string;
  pointCost: number;
  category: 'physical' | 'experiential' | 'access' | 'identity';

  fulfilmentMethod: 'qr-code' | 'admin-notification' | 'automatic';
  qrCodeValidDays?: number;       // 7 for physical rewards

  // Tier gating
  minimumTier?: TierLevel;        // e.g. 'Iron' for Membership Credit

  isActive: boolean;
  stockLimited: boolean;
  stockRemaining?: number;

  createdAt: Date;
}

interface RedeemedReward {
  id: string;
  customerId: string;
  rewardId: string;
  reward: Reward;

  pointsSpent: number;
  redeemedAt: Date;
  fulfilledAt?: Date;

  qrCode?: string;                // single-use token
  qrCodeExpiresAt?: Date;
  isQrCodeUsed: boolean;

  adminNotified: boolean;
  notes?: string;
}

// ============================================================
// OFFER (AI-generated)
// ============================================================

interface Offer {
  id: string;
  businessId: string;

  title: string;
  description: string;
  ctaLabel: string;
  ctaAction: 'enroll-challenge' | 'book-session' | 'view-rewards' | 'log-pr';

  validFrom: Date;
  validUntil: Date;

  targetSegment: PersonaType | 'all' | 'at-risk' | 'off-peak-eligible';
  pointsIncentive?: number;

  // Generation metadata
  generatedByAI: boolean;
  aiPromptContext?: string;       // stores the trigger condition for audit
  isLowFootfallOffer: boolean;

  impressions: number;
  conversions: number;
}

// ============================================================
// BUSINESS
// ============================================================

interface Business {
  id: string;
  name: string;
  type: BusinessType;
  slug: string;                   // URL namespace: /[slug]/dashboard

  config: BusinessConfig;
  activities: ActivityDefinition[];
  rewards: Reward[];
  challenges: ChallengeDefinition[];

  // Integration config
  bookingSystemWebhookUrl?: string;
  weatherApiEnabled: boolean;
  weatherLocationId?: string;

  createdAt: Date;
  subscriptionTier: 'starter' | 'growth' | 'enterprise';
}

type BusinessType =
  | 'fitness-strength'
  | 'fitness-yoga'
  | 'food-beverage'
  | 'retail'
  | 'health-dental'
  | 'gaming-entertainment';

// ============================================================
// ACTIVITY DEFINITION (business-level template)
// ============================================================

interface ActivityDefinition {
  id: string;
  businessId: string;
  name: string;
  emoji: string;
  category: ActivityCategory;
  pointValue: number;
  description: string;
  requiresCoachConfirmation: boolean;
  maxPerDay?: number;
  maxPerWeek?: number;
  maxPerMonth?: number;
  isActive: boolean;
}

// ============================================================
// CHALLENGE DEFINITION
// ============================================================

interface ChallengeDefinition {
  id: string;
  businessId: string;
  name: string;
  description: string;
  emoji: string;
  category: ActivityCategory;
  pointsReward: number;
  enrollmentPoints: number;       // points for signing up (e.g. 10 FP)
  durationDays: number;
  requiredCompletions: number;
  completionActivityIds: string[]; // which ActivityDefinition IDs count
  isRecurring: boolean;
  recurrencePeriod?: 'weekly' | 'monthly';
  isActive: boolean;
}
```

---

## 3. BUSINESS CONFIG SYSTEM

### 3.1 White-Label Switching Architecture