'use client'

import { use, useState } from 'react'
import { useRouter } from 'next/navigation'
import { notFound } from 'next/navigation'
import { BUSINESS_CONFIGS } from '@/lib/businessConfig'
import { useAuthStore } from '@/store/authStore'
import { useCustomerStore } from '@/store/customerStore'

export default function LoginPage({ params }: { params: Promise<{ business: string }> }) {
  const { business } = use(params)
  const config = BUSINESS_CONFIGS[business]
  if (!config) notFound()

  const router = useRouter()
  const { setConsumer } = useAuthStore()
  const { setName } = useCustomerStore()
  const [tab, setTab] = useState<'login' | 'register'>('login')
  const [name, setNameInput] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handle = () => {
    if (!name.trim()) { setError('Please enter your name'); return }
    if (!email.trim() || !email.includes('@')) { setError('Please enter a valid email'); return }
    setConsumer(business, name.trim())
    setName(name.trim())
    router.push(`/${business}`)
  }

  const p = config.primaryColor
  const a = config.accentColor

  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0f', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: 'inherit' }}>
      {/* Glow blob */}
      <div style={{ position: 'fixed', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: p, opacity: 0.06, filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div style={{ width: '100%', maxWidth: 380, position: 'relative' }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: `${p}22`, border: `1px solid ${p}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, margin: '0 auto 12px' }}>
            {config.currency.symbol}
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 900, color: '#fff', letterSpacing: '-0.5px' }}>{config.name}</h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{config.tagline}</p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.06)', borderRadius: 12, padding: 4, marginBottom: 24 }}>
          {(['login', 'register'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              flex: 1, padding: '9px', borderRadius: 9, border: 'none', cursor: 'pointer',
              fontSize: 13, fontWeight: 600, transition: 'all 0.2s',
              background: tab === t ? a : 'transparent',
              color: tab === t ? '#000' : 'rgba(255,255,255,0.5)',
            }}>
              {t === 'login' ? 'Sign In' : 'Register'}
            </button>
          ))}
        </div>

        {/* Form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <label style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 0.8, display: 'block', marginBottom: 6 }}>Name</label>
            <input value={name} onChange={e => setNameInput(e.target.value)}
              placeholder="Your name"
              style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box' as const }} />
          </div>
          <div>
            <label style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 0.8, display: 'block', marginBottom: 6 }}>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email"
              placeholder="your@email.com"
              onKeyDown={e => e.key === 'Enter' && handle()}
              style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box' as const }} />
          </div>
          {error && <p style={{ fontSize: 12, color: '#EF4444', margin: 0 }}>{error}</p>}
          <button onClick={handle} style={{
            width: '100%', padding: '13px', borderRadius: 10, border: 'none', cursor: 'pointer',
            fontSize: 14, fontWeight: 700, background: p, color: '#fff', marginTop: 4,
          }}>
            {tab === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </div>

        <p style={{ textAlign: 'center', marginTop: 24, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
          Business owner?{' '}
          <a href={`/${business}/admin/login`} style={{ color: a, textDecoration: 'none' }}>Admin login</a>
        </p>
      </div>
    </main>
  )
}
