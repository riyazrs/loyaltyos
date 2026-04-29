'use client'

import { useEffect, useRef, useState } from 'react'
import { Tier } from '@/types'

interface Props {
  points: number
  tiers: Tier[]
  currentTier: string
  currencyName: string
  primaryColor: string
  accentColor: string
  streakDays: number
  totalActivitiesToday: number
}

export default function PointsTracker({ points, tiers, currentTier, currencyName, primaryColor, accentColor, streakDays, totalActivitiesToday }: Props) {
  const [displayed, setDisplayed] = useState(0)
  const animRef = useRef<number | null>(null)

  useEffect(() => {
    const start = displayed
    const end = points
    const duration = 800
    const startTime = performance.now()
    const animate = (now: number) => {
      const elapsed = now - startTime
      const t = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplayed(Math.round(start + (end - start) * eased))
      if (t < 1) animRef.current = requestAnimationFrame(animate)
    }
    animRef.current = requestAnimationFrame(animate)
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current) }
  }, [points])

  const tierIndex = tiers.findIndex(t => t.name === currentTier)
  const currentTierObj = tiers[tierIndex] ?? tiers[0]
  const nextTierObj = tiers[tierIndex + 1]
  const pct = nextTierObj
    ? Math.min(((points - currentTierObj.minPoints) / (nextTierObj.minPoints - currentTierObj.minPoints)) * 100, 100)
    : 100

  const radius = 52
  const circ = 2 * Math.PI * radius
  const dash = (pct / 100) * circ

  return (
    <div
      className="rounded-2xl p-5 text-white relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${primaryColor}cc, ${primaryColor}44)`, border: `1px solid ${primaryColor}88`, boxShadow: `0 0 40px ${primaryColor}33` }}
    >
      {/* Background glow blob */}
      <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full blur-3xl opacity-30" style={{ background: accentColor }} />

      <div className="relative flex items-center gap-5">
        {/* SVG ring */}
        <div className="relative flex-shrink-0">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
            <circle
              cx="60" cy="60" r={radius}
              fill="none"
              stroke={accentColor}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${circ}`}
              strokeDashoffset={circ / 4}
              style={{ transition: 'stroke-dasharray 0.8s cubic-bezier(0.4,0,0.2,1)', filter: `drop-shadow(0 0 6px ${accentColor})` }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs opacity-60 uppercase tracking-wider">{currencyName}</span>
            <span className="text-2xl font-black leading-tight">{displayed.toLocaleString()}</span>
          </div>
        </div>

        {/* Right side info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-bold px-2 py-0.5 rounded-full" style={{ background: currentTierObj.color + '33', color: currentTierObj.color }}>
              {currentTierObj.name}
            </span>
            {nextTierObj && (
              <span className="text-xs text-white/40">→ {nextTierObj.name}</span>
            )}
          </div>

          {nextTierObj ? (
            <>
              <div className="h-1.5 rounded-full bg-white/10 mb-1">
                <div className="h-1.5 rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: accentColor, boxShadow: `0 0 8px ${accentColor}` }} />
              </div>
              <p className="text-xs text-white/40">{(nextTierObj.minPoints - points).toLocaleString()} more to {nextTierObj.name}</p>
            </>
          ) : (
            <p className="text-xs text-white/60">Max tier reached</p>
          )}

          {/* Quick stats */}
          <div className="flex gap-3 mt-3">
            <div className="text-center">
              <p className="text-lg font-black" style={{ color: accentColor }}>{streakDays}</p>
              <p className="text-xs text-white/40">day streak</p>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <p className="text-lg font-black text-white">{totalActivitiesToday}</p>
              <p className="text-xs text-white/40">today</p>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <p className="text-lg font-black text-white">{tierIndex + 1}/{tiers.length}</p>
              <p className="text-xs text-white/40">tier</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
