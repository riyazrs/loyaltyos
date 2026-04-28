import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic()

export async function POST(req: NextRequest) {
  try {
    const { businessConfig, isLowTurnover, datetime } = await req.json()

    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 600,
      system: `You are the offers engine for ${businessConfig.name}, a ${businessConfig.type} loyalty programme.
Generate 2 dynamic promotional offers appropriate for right now.
${isLowTurnover ? 'It is currently a low-turnover period — create compelling offers to drive footfall.' : 'Generate standard engagement offers.'}
Respond ONLY with valid JSON: { "offers": [{ "title": string, "body": string, "cta": string }] }`,
      messages: [
        {
          role: 'user',
          content: `Business: ${JSON.stringify(businessConfig)}\nCurrent datetime: ${datetime}\nLow turnover: ${isLowTurnover}`,
        },
      ],
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : '{}'
    const parsed = JSON.parse(text)
    return NextResponse.json(parsed)
  } catch (err) {
    console.error('Offers error:', err)
    return NextResponse.json({ offers: [] }, { status: 500 })
  }
}
