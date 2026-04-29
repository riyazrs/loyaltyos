'use client'

import { use, useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BUSINESS_CONFIGS } from '@/lib/businessConfig'
import { useCustomerStore } from '@/store/customerStore'
import { fetchPersonalisedActivities } from '@/lib/claudeClient'
import PointsTracker from '@/components/PointsTracker'
import ActivityCard from '@/components/ActivityCard'
import OfferBanner from '@/components/OfferBanner'
import Leaderboard from '@/components/Leaderboard'
import MiniGame from '@/components/MiniGame'
import Toast, { useToasts } from '@/components/Toast'
import { PersonaliseSuggestion } from '@/types'

const NAV = [
  { label: 'Home', icon: '⊞', seg: '' },
  { label: 'Activities', icon: '◎', seg: 'activities' },
  { label: 'Rewards', icon: '★', seg: 'rewards' },
  { label: 'Admin', icon: '⚙', seg: 'admin' },
]

export default function Dashboard({ params }: { params: Promise<{ business: string }> }) {
  const { business } = use(params)
  const pathname = usePathname()
  const config = BUSINESS_CONFIGS[business]
  if (!config) notFound()

  const { customer, completeActivity } = useCustomerStore()
  const { toasts, addToast, removeToast } = useToasts()
  const [suggestions, setSuggestions] = useState<PersonaliseSuggestion[]>([])
  const [loadingSuggestions, setLoadingSuggestions] = useState(false)

  const currentTier = [...config.tiers].reverse().find(t => customer.points >= t.minPoints) ?? config.tiers[0]

  useEffect(() => {
    setLoadingSuggestions(true)
    fetchPersonalisedActivities(customer, config)
      .then(data => setSuggestions(data.suggestions ?? []))
      .catch(() => setSuggestions([]))
      .finally(() => setLoadingSuggestions(false))
  }, [])

  const completedToday = new Set(
    customer.activityHistory
      .filter(h => new Date(h.completedAt).toDateString() === new Date().toDateString())
      .map(h => h.activityId)
  )

  const handleComplete = (activityId: string, points: number) => {
    completeActivity(activityId, points)
    addToast('Points earned!', points, config.accentColor)
  }

  const miniGamePlayed = completedToday.has('mini_game')
  const quickWins = config.activities.filter(a => a.points <= 15 && !completedToday.has(a.id)).slice(0, 3)

  return (
    <main className="min-h-screen p-4 max-w-lg mx-auto pb-24">
      <Toast toasts={toasts} onRemove={removeToast} />

      {/* Header */}
      <div className="flex items-center justify-between py-4 mb-5">
        <div>
          <h1 className="text-xl font-black tracking-tight" style={{ color: config.primaryColor }}>{config.name}</h1>
          <p className="text-xs text-white/40">{config.tagline}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-white">{customer.name}</p>
          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: currentTier.color + '33', color: currentTier.color }}>
            {currentTier.name}
          </span>
        </div>
      </div>

      {/* Points tracker */}
      <div className="mb-5">
        <PointsTracker
          points={customer.points}
          tiers={config.tiers}
          currentTier={currentTier.name}
          currencyName={config.currency.name}
          primaryColor={config.primaryColor}
          accentColor={config.accentColor}
          streakDays={customer.streakDays}
          totalActivitiesToday={completedToday.size}
        />
      </div>

      {/* Offer Banner */}
      <div className="mb-5">
        <OfferBanner
          title="Double points this week!"
          body="Complete any 3 activities today and earn 2x points. Tap to activate."
          cta="Activate offer"
          accentColor={config.accentColor}
        />
      </div>

      {/* Quick Wins */}
      {quickWins.length > 0 && (
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold text-white/50 uppercase tracking-widest">Quick wins</h2>
            <span className="text-xs text-white/30">Low effort, fast points</span>
          </div>
          <div className="space-y-2">
            {quickWins.map(a => (
              <ActivityCard
                key={a.id}
                activity={a}
                accentColor={config.accentColor}
                alreadyCompleted={completedToday.has(a.id)}
                onComplete={handleComplete}
                onToast={addToast}
              />
            ))}
          </div>
        </div>
      )}

      {/* AI Suggestions */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-bold text-white/50 uppercase tracking-widest">AI suggestions</h2>
          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${config.primaryColor}22`, color: config.primaryColor }}>Personalised</span>
        </div>
        {loadingSuggestions ? (
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
            <div className="inline-flex gap-1 items-center text-white/30 text-sm">
              <span className="animate-pulse">◦</span>
              <span className="animate-pulse" style={{ animationDelay: '0.15s' }}>◦</span>
              <span className="animate-pulse" style={{ animationDelay: '0.3s' }}>◦</span>
              <span className="ml-2">Claude is thinking...</span>
            </div>
          </div>
        ) : suggestions.length > 0 ? (
          <div className="space-y-2">
            {suggestions.map(s => {
              const activity = config.activities.find(a => a.id === s.activityId)
              if (!activity) return null
              return (
                <ActivityCard
                  key={activity.id}
                  activity={activity}
                  accentColor={config.accentColor}
                  alreadyCompleted={completedToday.has(activity.id)}
                  onComplete={handleComplete}
                  reason={s.reason}
                />
              )
            })}
          </div>
        ) : (
          <div className="space-y-2">
            {config.activities.slice(0, 3).map(a => (
              <ActivityCard
                key={a.id}
                activity={a}
                accentColor={config.accentColor}
                alreadyCompleted={completedToday.has(a.id)}
                onComplete={handleComplete}
              />
            ))}
          </div>
        )}
      </div>

      {/* Mini Game */}
      {config.type === 'gaming_pub' && (
        <div className="mb-5">
          <h2 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Daily mini-game</h2>
          <MiniGame
            accentColor={config.accentColor}
            alreadyPlayed={miniGamePlayed}
            onWin={(pts) => { completeActivity('mini_game', pts); addToast('Mini-game bonus!', pts, config.accentColor) }}
          />
        </div>
      )}

      {/* Leaderboard */}
      <div className="mb-5">
        <h2 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Leaderboard</h2>
        <Leaderboard
          primaryColor={config.primaryColor}
          accentColor={config.accentColor}
          tiers={config.tiers}
          currencyName={config.currency.name}
          customerName={customer.name}
        />
      </div>

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
