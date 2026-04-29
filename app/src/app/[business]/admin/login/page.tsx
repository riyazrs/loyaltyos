'use client'

import { use, useState } from 'react'
import { useRouter } from 'next/navigation'
import { notFound } from 'next/navigation'
import { BUSINESS_CONFIGS } from '@/lib/businessConfig'
import { useAuthStore } from '@/store/authStore'

export default function AdminLoginPage({ params }: { params: Promise<{ business: string }> }) {
  const { business } = use(params)
  const config = BUSINESS_CONFIGS[business]
  if (!config) notFound()

  const router = useRouter()
  const { setAdmin } = useAuthStore()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handle = () => {
    const correct = config.adminPassword ?? 'admin123'
    if (password !== correct) { setError('Incorrect password'); return }
    setAdmin(business)
    router.push(`/${business}/admin`)
  }

  const p = config.primaryColor
  const a = config.accentColor

  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0f', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: 'inherit' }}>
      <div style={{ position: 'fixed', top: -100, left: -100, width: 400, height: 400, borderRadius: '50%', background: p, opacity: 0.05, filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div style={{ width: '100%', maxWidth: 360, position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ width: 52, height: 52, borderRadius: 14, background: `${p}22`, border: `1px solid ${p}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, margin: '0 auto 12px' }}>
            ⚙
          </div>
          <h1 style={{ fontSize: 20, fontWeight: 900, color: '#fff', letterSpacing: '-0.3px' }}>{config.name}</h1>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>Admin dashboard access</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <label style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 0.8, display: 'block', marginBottom: 6 }}>Admin Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password"
              placeholder="••••••••"
              onKeyDown={e => e.key === 'Enter' && handle()}
              style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box' as const }} />
          </div>
          {error && <p style={{ fontSize: 12, color: '#EF4444', margin: 0 }}>{error}</p>}
          <button onClick={handle} style={{
            width: '100%', padding: '13px', borderRadius: 10, border: 'none', cursor: 'pointer',
            fontSize: 14, fontWeight: 700, background: p, color: '#fff',
          }}>
            Access Dashboard
          </button>
        </div>

        <p style={{ textAlign: 'center', marginTop: 20, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
          <a href={`/${business}/login`} style={{ color: a, textDecoration: 'none' }}>← Customer login</a>
        </p>

        <p style={{ textAlign: 'center', marginTop: 8, fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>
          Demo password: admin123
        </p>
      </div>
    </main>
  )
}
