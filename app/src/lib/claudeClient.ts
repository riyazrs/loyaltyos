export async function fetchPersonalisedActivities(
  customer: object,
  businessConfig: object
): Promise<{ suggestions: { activityId: string; reason: string }[] }> {
  const res = await fetch('/api/personalise', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ customer, businessConfig }),
  })
  if (!res.ok) throw new Error('Personalise API failed')
  return res.json()
}

export async function fetchDynamicOffers(
  businessConfig: object,
  isLowTurnover: boolean
): Promise<{ offers: { title: string; body: string; cta: string }[] }> {
  const res = await fetch('/api/offers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ businessConfig, isLowTurnover, datetime: new Date().toISOString() }),
  })
  if (!res.ok) throw new Error('Offers API failed')
  return res.json()
}
