export type ThemeMode = 'dark' | 'light' | 'rich'

export interface ThemeTokens {
  bg: string
  cardBg: string
  cardBorder: string
  text: string
  subtext: string
  muted: string
  navBg: string
  navBorder: string
  labelBg: string
  labelText: string
  inputBg: string
  inputBorder: string
}

export const THEMES: Record<ThemeMode, ThemeTokens> = {
  dark: {
    bg: '#0a0a0f',
    cardBg: 'rgba(255,255,255,0.05)',
    cardBorder: 'rgba(255,255,255,0.12)',
    text: '#ffffff',
    subtext: 'rgba(255,255,255,0.45)',
    muted: 'rgba(255,255,255,0.25)',
    navBg: 'rgba(10,10,15,0.96)',
    navBorder: 'rgba(255,255,255,0.10)',
    labelBg: 'rgba(255,255,255,0.07)',
    labelText: 'rgba(255,255,255,0.5)',
    inputBg: 'rgba(255,255,255,0.06)',
    inputBorder: 'rgba(255,255,255,0.12)',
  },
  light: {
    bg: '#F8F7F4',
    cardBg: '#FFFFFF',
    cardBorder: 'rgba(0,0,0,0.07)',
    text: '#111111',
    subtext: 'rgba(0,0,0,0.45)',
    muted: 'rgba(0,0,0,0.25)',
    navBg: 'rgba(248,247,244,0.97)',
    navBorder: 'rgba(0,0,0,0.08)',
    labelBg: 'rgba(0,0,0,0.06)',
    labelText: 'rgba(0,0,0,0.45)',
    inputBg: 'rgba(0,0,0,0.04)',
    inputBorder: 'rgba(0,0,0,0.12)',
  },
  rich: {
    bg: '', // set dynamically from primaryColor
    cardBg: 'rgba(255,255,255,0.1)',
    cardBorder: 'rgba(255,255,255,0.2)',
    text: '#ffffff',
    subtext: 'rgba(255,255,255,0.6)',
    muted: 'rgba(255,255,255,0.35)',
    navBg: 'rgba(0,0,0,0.25)',
    navBorder: 'rgba(255,255,255,0.15)',
    labelBg: 'rgba(255,255,255,0.15)',
    labelText: 'rgba(255,255,255,0.7)',
    inputBg: 'rgba(255,255,255,0.12)',
    inputBorder: 'rgba(255,255,255,0.2)',
  },
}

export function getTheme(mode: ThemeMode = 'dark', primaryColor = '#7C3AED'): ThemeTokens {
  const t = { ...THEMES[mode] }
  if (mode === 'rich') {
    t.bg = `linear-gradient(145deg, ${primaryColor}ee 0%, ${primaryColor}88 40%, #1a0a2e 100%)`
  }
  return t
}
