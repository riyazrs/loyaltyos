'use client'

import { use } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BUSINESS_CONFIGS } from '@/lib/businessConfig'
import { useCustomerStore } from '@/store/customerStore'
import RewardCard from '@/components/RewardCard'
import Toast, { useToasts } from '@/components/Toast'

const NAV = [
  { label: 'Home', icon: '⊞', seg: '' },
  { label: 'Activities', icon: '◎', seg: 'activities' },
  { label: 'Rewards', icon: '★', seg: 'rewards' },
  { label: 'Admin', icon: '⚙', seg: 'admin' },
]

export default function RewardsPage({ params }: { params: Promise<{ business: string }> }) {
  const { business } = use(params)
  const pathname = usePathname()
  const config = BUSINESS_CONFIGS[business]
  if (!config) notFound()

  const { customer, redeemReward } = useCustomerStore()
  const { toasts, addToast, removeToast } = useToasts()

  const redeemedIds = new Set(customer.redeemedRewards.map(r => r.rewardId))
  const affordable = config.rewards.filter(r => customer.points >= r.cost && !redeemedIds.has(r.id)).length

  const handleRedeem = (rewardId: string, cost: number) => {
    const reward = config.rewards.find(r => r.id === rewardId)
    redeemReward(rewardId, cost)
    if (reward) addToast(`${reward.name} redeemed!`, cost, config.accentColor)
  }

  return (
    <main className="min-h-screen p-4 max-w-lg mx-auto pb-24">
      <Toast toasts={toasts} onRemove={removeToast} />

      <div className="py-4 mb-5">
        <h1 className="text-xl font-black tracking-tight text-white">Rewards</h1>
        <p className="text-xs text-white/40 mt-0.5">
          <span className="font-bold" style={{ color: config.accentColor }}>{customer.points.toLocaleString()}</span> {config.currency.name} available
        </p>
      </div>

      {/* Affordable banner */}
      {affordable > 0 && (
        <div
          className="mb-5 rounded-xl px-4 py-3 flex items-center gap-3"
          style={{ background: `${config.accentColor}18`, border: `1px solid ${config.accentColor}44` }}
        >
          <span className="text-xl">★</span>
          <div>
            <p className="text-sm font-bold text-white">{affordable} reward{affordable > 1 ? 's' : ''} unlocked</p>
            <p className="text-xs text-white/50">You have enough points to redeem now</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        {config.rewards.map(reward => (
          <RewardCard
            key={reward.id}
            reward={reward}
            customerPoints={customer.points}
            primaryColor={config.primaryColor}
            accentColor={config.accentColor}
            alreadyRedeemed={redeemedIds.has(reward.id)}
            onRedeem={handleRedeem}
          />
        ))}
      </div>

      {customer.redeemedRewards.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Redeemed history</h2>
          <div className="space-y-2">
            {customer.redeemedRewards.map((r, i) => {
              const reward = config.rewards.find(rw => rw.id === r.rewardId)
              if (!reward) return null
              return (
                <div key={i} className="rounded-xl px-4 py-3 border border-white/10 bg-white/5 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {reward.icon && <span className="text-base">{reward.icon}</span>}
                    <span className="text-sm text-white/60">{reward.name}</span>
                  </div>
                  <span className="text-xs text-white/30">{new Date(r.redeemedAt).toLocaleDateString()}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-md border-t border-white/10 flex">
        {NAV.map(n => {
          const href = `/${business}${n.seg ? '/' + n.seg : ''}`
          const active = n.seg === '' ? pathname === `/${business}` : pathname === href
          return (
            <Link key={href} href={href} className="flex-1 py-3 flex flex-col items-center gap-0.5 transition-colors">
              <span className="text-base" style={{ color: active ? config.accentColor : 'rgba(255,255,255,0.3)' }}>{n.icon}</span>
              <span className="text-xs" style={{ color: active ? config.accentColor : 'rgba(255,255,255,0.35)' }}>{n.label}</span>
            </Link>
          )
        })}
      </nav>
    </main>
  )
}
