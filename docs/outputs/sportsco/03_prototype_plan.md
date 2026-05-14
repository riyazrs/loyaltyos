# LoyaltyOS — Technical Build Specification
## Sportsco Anchors, Ringsend Dublin

*Build document produced by the Maker agent. Derived directly from the Designer agent specification. All Sportsco-specific naming, tone constraints, and design decisions are preserved as hard requirements, not suggestions.*

---

## 1. COMPONENT INVENTORY

### 1.1 Layout and Shell Components

---

**`AppShell`**
`src/components/layout/AppShell.tsx`

```typescript
interface AppShellProps {
  config: BusinessConfig;
  customer: Customer;
  children: React.ReactNode;
  activeTab: 'home' | 'challenges' | 'rewards' | 'profile';
}
```

Core behaviour: Renders the persistent navigation bar, injects the `BusinessConfig` into a React context (`LoyaltyConfigContext`) so every child component can access theme tokens without prop drilling. Applies the config's `theme` and `colours` as CSS custom properties on the root element. Handles tab routing.

Implements: Design spec §5 (all screens), §6 (theme token application).

---

**`BottomNav`**
`src/components/layout/BottomNav.tsx`

```typescript
interface BottomNavProps {
  activeTab: 'home' | 'challenges' | 'rewards' | 'profile';
  onTabChange: (tab: string) => void;
  config: Pick<BusinessConfig, 'colours' | 'programme'>;
}
```

Core behaviour: Four tab icons (Home, Challenges, Rewards, Profile). Active tab uses `config.colours.primary`. Nav background applies `config.colours.navBg` with `backdrop-filter: blur(12px)`. `border-top: 1px solid config.colours.navBorder`.

Implements: Design spec §6 (navigation bar tokens).

---

### 1.2 Dashboard Home Screen Components

---

**`GreetingBar`**
`src/components/dashboard/GreetingBar.tsx`

```typescript
interface GreetingBarProps {
  customer: Customer;
  config: BusinessConfig;
  currentHour: number; // 0–23, for time-aware greeting
}
```

Core behaviour: Derives greeting string (`Good morning` / `Good afternoon` / `Good evening`) from `currentHour`. Renders customer first name, current AP balance (28px/700 weight), tier badge with name, and a subtle progress ring showing progress to next tier. Progress ring is an SVG circle — `strokeDashoffset` calculated from `(customer.points / nextTierThreshold) * circumference`. Tier badge text colour taken from `config.tiers[currentTierIndex].colour`. No glow on light theme.

State: `currentTier`, `nextTier`, `progressPercent` — all derived synchronously from `customer.points` and `config.tiers`.

Implements: Design spec §5 (Zone 1), §6 (tier badge colours, typography).

---

**`StreakCard`**
`src/components/dashboard/StreakCard.tsx`

```typescript
interface StreakCardProps {
  customer: Customer;
  onActivateTideOut: () => void;
  config: BusinessConfig;
}

interface StreakDisplayState {
  currentStreak: number;
  streakType: '7-day' | '30-day' | null;
  tideOutAvailable: boolean;
  tideOutActive: boolean;
  activeChallenge: Challenge | null;
  challengeProgress: number;
}
```

Core behaviour: Reads `customer.streaks` to compute display state. Shows streak count, streak badge (animated on mount using CSS keyframe — a gentle pulse, not a bounce). If `tideOutAvailable` is true, renders a "Tide Out" button — single tap activates a 72-hour freeze, writes to `customer.streaks.tideOutActivatedAt`. If an active challenge exists, renders a progress indicator (`completedCount / requiredCount` as a filled bar). Card background uses `config.colours.cardBg`, border `config.colours.cardBorder`, shadow as specified.

Animation: Streak badge uses `@keyframes anchorPulse` — a 1.2s ease-in-out scale from 1.0 → 1.05 → 1.0, runs once on mount and again when streak increments.

Implements: Design spec §3 (streak mechanics, Tide Out freeze), §5 (Zone 2).

---

