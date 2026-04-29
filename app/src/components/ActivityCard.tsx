'use client'

import { useState } from 'react'
import { Activity } from '@/types'

interface Props {
  activity: Activity
  accentColor: string
  primaryColor?: string
  alreadyCompleted: boolean
  onComplete: (activityId: string, points: number) => void
  reason?: string
  onToast?: (text: string, points: number, accentColor: string) => void
}

const CATEGORY_COLORS: Record<string, string> = {
  Gaming: '#7C3AED',
  Visit: '#0EA5E9',
  Social: '#EC4899',
  Competitive: '#F59E0B',
  Special: '#EF4444',
  Daily: '#10B981',
  Clinic: '#0EA5E9',
  Learning: '#8B5CF6',
  Family: '#F97316',
}

export default function ActivityCard({ activity, accentColor, alreadyCompleted, onComplete, reason, onToast }: Props) {
  const [justDone, setJustDone] = useState(false)
  const [burst, setBurst] = useState(false)

  const handle = () => {
    if (alreadyCompleted || justDone) return
    setBurst(true)
    setJustDone(true)
    onComplete(activity.id, activity.points)
    onToast?.(activity.name, activity.points, accentColor)
    setTimeout(() => setBurst(false), 600)
  }

  const done = alreadyCompleted || justDone
  const catColor = activity.category ? (CATEGORY_COLORS[activity.category] ?? accentColor) : accentColor

  return (
    <div
      className="relative rounded-xl border transition-all duration-300 overflow-hidden"
      style={{
        borderColor: done ? 'rgba(255,255,255,0.08)' : burst ? accentColor : 'rgba(255,255,255,0.15)',
        background: done ? 'rgba(255,255,255,0.03)' : burst ? `${accentColor}18` : 'rgba(255,255,255,0.05)',
        transform: burst ? 'scale(1.01)' : 'scale(1)',
      }}
    >
      {/* Burst overlay */}
      {burst && (
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{ background: `radial-gradient(circle at center, ${accentColor}33, transparent 70%)`, animation: 'none' }}
        />
      )}

      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* Icon */}
          {activity.icon && (
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0 transition-all duration-300"
              style={{ background: done ? 'rgba(255,255,255,0.05)' : `${catColor}22` }}
            >
              {done ? '✓' : activity.icon}
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-0.5">
              <p className={`font-semibold text-sm ${done ? 'text-white/40 line-through' : 'text-white'}`}>
                {activity.name}
              </p>
              {activity.category && (
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full font-medium"
                  style={{ background: `${catColor}22`, color: catColor }}
                >
                  {activity.category}
                </span>
              )}
            </div>
            {reason && !done && (
              <p className="text-xs text-white/50 leading-snug">{reason}</p>
            )}
            {activity.description && !reason && !done && (
              <p className="text-xs text-white/35 leading-snug">{activity.description}</p>
            )}
          </div>

          {/* Points + Button */}
          <div className="flex flex-col items-end gap-1.5 flex-shrink-0 ml-1">
            <span
              className="text-sm font-black transition-all duration-300"
              style={{ color: done ? 'rgba(255,255,255,0.25)' : accentColor }}
            >
              +{activity.points}
            </span>
            <button
              onClick={handle}
              disabled={done}
              className="px-3 py-1 rounded-lg text-xs font-bold transition-all duration-200"
              style={{
                background: done ? 'rgba(255,255,255,0.08)' : accentColor,
                color: done ? 'rgba(255,255,255,0.3)' : '#000',
                cursor: done ? 'default' : 'pointer',
                transform: burst ? 'scale(0.95)' : 'scale(1)',
              }}
            >
              {done ? 'Done' : 'Log it'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
