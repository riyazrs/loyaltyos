// LoyaltyOS — Screen Components (Dashboard, Activities, Rewards, Admin)
// Shared via window globals; loaded after loyaltyos-data.js

const { useState, useRef, useEffect } = React;

const W = 320, H = 660;

// ── Helpers ──────────────────────────────────────────────────────────────────
function getBg(ind, themeKey) {
  if (themeKey === 'rich') return `linear-gradient(148deg, ${ind.primary}f0 0%, ${ind.primary}88 45%, #0d0a1a 100%)`;
  if (themeKey === 'light') return THEMES.light.bg;
  return THEMES.dark.bg;
}

function PhoneShell({ ind, themeKey, activeTab, onTab, children }) {
  const t = THEMES[themeKey];
  const tabs = ['Home', 'Acts', 'Rewards', 'Admin'];
  const tabKeys = ['Home', 'Activity', 'Rewards', 'Admin'];
  const icons = ['⊞', '◎', '★', '⚙'];
  const accentColor = ind.accent;

  return (
    <div style={{
      width: W, height: H, fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      background: getBg(ind, themeKey), borderRadius: 24, overflow: 'hidden',
      position: 'relative', display: 'flex', flexDirection: 'column',
    }}>
      {/* Glow (dark/rich) */}
      {themeKey !== 'light' && (
        <div style={{
          position: 'absolute', top: -80, right: -60, width: 240, height: 240,
          borderRadius: '50%', background: accentColor, opacity: 0.10, filter: 'blur(70px)', pointerEvents: 'none'
        }} />
      )}

      {/* Status bar */}
      <div style={{ height: 32, flexShrink: 0, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 20px', position: 'relative', zIndex: 2 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: t.text, opacity: 0.5 }}>9:41</span>
        <span style={{ fontSize: 9, color: t.text, opacity: 0.4 }}>▮▮▮ ▶ ▮▮▮▮</span>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', paddingBottom: 64, position: 'relative', zIndex: 1 }}
        className="hide-scroll">
        {children}
      </div>

      {/* Bottom nav */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
        background: t.navBg, borderTop: `1px solid ${t.navBorder}`,
        backdropFilter: 'blur(20px)', display: 'flex', zIndex: 10,
      }}>
        {tabs.map((tab, i) => {
          const active = tabKeys[i] === activeTab;
          return (
            <button key={tab} onClick={() => onTab(tabKeys[i])}
              style={{
                flex: 1, border: 'none', background: 'none', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2,
                padding: '4px 0 8px', minWidth: 0,
              }}>
              <span style={{ fontSize: 15, color: active ? accentColor : t.subtext }}>{icons[i]}</span>
              <span style={{ fontSize: 8.5, fontWeight: active ? 700 : 400, color: active ? accentColor : t.subtext, whiteSpace: 'nowrap' }}>{tab}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── DASHBOARD SCREEN ─────────────────────────────────────────────────────────
function DashboardScreen({ ind, themeKey }) {
  const t = THEMES[themeKey];
  const { primary, accent, points, streak, tiers, currency, activities, offer } = ind;
  const currentTier = [...tiers].reverse().find(tr => points >= tr.min) ?? tiers[0];
  const nextTier = tiers[tiers.indexOf(currentTier) + 1];
  const pct = nextTier ? Math.min(((points - currentTier.min) / (nextTier.min - currentTier.min)) * 100, 100) : 100;
  const ringR = 38; const ringCirc = 2 * Math.PI * ringR;
  const ringDash = (pct / 100) * ringCirc;
  const quickWins = activities.filter(a => a.pts <= 20).slice(0, 3);
  const cardShadow = themeKey === 'light' ? '0 1px 6px rgba(0,0,0,0.07)' : 'none';
  const trackerBg = themeKey === 'light' ? `linear-gradient(135deg,${primary}14,${primary}06)` : themeKey === 'dark' ? `linear-gradient(135deg,${primary}cc,${primary}44)` : 'rgba(255,255,255,0.13)';
  const trackerBorder = themeKey === 'light' ? `1px solid ${primary}22` : themeKey === 'dark' ? `1px solid ${primary}66` : '1px solid rgba(255,255,255,0.22)';

  return (
    <div style={{ padding: '14px 14px 0' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 900, letterSpacing: '-0.4px', color: themeKey === 'light' ? primary : '#fff' }}>{ind.name}</div>
          <div style={{ fontSize: 10, color: t.subtext }}>{ind.tagline}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: t.text }}>Alex Chen</div>
          <span style={{ fontSize: 9, padding: '2px 7px', borderRadius: 20, fontWeight: 700, background: currentTier.color + '28', color: currentTier.color }}>{currentTier.name}</span>
        </div>
      </div>

      {/* Points Tracker */}
      <div style={{ borderRadius: 16, padding: '14px 14px', background: trackerBg, border: trackerBorder, marginBottom: 10, position: 'relative', overflow: 'hidden', boxShadow: themeKey === 'dark' ? `0 0 30px ${primary}22` : themeKey === 'rich' ? '0 4px 24px rgba(0,0,0,0.3)' : `0 2px 14px ${primary}18` }}>
        {themeKey !== 'light' && <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: accent, opacity: 0.18, filter: 'blur(28px)' }} />}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <svg width="88" height="88" viewBox="0 0 88 88">
              <circle cx="44" cy="44" r={ringR} fill="none" stroke={themeKey === 'light' ? `${primary}16` : 'rgba(255,255,255,0.09)'} strokeWidth="5.5" />
              <circle cx="44" cy="44" r={ringR} fill="none" stroke={accent} strokeWidth="5.5" strokeLinecap="round"
                strokeDasharray={`${ringDash} ${ringCirc}`} strokeDashoffset={ringCirc / 4} style={{ filter: `drop-shadow(0 0 4px ${accent})` }} />
            </svg>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: 8, opacity: 0.5, color: themeKey === 'light' ? '#333' : '#fff', textTransform: 'uppercase', letterSpacing: 0.5 }}>{currency}</div>
              <div style={{ fontSize: 17, fontWeight: 900, color: themeKey === 'light' ? '#111' : '#fff', lineHeight: 1.1 }}>{points}</div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
              <span style={{ fontSize: 10, padding: '2px 7px', borderRadius: 20, fontWeight: 700, background: currentTier.color + '28', color: currentTier.color }}>{currentTier.name}</span>
              {nextTier && <span style={{ fontSize: 9, color: t.subtext }}>→ {nextTier.name}</span>}
            </div>
            {nextTier && <>
              <div style={{ height: 3.5, borderRadius: 4, background: themeKey === 'light' ? `${primary}14` : 'rgba(255,255,255,0.09)', marginBottom: 3 }}>
                <div style={{ height: 3.5, borderRadius: 4, width: `${pct}%`, background: accent, boxShadow: `0 0 6px ${accent}` }} />
              </div>
              <div style={{ fontSize: 9, color: t.subtext }}>{(nextTier.min - points)} to {nextTier.name}</div>
            </>}
            <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
              {[{ v: streak, l: 'streak', hi: true }, { v: 3, l: 'today' }, { v: `${tiers.indexOf(currentTier)+1}/${tiers.length}`, l: 'tier' }].map(s => (
                <div key={s.l} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 13, fontWeight: 900, color: s.hi ? accent : t.text }}>{s.v}</div>
                  <div style={{ fontSize: 8, color: t.subtext }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Offer */}
      <div style={{ borderRadius: 11, padding: '9px 12px', marginBottom: 10, background: themeKey === 'light' ? `${accent}14` : `${accent}1e`, border: `1px solid ${accent}${themeKey === 'light' ? '28' : '40'}`, display: 'flex', alignItems: 'center', gap: 9 }}>
        <div style={{ width: 26, height: 26, borderRadius: 7, background: accent + '22', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, flexShrink: 0 }}>✦</div>
        <div style={{ flex: 1, fontSize: 10, fontWeight: 600, color: t.text, lineHeight: 1.4 }}>{offer}</div>
        <div style={{ fontSize: 9, fontWeight: 700, padding: '3px 8px', borderRadius: 20, background: accent, color: '#000', whiteSpace: 'nowrap' }}>Activate</div>
      </div>

      {/* Quick Wins */}
      <div style={{ fontSize: 9, fontWeight: 700, color: t.subtext, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 7 }}>Quick Wins</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 10 }}>
        {quickWins.map(a => {
          const cc = CAT_COLORS[a.cat] ?? accent;
          return (
            <div key={a.id} style={{ borderRadius: 11, padding: '9px 11px', background: t.cardBg, border: `1px solid ${t.cardBorder}`, boxShadow: cardShadow, display: 'flex', alignItems: 'center', gap: 9 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: `${cc}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>{a.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: t.text }}>{a.name}</div>
                <span style={{ fontSize: 9, padding: '1px 5px', borderRadius: 10, background: `${cc}1e`, color: cc, fontWeight: 600 }}>{a.cat}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 }}>
                <span style={{ fontSize: 11, fontWeight: 900, color: accent }}>+{a.pts}</span>
                <button style={{ fontSize: 9, fontWeight: 700, padding: '3px 9px', borderRadius: 7, background: accent, color: '#000', border: 'none', cursor: 'pointer' }}>Log it</button>
              </div>
            </div>
          );
        })}
      </div>

      {/* AI badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <div style={{ fontSize: 9, fontWeight: 700, color: t.subtext, textTransform: 'uppercase', letterSpacing: 1.2 }}>AI Suggestions</div>
        <span style={{ fontSize: 9, padding: '2px 7px', borderRadius: 10, background: `${primary}22`, color: themeKey === 'light' ? primary : t.subtext, fontWeight: 600 }}>Personalised</span>
      </div>
      <div style={{ borderRadius: 11, padding: '11px 12px', border: `1px solid ${t.cardBorder}`, background: t.cardBg, boxShadow: cardShadow }}>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {['◦','◦','◦'].map((c,i) => <span key={i} style={{ fontSize: 13, color: t.subtext }}>{c}</span>)}
          <span style={{ fontSize: 10, color: t.subtext, marginLeft: 4 }}>Claude is personalising…</span>
        </div>
      </div>
    </div>
  );
}

// ── ACTIVITIES SCREEN ─────────────────────────────────────────────────────────
function ActivitiesScreen({ ind, themeKey }) {
  const t = THEMES[themeKey];
  const { primary, accent, activities, tiers, points, currency } = ind;
  const [activeFilter, setActiveFilter] = useState('All');
  const cats = ['All', ...new Set(activities.map(a => a.cat))];
  const filtered = activeFilter === 'All' ? activities : activities.filter(a => a.cat === activeFilter);
  const done = new Set(['a1', 'a2']);
  const cardShadow = themeKey === 'light' ? '0 1px 5px rgba(0,0,0,0.06)' : 'none';

  return (
    <div style={{ padding: '14px 14px 0' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 900, color: themeKey === 'light' ? primary : '#fff', letterSpacing: '-0.4px' }}>Activities</div>
          <div style={{ fontSize: 10, color: t.subtext }}>Earn {currency} with every action</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 13, fontWeight: 900, color: accent }}>{points}</div>
          <div style={{ fontSize: 9, color: t.subtext }}>{currency}</div>
        </div>
      </div>

      {/* Streak bar */}
      <div style={{ borderRadius: 12, padding: '10px 12px', background: themeKey === 'light' ? `${accent}12` : `${accent}1a`, border: `1px solid ${accent}30`, marginBottom: 11, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ fontSize: 20 }}>◆</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 800, color: t.text }}>{ind.streak}-day streak!</div>
          <div style={{ fontSize: 9, color: t.subtext }}>Keep going — streak bonus at {ind.streak + 1} days</div>
        </div>
        <div style={{ marginLeft: 'auto', fontSize: 18, fontWeight: 900, color: accent }}>{ind.streak}</div>
      </div>

      {/* Category filters */}
      <div style={{ display: 'flex', gap: 5, marginBottom: 10, overflowX: 'auto', paddingBottom: 2 }} className="hide-scroll">
        {cats.map(c => {
          const active = c === activeFilter;
          return (
            <button key={c} onClick={() => setActiveFilter(c)} style={{
              flexShrink: 0, fontSize: 9, fontWeight: 700, padding: '4px 10px', borderRadius: 20, border: 'none', cursor: 'pointer',
              background: active ? accent : t.muted,
              color: active ? '#000' : t.subtext,
              transition: 'all 0.15s',
            }}>{c}</button>
          );
        })}
      </div>

      {/* Activity list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {filtered.map(a => {
          const cc = CAT_COLORS[a.cat] ?? accent;
          const completed = done.has(a.id);
          return (
            <div key={a.id} style={{
              borderRadius: 11, padding: '10px 11px',
              background: completed ? t.muted : t.cardBg,
              border: `1px solid ${completed ? 'transparent' : t.cardBorder}`,
              boxShadow: completed ? 'none' : cardShadow,
              display: 'flex', alignItems: 'center', gap: 9,
              opacity: completed ? 0.55 : 1,
            }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: `${cc}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, flexShrink: 0 }}>
                {completed ? '✓' : a.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: t.text, textDecoration: completed ? 'line-through' : 'none' }}>{a.name}</div>
                <div style={{ fontSize: 9, color: t.subtext, marginTop: 2 }}>{a.desc}</div>
                <span style={{ fontSize: 9, padding: '1px 5px', borderRadius: 10, background: `${cc}1e`, color: cc, fontWeight: 600 }}>{a.cat}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 }}>
                <span style={{ fontSize: 12, fontWeight: 900, color: completed ? t.subtext : accent }}>+{a.pts}</span>
                {!completed && (
                  <button style={{ fontSize: 9, fontWeight: 700, padding: '3px 9px', borderRadius: 7, background: accent, color: '#000', border: 'none', cursor: 'pointer' }}>Log it</button>
                )}
                {completed && <span style={{ fontSize: 9, color: t.subtext }}>Done</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── REWARDS SCREEN ────────────────────────────────────────────────────────────
function RewardsScreen({ ind, themeKey }) {
  const t = THEMES[themeKey];
  const { primary, accent, rewards, points, currency, tiers } = ind;
  const currentTier = [...tiers].reverse().find(tr => points >= tr.min) ?? tiers[0];
  const cardShadow = themeKey === 'light' ? '0 1px 6px rgba(0,0,0,0.07)' : 'none';

  return (
    <div style={{ padding: '14px 14px 0' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 900, color: themeKey === 'light' ? primary : '#fff', letterSpacing: '-0.4px' }}>Rewards</div>
          <div style={{ fontSize: 10, color: t.subtext }}>Redeem your {currency}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 13, fontWeight: 900, color: accent }}>{points}</div>
          <div style={{ fontSize: 9, color: t.subtext }}>{currency} balance</div>
        </div>
      </div>

      {/* Tier badge */}
      <div style={{ borderRadius: 12, padding: '10px 14px', marginBottom: 11, background: themeKey === 'light' ? `${currentTier.color}12` : `${currentTier.color}1e`, border: `1px solid ${currentTier.color}33`, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 30, height: 30, borderRadius: '50%', background: currentTier.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>★</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 800, color: t.text }}>{currentTier.name} Member</div>
          <div style={{ fontSize: 9, color: t.subtext }}>Exclusive perks unlocked at your tier</div>
        </div>
      </div>

      {/* Rewards grid */}
      <div style={{ fontSize: 9, fontWeight: 700, color: t.subtext, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 8 }}>Available Rewards</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {rewards.map(r => {
          const canAfford = points >= r.cost;
          const pct = Math.min((points / r.cost) * 100, 100);
          return (
            <div key={r.id} style={{
              borderRadius: 12, padding: '11px 10px',
              background: r.unlocked ? t.cardBg : t.muted,
              border: `1px solid ${canAfford && !r.unlocked ? `${accent}44` : r.unlocked ? `${accent}55` : t.cardBorder}`,
              boxShadow: canAfford || r.unlocked ? cardShadow : 'none',
              display: 'flex', flexDirection: 'column', gap: 5,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ width: 28, height: 28, borderRadius: 7, background: `${accent}1e`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>
                  {r.unlocked ? '✓' : r.icon}
                </div>
                {r.unlocked && <span style={{ fontSize: 8, padding: '2px 6px', borderRadius: 10, background: `${accent}33`, color: accent, fontWeight: 700 }}>Redeemed</span>}
                {canAfford && !r.unlocked && <span style={{ fontSize: 8, padding: '2px 6px', borderRadius: 10, background: `${accent}33`, color: accent, fontWeight: 700 }}>Unlocked</span>}
              </div>
              <div style={{ fontSize: 10, fontWeight: 700, color: r.unlocked ? t.subtext : t.text, textDecoration: r.unlocked ? 'line-through' : 'none', lineHeight: 1.3 }}>{r.name}</div>
              <div style={{ fontSize: 8, color: t.subtext, lineHeight: 1.4 }}>{r.desc}</div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 10, fontWeight: 900, color: r.unlocked ? t.subtext : accent }}>{r.cost}</span>
                  {!r.unlocked && !canAfford && <span style={{ fontSize: 8, color: t.subtext }}>{r.cost - points} more</span>}
                </div>
                {!r.unlocked && <div style={{ height: 2.5, borderRadius: 4, background: themeKey === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.09)' }}>
                  <div style={{ height: 2.5, borderRadius: 4, width: `${pct}%`, background: canAfford ? accent : primary }} />
                </div>}
              </div>
              <button style={{
                fontSize: 9, fontWeight: 700, padding: '5px 0', borderRadius: 7, border: 'none', cursor: r.unlocked || !canAfford ? 'default' : 'pointer',
                background: r.unlocked ? 'transparent' : canAfford ? primary : 'transparent',
                color: r.unlocked ? t.subtext : canAfford ? '#fff' : t.subtext,
                border: r.unlocked ? 'none' : canAfford ? 'none' : `1px solid ${t.cardBorder}`,
              }}>{r.unlocked ? 'Redeemed' : canAfford ? 'Redeem now' : 'Locked'}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── ADMIN SCREEN ──────────────────────────────────────────────────────────────
function AdminScreen({ ind, themeKey }) {
  const t = THEMES[themeKey];
  const { primary, accent, adminStats, topMembers, tiers, currency } = ind;
  const cardShadow = themeKey === 'light' ? '0 1px 6px rgba(0,0,0,0.07)' : 'none';
  const stats = [
    { label: 'Total Members', value: adminStats.members.toLocaleString(), icon: '◐', change: '+4.2%' },
    { label: 'Active Today', value: adminStats.activeToday.toLocaleString(), icon: '◉', change: '+12%' },
    { label: `${currency} Issued`, value: adminStats.pointsIssued.toLocaleString(), icon: '◆', change: '+8.7%' },
    { label: 'Redemptions', value: adminStats.redemptions.toLocaleString(), icon: '★', change: '+3.1%' },
  ];

  // Simplified engagement bar chart data
  const days = ['M','T','W','T','F','S','S'];
  const vals = [62, 48, 71, 55, 88, 95, 44];
  const maxV = Math.max(...vals);

  return (
    <div style={{ padding: '14px 14px 0' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 900, color: themeKey === 'light' ? primary : '#fff', letterSpacing: '-0.4px' }}>Admin</div>
          <div style={{ fontSize: 10, color: t.subtext }}>{ind.name} — Business Dashboard</div>
        </div>
        <span style={{ fontSize: 9, fontWeight: 700, padding: '3px 9px', borderRadius: 20, background: `${accent}28`, color: accent }}>Live</span>
      </div>

      {/* Stats grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, marginBottom: 11 }}>
        {stats.map(s => (
          <div key={s.label} style={{ borderRadius: 11, padding: '10px 11px', background: t.cardBg, border: `1px solid ${t.cardBorder}`, boxShadow: cardShadow }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
              <span style={{ fontSize: 14, color: accent }}>{s.icon}</span>
              <span style={{ fontSize: 8, fontWeight: 700, color: '#10B981', background: '#10B98118', padding: '1px 5px', borderRadius: 8 }}>{s.change}</span>
            </div>
            <div style={{ fontSize: 16, fontWeight: 900, color: t.text }}>{s.value}</div>
            <div style={{ fontSize: 8, color: t.subtext, marginTop: 1 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Weekly Engagement Chart */}
      <div style={{ borderRadius: 11, padding: '11px 12px', background: t.cardBg, border: `1px solid ${t.cardBorder}`, boxShadow: cardShadow, marginBottom: 10 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: t.text, marginBottom: 10 }}>Weekly Engagement</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 48 }}>
          {days.map((d, i) => {
            const h = Math.round((vals[i] / maxV) * 44);
            const isToday = i === 5;
            return (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                <div style={{ width: '100%', height: h, borderRadius: 3, background: isToday ? accent : `${accent}44`, transition: 'height 0.3s' }} />
                <span style={{ fontSize: 7.5, color: isToday ? accent : t.subtext, fontWeight: isToday ? 700 : 400 }}>{d}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top Members */}
      <div style={{ fontSize: 9, fontWeight: 700, color: t.subtext, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 7 }}>Top Members</div>
      <div style={{ borderRadius: 11, overflow: 'hidden', border: `1px solid ${t.cardBorder}`, background: t.cardBg, boxShadow: cardShadow, marginBottom: 10 }}>
        {topMembers.map((m, i) => {
          const tier = tiers.find(tr => tr.name === m.tier) ?? tiers[0];
          return (
            <div key={m.name} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '9px 12px', borderBottom: i < topMembers.length - 1 ? `1px solid ${t.cardBorder}` : 'none' }}>
              <span style={{ fontSize: 11, fontWeight: 900, color: i === 0 ? accent : t.subtext, width: 16 }}>{i + 1}</span>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: `${tier.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: tier.color, fontWeight: 700 }}>{m.name[0]}</div>
              <div style={{ flex: 1, fontSize: 11, fontWeight: 600, color: t.text }}>{m.name}</div>
              <span style={{ fontSize: 8, padding: '2px 6px', borderRadius: 10, background: tier.color + '28', color: tier.color, fontWeight: 700 }}>{m.tier}</span>
              <span style={{ fontSize: 11, fontWeight: 900, color: accent }}>{m.pts.toLocaleString()}</span>
            </div>
          );
        })}
      </div>

      {/* AI insights */}
      <div style={{ borderRadius: 11, padding: '11px 12px', background: themeKey === 'light' ? `${primary}09` : `${primary}1a`, border: `1px solid ${primary}${themeKey === 'light' ? '18' : '33'}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 7 }}>
          <span style={{ fontSize: 12, color: accent }}>◎</span>
          <span style={{ fontSize: 10, fontWeight: 700, color: t.text }}>AI Insights</span>
          <span style={{ fontSize: 8, padding: '2px 6px', borderRadius: 10, background: `${accent}28`, color: accent, fontWeight: 600, marginLeft: 'auto' }}>Claude-powered</span>
        </div>
        {[
          'Off-peak visits up 18% since launching the Tuesday bonus.',
          'Members with 7+ day streaks redeem 3× more often.',
          '12 members at risk of churn — consider a win-back offer.',
        ].map((insight, i) => (
          <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'flex-start', marginBottom: i < 2 ? 5 : 0 }}>
            <span style={{ fontSize: 8, color: accent, marginTop: 1, flexShrink: 0 }}>◦</span>
            <span style={{ fontSize: 9, color: t.subtext, lineHeight: 1.5 }}>{insight}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── COMPOSITE: all 4 screens switchable ──────────────────────────────────────
function TemplatePhone({ ind, themeKey }) {
  const [tab, setTab] = useState('Home');
  const screenMap = { Home: DashboardScreen, Activity: ActivitiesScreen, Rewards: RewardsScreen, Admin: AdminScreen };
  const Screen = screenMap[tab] ?? DashboardScreen;

  return (
    <PhoneShell ind={ind} themeKey={themeKey} activeTab={tab} onTab={setTab}>
      <Screen ind={ind} themeKey={themeKey} />
    </PhoneShell>
  );
}

Object.assign(window, { TemplatePhone });