**`ChallengeCarousel`**
`src/components/dashboard/ChallengeCarousel.tsx`

```typescript
interface ChallengeCarouselProps {
  challenges: PersonalisedChallenge[];
  onChallengeComplete: (challengeId: string) => void;
  config: BusinessConfig;
  isLoading: boolean;
}
```

Core behaviour: Horizontally scrollable row of exactly three `ChallengeCard` components. On initial load, `isLoading` shows three skeleton cards (same dimensions, `config.colours.muted` fill, animated shimmer). Challenges are fetched from `/api/personalise` on mount and cached in `localStorage` with a `Monday 00:00` expiry key — challenges do not re-fetch mid-week.

Implements: Design spec §3 (weekly challenges), §5 (Zone 3).

---

**`ChallengeCard`**
`src/components/dashboard/ChallengeCard.tsx`

```typescript
interface ChallengeCardProps {
  challenge: PersonalisedChallenge;
  onComplete: (challengeId: string) => void;
  config: BusinessConfig;
}

interface PersonalisedChallenge {
  id: string;
  name: string;
  emoji: string;
  pointReward: number;
  description: string;
  progressCurrent: number;
  progressRequired: number;
  cadence: 'daily' | 'weekly';
  expiresAt: string; // ISO timestamp
  aiReason: string; // Why the AI selected this for the member — shown on tap
}
```

Core behaviour: Shows name, emoji, points reward, and a progress indicator (`progressCurrent / progressRequired` as filled bar, `config.colours.primary` fill). On completion, triggers a CSS burst animation (`@keyframes pointBurst` — radial scale-up of a points badge, 400ms, ease-out) and calls `onComplete`. Tapping the card (not completing) reveals `aiReason` in an expandable sub-panel — keeps the AI's reasoning visible, satisfies transparency design.

Implements: Design spec §3 (daily/weekly challenges), §4 (AI personalisation), §7 (trust/transparency).

---

**`DiscoverSection`**
`src/components/dashboard/DiscoverSection.tsx`

```typescript
interface DiscoverSectionProps {
  offers: DynamicOffer[];
  customer: Customer;
  config: BusinessConfig;
  isLoading: boolean;
}
```

Core behaviour: Renders 2–3 contextual cards from `/api/offers`. If no AI offers are available (API error or no relevant context), falls back to rendering `MilestoneCard` components derived from `customer.activityHistory` — never renders generic filler. Each offer card has a title, description, and an optional CTA button. No countdown timers. No "limited time only" language — the offer wording is handled by the AI prompt constraints defined in §4.

Implements: Design spec §4 (AI contextual offers), §5 (Zone 4), §7 (no dark patterns).

---

**`MilestoneCard`**
`src/components/dashboard/MilestoneCard.tsx`

```typescript
interface MilestoneCardProps {
  milestone: {
    type: '50th-visit' | '100th-visit' | 'anniversary' | 'streak-record';
    label: string;
    pointsAwarded: number;
    personalMessage: string; // AI-generated, passes Receptionist Rule
  };
  config: BusinessConfig;
}
```

Core behaviour: Full-screen overlay variant triggered on milestone detection. Restrained animation — the tier badge scales in over 300ms, a one-line personal message fades in beneath it, the points gift counter increments. No confetti. Auto-dismisses after 5 seconds or on tap.

Implements: Design spec §3 (Surprise and Delight — The Loyalty Landmark), §5 (milestone moments in activity flow).

---

### 1.3 Activity and Check-in Components

---

**`CheckInModal`**
`src/components/checkin/CheckInModal.tsx`

```typescript
interface CheckInModalProps {
  activity: Activity;
  customer: Customer;
  config: BusinessConfig;
  onDismiss: () => void;
  onPointsAwarded: (points: number, newTotal: number) => void;
}

interface CheckInDisplayState {
  pointsEarned: number;
  personalDetail: string | null; // e.g. "That's 14 weeks of Tuesday swims."
  challengeUpdated: PersonalisedChallenge | null;
  isMilestone: boolean;
  newPointsTotal: number;
}
```

