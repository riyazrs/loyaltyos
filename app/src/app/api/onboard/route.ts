import { NextRequest, NextResponse } from 'next/server'

const GITHUB_OWNER = 'riyazrs'
const GITHUB_REPO = 'loyaltyos'
const WORKFLOW_FILE = 'run-pipeline.yml'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { business_name, business_type, business_description, slug, contact_email } = body

    if (!business_name || !business_type || !business_description || !slug) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!/^[a-z0-9]{3,30}$/.test(slug)) {
      return NextResponse.json({ error: 'Invalid slug format' }, { status: 400 })
    }

    const githubPat = process.env.GITHUB_PAT
    if (!githubPat) {
      return NextResponse.json({ error: 'Pipeline not configured' }, { status: 503 })
    }

    const workflowRes = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/actions/workflows/${WORKFLOW_FILE}/dispatches`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${githubPat}`,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
        body: JSON.stringify({
          ref: 'master',
          inputs: {
            business_name,
            business_type,
            business_description,
            slug,
            contact_email: contact_email ?? '',
          },
        }),
      }
    )

    if (!workflowRes.ok) {
      const err = await workflowRes.text()
      console.error('GitHub dispatch failed:', err)
      return NextResponse.json({ error: 'Failed to trigger pipeline' }, { status: 502 })
    }

    return NextResponse.json({
      success: true,
      slug,
      url: `https://loyaltyos.vercel.app/${slug}`,
      message: 'Pipeline triggered. Your app will be live in ~5 minutes.',
    })
  } catch (err) {
    console.error('Onboard error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
