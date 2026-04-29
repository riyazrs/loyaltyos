'use client'

import { use, useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BUSINESS_CONFIGS } from '@/lib/businessConfig'
import { useCustomerStore } from '@/store/customerStore'
import ActivityCard from '@/components/ActivityCard'
import Toast, { useToasts } from '@/components/Toast'

const NAV = [
  { label: 'Home', icon: '⊞', seg: '' },
  { label: 'Activities', icon: '◎', seg: 'activities' },
  { label: 'Rewards', icon: '★', seg: 'rewards' },
  { label: 'Admin', icon: '⚙', seg: 'admin' },
]

export default function ActivitiesPage({ params }: { params: Promise<{ business: string }> }) {
  const { business } = use(params)
  const pathname = usePathname()
  const config = BUSINESS_CONFIGS[business]
  if (!config) notFound()

  const { customer, completeActivity } = useCustomerStore()
  const { toasts, addToast, removeToast } = useToasts()
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const completedToday = new Set(
    customer.activityHistory
      .filter(h => new Date(h.completedAt).toDateString() === new Date().toDateString())
      .map(h => h.activityId)
  )

  const completedCount = completedToday.size
  const categories = ['All', ...Array.from(new Set(config.activities.filter(a => a.category).map(a => a.category!)))]
  const filtered = activeCategory === 'All' ? config.activities : config.activities.filter(a => a.category === activeCategory)

  const handleComplete = (activityId: string, points: number) => {
    completeActivity(activityId, points)
    addToast('Points earned!', points, config.accentColor)
  }

  return (
    <main className="min-h-screen p-4 max-w-lg mx-auto pb-24">
      <Toast toasts={toasts} onRemove={removeToast} />

      <div className="py-4 mb-5">
        <h1 className="text-xl font-black tracking-tight text-white">Activities</h1>
        <p className="text-xs text-white/40 mt-0.5">{completedCount} of {config.activities.length} completed today</p>
      </div>

      {/* Stats + progress */}
      <div
        className="mb-5 rounded-2xl p-4 border"
        style={{ borderColor: `${config.primaryColor}33`, background: `${config.primaryColor}11` }}
      >
        <div className="flex justify-between text-xs mb-2">
          <span className="text-white/50">Today's progress</span>
          <span className="font-bold" style={{ color: config.accentColor }}>{completedCount}/{config.activities.length}</span>
        </div>
        <div className="h-2 rounded-full bg-white/10 mb-3">
          <div
            className="h-2 rounded-full transition-all duration-700"
            style={{
              width: `${config.activities.length > 0 ? (completedCount / config.activities.length) * 100 : 0}%`,
              background: config.accentColor,
              boxShadow: `0 0 8px ${config.accentColor}`,
            }}
          />
        </div>
        <div className="flex gap-4">
          <div>
            <p className="text-base font-black" style={{ color: config.accentColor }}>{customer.streakDays}</p>
            <p className="text-xs text-white/40">day streak</p>
          </div>
          <div className="w-px bg-white/10" />
          <div>
            <p className="text-base font-black text-white">{completedCount}</p>
            <p className="text-xs text-white/40">done today</p>
          </div>
          <div className="w-px bg-white/10" />
          <div>
            <p className="text-base font-black text-white">{config.activities.length - completedCount}</p>
            <p className="text-xs text-white/40">remaining</p>
          </div>
        </div>
      </div>

      {/* Category filters */}
      {categories.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4" style={{ scrollbarWidth: 'none' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
              style={{
                background: activeCategory === cat ? config.accentColor : 'rgba(255,255,255,0.08)',
                color: activeCategory === cat ? '#000' : 'rgba(255,255,255,0.5)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Activity list */}
      <div className="space-y-2">
        {filtered.map(activity => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            accentColor={config.accentColor}
            alreadyCompleted={completedToday.has(activity.id)}
            onComplete={handleComplete}
            onToast={addToast}
          />
        ))}
        {filtered.length === 0 && (
          <p className="text-center py-10 text-white/30 text-sm">No activities in this category</p>
        )}
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
