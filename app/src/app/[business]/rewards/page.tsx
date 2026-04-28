'use client'

import { use } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BUSINESS_CONFIGS } from '@/lib/businessConfig'
import { useCustomerStore } from '@/store/customerStore'
import RewardCard from '@/components/RewardCard'

export default function RewardsPage({ params }: { params: Promise<{ business: string }> }) {
  const { business } = use(params)
  const config = BUSINESS_CONFIGS[business]
  if (!config) notFound()

  const { customer, redeemReward } = useCustomerStore()

  const redeemedIds = new Set(customer.redeemedRewards.map(r => r.rewardId))

  return (
    <main className="min-h-screen p-4 max-w-lg mx-auto pb-24">
      <div className="py-4 mb-6">
        <Link href={`/${business}`} className="text-xs text-white/40 hover:text-white/70 mb-2 block">← Back</Link>
        <h1 className="text-2xl font-bold text-white">Rewards</h1>
        <p className="text-sm text-white/40 mt-1">
          You have <span className="font-bold" style={{ color: config.accentColor }}>{customer.points.toLocaleString()}</span> {config.currency.name}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {config.rewards.map(reward => (
          <RewardCard
            key={reward.id}
            reward={reward}
            customerPoints={customer.points}
            primaryColor={config.primaryColor}
            accentColor={config.accentColor}
            alreadyRedeemed={redeemedIds.has(reward.id)}
            onRedeem={redeemReward}
          />
        ))}
      </div>

      {customer.redeemedRewards.length > 0 && (
        <div className="mt-8">
          <h2 className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-3">Redeemed</h2>
          <div className="space-y-2">
            {customer.redeemedRewards.map((r, i) => {
              const reward = config.rewards.find(rw => rw.id === r.rewardId)
              if (!reward) return null
              return (
                <div key={i} className="rounded-xl px-4 py-3 border border-white/10 bg-white/5 flex justify-between items-center">
                  <span className="text-sm text-white/60">{reward.name}</span>
                  <span className="text-xs text-white/30">{new Date(r.redeemedAt).toLocaleDateString()}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0a0f]/90 backdrop-blur border-t border-white/10 flex">
        {[
          { label: 'Home', href: `/${business}` },
          { label: 'Activities', href: `/${business}/activities` },
          { label: 'Rewards', href: `/${business}/rewards` },
          { label: 'Admin', href: `/${business}/admin` },
        ].map(link => (
          <Link key={link.href} href={link.href} className="flex-1 py-3 text-center text-xs text-white/50 hover:text-white transition-colors">
            {link.label}
          </Link>
        ))}
      </nav>
    </main>
  )
}
