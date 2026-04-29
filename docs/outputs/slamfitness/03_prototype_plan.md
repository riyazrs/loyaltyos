# LoyaltyOS — FORGED Technical Build Specification
## Slam Fitness, Stoneybatter, Dublin 7

*Build specification for Next.js implementation. Prepared from Designer agent handoff.*

---

## SECTION 1: COMPONENT INVENTORY

### 1.1 Layout & Shell Components

---

#### `AppShell`
**File:** `src/components/layout/AppShell.tsx`

```typescript
interface AppShellProps {
  children: React.ReactNode;
  businessConfig: BusinessConfig;
  customer: Customer;
}
```

**Behaviour & State:**
- Renders the global navigation bar, glow blob background element, and main content slot
- Injects CSS custom properties from `businessConfig.theme` tokens onto `:root` at mount
- Maintains `navActiveTab` state (Home | Progress | Rewards | Community | Profile)
- The glow blob is a fixed, non-interactive `div` with `pointer-events: none` — always renders behind content

**Implements:** Design spec §6 — Navigation bar tokens, glow blob, backdrop-blur nav

---

#### `BottomNav`
**File:** `src/components/layout/BottomNav.tsx`

```typescript
interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  theme: ThemeTokens;
}

type NavTab = 'home' | 'progress' | 'rewards' | 'community' | 'profile';
```

**Behaviour & State:**
- Five tabs: Home, Progress, Rewards, Community, Profile
- Active tab icon renders in `theme.primary` (`#DC2626`); inactive in `theme.subtext`
- Uses Next.js `useRouter` for programmatic navigation — tabs map to `/`, `/progress`, `/rewards`, `/community`, `/profile`
- `backdrop-filter: blur(16px)` applied via Tailwind `backdrop-blur-2xl`
- Fixed to viewport bottom; safe area inset applied for iOS home indicator

**Implements:** Design spec §6 — Navigation bar visual language

---

#### `IronPointsHeader`
**File:** `src/components/layout/IronPointsHeader.tsx`

```typescript
interface IronPointsHeaderProps {
  balance: number;
  tier: TierLevel;
  customerName: string;
}
```

**Behaviour & State:**
- Sticky top header strip showing the ⬡ IP balance and tier badge pill
- Balance animates (count-up) when the value changes — uses `useEffect` with `requestAnimationFrame`
- Tier badge pill renders using the tier-specific styling from the badge map (see §3)

**Implements:** Design spec §5 — "Iron Points balance always visible in top-right header"

---

### 1.2 Dashboard Components

---

#### `IronRing`
**File:** `src/components/dashboard/IronRing.tsx`

```typescript
interface IronRingProps {
  currentPoints: number;
  tierFloor: number;
  tierCeiling: number;
  tierName: string;
  nextTierName: string;
  theme: ThemeTokens;
}
```

**Behaviour & State:**
- SVG-based circular progress indicator, rendered server-side safe (no canvas)
- Two concentric circles: muted track (`theme.muted` = `rgba(255,255,255,0.06)`) and progress stroke (`theme.primary` = `#DC2626`)
- `strokeDasharray` and `strokeDashoffset` calculated from `(currentPoints - tierFloor) / (tierCeiling - tierFloor)`
- Within 100 IP of tier ceiling: adds `filter: drop-shadow(0 0 12px #DC262699)` to the SVG stroke element — the "quietly burning ring" effect
- Central text: current IP balance (large, bold, `#DC2626`) with tier name below (small, `theme.subtext`)
- Progress animates on mount using a CSS transition on `strokeDashoffset` (600ms ease-out)
- Displays "X IP to [NextTier]" below the ring in `theme.subtext`

**Implements:** Design spec §5 — Iron Ring, §6 — Iron Ring visual language

---

#### `StreakCounter`
**File:** `src/components/dashboard/StreakCounter.tsx`

```typescript
interface StreakCounterProps {
  currentStreakWeeks: number;
  isActive: boolean;
  hasStreakShield: boolean;
  shieldUsedThisPeriod: boolean;
}
```