Core behaviour: Slides up from the bottom of the screen (CSS `transform: translateY(100%)` → `translateY(0)`, 280ms cubic-bezier). Shows activity name, emoji, points earned. The `personalDetail` string is retrieved from a pre-computed cache (generated by `/api/personalise` alongside challenges) — it does not make a live API call on every check-in, which would add latency to the critical feedback moment. Points counter animates upward using a `requestAnimationFrame` loop — increments from previous total to new total over 600ms. If `challengeUpdated` is non-null, a secondary line shows challenge progress. If `isMilestone`, replaces itself with `MilestoneCard`. Dismisses after 3.5 seconds or on tap. Must dismiss within 2 seconds for the initial feedback to appear — the `personalDetail` and challenge update can render 300ms after the modal opens without degrading the experience.

Implements: Design spec §5 (Activity Completion Flow, all five steps).

---

**`QRCheckIn`**
`src/components/checkin/QRCheckIn.tsx`

```typescript
interface QRCheckInProps {
  customerId: string;
  config: BusinessConfig;
  onScan: (activityCode: string) => void;
}
```

Core behaviour: Renders a unique QR code (using `qrcode.react`) encoding `{customerId}:{timestamp}:{hmacSignature}` — the HMAC prevents QR spoofing. Camera-scan variant uses `react-qr-reader` for turnstile/kiosk flow. Manual tap-to-check-in button available as fallback.

Implements: Design spec §5 (check-in trigger, step 1).

---

### 1.4 Rewards Components

---

**`RewardsGrid`**
`src/components/rewards/RewardsGrid.tsx`

```typescript
interface RewardsGridProps {
  rewards: Reward[];
  customerPoints: number;
  config: BusinessConfig;
  onRedeem: (rewardId: string) => void;
}
```

Core behaviour: Renders all 8 rewards. Rewards the customer cannot afford are visible but rendered with 40% opacity and a `points gap` label ("You need 70 more AP") — they remain visible for aspirational effect, but are not interactive. Rewards are sorted: affordable first, then locked, ascending by points gap.

Implements: Design spec §5 (Rewards tab, locked reward behaviour), §7 (no dark patterns — locked rewards visible but honest).

---

**`RewardDetailDrawer`**
`src/components/rewards/RewardDetailDrawer.tsx`

```typescript
interface RewardDetailDrawerProps {
  reward: Reward;
  customerPoints: number;
  config: BusinessConfig;
  onConfirmRedeem: (rewardId: string) => void;
  onDismiss: () => void;
}
```

Core behaviour: Slides up as a bottom drawer. Shows full description, point cost, how-to-use instructions, "Redeem" button. Tapping "Redeem" opens `RedemptionConfirmModal`.

Implements: Design spec §5 (Reward Redemption Flow, steps 2–3).

---

**`RedemptionConfirmModal`**
`src/components/rewards/RedemptionConfirmModal.tsx`

```typescript
interface RedemptionConfirmModalProps {
  reward: Reward;
  customerCurrentPoints: number;
  config: BusinessConfig;
  onConfirm: () => void;
  onCancel: () => void;
}
```

Core behaviour: Displays: `"Redeem [Reward Name]? [X] AP will be deducted. Your balance will be [Y] AP."` Two buttons: Confirm (primary, `config.colours.primary`) and Cancel (ghost button). No countdown timer. Cancel is always one tap — no confirmation loop. After confirm, renders `RedemptionReceiptScreen`.

Implements: Design spec §5 (Reward Redemption Flow, step 3), §7 (no dark patterns, no countdown timers, one-tap cancel).

---

**`RedemptionReceiptScreen`**
`src/components/rewards/RedemptionReceiptScreen.tsx`

```typescript
interface RedemptionReceiptScreenProps {
  reward: Reward;
  redemptionCode?: string; // Undefined for auto-applied rewards (e.g. café credit)
  closingMessage: string; // e.g. "Enjoy the coffee. You've earned it."
  config: BusinessConfig;
  onDismiss: () => void;
}
```

