'use client'

import { Reward } from '@/types'

interface Props {
  reward: Reward
  customerPoints: number
  primaryColor: string
  accentColor: string
  alreadyRedeemed: boolean
  onRedeem: (rewardId: string, cost: number) => void
}

export default function RewardCard({ reward, customerPoints, primaryColor, accentColor, alreadyRedeemed, onRedeem }: Props) {
  const canAfford = customerPoints >= reward.cost
  const locked = !canAfford || alreadyRedeemed

  return (
    <div className={`rounded-xl p-5 border transition-all ${locked ? 'opacity-50 border-white/10' : 'border-white/30 hover:border-white/50'} bg-white/5`}>
      <p className="font-semibold text-white mb-1">{reward.name}</p>
      <p className="text-2xl font-bold mb-3" style={{ color: accentColor }}>{reward.cost.toLocaleString()}</p>
      <button
        onClick={() => !locked && onRedeem(reward.id, reward.cost)}
        disabled={locked}
        className="w-full py-2 rounded-lg text-sm font-semibold transition-all"
        style={{
          background: alreadyRedeemed ? '#ffffff22' : canAfford ? primaryColor : '#ffffff22',
          color: locked ? '#ffffff44' : '#fff',
          cursor: locked ? 'default' : 'pointer',
        }}
      >
        {alreadyRedeemed ? 'Redeemed' : canAfford ? 'Redeem' : `Need ${reward.cost - customerPoints} more`}
      </button>
    </div>
  )
}