**Behaviour & State:**
- Renders 🔥 flame icon (SVG, `#F97316`) with current streak week count
- When `isActive === true`: flame SVG has a CSS animation applied via a `data-active` attribute — `@keyframes flamePulse { 0%,100% { opacity: 1 } 50% { opacity: 0.7 } }` on 2-second infinite loop
- When `isActive === false`: flame renders at full opacity but static, with a subtle grey overlay — streak broken state
- Shield badge: if `hasStreakShield && !shieldUsedThisPeriod`, renders a small ⚡ icon beside the flame — indicating the streak shield is available
- Tap/click expands a tooltip explaining the streak shield mechanic (inline, no modal)

**Implements:** Design spec §3 — Streak mechanics, §6 — Streak flame visual, §7 — Streak shield transparency

---

#### `WeeklyChallengeCard`
**File:** `src/components/dashboard/WeeklyChallengeCard.tsx`

```typescript
interface WeeklyChallengeCardProps {
  challenge: ActiveChallenge;
  onExpand: () => void;
  theme: ThemeTokens;
}

interface ActiveChallenge {
  id: string;
  name: string;
  description: string;
  pointsAtStake: number;
  expiresAt: Date;
  currentProgress: number;
  totalRequired: number;
  category: ActivityCategory;
}
```

**Behaviour & State:**
- Glass card (`cardBg`, `cardBorder` tokens) with a 2px `#F97316` accent line at the top edge when challenge is the "active bonus" state
- Progress bar: `#DC2626` fill, muted track, `border-radius: 4px`
- Countdown timer renders as "Xh Ym remaining" — updates every 60 seconds via `useEffect` interval
- `onExpand` fires a sheet/drawer from the bottom with full challenge criteria and progress history
- Category chip rendered using `ActivityCategoryChip` component (see §1.5)

**Implements:** Design spec §5 — "This week's challenge card", §6 — Active card border styling

---

#### `RecentActivityFeed`
**File:** `src/components/dashboard/RecentActivityFeed.tsx`

```typescript
interface RecentActivityFeedProps {
  activities: ActivityLogEntry[];
  maxDisplay?: number; // defaults to 3 per design spec
}

interface ActivityLogEntry {
  activity: Activity;
  earnedAt: Date;
  pointsEarned: number;
  isStreak?: boolean;
  isMilestone?: boolean;
}
```

**Behaviour & State:**
- Renders the last `maxDisplay` (default: 3) activity log entries
- Each entry: activity emoji, name, timestamp ("Today 6:15am" / "Yesterday"), and points earned in `#DC2626`
- Streak and milestone entries get a subtle left-border accent in `#F97316`
- No scroll within the feed — it's a summary; "View all" links to `/progress`
- Entries animate in on mount with a staggered fade-up (50ms delay between each)

**Implements:** Design spec §5 — "Recent activity feed"

---

#### `QuickActionsRow`
**File:** `src/components/dashboard/QuickActionsRow.tsx`

```typescript
interface QuickActionsRowProps {
  onBookSession: () => void;
  onLogPB: () => void;
  onCoachCheckIn: () => void;
}
```

**Behaviour & State:**
- Three pill buttons in a horizontal row: "Book Session", "Log a PB", "Check In with Coach"
- Each button has an icon (calendar, barbell, clipboard), label, and a subtle `#DC2626` border on hover/focus
- Each fires its respective `onXxx` callback — actual navigation/modal handled by parent
- Always visible — no conditional rendering

**Implements:** Design spec §5 — "Quick actions row — Book a Session / Log a PB / Check In with Coach"

---

#### `PersonalisedPromptCard`
**File:** `src/components/dashboard/PersonalisedPromptCard.tsx`

```typescript
interface PersonalisedPromptCardProps {
  prompt: PersonalisedPrompt | null;
  isLoading: boolean;
  onDismiss: () => void;
}

interface PersonalisedPrompt {
  type: 'streak_nudge' | 'challenge_reminder' | 'off_peak_bonus' | 'milestone_celebration';
  message: string;
  ctaLabel?: string;
  ctaAction?: string; // route path
  expiresAt?: Date;   // present for off_peak_bonus type
  pointsAttached?: number;
}
```