Core behaviour: Full-screen receipt. Shows reward name, emoji, redemption code or "Applied to your account" message, closing message (human tone, no upsell), and a "Done" button. Saves to "My Rewards" history. `closingMessage` is pre-defined per reward in the business config — it is not AI-generated at this step (the AI is not invoked in the redemption path to avoid latency).

Implements: Design spec §5 (Reward Redemption Flow, steps 4–5).

---

### 1.5 Profile and Settings Components

---

**`ProfileScreen`**
`src/components/profile/ProfileScreen.tsx`

```typescript
interface ProfileScreenProps {
  customer: Customer;
  config: BusinessConfig;
}
```

Core behaviour: Shows member name, tier, total lifetime AP, member since date, activity history summary, referred members count. Header prominently shows: `"Personalisation is on"` as a tappable label leading to `PreferenceCentre`. This is the visibility requirement from §7 — the capability is disclosed, front-facing.

Implements: Design spec §7 (visible off-switch, "Personalisation is on" in profile header).

---

**`PreferenceCentre`**
`src/components/profile/PreferenceCentre.tsx`

```typescript
interface PreferenceCentreProps {
  customer: Customer;
  onUpdatePreferences: (prefs: CustomerPreferences) => void;
  config: BusinessConfig;
}

interface CustomerPreferences {
  personalisedSuggestions: boolean;
  includeCafeAndSpa: boolean;
  familyAccountLinking: boolean; // requires separate per-member consent
  messageFrequencyOverride: 'auto' | 'low' | 'off';
}
```

Core behaviour: Four toggles as specified in §7. "Download my data" button calls `GET /api/customer/data-export`. "Delete my loyalty data" button calls `DELETE /api/customer/personalisation-data` with a typed confirmation ("Type DELETE to confirm" — necessary here, not a dark pattern, this is data deletion). Child data handling note rendered as static text below the family toggle.

Implements: Design spec §7 (Preference Centre, all five controls, child data statement).

---

### 1.6 Business Admin Panel Components

---

**`AdminDashboard`**
`src/components/admin/AdminDashboard.tsx`

```typescript
interface AdminDashboardProps {
  businessId: string;
  config: BusinessConfig;
  staffRole: 'reception' | 'manager' | 'owner';
}
```

Core behaviour: Tab-based admin interface. Tabs: Overview, Programme Controls, Members, Communications, Reports. `staffRole` gates visibility: `reception` sees anonymised member data; `manager` and `owner` see full profiles. Implements design spec §5 (Business Admin Panel) in full.

---

**`ChurnRiskQueue`**
`src/components/admin/ChurnRiskQueue.tsx`

```typescript
interface ChurnRiskQueueProps {
  flaggedMembers: ChurnRiskEntry[];
  onManualOverride: (customerId: string, note: string) => void;
  staffRole: 'reception' | 'manager' | 'owner';
}

interface ChurnRiskEntry {
  customerId: string;
  displayName: string; // Anonymised for reception staff
  riskLevel: 'medium' | 'high';
  triggerSignal: ChurnSignal;
  recommendedAction: string;
  lastContactDate: string | null;
  interventionPending: boolean;
}
```

Core behaviour: Sortable list of at-risk members. Each entry shows risk level, the specific churn signal that fired, and the AI's recommended action. "Manual override" button allows reception staff to flag a member for personal outreach (the holiday context use case from §4).

Implements: Design spec §4 (churn prediction table), §5 (Churn risk queue in admin).

---

## 2. DATA MODELS

