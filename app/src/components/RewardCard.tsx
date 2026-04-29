'use client'

import { useState } from 'react'
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
  const [redeeming, setRedeeming] = useState(false)
  const canAfford = customerPoints >= reward.cost
  const locked = !canAfford || alreadyRedeemed
  const pct = Math.min((customerPoints / reward.cost) * 100, 100)

  const handle = () => {
    if (locked) return
    setRedeeming(true)
    setTimeout(() => {
      onRedeem(reward.id, reward.cost)
      setRedeeming(false)
    }, 400)
  }

  return (
    <div
      className="rounded-xl p-4 border flex flex-col transition-all duration-200"
      style={{
        borderColor: alreadyRedeemed ? 'rgba(255,255,255,0.06)' : canAfford ? `${accentColor}55` : 'rgba(255,255,255,0.1)',
        background: canAfford && !alreadyRedeemed ? `${accentColor}0a` : 'rgba(255,255,255,0.03)',
        boxShadow: canAfford && !alreadyRedeemed ? `0 0 20px ${accentColor}18` : 'none',
      }}
    >
      {/* Icon */}
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
          style={{ background: alreadyRedeemed ? 'rgba(255,255,255,0.05)' : `${accentColor}22` }}
        >
          {alreadyRedeemed ? '✓' : (reward.icon ?? '🎁')}
        </div>
        {canAfford && !alreadyRedeemed && (
          <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: `${accentColor}33`, color: accentColor }}>
            Unlocked
          </span>
        )}
      </div>

      <p className={`font-semibold text-sm mb-0.5 ${alreadyRedeemed ? 'text-white/30 line-through' : 'text-white'}`}>{reward.name}</p>
      {reward.description && <p className="text-xs text-white/35 mb-3 leading-snug">{reward.description}</p>}

      {/* Cost + progress */}
      <div className="mt-auto">
        <div className="flex justify-between text-xs mb-1">
          <span className="font-black" style={{ color: alreadyRedeemed ? 'rgba(255,255,255,0.2)' : accentColor }}>{reward.cost.toLocaleString()}</span>
          {!alreadyRedeemed && !canAfford && (
            <span className="text-white/30">{(reward.cost - customerPoints).toLocaleString()} more</span>
          )}
        </div>
        {!alreadyRedeemed && (
          <div className="h-1 rounded-full bg-white/10 mb-3">
            <div className="h-1 rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: canAfford ? accentColor : primaryColor }} />
          </div>
        )}

        <button
          onClick={handle}
          disabled={locked || redeeming}
          className="w-full py-2 rounded-lg text-xs font-bold transition-all duration-200"
          style={{
            background: alreadyRedeemed ? 'rgba(255,255,255,0.05)' : canAfford ? primaryColor : 'rgba(255,255,255,0.06)',
            color: locked ? 'rgba(255,255,255,0.25)' : '#fff',
            cursor: locked ? 'default' : 'pointer',
            transform: redeeming ? 'scale(0.97)' : 'scale(1)',
          }}
        >
          {alreadyRedeemed ? 'Redeemed' : redeeming ? '...' : canAfford ? 'Redeem now' : 'Locked'}
        </button>
      </div>
    </div>
  )
}
