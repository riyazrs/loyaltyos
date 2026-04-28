import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic()

export async function POST(req: NextRequest) {
  try {
    const { customer, businessConfig } = await req.json()

    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 500,
      system: `You are the personalisation engine for ${businessConfig.name}, a ${businessConfig.type} loyalty programme.
Given a customer profile, suggest 3 activities they should complete today.
Respond ONLY with valid JSON: { "suggestions": [{ "activityId": string, "reason": string }] }`,
      messages: [
        {
          role: 'user',
          content: `Customer: ${JSON.stringify(customer)}\nAvailable activities: ${JSON.stringify(businessConfig.activities)}`,
        },
      ],
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : '{}'
    const parsed = JSON.parse(text)
    return NextResponse.json(parsed)
  } catch (err) {
    console.error('Personalise error:', err)
    return NextResponse.json({ suggestions: [] }, { status: 500 })
  }
}