**Behaviour & State:**
- Renders below the Quick Actions row
- Loading state: skeleton card with shimmer animation (`#DC262611` cycling)
- `off_peak_bonus` type: card border brightens to `rgba(255,255,255,0.22)`, gains `#F97316` top accent line, and shows a countdown if `expiresAt` is set — this is the "glowing Bonus Active card" from the spec
- `milestone_celebration` type: renders with a subtle pulse animation on the card border
- Dismiss button (×) top-right; dismissed state stored in `localStorage` per prompt ID so it doesn't re-appear on reload
- If `prompt === null` and `!isLoading`, component renders nothing (no empty state)

**Implements:** Design spec §3 — Cold Day Bonus, §4 — AI personalisation, §5 — Personalised prompt card

---

### 1.3 Point Earning Flow Components

---

#### `PointEarnConfirmation`
**File:** `src/components/earn/PointEarnConfirmation.tsx`

```typescript
interface PointEarnConfirmationProps {
  primaryEarn: EarnEvent;
  bonusEarns: EarnEvent[]; // triggered overlays (streak, challenge, surprise)
  onComplete: () => void;
}

interface EarnEvent {
  activityName: string;
  pointsEarned: number;
  emoji: string;
  isMilestone: boolean;
  milestoneLabel?: string; // e.g. "Streak Keeper — Week 3"
}
```

**Behaviour & State:**
- Full-screen overlay component, `z-index: 50`, dark background
- **Phase 1 (0–1500ms):** Point value animates in from 0 using `requestAnimationFrame` count-up. The Iron Ring SVG (embedded, miniature) visually fills by the corresponding amount — the fill transition runs over 1200ms
- **Phase 2 (1500ms+, if `bonusEarns.length > 0`):** Primary screen fades slightly, bonus earn card slides up from bottom — larger, celebratory variant. Each bonus earn cycles if there are multiple (800ms between)
- **Exit:** After all phases complete OR user taps anywhere, `onComplete()` fires, overlay unmounts
- Point values always render in `#DC2626` bold, 48px

**Implements:** Design spec §5 — Activity Completion Flow (steps 2–4), "most important micro-moment"

---

#### `MilestoneGhostScreen`
**File:** `src/components/earn/MilestoneGhostScreen.tsx`

```typescript
interface MilestoneGhostScreenProps {
  sessionCount: number; // e.g. 50 or 100
  sessionHeatmapData: HeatmapEntry[];
  bestLifts: BestLift[];
  pointsAwarded: number;
  onDismiss: () => void;
}

interface HeatmapEntry {
  date: string; // ISO date
  attended: boolean;
}

interface BestLift {
  exerciseName: string;
  value: string; // e.g. "120kg" or "4:45/km"
  achievedAt: Date;
}
```

**Behaviour & State:**
- Full-screen "quiet milestone" display — no confetti, no particles
- Header: `"${sessionCount} sessions."` — large, white, all-caps, 32px
- Subheader: `"Here's what you've built."` — `theme.subtext`, 16px
- Session heatmap: rendered as a CSS Grid of small squares (7 columns for days of week, N rows for weeks). Attended days: `#DC2626` fill. Not-attended: `theme.muted`. No labels — the pattern speaks for itself
- Best lifts list beneath, each entry styled as a minimal data row
- Points awarded card at bottom: "+200 IP — 100-Session Marker" in the earn card style
- Dismiss: tap anywhere or a subtle "Close" text link at very bottom

**Implements:** Design spec §3 — Surprise and Delight: "The Milestone Ghost"

---

#### `ReturnCelebrationScreen`
**File:** `src/components/earn/ReturnCelebrationScreen.tsx`

```typescript
interface ReturnCelebrationScreenProps {
  daysAbsent: number;
  pointsAwarded: number; // 40 IP
  onDismiss: () => void;
}
```

