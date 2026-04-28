import Link from 'next/link'

const businesses = [
  {
    id: 'pixelpub',
    name: 'PixelPub',
    tagline: 'Play More. Earn More.',
    description: 'Gaming pub with arcade machines, retro consoles & tournaments.',
    primaryColor: '#7C3AED',
    accentColor: '#F59E0B',
    icon: 'PP',
  },
  {
    id: 'dentalplus',
    name: 'DentalPlus',
    tagline: 'Healthy Habits. Bright Smiles.',
    description: 'Modern dental clinic focused on preventive care & habit rewards.',
    primaryColor: '#0EA5E9',
    accentColor: '#10B981',
    icon: 'D+',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">LoyaltyOS</h1>
          <p className="text-white/50">White-label AI loyalty platform. Choose a demo business.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {businesses.map((b) => (
            <Link key={b.id} href={`/${b.id}`}>
              <div
                className="rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer group h-full"
                style={{ background: `linear-gradient(135deg, ${b.primaryColor}22, transparent)` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold mb-4"
                  style={{ background: b.primaryColor }}
                >
                  {b.icon}
                </div>
                <h2 className="text-xl font-bold text-white mb-1">{b.name}</h2>
                <p className="text-sm font-medium mb-2" style={{ color: b.accentColor }}>{b.tagline}</p>
                <p className="text-sm text-white/50">{b.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-center text-white/20 text-xs mt-8">NCI MSc AI for Business — CEAI Final Project</p>
      </div>
    </main>
  )
}
