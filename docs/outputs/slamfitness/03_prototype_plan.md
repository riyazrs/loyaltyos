# LoyaltyOS Technical Build Plan
## Client: Slam Fitness — IRON CIRCLE Programme
### Version 1.0 | Maker Agent Output

---

## TABLE OF CONTENTS

1. [Component Inventory](#component-inventory)
2. [Data Models](#data-models)
3. [Business Config System](#business-config-system)
4. [Claude AI Integration](#claude-ai-integration)
5. [Mini-Game Spec](#mini-game-spec)
6. [Deployment Checklist](#deployment-checklist)

---

## 1. COMPONENT INVENTORY

### Project Structure

```
/loyalty-os
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   └── api/
│       ├── personalise/
│       │   └── route.ts
│       └── offers/
│           └── route.ts
├── components/
│   ├── shell/
│   │   ├── AppShell.tsx
│   │   ├── NavBar.tsx
│   │   └── BrandProvider.tsx
│   ├── dashboard/
│   │   ├── HeroProgress.tsx
│   │   ├── TierBadge.tsx
│   │   ├── ProgressRing.tsx
│   │   ├── IronBalance.tsx
│   │   └── JourneyStageCard.tsx
│   ├── activities/
│   │   ├── ActivityFeed.tsx
│   │   ├── ActivityCard.tsx
│   │   ├── ChallengeStrip.tsx
│   │   └── StreakTracker.tsx
│   ├── rewards/
│   │   ├── RewardGrid.tsx
│   │   ├── RewardCard.tsx
│   │   └── RedeemModal.tsx
│   ├── ai/
│   │   ├── PersonalisedSuggestions.tsx
│   │   ├── SuggestionCard.tsx
│   │   └── DynamicOfferBanner.tsx
│   ├── leaderboard/
│   │   ├── CommunityLeaderboard.tsx
│   │   └── LeaderboardRow.tsx
│   ├── milestones/
│   │   ├── CenturyCelebration.tsx
│   │   └── MilestoneToast.tsx
│   └── shared/
│       ├── PointsPill.tsx
│       ├── EmojiIcon.tsx
│       └── AnimatedCounter.tsx
├── lib/
│   ├── businessConfig.ts
│   ├── claudeClient.ts
│   ├── tierUtils.ts
│   └── streakUtils.ts
└── types/
    └── index.ts
```

---

### 1.1 Shell Components

#### `AppShell.tsx`
```typescript
// File: components/shell/AppShell.tsx
// Implements: Global layout wrapper, brand theming

interface AppShellProps {
  businessConfig: BusinessConfig;
  customer: Customer;
  children: React.ReactNode;
}
```

**Core Behaviour:**
- Injects CSS custom properties from `businessConfig.theme` into `:root` on mount
- Wraps entire app in `BrandProvider` context
- Applies `businessConfig.fonts.primary` via Next.js `localFont` or Google Fonts link
- State: none — pure layout wrapper
- Renders `NavBar` at top, `children` in main content area

---

#### `NavBar.tsx`
```typescript
// File: components/shell/NavBar.tsx
// Implements: Top navigation with brand identity and Iron balance

interface NavBarProps {
  businessName: string;
  logoUrl: string;
  accentColour: string;
  customer: Pick<Customer, 'id' | 'name' | 'tier' | 'currentPoints'>;
}
```

**Core Behaviour:**
- Displays business logo (falls back to text name if no logo)
- Shows `<IronBalance />` and `<TierBadge />` for current customer
- Mobile: collapses to hamburger with slide-in drawer
- State: `isDrawerOpen: boolean`

---

#### `BrandProvider.tsx`
```typescript
// File: components/shell/BrandProvider.tsx
// Implements: React context for brand config throughout component tree

interface BrandContextValue {
  config: BusinessConfig;
  tier: TierConfig;
  currencyLabel: string; // e.g. "Iron"
}

const BrandContext = createContext<BrandContextValue>(null!);
export const useBrand = () => useContext(BrandContext);
```

---

### 1.2 Dashboard Components

#### `HeroProgress.tsx`
```typescript
// File: components/dashboard/HeroProgress.tsx
// Implements: Design spec §3 — Journey Stage, §2 — Tier system
// The primary above-the-fold dashboard element

interface HeroProgressProps {
  customer: Customer;
  tierConfig: TierConfig;
  nextTierThreshold: number;
  journeyStage: 'arrival' | 'momentum' | 'identity' | 'guardianship';
}
```

**Core Behaviour:**
- Renders full-width card with tier colour as background gradient
- Contains `<ProgressRing />` (lifetime Iron), `<TierBadge />`, and journey stage message
- Journey stage identity statement pulled from `businessConfig.tiers[currentTier].identityStatement`
- Shows Iron needed to next tier with specific activity suggestion
- Animates on mount: ring fills from 0 to current percentage (CSS `@keyframes` on SVG `stroke-dashoffset`)
- State: `animationComplete: boolean`

---

#### `ProgressRing.tsx`
```typescript
// File: components/dashboard/ProgressRing.tsx
// Implements: Design spec §1 — "progress ring filling" for new members

interface ProgressRingProps {
  currentPoints: number;
  tierMin: number;
  tierMax: number;
  tierColour: string;         // hex colour for stroke
  size?: number;              // SVG dimensions, default 200
  strokeWidth?: number;       // default 12
  animate?: boolean;          // default true
}
```

**Core Behaviour:**
- SVG-based circular progress indicator
- Inner text: current points + currency label
- Outer ring stroke colour matches current tier
- Circumference calculation: `2 * Math.PI * radius`
- `stroke-dashoffset` drives fill percentage
- CSS transition: `transition: stroke-dashoffset 1.2s ease-in-out`

---

#### `TierBadge.tsx`
```typescript
// File: components/dashboard/TierBadge.tsx
// Implements: Design spec §2 — 4 tier levels

interface TierBadgeProp {
  tier: 'form' | 'load' | 'strength' | 'iron_circle';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  animated?: boolean; // pulse animation for tier-up events
}
```

**Core Behaviour:**
- Renders tier name with tier-specific colour and icon
- Tier colour map pulled from `businessConfig.tiers`
- `animated=true` triggers a shimmer/pulse effect (CSS `animation: pulse 2s ease-in-out`)
- Used in NavBar (sm), HeroProgress (lg), and LeaderboardRow (sm)

---

#### `IronBalance.tsx`
```typescript
// File: components/dashboard/IronBalance.tsx
// Implements: Design spec §2 — Iron currency display

interface IronBalanceProps {
  currentPoints: number;
  weeklyEarned: number;
  currencyLabel: string;   // "Iron" for Slam; injectable for white-label
  showWeekly?: boolean;
}
```

**Core Behaviour:**
- Primary display: `<AnimatedCounter />` ticking up to `currentPoints`
- Secondary: "You've earned {weeklyEarned} Iron this week" — matches design spec copy
- Ticking counter animation triggers on mount and on point-award events
- Listens to custom `ironAwarded` DOM event to re-trigger animation

---

#### `JourneyStageCard.tsx`
```typescript
// File: components/dashboard/JourneyStageCard.tsx
// Implements: Design spec §1 — 4-stage emotional journey

interface JourneyStageCardProps {
  stage: JourneyStage;
  daysAsMember: number;
  stageConfig: {
    name: string;
    tagline: string;
    emotionalRegister: string;
    colourAccent: string;
  };
}

type JourneyStage = 'arrival' | 'momentum' | 'identity' | 'guardianship';
```

**Core Behaviour:**
- Compact card shown below HeroProgress
- Displays stage name, emotional register phrase, and days-as-member
- Stage boundaries computed from `daysAsMember`: <30 → arrival, 31–90 → momentum, 91–180 → identity, 180+ → guardianship
- Card background shifts through brand gradient as stage advances

---

### 1.3 Activity Components

#### `ActivityFeed.tsx`
```typescript
// File: components/activities/ActivityFeed.tsx
// Implements: Design spec §2 — 13 earnable activities

interface ActivityFeedProps {
  activities: ActivityDefinition[];       // full catalogue from businessConfig
  customerHistory: CompletedActivity[];   // what this customer has done
  onActivitySelect: (activityId: string) => void;
}
```

**Core Behaviour:**
- Renders filterable grid of `<ActivityCard />` components
- Filter tabs: All | Visit | Achievement | Streak | Social | Referral
- Completed activities shown with checkmark and earned date
- Available activities sorted: AI-recommended first (flag from PersonalisedSuggestions), then by Iron value descending
- State: `activeFilter: ActivityCategory | 'all'`

---

#### `ActivityCard.tsx`
```typescript
// File: components/activities/ActivityCard.tsx
// Implements: Individual activity display

interface ActivityCardProps {
  activity: ActivityDefinition;
  isCompleted: boolean;
  completedAt?: Date;
  isAIRecommended?: boolean;
  recommendationReason?: string;
  onSelect: (id: string) => void;
}
```

**Core Behaviour:**
- Card layout: emoji icon | name | Iron value | category tag
- `isAIRecommended=true`: renders a subtle "⚡ Suggested for you" label and slightly elevated card shadow
- `isCompleted=true`: desaturated card with green checkmark overlay, shows earned date
- Tap/click opens a detail sheet with full description and "Log Activity" CTA
- State: `isDetailOpen: boolean`

---

#### `StreakTracker.tsx`
```typescript
// File: components/activities/StreakTracker.tsx
// Implements: Design spec §3 — Streak mechanics, grace period, Re-Ignite

interface StreakTrackerProps {
  currentStreak: number;          // days
  longestStreak: number;
  gracePeriodsUsed: number;      // per 30-day window; max 1
  gracePeriodActive: boolean;
  lastSessionDate: Date;
  onActivateGrace: () => void;
  onLogSession: () => void;
}
```

**Core Behaviour:**
- 7-cell visual week display: each cell = one day, filled/unfilled/grace
- Shows current streak count with flame emoji
- Grace period button: "Pause Streak" — disabled if `gracePeriodsUsed >= 1`
- Re-Ignite state: if streak recently broke, shows "Re-Ignite" variant with comeback messaging (*"You were away. You came back. That's the whole thing."*)
- State: `streakState: 'active' | 'grace' | 'broken' | 'reignite'`

---

#### `ChallengeStrip.tsx`
```typescript
// File: components/activities/ChallengeStrip.tsx
// Implements: Design spec §3 — Daily/weekly challenges

interface ChallengeStripProps {
  challenges: Challenge[];   // active challenges for this customer
  onChallengePress: (challengeId: string) => void;
}

interface Challenge {
  id: string;
  name: string;
  cadence: 'daily' | 'weekly' | 'monthly';
  ironReward: number;
  description: string;
  expiresAt: Date;
  isCompleted: boolean;
  progressPercent: number;   // 0–100
}
```

**Core Behaviour:**
- Horizontal scrollable strip of challenge pills
- Each pill: challenge name, reward, expiry countdown, thin progress bar
- Completed challenges show green fill and cannot be re-tapped
- Expiry countdown updates every minute via `setInterval`
- State: `challenges: Challenge[]`, refreshed on focus via SWR

---

### 1.4 Rewards Components

#### `RewardGrid.tsx`
```typescript
// File: components/rewards/RewardGrid.tsx
// Implements: Design spec §2 — 8 redeemable rewards

interface RewardGridProps {
  rewards: RewardDefinition[];
  customerPoints: number;
  customerTier: TierName;
  onRedeem: (rewardId: string) => void;
}
```

**Core Behaviour:**
- 2-column responsive grid of `<RewardCard />` components
- Rewards the customer cannot afford: shown with lock icon and points shortfall ("You need 150 more Iron")
- Sorted: affordable first, then ascending by Iron cost
- State: none — derived from props

---

#### `RewardCard.tsx`
```typescript
// File: components/rewards/RewardCard.tsx

interface RewardCardProps {
  reward: RewardDefinition;
  customerPoints: number;
  isAffordable: boolean;
  onRedeem: (rewardId: string) => void;
}
```

**Core Behaviour:**
- Card layout: emoji | reward name | Iron cost | description
- Affordable: full colour, active "Redeem" button in brand accent
- Not affordable: 40% opacity card, disabled button, shortfall message
- Tap "Redeem" → opens `<RedeemModal />`

---

#### `RedeemModal.tsx`
```typescript
// File: components/rewards/RedeemModal.tsx

interface RedeemModalProps {
  reward: RewardDefinition;
  customerPoints: number;
  onConfirm: (rewardId: string) => Promise<void>;
  onCancel: () => void;
}
```

**Core Behaviour:**
- Bottom sheet modal (CSS `transform: translateY`)
- Shows reward summary, Iron cost, new balance after redemption
- Confirm button: calls `onConfirm`, shows loading state, then success animation
- Success animation: confetti burst (CSS `@keyframes` scattered divs) + `<MilestoneToast />`
- State: `phase: 'confirm' | 'loading' | 'success' | 'error'`

---

### 1.5 AI Components

#### `PersonalisedSuggestions.tsx`
```typescript
// File: components/ai/PersonalisedSuggestions.tsx
// Implements: Design spec §4 — AI personalisation layer

interface PersonalisedSuggestionsProps {
  customer: Customer;
  businessConfig: BusinessConfig;
}
```

**Core Behaviour:**
- Fetches from `POST /api/personalise` on mount with `customer` profile
- SWR with `revalidateOnFocus: false`, 30-minute cache
- Loading state: 3 skeleton `<SuggestionCard />` components
- Error state: gracefully hides section (AI is enhancement, not core)
- Renders 3 `<SuggestionCard />` components with Claude's suggestions
- State: `{ suggestions, isLoading, error }` via SWR

---

#### `SuggestionCard.tsx`
```typescript
// File: components/ai/SuggestionCard.tsx

interface SuggestionCardProps {
  activity: ActivityDefinition;
  reason: string;             // Claude's personalised explanation
  ironValue: number;
  urgency?: 'low' | 'medium' | 'high';
  onAccept: (activityId: string) => void;
}
```

**Core Behaviour