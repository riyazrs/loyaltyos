'use client'

import { useState } from 'react'
import { Activity } from '@/types'

interface Props {
  activity: Activity
  accentColor: string
  alreadyCompleted: boolean
  onComplete: (activityId: string, points: number) => void
  reason?: string
}

export default function ActivityCard({ activity, accentColor, alreadyCompleted, onComplete, reason }: Props) {
  const [justDone, setJustDone] = useState(false)

  const handle = () => {
    if (alreadyCompleted || justDone) return
    setJustDone(true)
    onComplete(activity.id, activity.points)
  }

  const done = alreadyCompleted || justDone

  return (
    <div className={`rounded-xl p-4 border transition-all duration-300 ${done ? 'opacity-50 border-white/10' : 'border-white/20 hover:border-white/40'} bg-white/5`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="font-medium text-white">{activity.name}</p>
          {reason && <p className="text-xs text-white/50 mt-0.5">{reason}</p>}
        </div>
        <div className="flex items-center gap-3 ml-4">
          <span className="text-sm font-bold" style={{ color: accentColor }}>+{activity.points}</span>
          <button
            onClick={handle}
            disabled={done}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
            style={{
              background: done ? '#ffffff22' : accentColor,
              color: done ? '#ffffff66' : '#000',
              cursor: done ? 'default' : 'pointer',
            }}
          >
            {done ? 'Done' : 'Complete'}
          </button>
        </div>
      </div>
    </div>
  )
}
