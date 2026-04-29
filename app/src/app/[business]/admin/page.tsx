'use client'

import { use, useState, useEffect } from 'react'
import { notFound, useRouter } from 'next/navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BUSINESS_CONFIGS } from '@/lib/businessConfig'
import { useAuthStore } from '@/store/authStore'
import { useCouponStore } from '@/store/couponStore'
import { fetchDynamicOffers } from '@/lib/claudeClient'
import OfferBanner from '@/components/OfferBanner'

const NAV = [
  { label: 'Home', icon: '⊞', seg: '' },
  { label: 'Activities', icon: '◎', seg: 'activities' },
  { label: 'Rewards', icon: '★', seg: 'rewards' },
  { label: 'Admin', icon: '⚙', seg: 'admin' },
]

const TABS = ['Overview', 'Members', 'Rewards & Coupons', 'Offers']

export default function AdminPage({ params }: { params: Promise<{ business: string }> }) {
  const { business } = use(params)
  const pathname = usePathname()
  const config = BUSINESS_CONFIGS[business]
  if (!config) notFound()

  const router = useRouter()
  const { role, business: authBusiness, logout } = useAuthStore()
  const { coupons, addCoupon, toggleCoupon, deleteCoupon } = useCouponStore()

  const [tab, setTab] = useState(0)
  const [isLowTurnover, setIsLowTurnover] = useState(false)
  const [offers, setOffers] = useState<{ title: string; body: string; cta: string }[]>([])
  const [loadingOffers, setLoadingOffers] = useState(false)

  // Coupon form state
  const [couponCode, setCouponCode] = useState('')
  const [couponDiscount, setCouponDiscount] = useState(10)
  const [couponDesc, setCouponDesc] = useState('')
  const [couponExpiry, setCouponExpiry] = useState('')
  const [couponMinPts, setCouponMinPts] = useState(0)
  const [couponError, setCouponError] = useState('')

  // Manual offer state
  const [manualTitle, setManualTitle] = useState('')
  const [manualBody, setManualBody] = useState('')
  const [manualCta, setManualCta] = useState('')

  // Auth guard
  useEffect(() => {
    if (role !== 'admin' || authBusiness !== business) {
      router.replace(`/${business}/admin/login`)
    }
  }, [role, authBusiness, business, router])

  if (role !== 'admin') return null

  const p = config.primaryColor
  const a = config.accentColor

  // Mock aggregate stats
  const totalMembers = 247
  const activeToday = 34
  const activitiesToday = 89
  const pointsIssued = 12430
  const rewardsRedeemed = 23
  const avgBalance = 340

  const topActivities = config.activities.slice(0, 5).map((act, i) => ({
    name: act.name,
    pct: Math.max(10, 72 - i * 13),
    count: Math.max(8, 68 - i * 12),
  }))

  const tierDist = config.tiers.map((t, i) => ({
    ...t,
    pct: [45, 30, 18, 7][i] ?? 5,
    count: [111, 74, 44, 18][i] ?? 5,
  }))

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

  const handleAddCoupon = () => {
    if (!couponCode.trim()) { setCouponError('Code is required'); return }
    if (!couponExpiry) { setCouponError('Expiry date is required'); return }
    addCoupon({
      code: couponCode.toUpperCase().trim(),
      discount: couponDiscount,
      description: couponDesc || `${couponDiscount}% off reward redemption`,
      expiresAt: couponExpiry,
      minPoints: couponMinPts,
      active: true,
    })
    setCouponCode(''); setCouponDesc(''); setCouponExpiry(''); setCouponDiscount(10); setCouponMinPts(0); setCouponError('')
  }

  const addManualOffer = () => {
    if (!manualTitle.trim()) return
    setOffers(prev => [{ title: manualTitle, body: manualBody, cta: manualCta || 'Learn more' }, ...prev])
    setManualTitle(''); setManualBody(''); setManualCta('')
  }

  const card = { borderRadius: 16, padding: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }
  const inputStyle = { width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)', color: '#fff', fontSize: 13, outline: 'none', boxSizing: 'border-box' as const }
  const labelStyle = { fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 0.8, display: 'block', marginBottom: 5 }

  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0f', padding: '0 16px', maxWidth: 480, margin: '0 auto', paddingBottom: 96 }}>

      {/* Header */}
      <div style={{ padding: '20px 0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1 style={{ fontSize: 18, fontWeight: 900, color: '#fff', letterSpacing: '-0.4px' }}>Admin Dashboard</h1>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{config.name}</p>
        </div>
        <button onClick={() => { logout(); router.push(`/${business}`) }}
          style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: 8, cursor: 'pointer' }}>
          Sign out
        </button>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 20, overflowX: 'auto', scrollbarWidth: 'none' as const }}>
        {TABS.map((t, i) => (
          <button key={t} onClick={() => setTab(i)} style={{
            flexShrink: 0, padding: '7px 14px', borderRadius: 20, border: 'none', cursor: 'pointer',
            fontSize: 12, fontWeight: 600, transition: 'all 0.2s',
            background: tab === i ? a : 'rgba(255,255,255,0.07)',
            color: tab === i ? '#000' : 'rgba(255,255,255,0.5)',
          }}>
            {t}
          </button>
        ))}
      </div>

      {/* ── TAB 0: OVERVIEW ── */}
      {tab === 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* Key stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { label: 'Total members', value: totalMembers, color: p },
              { label: 'Active today', value: activeToday, color: a },
              { label: 'Activities today', value: activitiesToday, color: '#10B981' },
              { label: 'Avg points balance', value: avgBalance, color: '#8B5CF6' },
              { label: 'Points issued total', value: pointsIssued.toLocaleString(), color: '#F59E0B' },
              { label: 'Rewards redeemed', value: rewardsRedeemed, color: '#EC4899' },
            ].map(s => (
              <div key={s.label} style={{ ...card, padding: '14px' }}>
                <p style={{ fontSize: 22, fontWeight: 900, color: s.color }}>{s.value}</p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Top activities */}
          <div style={card}>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Top activities</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {topActivities.map(act => (
                <div key={act.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{act.name}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: a }}>{act.pct}%</span>
                  </div>
                  <div style={{ height: 4, borderRadius: 4, background: 'rgba(255,255,255,0.08)' }}>
                    <div style={{ height: 4, borderRadius: 4, width: `${act.pct}%`, background: `linear-gradient(90deg, ${p}, ${a})`, transition: 'width 0.8s ease' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Retention */}
          <div style={card}>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Retention</p>
            <div style={{ display: 'flex', gap: 16 }}>
              {[{ label: '7-day', value: '72%', color: '#10B981' }, { label: '30-day', value: '54%', color: a }, { label: 'Avg streak', value: '6.2d', color: p }].map(r => (
                <div key={r.label} style={{ textAlign: 'center', flex: 1 }}>
                  <p style={{ fontSize: 20, fontWeight: 900, color: r.color }}>{r.value}</p>
                  <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 1: MEMBERS ── */}
      {tab === 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* Tier distribution */}
          <div style={card}>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14 }}>Tier distribution</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {tierDist.map(t => (
                <div key={t.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                    <span style={{ fontSize: 12, padding: '2px 8px', borderRadius: 20, fontWeight: 600, background: t.color + '22', color: t.color }}>{t.name}</span>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{t.count} members · {t.pct}%</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 6, background: 'rgba(255,255,255,0.06)' }}>
                    <div style={{ height: 6, borderRadius: 6, width: `${t.pct}%`, background: t.color, boxShadow: `0 0 8px ${t.color}66` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent members (mock) */}
          <div style={card}>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Recent sign-ups</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Jamie O.', 'Maria C.', 'Priya S.', 'Tom B.', 'Aisha N.'].map((name, i) => {
                const tier = config.tiers[Math.floor(Math.random() * 2)]
                const pts = 50 + i * 30
                return (
                  <div key={name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: '50%', background: `${p}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: p }}>
                        {name[0]}
                      </div>
                      <div>
                        <p style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>{name}</p>
                        <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>{i + 1}d ago</p>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontSize: 12, fontWeight: 700, color: a }}>{pts} {config.currency.name}</p>
                      <span style={{ fontSize: 9, padding: '1px 6px', borderRadius: 10, background: tier.color + '22', color: tier.color }}>{tier.name}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 2: REWARDS & COUPONS ── */}
      {tab === 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* Current rewards */}
          <div style={card}>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Active rewards</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {config.rewards.map(r => (
                <div key={r.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: 10, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {r.icon && <span style={{ fontSize: 18 }}>{r.icon}</span>}
                    <div>
                      <p style={{ fontSize: 12, color: '#fff', fontWeight: 600 }}>{r.name}</p>
                      <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>{r.cost.toLocaleString()} {config.currency.name}</p>
                    </div>
                  </div>
                  <span style={{ fontSize: 10, padding: '3px 8px', borderRadius: 8, background: '#10B98122', color: '#10B981', fontWeight: 600 }}>Active</span>
                </div>
              ))}
            </div>
          </div>

          {/* Create coupon */}
          <div style={{ ...card, border: `1px solid ${p}33` }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14 }}>Create discount coupon</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div>
                  <label style={labelStyle}>Code</label>
                  <input value={couponCode} onChange={e => setCouponCode(e.target.value.toUpperCase())} placeholder="SUMMER20" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Discount %</label>
                  <input type="number" value={couponDiscount} min={1} max={100}
                    onChange={e => setCouponDiscount(Number(e.target.value))} style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Description</label>
                <input value={couponDesc} onChange={e => setCouponDesc(e.target.value)} placeholder="e.g. 20% off any reward redemption" style={inputStyle} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div>
                  <label style={labelStyle}>Expires</label>
                  <input type="date" value={couponExpiry} onChange={e => setCouponExpiry(e.target.value)}
                    style={{ ...inputStyle, colorScheme: 'dark' }} />
                </div>
                <div>
                  <label style={labelStyle}>Min Points</label>
                  <input type="number" value={couponMinPts} min={0}
                    onChange={e => setCouponMinPts(Number(e.target.value))} style={inputStyle} />
                </div>
              </div>
              {couponError && <p style={{ fontSize: 11, color: '#EF4444', margin: 0 }}>{couponError}</p>}
              <button onClick={handleAddCoupon} style={{ width: '100%', padding: '11px', borderRadius: 9, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 700, background: p, color: '#fff' }}>
                Create Coupon
              </button>
            </div>
          </div>

          {/* Active coupons */}
          {coupons.length > 0 && (
            <div style={card}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Active coupons</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {coupons.map(c => (
                  <div key={c.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: 10, background: c.active ? `${a}0a` : 'rgba(255,255,255,0.03)', border: `1px solid ${c.active ? a + '33' : 'rgba(255,255,255,0.06)'}` }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ fontSize: 12, fontWeight: 800, color: c.active ? a : 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>{c.code}</span>
                        <span style={{ fontSize: 10, padding: '2px 6px', borderRadius: 6, background: `${a}22`, color: a, fontWeight: 600 }}>{c.discount}% off</span>
                      </div>
                      <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{c.description} · expires {new Date(c.expiresAt).toLocaleDateString()}</p>
                    </div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button onClick={() => toggleCoupon(c.id)} style={{ padding: '4px 8px', borderRadius: 6, border: 'none', cursor: 'pointer', fontSize: 10, fontWeight: 600, background: c.active ? '#10B98122' : 'rgba(255,255,255,0.08)', color: c.active ? '#10B981' : 'rgba(255,255,255,0.4)' }}>
                        {c.active ? 'Active' : 'Off'}
                      </button>
                      <button onClick={() => deleteCoupon(c.id)} style={{ padding: '4px 8px', borderRadius: 6, border: 'none', cursor: 'pointer', fontSize: 10, background: '#EF444422', color: '#EF4444' }}>
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── TAB 3: OFFERS ── */}
      {tab === 3 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* AI generator */}
          <div style={{ ...card, border: `1px solid ${p}33` }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14 }}>AI offer generator</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <div>
                <p style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>Low-turnover mode</p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>Optimise for off-peak hours</p>
              </div>
              <button onClick={() => setIsLowTurnover(v => !v)} style={{
                width: 44, height: 24, borderRadius: 12, border: 'none', cursor: 'pointer', position: 'relative', transition: 'background 0.2s',
                background: isLowTurnover ? a : 'rgba(255,255,255,0.15)',
              }}>
                <span style={{ position: 'absolute', top: 3, width: 18, height: 18, borderRadius: '50%', background: '#fff', transition: 'left 0.2s', left: isLowTurnover ? 23 : 3 }} />
              </button>
            </div>
            <button onClick={generateOffers} disabled={loadingOffers} style={{
              width: '100%', padding: '12px', borderRadius: 10, border: 'none', cursor: loadingOffers ? 'default' : 'pointer',
              fontSize: 13, fontWeight: 700, background: loadingOffers ? 'rgba(255,255,255,0.1)' : p, color: '#fff', transition: 'background 0.2s',
            }}>
              {loadingOffers ? 'Claude is generating...' : 'Generate Offers with AI'}
            </button>
          </div>

          {/* Manual offer */}
          <div style={card}>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14 }}>Push manual offer</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div>
                <label style={labelStyle}>Title</label>
                <input value={manualTitle} onChange={e => setManualTitle(e.target.value)} placeholder="e.g. Double points this weekend" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Body</label>
                <input value={manualBody} onChange={e => setManualBody(e.target.value)} placeholder="e.g. Visit Saturday or Sunday to earn 2× points" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>CTA</label>
                <input value={manualCta} onChange={e => setManualCta(e.target.value)} placeholder="Activate offer" style={inputStyle} />
              </div>
              <button onClick={addManualOffer} style={{ width: '100%', padding: '11px', borderRadius: 9, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 700, background: 'rgba(255,255,255,0.08)', color: '#fff' }}>
                Add Offer
              </button>
            </div>
          </div>

          {/* Offer list */}
          {offers.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1 }}>Active offers</p>
              {offers.map((o, i) => (
                <OfferBanner key={i} title={o.title} body={o.body} cta={o.cta} accentColor={a} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Bottom nav */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'rgba(10,10,15,0.96)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex' }}>
        {NAV.map(n => {
          const href = `/${business}${n.seg ? '/' + n.seg : ''}`
          const active = n.seg === '' ? pathname === `/${business}` : pathname === href
          return (
            <Link key={href} href={href} style={{ flex: 1, padding: '12px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, textDecoration: 'none' }}>
              <span style={{ fontSize: 16, color: active ? a : 'rgba(255,255,255,0.3)' }}>{n.icon}</span>
              <span style={{ fontSize: 10, color: active ? a : 'rgba(255,255,255,0.35)' }}>{n.label}</span>
            </Link>
          )
        })}
      </nav>
    </main>
  )
}
