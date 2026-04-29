import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Coupon } from '@/types'

interface CouponState {
  coupons: Coupon[]
  addCoupon: (coupon: Omit<Coupon, 'id' | 'createdAt'>) => void
  toggleCoupon: (id: string) => void
  deleteCoupon: (id: string) => void
}

export const useCouponStore = create<CouponState>()(
  persist(
    (set) => ({
      coupons: [],
      addCoupon: (coupon) =>
        set((s) => ({
          coupons: [
            ...s.coupons,
            {
              ...coupon,
              id: Math.random().toString(36).slice(2),
              createdAt: new Date().toISOString(),
            },
          ],
        })),
      toggleCoupon: (id) =>
        set((s) => ({
          coupons: s.coupons.map((c) => (c.id === id ? { ...c, active: !c.active } : c)),
        })),
      deleteCoupon: (id) =>
        set((s) => ({ coupons: s.coupons.filter((c) => c.id !== id) })),
    }),
    { name: 'loyaltyos-coupons' }
  )
)