**Behaviour & State:**
- Full-screen overlay, simpler than `MilestoneGhostScreen`
- Single line of copy: `"You're back. That's the hardest rep."` — white, 24px, centred
- No stats, no history — this is a moment of acknowledgement, not analysis
- Points card: "+40 IP — Come Back Stronger"
- Brief entry animation: text fades in from `opacity: 0` over 600ms
- Auto-dismisses after 4 seconds OR on tap

**Implements:** Design spec §3 — Surprise and Delight: "The Return Celebration"

---

### 1.4 Rewards Components

---

#### `RewardsGrid`
**File:** `src/components/rewards/RewardsGrid.tsx`

```typescript
interface RewardsGridProps {
  rewards: Reward[];
  customerBalance: number;
  onSelectReward: (reward: Reward) => void;
}
```

**Behaviour & State:**
- CSS Grid, 2 columns on mobile, 3 on tablet+
- Affordable rewards (`reward.pointCost <= customerBalance`): full colour, full opacity
- Unaffordable rewards: `opacity: 0.55`, greyscale filter `saturate(0.3)`, "You need X more IP" label in `theme.subtext` — **not** locked, **not** hidden
- Rewards sorted: affordable first, then by ascending cost
- Tapping any reward fires `onSelectReward`

**Implements:** Design spec §5 — Reward Redemption Flow (step 1), "'faded but visible' approach"

---

#### `RewardDetailSheet`
**File:** `src/components/rewards/RewardDetailSheet.tsx`

```typescript
interface RewardDetailSheetProps {
  reward: Reward;
  customerBalance: number;
  onRedeem: (rewardId: string) => Promise<void>;
  onClose: () => void;
}
```

**Behaviour & State:**
- Bottom sheet (slides up), `border-radius: 16px 16px 0 0`, glass card background
- Shows: emoji, name, full description, exact IP cost, redemption method (in-gym / online / via coach), expiry if applicable
- "Redeem" button: active when affordable, disabled with tooltip "X more IP needed" when not
- On "Redeem" tap: triggers `RedemptionConfirmModal`

**Implements:** Design spec §5 — Reward Redemption Flow (step 2)

---

#### `RedemptionConfirmModal`
**File:** `src/components/rewards/RedemptionConfirmModal.tsx`

```typescript
interface RedemptionConfirmModalProps {
  reward: Reward;
  currentBalance: number;
  onConfirm: () => Promise<void>;
  onCancel: () => void;
  isProcessing: boolean;
}
```

**Behaviour & State:**
- Centred modal, backdrop blur
- Copy: `"Spend ${reward.pointCost} IP for ${reward.name}?"` — current balance shown below in `theme.subtext`
- Two buttons: "Confirm" (primary, `#DC2626` background) and "Cancel" (ghost)
- `isProcessing` state: "Confirm" button shows a spinner, both buttons disabled
- On success: unmounts modal, parent triggers `RedemptionCodeScreen`

**Implements:** Design spec §5 — Reward Redemption Flow (step 3)

---

#### `RedemptionCodeScreen`
**File:** `src/components/rewards/RedemptionCodeScreen.tsx`

```typescript
interface RedemptionCodeScreenProps {
  reward: Reward;
  redemptionCode: string;
  qrCodeData: string; // URL-encoded string for QR generation
  redeemedAt: Date;
  onClose: () => void;
}
```

**Behaviour & State:**
- Full-screen (not overlay) page at `/rewards/redemption/[code]`
- QR code rendered using `qrcode.react` library — white on dark background, centred
- Redemption code displayed as large monospaced text below QR
- Instruction copy from `reward.redemptionInstructions`
- Confirmation strip at top: `"Redeemed — ${reward.name}."` in `#DC2626`
- Screen lock prevention: calls `navigator.wakeLock.request('screen')` so the QR doesn't disappear while member is at reception

**Implements:** Design spec §5 — Reward Redemption Flow (steps 4–5)

---

### 1.5 Shared / Utility Components

---

