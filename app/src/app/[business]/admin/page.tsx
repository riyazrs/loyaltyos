'use client'

import { use, useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BUSINESS_CONFIGS } from '@/lib/businessConfig'
import { fetchDynamicOffers } from '@/lib/claudeClient'
import OfferBanner from '@/components/OfferBanner'

const MOCK_STATS = [
  { label: 'Active customers', value: '142' },
  { label: 'Activities today', value: '38' },
  { label: 'Rewards redeemed', value: '12' },
  { label: 'Avg points balance', value: '340' },
]

export default function AdminPage({ params }: { params: Promise<{ business: string }> }) {
  const { business } = use(params)
  const config = BUSINESS_CONFIGS[business]
  if (!config) notFound()

  const [isLowTurnover, setIsLowTurnover] = useState(false)
  const [offers, setOffers] = useState<{ title: string; body: string; cta: string }[]>([])
  const [loadingOffers, setLoadingOffers] = useState(false)

  const generateOffers = async () => {
    setLoadingOffers(true)
    try {
      const data = await fetchDynamicOffers(config, isLowTurnover)
      setOffers(data.offers ?? [])
    } catch {
      setOffers([])
    } finally {
      setLoadingOffers(false)
    }
  }

  return (
    <main className="min-h-screen p-4 max-w-lg mx-auto pb-24">
      <div className="py-4 mb-6">
        <Link href={`/${business}`} className="text-xs text-white/40 hover:text-white/70 mb-2 block">← Back</Link>
        <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
        <p className="text-sm text-white/40 mt-1">{config.name}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {MOCK_STATS.map(stat => (
          <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-white/40 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Offer generator */}
      <div className="rounded-xl border border-white/20 bg-white/5 p-5 mb-6">
        <h2 className="font-semibold text-white mb-3">AI Offer Generator</h2>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-white">Low-turnover period</p>
            <p className="text-xs text-white/40">Enable for off-peak promotional offers</p>
          </div>
          <button
            onClick={() => setIsLowTurnover(v => !v)}
            className="w-12 h-6 rounded-full transition-all relative"
            style={{ background: isLowTurnover ? config.accentColor : '#ffffff22' }}
          >
            <span
              className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all"
              style={{ left: isLowTurnover ? '28px' : '4px' }}
            />
          </button>
        </div>

        <button
          onClick={generateOffers}
          disabled={loadingOffers}
          className="w-full py-2.5 rounded-lg font-semibold text-sm transition-all"
          style={{ background: loadingOffers ? '#ffffff22' : config.primaryColor, color: '#fff' }}
        >
          {loadingOffers ? 'Generating...' : 'Generate Offers with AI'}
        </button>
      </div>

      {/* Generated offers */}
      {offers.length > 0 && (
        <div className="space-y-3 mb-6">
          <h2 className="text-sm font-semibold text-white/60 uppercase tracking-widest">Generated Offers</h2>
          {offers.map((offer, i) => (
            <OfferBanner key={i} title={offer.title} body={offer.body} cta={offer.cta} accentColor={config.accentColor} />
          ))}
        </div>
      )}

      {/* Tier overview */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-5">
        <h2 className="font-semibold text-white mb-3">Tier Structure</h2>
        <div className="space-y-2">
          {config.tiers.map(tier => (
            <div key={tier.name} className="flex items-center justify-between">
              <span className="text-sm px-2 py-0.5 rounded-full" style={{ background: tier.color + '33', color: tier.color }}>
                {tier.name}
              </span>
              <span className="text-xs text-white/40">{tier.minPoints.toLocaleString()}+ {config.currency.name}</span>
            </div>
          ))}
        </div>
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
