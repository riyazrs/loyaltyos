'use client'

import { use, useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BUSINESS_CONFIGS } from '@/lib/businessConfig'
import { useCustomerStore } from '@/store/customerStore'
import { fetchPersonalisedActivities } from '@/lib/claudeClient'
import PointsTracker from '@/components/PointsTracker'
import ActivityCard from '@/components/ActivityCard'
import OfferBanner from '@/components/OfferBanner'
import Leaderboard from '@/components/Leaderboard'
import MiniGame from '@/components/MiniGame'
import { PersonaliseSuggestion } from '@/types'

export default function Dashboard({ params }: { params: Promise<{ business: string }> }) {
  const { business } = use(params)
  const config = BUSINESS_CONFIGS[business]
  if (!config) notFound()

  const { customer, completeActivity } = useCustomerStore()
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

  const miniGamePlayed = completedToday.has('mini_game')

  return (
    <main className="min-h-screen p-4 max-w-lg mx-auto pb-24">
      {/* Header */}
      <div className="flex items-center justify-between py-4 mb-4">
        <div>
          <h1 className="text-xl font-bold" style={{ color: config.primaryColor }}>{config.name}</h1>
          <p className="text-xs text-white/40">{config.tagline}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-white">{customer.name}</p>
          <p className="text-xs px-2 py-0.5 rounded-full inline-block" style={{ background: currentTier.color + '33', color: currentTier.color }}>
            {currentTier.name}
          </p>
        </div>
      </div>

      {/* Points */}
      <div className="mb-6">
        <PointsTracker
          points={customer.points}
          tiers={config.tiers}
          currentTier={currentTier.name}
          currencyName={config.currency.name}
          primaryColor={config.primaryColor}
          accentColor={config.accentColor}
        />
      </div>

      {/* Streak */}
      <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-4 flex items-center gap-3">
        <div className="text-2xl font-bold" style={{ color: config.accentColor }}>{customer.streakDays}</div>
        <div>
          <p className="text-sm font-medium text-white">Day streak</p>
          <p className="text-xs text-white/40">Keep it going for bonus points</p>
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-3">Today's suggestions</h2>
        {loadingSuggestions ? (
          <div className="text-white/30 text-sm py-4 text-center">Loading personalised suggestions...</div>
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
                  onComplete={completeActivity}
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
                onComplete={completeActivity}
              />
            ))}
          </div>
        )}
      </div>

      {/* Mini Game (PixelPub only) */}
      {config.type === 'gaming_pub' && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-3">Mini-game</h2>
          <MiniGame
            accentColor={config.accentColor}
            alreadyPlayed={miniGamePlayed}
            onWin={(pts) => completeActivity('mini_game', pts)}
          />
        </div>
      )}

      {/* Offer Banner */}
      <div className="mb-6">
        <OfferBanner
          title="Double points today!"
          body="Complete any 3 activities and earn 2x points. Limited time offer."
          cta="Activate offer"
          accentColor={config.accentColor}
        />
      </div>

      {/* Leaderboard */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-3">Leaderboard</h2>
        <Leaderboard
          primaryColor={config.primaryColor}
          accentColor={config.accentColor}
          tiers={config.tiers}
          currencyName={config.currency.name}
          customerName={customer.name}
        />
      </div>

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
