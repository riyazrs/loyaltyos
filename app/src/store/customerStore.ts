import { create } from 'zustand'
import { Customer } from '@/types'

interface CustomerStore {
  customer: Customer
  completeActivity: (activityId: string, points: number) => void
  redeemReward: (rewardId: string, cost: number) => void
  setName: (name: string) => void
  reset: () => void
}

const defaultCustomer: Customer = {
  id: 'user_001',
  name: 'Alex',
  tier: 'Starter',
  points: 120,
  streakDays: 5,
  activityHistory: [],
  redeemedRewards: [],
}

export const useCustomerStore = create<CustomerStore>((set) => ({
  customer: defaultCustomer,

  completeActivity: (activityId, points) =>
    set((state) => ({
      customer: {
        ...state.customer,
        points: state.customer.points + points,
        activityHistory: [
          { activityId, completedAt: new Date().toISOString() },
          ...state.customer.activityHistory,
        ],
      },
    })),

  redeemReward: (rewardId, cost) =>
    set((state) => ({
      customer: {
        ...state.customer,
        points: Math.max(0, state.customer.points - cost),
        redeemedRewards: [
          { rewardId, redeemedAt: new Date().toISOString() },
          ...state.customer.redeemedRewards,
        ],
      },
    })),

  setName: (name) =>
    set((state) => ({ customer: { ...state.customer, name } })),

  reset: () => set({ customer: defaultCustomer }),
}))