```typescript
// src/types/loyalty.ts

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  memberSince: string; // ISO date
  tier: TierName;
  points: {
    current: number;        // Spendable balance
    lifetimeEarned: number; // Never decremented — used for tier calculation
  };
  streaks: {
    current7Day: number;    // Visits in current rolling 7-day window
    current30Day: number;   // Visits in current rolling 30-day window
    longestStreak: number;
    tideOutAvailable: boolean;
    tideOutActivatedAt: string | null; // ISO timestamp
    tideOutExpiresAt: string | null;
  };
  activityHistory: ActivityRecord[];
  redemptionHistory: RedemptionRecord[];
  referrals: {
    referredMemberIds: string[];
    loyalFriendBonusVisits: Record<string, number>; // referredMemberId → visit count
  };
  familyAccount: {
    isLinked: boolean;
    familyGroupId: string | null;
    familyPointsPool: number;
    linkedMemberIds: string[];
  };
  preferences: CustomerPreferences;
  visitFlexibilityScore: number; // 0–100, computed by AI layer, cached
  churnRiskScore: number;        // 0–100, computed by AI layer, cached
  lastCheckIn: string | null;    // ISO timestamp
  facilityTypesUsed: FacilityType[];
  anniversaryDate: string;       // ISO date — tier resets on this date, not calendar year
}

export type TierName = 'Shoreline' | 'Harbour' | 'Channel' | 'Deep Water';
export type FacilityType = 'pool' | 'court' | 'gym-class' | 'spa' | 'cafe' | 'padel';

export interface ActivityRecord {
  id: string;
  activityId: string;        // References Activity.id
  activityName: string;
  category: ActivityCategory;
  pointsEarned: number;
  completedAt: string;       // ISO timestamp
  facilityType: FacilityType;
  personalDetail: string | null; // Pre-computed detail string for CheckInModal
}

export type ActivityCategory =
  | 'Explore'
  | 'Streak'
  | 'Booking'
  | 'Class'
  | 'Special'
  | 'Family'
  | 'Referral'
  | 'Daily'
  | 'Wellness';

export interface Activity {
  id: string;
  name: string;
  emoji: string;
  category: ActivityCategory;
  pointValue: number;
  description: string;
  isOneTime: boolean;         // e.g. First Dip — earns once per facility type
  requiresStreak: boolean;    // e.g. Four-Week Fix
  streakLength?: number;
  facilityTypes: FacilityType[];
}

export interface Reward {
  id: string;
  name: string;
  emoji: string;
  pointCost: number;
  category: 'Access' | 'Credit' | 'Booking' | 'Class' | 'Membership' | 'Family';
  description: string;
  howToUse: string;
  closingMessage: string;     // Displayed on receipt — human tone, no upsell
  deliveryMethod: 'qr-code' | 'auto-applied' | 'booking-credit';
  redeemedAt?: string;        // ISO timestamp — on RedemptionRecord only
  redemptionCode?: string;    // Generated at redemption time
  familyAccountOnly: boolean; // e.g. Kids Lesson Discount
}

export interface RedemptionRecord {
  id: string;
  rewardId: string;
  rewardName: string;
  pointsSpent: number;
  redeemedAt: string;
  redemptionCode: string | null;
  status: 'active' | 'used' | 'expired';
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  offerType: 'points-bonus' | 'cross-facility' | 'family-prompt' | 're-enrolment' | 'quiet-hours';
  pointsBonus?: number;
  validUntil: string;         // ISO timestamp
  targetSegment: CustomerSegment;
  ctaText?: string;
  ctaAction?: 'navigate-to-rewards' | 'navigate-to-booking' | 'navigate-to-challenges';
  aiGenerated: boolean;
  aiReason?: string;          // For admin transparency — not shown to member
  hasCountdownTimer: false;   // Structurally enforced — always false per §7
}

export type CustomerSegment =
  | 'all'
  | 'high-frequency'
  | 'flexible-schedule'
  | 'family-account'
  | 'court-player'
  | 'swimmer'
  | 'class-regular'
  | 'churn-risk'
  | 'streak-holder';

export type ChurnSignal =
  | 'high-frequency-gap'
  | 'court-group-missed'
  | 'swim-block-ending'
  | 'cross-facility-narrowing'
  | 'addon-usage-drop';
```

---

## 3. BUSINESS CONFIG SYSTEM

### 3.1 The Config Interface

