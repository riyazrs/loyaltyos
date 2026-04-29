import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  role: 'consumer' | 'admin' | null
  business: string | null
  customerName: string
  setConsumer: (business: string, name: string) => void
  setAdmin: (business: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      role: null,
      business: null,
      customerName: '',
      setConsumer: (business, name) => set({ role: 'consumer', business, customerName: name }),
      setAdmin: (business) => set({ role: 'admin', business, customerName: 'Admin' }),
      logout: () => set({ role: null, business: null, customerName: '' }),
    }),
    { name: 'loyaltyos-auth' }
  )
)
