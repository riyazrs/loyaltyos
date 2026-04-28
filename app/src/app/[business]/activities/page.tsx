'use client'

import { use } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BUSINESS_CONFIGS } from '@/lib/businessConfig'
import { useCustomerStore } from '@/store/customerStore'
import ActivityCard from '@/components/ActivityCard'

export default function ActivitiesPage({ params }: { params: Promise<{ business: string }> }) {
  const { business } = use(params)
  const config = BUSINESS_CONFIGS[business]
  if (!config) notFound()

  const { customer, completeActivity } = useCustomerStore()

  const completedToday = new Set(
    customer.activityHistory
      .filter(h => new Date(h.completedAt).toDateString() === new Date().toDateString())
      .map(h => h.activityId)
  )

  const completedCount = completedToday.size

  return (
    <main className="min-h-screen p-4 max-w-lg mx-auto pb-24">
      <div className="py-4 mb-6">
        <Link href={`/${business}`} className="text-xs text-white/40 hover:text-white/70 mb-2 block">← Back</Link>
        <h1 className="text-2xl font-bold text-white">Activities</h1>
        <p className="text-sm text-white/40 mt-1">{completedCount} of {config.activities.length} completed today</p>
      </div>

      {/* Progress bar */}
      <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="flex justify-between text-xs text-white/50 mb-2">
          <span>Today's progress</span>
          <span>{completedCount}/{config.activities.length}</span>
        </div>
        <div className="h-2 rounded-full bg-white/10">
          <div
            className="h-2 rounded-full transition-all duration-500"
            style={{
              width: `${config.activities.length > 0 ? (completedCount / config.activities.length) * 100 : 0}%`,
              background: config.accentColor,
            }}
          />
        </div>
      </div>

      {/* Activities */}
      <div className="space-y-2">
        {config.activities.map(activity => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            accentColor={config.accentColor}
            alreadyCompleted={completedToday.has(activity.id)}
            onComplete={completeActivity}
          />
        ))}
      </div>

      {/* Streak info */}
      <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
        <p className="text-sm font-semibold text-white mb-1">Current streak: {customer.streakDays} days</p>
        <p className="text-xs text-white/40">Complete at least one activity per day to maintain your streak. 7-day streak earns 50 bonus points.</p>
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