```typescript
// src/types/config.ts

export interface BusinessConfig {
  businessId: string;
  businessName: string;
  businessType: BusinessVertical;
  
  programme: {
    name: string;
    tagline: string;
    currency: string;
    currencyAbbreviation: string; // Displayed in UI — "AP", "pts", etc.
  };

  theme: 'light' | 'dark' | 'rich';

  colours: {
    primary: string;
    accent: string;
    bg: string;
    cardBg: string;
    cardBorder: string;
    text: string;
    subtext: string;
    muted: string;
    navBg: string;
    navBorder: string;
  };

  tiers: TierConfig[];

  activities: Activity[];    // The full earn menu for this business
  rewards: Reward[];         // The full redemption menu for this business

  quietHoursWindows: QuietHoursWindow[];

  facilityTypes: FacilityType[];  // Which facility types exist for this business

  communicationConfig: {
    maxMessagesPerMember30Days: number;  // Default: 2
    autoApproveAIMessages: boolean;
    messageFatigueSensitivity: 'low' | 'medium' | 'high';
    receptionistRuleEnabled: boolean;    // Always true for Sportsco
  };

  aiConfig: {
    personalisationModel: string;        // e.g. 'claude-opus-4-5'
    challengesRefreshCadence: 'weekly';  // Monday 00:00 per spec
    offerRefreshCadence: 'daily' | 'hourly';
    churnSignalThresholds: Record<ChurnSignal, number>;
    visitFlexibilityLookbackDays: number; // Default: 90
  };

  adminConfig: {
    staffRoles: ('reception' | 'manager' | 'owner')[];
    anonymiseMembersForRole: Record<string, boolean>;
    requireMessageApproval: boolean;
  };

  branding: {
    logoUrl: string;
    faviconUrl: string;
    locale: string;           // e.g. 'en-IE'
    currency: string;         // e.g. 'EUR'
    timezone: string;         // e.g. 'Europe/Dublin'
  };
}

export type BusinessVertical =
  | 'leisure-centre'
  | 'gaming-pub'
  | 'dental-practice'
  | 'gym'
  | 'spa';

export interface TierConfig {
  name: string;
  threshold: number;         // Lifetime AP earned
  colour: string;
  benefits: string[];
  cafeDiscount?: number;     // Percentage
  guestPassesPerMonth?: number;
  priorityBooking: boolean;
  conciergeAccess: boolean;
}

export interface QuietHoursWindow {
  label: string;             // e.g. "Early Morning"
  daysOfWeek: number[];      // 0 = Sunday
  startTime: string;         // "HH:MM" 24h
  endTime: string;
  bonusPoints: number;
}
```

### 3.2 How Switching Businesses Changes the UI

The `AppShell` component reads `BusinessConfig` from `LoyaltyConfigContext`. On config change:

1. **CSS custom properties** are updated on `document.documentElement` — every colour token, font, and spacing value updates in one synchronous operation. No component re-renders for visual changes.
2. **Programme name and currency** update everywhere via `useLoyaltyConfig()` hook — the string "Anchor Points / AP" becomes whatever the new business uses without touching component code.
3. **Tier names and colours** update the `GreetingBar` progress ring, `BottomNav` active states, and all tier badge renders.
4. **Activities and rewards arrays** are replaced entirely — the `RewardsGrid` and challenge generation system use only the config's arrays.
5. **Facility types** gate which check-in flows and cross-sell suggestions are available.
6. **AI prompts** are dynamically constructed using the business config — the same Claude endpoints serve different businesses with different context injected.

### 3.3 Sportsco Anchors — Full Config Object

