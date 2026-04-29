import { NextRequest, NextResponse } from 'next/server'
import configs from '@/lib/dynamicConfigs.json'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS })
}

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug')
  if (!slug) {
    return NextResponse.json({ live: false }, { headers: CORS_HEADERS })
  }
  const live = slug in (configs as Record<string, unknown>)
  return NextResponse.json({ live, slug }, { headers: CORS_HEADERS })
}
