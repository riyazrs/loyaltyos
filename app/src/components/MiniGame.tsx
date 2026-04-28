'use client'

import { useState, useEffect, useCallback } from 'react'

interface Props {
  accentColor: string
  onWin: (points: number) => void
  alreadyPlayed: boolean
}

export default function MiniGame({ accentColor, onWin, alreadyPlayed }: Props) {
  const [active, setActive] = useState(false)
  const [target, setTarget] = useState({ x: 50, y: 50 })
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(10)
  const [finished, setFinished] = useState(false)

  const moveTarget = useCallback(() => {
    setTarget({ x: Math.random() * 80 + 10, y: Math.random() * 80 + 10 })
  }, [])

  useEffect(() => {
    if (!active) return
    const interval = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(interval)
          setActive(false)
          setFinished(true)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [active])

  const start = () => {
    setScore(0)
    setTimeLeft(10)
    setFinished(false)
    setActive(true)
    moveTarget()
  }

  const hit = () => {
    if (!active) return
    setScore(s => s + 1)
    moveTarget()
  }

  const claim = () => {
    const pts = Math.min(score * 3, 15)
    onWin(pts)
  }

  if (alreadyPlayed) return (
    <div className="rounded-xl p-5 border border-white/10 bg-white/5 text-center">
      <p className="text-white/60 text-sm">Mini-game played today. Come back tomorrow!</p>
    </div>
  )

  return (
    <div className="rounded-xl border border-white/20 bg-white/5 overflow-hidden">
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <p className="font-semibold text-white">Daily Mini-Game</p>
        <span className="text-xs px-2 py-1 rounded-full" style={{ background: accentColor + '33', color: accentColor }}>+15 max</span>
      </div>
      {!active && !finished && (
        <div className="p-6 text-center">
          <p className="text-white/60 text-sm mb-4">Tap the target as many times as you can in 10 seconds!</p>
          <button onClick={start} className="px-6 py-2 rounded-lg font-semibold text-black" style={{ background: accentColor }}>
            Play Now
          </button>
        </div>
      )}
      {active && (
        <div className="relative h-48 cursor-crosshair select-none" onClick={(e) => e.stopPropagation()}>
          <div className="absolute top-2 left-2 text-xs text-white/60">Score: {score}</div>
          <div className="absolute top-2 right-2 text-xs text-white/60">Time: {timeLeft}s</div>
          <button
            onClick={hit}
            className="absolute w-10 h-10 rounded-full transition-all duration-100 font-bold text-black"
            style={{ left: `${target.x}%`, top: `${target.y}%`, transform: 'translate(-50%,-50%)', background: accentColor }}
          />
        </div>
      )}
      {finished && (
        <div className="p-6 text-center">
          <p className="text-white font-bold text-2xl mb-1">{score} hits!</p>
          <p className="text-white/60 text-sm mb-4">Earns you {Math.min(score * 3, 15)} tokens</p>
          <button onClick={claim} className="px-6 py-2 rounded-lg font-semibold text-black" style={{ background: accentColor }}>
            Claim Reward
          </button>
        </div>
      )}
    </div>
  )
}