```typescript
// src/config/businesses/sportsco.ts

export const sportscoConfig: BusinessConfig = {
  businessId: 'sportsco-ringsend-001',
  businessName: 'Sportsco',
  businessType: 'leisure-centre',

  programme: {
    name: 'Sportsco Anchors',
    tagline: 'Every visit. Every milestone. Every reason to come back.',
    currency: 'Anchor Points',
    currencyAbbreviation: 'AP',
  },

  theme: 'light',

  colours: {
    primary: '#0EA5E9',
    accent: '#38BDF8',
    bg: '#F5F4F0',
    cardBg: '#FFFFFF',
    cardBorder: 'rgba(0,0,0,0.07)',
    text: '#111111',
    subtext: 'rgba(0,0,0,0.42)',
    muted: 'rgba(0,0,0,0.04)',
    navBg: 'rgba(245,244,240,0.98)',
    navBorder: 'rgba(0,0,0,0.08)',
  },

  tiers: [
    {
      name: 'Shoreline',
      threshold: 0,
      colour: '#64B5F6',
      benefits: ['Welcome perks', '5% café discount'],
      cafeDiscount: 5,
      priorityBooking: false,
      conciergeAccess: false,
    },
    {
      name: 'Harbour',
      threshold: 500,
      colour: '#0EA5E9',
      benefits: ['Priority booking windows', '10% café discount'],
      cafeDiscount: 10,
      priorityBooking: true,
      conciergeAccess: false,
    },
    {
      name: 'Channel',
      threshold: 1500,
      colour: '#D4AF37',
      benefits: ['Monthly guest passes', '15% café discount', 'Spa access priority'],
      cafeDiscount: 15,
      guestPassesPerMonth: 1,
      priorityBooking: true,
      conciergeAccess: false,
    },
    {
      name: 'Deep Water',
      threshold: 3500,
      colour: '#7C3AED',
      benefits: [
        'All Channel benefits',
        'Dedicated concierge booking line',
        'Annual loyalty credit unlock',
      ],
      cafeDiscount: 15,
      guestPassesPerMonth: 1,
      priorityBooking: true,
      conciergeAccess: true,
    },
  ],

  activities: [
    {
      id: 'first-dip',
      name: 'First Dip',
      emoji: '🏊',
      category: 'Explore',
      pointValue: 100,
      description: 'Earn once for your first visit to any facility type you\'ve never used before',
      isOneTime: true,
      requiresStreak: false,
      facilityTypes: ['pool', 'court', 'gym-class', 'spa', 'padel'],
    },
    {
      id: 'lane-regular',
      name: 'Lane Regular',
      emoji: '🌊',
      category: 'Streak',
      pointValue: 10,
      description: 'Check in for any pool session — swim lanes, lessons observation, aqua class',
      isOneTime: false,
      requiresStreak: false,
      facilityTypes: ['pool'],
    },
    {
      id: 'court-committed',
      name: 'Court Committed',
      emoji: '🎾',
      category: 'Booking',
      pointValue: 15,
      description: 'Complete a court sport booking (squash, padel, 5-a-side)',
      isOneTime: false,
      requiresStreak: false,
      facilityTypes: ['court', 'padel'],
    },
    {
      id: 'class-regular',
      name: 'Class Regular',
      emoji: '🏋️',
      category: 'Class',
      pointValue: 15,
      description: 'Attend any group fitness class (spin, Pilates, HIIT, yoga)',
      isOneTime: false,
      requiresStreak: false,
      facilityTypes: ['gym-class'],
    },
    {
      id: 'four-week-fix',
      name: 'Four-Week Fix',
      emoji: '📅',
      category: 'Streak',
      pointValue: 40,
      description: 'Attend the same class four consecutive weeks',
      isOneTime: false,
      requiresStreak: true,
      streakLength: 4,
      facilityTypes: ['gym-class'],
    },
    {
      id: 'quiet-hours',
      name: 'Quiet Hours',
      emoji: '🌅',
      category: 'Special',
      pointValue: 20,
      description: 'Check in during off-peak windows (before 9am, after 7pm, Saturday afternoon)',
      isOneTime: false,
      requiresStreak: false,
      facilityTypes: ['pool', 'court', 'gym-class', 'spa', 'padel'],
    },
    {
      id: 'court-ritual',
      name: 'Court Ritual',
      emoji: '🔁',
      category: 'Booking',
      pointValue: 30,
      