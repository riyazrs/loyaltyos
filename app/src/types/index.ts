export interface Activity {
  id: string
  name: string
  points: number
  category?: string
  icon?: string
  description?: string
  completedAt?: string
}

export interface Reward {
  id: string
  name: string
  cost: number
  category?: string
  icon?: string
  description?: string
  redeemedAt?: string
}

export interface Tier {
  name: string
  minPoints: number
  color: string
}

export interface Offer {
  id: string
  title: string
  body: string
  cta: string
  validUntil: string
  targetSegment?: string
}

export interface Customer {
  id: string
  name: string
  tier: string
  points: number
  streakDays: number
  activityHistory: { activityId: string; completedAt: string }[]
  redeemedRewards: { rewardId: string; redeemedAt: string }[]
}

export interface BusinessConfig {
  id: string
  name: string
  type: 'gaming_pub' | 'dental_clinic' | string
  tagline: string
  currency: { name: string; symbol: string }
  primaryColor: string
  accentColor: string
  activities: Activity[]
  rewards: Reward[]
  tiers: Tier[]
  aiPersonalisationEnabled: boolean
}

export interface PersonaliseSuggestion {
  activityId: string
  reason: string
}
