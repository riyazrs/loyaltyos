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
}

export default function PointsTracker({ points, tiers, currentTier, currencyName, primaryColor, accentColor }: Props) {
  const [displayed, setDisplayed] = useState(0)
  const animRef = useRef<number | null>(null)

  useEffect(() => {
    const start = displayed
    const end = points
    const duration = 600
    const startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      setDisplayed(Math.round(start + (end - start) * progress))
      if (progress < 1) animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current) }
  }, [points])

  const currentTierObj = tiers.find(t => t.name === currentTier) ?? tiers[0]
  const nextTierObj = tiers.find(t => t.minPoints > points)
  const progress = nextTierObj
    ? ((points - currentTierObj.minPoints) / (nextTierObj.minPoints - currentTierObj.minPoints)) * 100
    : 100

  return (
    <div className="rounded-2xl p-6 text-white" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${accentColor}33)`, border: `1px solid ${primaryColor}55` }}>
      <p className="text-sm uppercase tracking-widest opacity-70 mb-1">{currencyName}</p>
      <p className="text-5xl font-bold tracking-tight">{displayed.toLocaleString()}</p>
      <div className="mt-4">
        <div className="flex justify-between text-xs opacity-70 mb-1">
          <span style={{ color: currentTierObj.color }}>{currentTierObj.name}</span>
          {nextTierObj && <span>{nextTierObj.name} at {nextTierObj.minPoints.toLocaleString()}</span>}
        </div>
        <div className="h-2 rounded-full bg-white/20">
          <div
            className="h-2 rounded-full transition-all duration-700"
            style={{ width: `${Math.min(progress, 100)}%`, backgroundColor: accentColor }}
          />
        </div>
      </div>
    </div>
  )
}
