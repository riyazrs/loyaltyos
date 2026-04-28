import { BusinessConfig } from '@/types'

export const BUSINESS_CONFIGS: Record<string, BusinessConfig> = {
  pixelpub: {
    id: 'pixelpub',
    name: 'PixelPub',
    type: 'gaming_pub',
    tagline: 'Play More. Earn More.',
    currency: { name: 'Tokens', symbol: 'T' },
    primaryColor: '#7C3AED',
    accentColor: '#F59E0B',
    activities: [
      { id: 'play_arcade', name: 'Play an arcade game', points: 10 },
      { id: 'visit_weekday', name: 'Visit on a weekday', points: 25 },
      { id: 'tournament_entry', name: 'Enter a tournament', points: 50 },
      { id: 'refer_friend', name: 'Refer a friend', points: 100 },
      { id: 'mini_game', name: 'Complete daily mini-game', points: 15 },
    ],
    rewards: [
      { id: 'free_token', name: '1 Free Gaming Token', cost: 50 },
      { id: 'free_drink', name: 'Free Soft Drink', cost: 100 },
      { id: 'tournament_free', name: 'Free Tournament Entry', cost: 200 },
      { id: 'vip_night', name: 'VIP Tuesday Night Access', cost: 500 },
    ],
    tiers: [
      { name: 'Rookie', minPoints: 0, color: '#9CA3AF' },
      { name: 'Player', minPoints: 200, color: '#10B981' },
      { name: 'Champion', minPoints: 500, color: '#F59E0B' },
      { name: 'Legend', minPoints: 1000, color: '#7C3AED' },
    ],
    aiPersonalisationEnabled: true,
  },
  dentalplus: {
    id: 'dentalplus',
    name: 'DentalPlus',
    type: 'dental_clinic',
    tagline: 'Healthy Habits. Bright Smiles.',
    currency: { name: 'SmilePoints', symbol: 'SP' },
    primaryColor: '#0EA5E9',
    accentColor: '#10B981',
    activities: [
      { id: 'brush_morning', name: 'Morning brush logged', points: 5 },
      { id: 'brush_night', name: 'Night brush logged', points: 5 },
      { id: 'floss', name: 'Flossing logged', points: 10 },
      { id: 'appointment', name: 'Attend appointment', points: 100 },
      { id: 'book_ahead', name: 'Book next appointment', points: 20 },
    ],
    rewards: [
      { id: 'whitening_discount', name: '10% off whitening', cost: 100 },
      { id: 'free_checkup', name: 'Free checkup', cost: 300 },
      { id: 'priority_booking', name: 'Priority booking slot', cost: 150 },
    ],
    tiers: [
      { name: 'Starter', minPoints: 0, color: '#9CA3AF' },
      { name: 'Regular', minPoints: 100, color: '#10B981' },
      { name: 'Dedicated', minPoints: 300, color: '#0EA5E9' },
      { name: 'Champion', minPoints: 600, color: '#F59E0B' },
    ],
    aiPersonalisationEnabled: true,
  },
}
