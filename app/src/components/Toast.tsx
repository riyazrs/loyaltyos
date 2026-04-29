'use client'

import { useEffect, useState } from 'react'

export interface ToastMessage {
  id: string
  text: string
  points?: number
  accentColor: string
}

interface Props {
  toasts: ToastMessage[]
  onRemove: (id: string) => void
}

export default function Toast({ toasts, onRemove }: Props) {
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map(t => (
        <ToastItem key={t.id} toast={t} onRemove={onRemove} />
      ))}
    </div>
  )
}

function ToastItem({ toast, onRemove }: { toast: ToastMessage; onRemove: (id: string) => void }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true))
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(() => onRemove(toast.id), 300)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold shadow-lg transition-all duration-300"
      style={{
        background: toast.accentColor,
        color: '#000',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(60px)',
      }}
    >
      {toast.points && <span className="text-base font-black">+{toast.points}</span>}
      <span>{toast.text}</span>
    </div>
  )
}

// Hook to manage toasts
export function useToasts() {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const addToast = (text: string, points: number, accentColor: string) => {
    const id = Math.random().toString(36).slice(2)
    setToasts(prev => [...prev, { id, text, points, accentColor }])
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  return { toasts, addToast, removeToast }
}
