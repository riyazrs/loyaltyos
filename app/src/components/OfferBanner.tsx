'use client'

import { useState } from 'react'

interface Props {
  title: string
  body: string
  cta: string
  accentColor: string
}

export default function OfferBanner({ title, body, cta, accentColor }: Props) {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="rounded-xl p-4 border relative" style={{ background: accentColor + '22', borderColor: accentColor + '55' }}>
      <button
        onClick={() => setDismissed(true)}
        className="absolute top-3 right-3 text-white/40 hover:text-white/80 text-lg leading-none"
      >
        x
      </button>
      <p className="font-bold text-white pr-6">{title}</p>
      <p className="text-sm text-white/70 mt-1 mb-3">{body}</p>
      <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold text-black" style={{ background: accentColor }}>
        {cta}
      </span>
    </div>
  )
}