#### `TierBadge`
**File:** `src/components/shared/TierBadge.tsx`

```typescript
interface TierBadgeProps {
  tier: TierLevel;
  size?: 'sm' | 'md' | 'lg';
}

type TierLevel = 'raw' | 'tempered' | 'forged' | 'ironclad';
```

**Behaviour & State:**
- Pill badge, border-radius full
- Tier-specific styles:
  - `raw`: `background: rgba(255,255,255,0.15)`, white text
  - `tempered`: `#F97316` text, `#F9731620` background, subtle orange glow
  - `forged`: `#DC2626` text, `#DC262620` background, `box-shadow: 0 0 8px #DC262688`
  - `ironclad`: gradient text `linear-gradient(90deg, #DC2626, #F97316)`, persistent low glow, animated shimmer pass every 8 seconds
- `size` prop controls padding and font-size

**Implements:** Design spec §6 — Tier badge visual language

---

#### `ActivityCategoryChip`
**File:** `src/components/shared/ActivityCategoryChip.tsx`

```typescript
interface ActivityCategoryChipProps {
  category: ActivityCategory;
  size?: 'sm' | 'md';
}

type ActivityCategory = 
  | 'workout' 
  | 'training' 
  | 'streak' 
  | 'achievement' 
  | 'challenge' 
  | 'referral' 
  | 'community' 
  | 'class' 
  | 'special';
```

**Behaviour & State:**
- Rounded label chip, no interaction
- Colour map (background is 15% opacity version of text colour):
  - `workout`, `training`, `streak`, `class`: `#EF4444` (red — Training family)
  - `achievement`, `special`: `#D4AF37` (gold — Achievement family)
  - `referral`: `#EC4899` (pink — Referral)
  - `community`: `#A78BFA` (purple — Community)
  - `challenge`: `#F97316` (orange — Challenge)

**Implements:** Design spec §6 — "Activity category colour chips"

---

#### `GlassCard`
**File:** `src/components/shared/GlassCard.tsx`

```typescript
interface GlassCardProps {
  children: React.ReactNode;
  isActive?: boolean;       // brightens border, adds F97316 top accent
  isBonus?: boolean;        // alias for isActive — off-peak bonus state
  className?: string;
  onClick?: () => void;
}
```

**Behaviour & State:**
- Base: `background: rgba(255,255,255,0.05)`, `border: 1px solid rgba(255,255,255,0.10)`
- `isActive || isBonus`: border becomes `rgba(255,255,255,0.22)`, `::before` pseudo-element adds 2px `#F97316` line at top
- `onClick` present: cursor pointer, subtle brightness increase on hover (`filter: brightness(1.08)`)

**Implements:** Design spec §6 — Card visual language, active card state

---

#### `ConsentScreen`
**File:** `src/components/onboarding/ConsentScreen.tsx`

```typescript
interface ConsentScreenProps {
  businessName: string;
  programmeName: string;
  onConsent: (preference: ConsentPreference) => void;
}

type ConsentPreference = 
  | 'full'           // "Yes — use my data to personalise my coaching"
  | 'app_only';      // "Personalise my app only — no proactive outreach"
```

**Behaviour & State:**
- Standalone full-screen onboarding step
- Renders the three plain-language sentences verbatim from the design spec — no legalese, no scroll
- Two large tappable option cards (not checkboxes, not radio buttons — full-width cards with a selected state border in `#DC2626`)
- "Continue" button activates only when one option is selected
- No "skip" option, no back button — consent must be given before proceeding
- Selected preference stored server-side via `POST /api/customer/consent` on "Continue"

**Implements:** Design spec §7 — Trust and Transparency, onboarding consent

---

#### `DataTransparencyPage`
**File:** `src/components/profile/DataTransparencyPage.tsx`

```typescript
interface DataTransparencyPageProps {
  customer: Customer;
  currentConsent: ConsentPreference;
  onUpdateConsent: (preference: ConsentPreference) => Promise<void>;
}
```

