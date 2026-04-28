import { Tier } from '@/types'

interface Props {
  primaryColor: string
  accentColor: string
  tiers: Tier[]
  currencyName: string
  customerName: string
}

const MOCK_LEADERS = [
  { name: 'Jordan', points: 1420 },
  { name: 'Sam', points: 980 },
  { name: 'Riley', points: 640 },
  { name: 'Morgan', points: 390 },
  { name: 'Taylor', points: 210 },
]

export default function Leaderboard({ primaryColor, accentColor, tiers, currencyName, customerName }: Props) {
  const getTier = (pts: number) => {
    const tier = [...tiers].reverse().find(t => pts >= t.minPoints)
    return tier ?? tiers[0]
  }

  return (
    <div className="rounded-xl border border-white/20 bg-white/5 overflow-hidden">
      <div className="p-4 border-b border-white/10">
        <p className="font-semibold text-white">Leaderboard</p>
      </div>
      <ul>
        {MOCK_LEADERS.map((player, i) => {
          const tier = getTier(player.points)
          return (
            <li key={player.name} className="flex items-center gap-3 px-4 py-3 border-b border-white/5 last:border-0">
              <span className="w-5 text-center text-sm font-bold" style={{ color: i === 0 ? accentColor : '#ffffff44' }}>
                {i + 1}
              </span>
              <span className="flex-1 text-sm text-white">{player.name}</span>
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: tier.color + '33', color: tier.color }}>
                {tier.name}
              </span>
              <span className="text-sm font-semibold" style={{ color: accentColor }}>
                {player.points.toLocaleString()}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