**Behaviour & State:**
- Route: `/profile/data`
- Replicates the three plain-language consent sentences from onboarding
- Live toggle: "Proactive coaching outreach" — single toggle, immediate effect, no confirmation loop
- Toggle state updates optimistically in UI, then syncs to server; on error, reverts with a toast
- Data inventory section: bulleted list of what data is collected, sourced from `businessConfig.dataInventory`

**Implements:** Design spec §7 — "permanently accessible page" in Profile > Settings

---

### 1.6 Admin Panel Components

---

#### `AdminDashboard`
**File:** `src/components/admin/AdminDashboard.tsx`

```typescript
interface AdminDashboardProps {
  businessId: string;
  liveOccupancy: OccupancyData;
  engagementHealth: EngagementHealthSummary;
  pointsEconomy: PointsEconomySummary;
}

interface OccupancyData {
  currentAttendance: number;
  thirtyDayAverage: number;
  percentageOfAverage: number;
  nextClass: { name: string; startTime: Date; bookedCount: number; capacity: number };
}

interface EngagementHealthSummary {
  activeStreaksCount: number;
  churnFlaggedCount: { yellow: number; orange: number; red: number };
  newReferralsThisWeek: number;
}

interface PointsEconomySummary {
  ipIssuedThisMonth: number;
  ipRedeemedThisMonth: number;
  redemptionRatio: number; // redeemed/issued — flag if >0.8
}
```

**Implements:** Design spec §5 — Business Admin Panel, Dashboard Overview

---

#### `CoachInterventionQueue`
**File:** `src/components/admin/CoachInterventionQueue.tsx`

```typescript
interface CoachInterventionQueueProps {
  interventions: CoachIntervention[];
  onMarkActioned: (interventionId: string) => Promise<void>;
  filterBy?: { severity?: FlagSeverity; coachId?: string; tier?: TierLevel };
}

interface CoachIntervention {
  id: string;
  customer: Pick<Customer, 'id' | 'name' | 'tier'>;
  flagType: FlagSeverity;
  flagReason: string;
  daysSinceLastSession: number;
  lastLoggedPB?: Date;
  aiGeneratedBrief: string;      // AI-written context
  suggestedOutreachHook: string; // AI-written conversation starter
  assignedCoachId: string;
  isActioned: boolean;
  createdAt: Date;
}

type FlagSeverity = 'yellow' | 'orange' | 'red';
```

**Behaviour & State:**
- List ordered by flag severity (red first), then by `createdAt` descending
- Each entry: colour-coded left border (yellow/orange/red), member name + tier badge, days absent, AI brief in a collapsible section
- "Mark as Actioned" button per entry — fires `onMarkActioned`, optimistically removes from queue
- Filter bar: by severity, by assigned coach, by tier
- Red flag entries have a pulsing border animation (subtle, 3s cycle) to draw attention

**Implements:** Design spec §5 — Coach Intervention Queue, §4 — Churn Prediction and Intervention

---

## SECTION 2: DATA MODELS

```typescript
// ============================================================
// CORE ENUMS AND PRIMITIVES
// ============================================================

type TierLevel = 'raw' | 'tempered' | 'forged' | 'ironclad';

type ActivityCategory = 
  | 'workout' 
  | 'training' 
  | 'streak' 
  | 'achievement' 
  | 'challenge'
  | 'referral'
  | 'community'
  | 'class'
  | 'special';

type RewardCategory = 
  | 'access'
  | 'merchandise'
  | 'coaching'
  | 'booking_privilege'
  | 'education'
  | 'recovery'
  | 'membership'
  | 'prestige';

type ConsentPreference = 'full' | 'app_only';

type FlagSeverity = 'yellow' | 'orange' | 'red';

// ============================================================
// CUSTOMER
// ============================================================

interface Customer {
  id: string;                        // UUID
  businessId: string;                // Which business they're a member of
  name: string;
  email: string;
  phone?: string;
  joinedAt: Date;
  tier: TierLevel;
  
  points: {
    lifetime: number;                // Never decreases — used for tier calculation
    current: number;                 // Spendable balance (lifetime minus redeemed)
    thisMonth: number;               // For admin economy health tracking
  };

  streaks: {
    currentWeeklyStreak: number;     // Consecutive weeks with 3+ sessions
    longestStreak: number;           // All-time best
    isActive: boolean;               // True if current week is on track
    lastStreakBreakDate?: Date;
    shieldAvailable: boolean;        // One per 60-day period, earned via coach check-in
    shieldUsedAt?: Date;
  };

  activityHistory: ActivityLogEntry[];

  sessionStats: {
    totalLifetime: number;           // For milestone triggers (50th, 100th)
    thisMonth: number;
    lastSessionDate?: Date;
    averageSessionsPerWeek: number;  // Rolling 8-week average
    preferredTimeSlots: string[];    // e.g. ["06:00", "06:15"] — for AI targeting
    scheduleFlexibilityScore: number; // 0–1, derived from booking variance
  };

  churnSignals: {
    flags: ChurnFlag[];
    engagementTemperature: number;   // 0–100 score, AI-computed
    lastComputedAt: Date;
  };

  referrals: {
    referredByCustomerId?: string;
    referredCustomerIds: string[];
    successfulReferrals: number;     // Friend completed trial
    convertedReferrals: number;      // Friend became paid member
  };

  assignedCoachId?: string;

  consent: {
    preference: ConsentPreference;
    givenAt: Date;
    lastUpdatedAt: Date;
  };

  profile: {
    avatarUrl?: string;
    bio?: string;                    // Optional — used in social mechanics
  };
}

interface ChurnFlag {
  id: string;
  severity: FlagSeverity;
  reason: string;
  triggeredAt: Date;
  isActioned: boolean;
  actionedAt?: Date;
  actionedByCoachId?: string;
}

interface ActivityLogEntry {
  id: string;
  customerId: string;
  activityId: string;
  activity: Activity;               // Populated via join
  pointsEarned: number;
  completedAt: Date;
  confirmedByCoach: boolean;        // Required for PB, Programme Milestone
  sessionTimeSlot?: string;         // e.g. "06:15" — for flexibility score calculation
  notes?: string;
}

// ============================================================
// BUSINESS
// ============================================================

interface Business {
  id: string;
  name: string;
  type: BusinessVertical;
  slug: string;                     // URL slug — e.g. "slam-fitness"
  
  config: BusinessConfig;           // Full white-label config (see Section 3)
  
  activities: Activity[];
  rewards: Reward[];
  challenges: Challenge[];
  
  coaches: Coach[];
  
  operatingHours: {
    [day: string]: { open: string; close: string } | null; // null = closed
  };

  integrations: {
    bookingSystemUrl?: string;      // e.g. Mindbody, Glofox webhook endpoint
    webhookSecret?: string;
  };

  createdAt: Date;
  updatedAt: Date;
}

type BusinessVertical = 
  | 'fitness_boutique'
  | 'gaming_pub'
  | 'dental'
  | 'restaurant'
  | 'retail';

interface Coach {
  id: string;
  businessId: string;
  name: string;
  email: string;
  role: 'head_coach' | 'coach' | 'admin';
  assignedMemberIds: string[];
}

// ============================================================
// ACTIVITY
// ============================================================

interface Activity {
  id: string;
  businessId: string;
  name: string;
  emoji: string;
  description: string;
  pointValue: number;
  category: ActivityCategory;
  
  completionRules: {
    requiresCoachConfirmation: boolean;
    maxPerDay?: number;
    maxPerWeek?: number;
    maxPerMonth?: number;
    maxLifetime?: number;           // For 100-Session Marker (1 only)
    eligibilityWindowStart?: string; // "06:00" — for Morning Iron time-gating
    eligibilityWindowEnd?: string;   // "09:00"
  };

  isActive: boolean;
  isBonusActive: boolean;           // For Cold Day Bonus activation
  bonusPointValue?: number;         // Overrides pointValue when isBonusActive

  createdAt: Date;
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
  category: RewardCategory;
  
  redemptionMethod: 'in_gym' | 