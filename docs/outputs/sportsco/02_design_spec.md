# LoyaltyOS Design Specification
## Sportsco, Ringsend Dublin

---

## 1. LOYALTY EXPERIENCE CONCEPT

### Programme Name: **Sportsco Anchors**
### Tagline: *"Every visit. Every milestone. Every reason to come back."*

The word "Anchor" is doing triple duty here: it references Ringsend's maritime identity, it names precisely what the research identified as the core retention mechanism (habit anchors), and it communicates to members that Sportsco is the stable point their week is built around — not just a facility they use.

---

### The Emotional Journey Map

**Stage 1 — First Visit After Joining (Days 1–7)**
*Emotion: Curiosity shading into optimism.*
The member sees their first points land and understands that Sportsco notices them. Not in a surveillance way — in the way a good receptionist would. The dashboard is welcoming, uncluttered, and shows one clear next step. No overwhelming tier graphics, no aggressive upsell. Just: *"You've started. Here's what happens next."*

**Stage 2 — Building a Habit (Weeks 2–8)**
*Emotion: Momentum and quiet pride.*
The streak mechanic kicks in. The member watches their Anchor Points accumulate against a background of small, achievable challenges. The first time they try a second facility type and earn a "New Shore" bonus, something clicks — Sportsco has more to give than they realised. This is the cross-facility conversion moment the research identifies as the highest-value retention intervention.

**Stage 3 — Community Recognition (Month 3–6)**
*Emotion: Belonging. Being known.*
The member reaches their second tier. Their tier badge updates. A personalised message acknowledges something specific about how they use Sportsco — not a generic "congratulations," but something that mirrors their actual behaviour. Declan's message references his swim sessions. Síofra's references her class consistency. This is the moment where the programme stops feeling like a points system and starts feeling like a relationship.

**Stage 4 — Deep Loyalty (Month 6+)**
*Emotion: Identity. Ownership.*
The member is in the top two tiers. They have cross-facility habits. They've referred someone. The loyalty programme is now invisible in the best possible sense — it has shaped behaviour without being felt as manipulation. The member thinks of themselves as a Sportsco person, not a Sportsco customer. Redemptions feel like rewards, not transactions.

**Stage 5 — Disruption and Recovery (Any point)**
*Emotion: The risk of quiet drift — interrupted by a warm, human-feeling intervention.*
The 14-day habit break intervention fires. The message arrives at exactly the right moment, references exactly the right habit, and feels like it came from a person who knows them. The member returns. The anchor holds.

---

## 2. POINTS AND REWARDS SYSTEM

### Points Currency: **Anchor Points**
*Abbreviated as AP in the UI. Never called "coins" or "credits" — those words belong to apps. "Points" with a proper name communicates real value.*

---

### Earnable Activities (13 activities)

| # | Name | Emoji | Category | Points | Description |
|---|---|---|---|---|---|
| 1 | **First Dip** | 🏊 | Explore | 100 AP | Earn once for your first visit to any facility type you've never used before |
| 2 | **Lane Regular** | 🌊 | Streak | 10 AP | Check in for any pool session — swim lanes, lessons observation, aqua class |
| 3 | **Court Committed** | 🎾 | Booking | 15 AP | Complete a court sport booking (squash, padel, 5-a-side) |
| 4 | **Class Regular** | 🏋️ | Class | 15 AP | Attend any group fitness class (spin, Pilates, HIIT, yoga) |
| 5 | **Four-Week Fix** | 📅 | Streak | 40 AP | Attend the same class four consecutive weeks — instructor and social anchoring reward |
| 6 | **Quiet Hours** | 🌅 | Special | 20 AP | Check in during off-peak windows (before 9am, after 7pm, Saturday afternoon) |
| 7 | **Court Ritual** | 🔁 | Booking | 30 AP | Book the same court slot three weeks in a row — group ritual recognition |
| 8 | **Family Day** | 👨‍👩‍👧 | Family | 50 AP | Three or more family members active within the same calendar month |
| 9 | **Block Re-Enrol** | 📚 | Special | 75 AP | Re-enrol in swim lessons within 7 days of block completion |
| 10 | **Bring a Friend** | 🤝 | Referral | 80 AP | A friend you referred joins as a member |
| 11 | **Loyal Friend Bonus** | 💚 | Referral | 10 AP | Earn per visit your referred friend makes in their first 60 days (up to 12 visits) |
| 12 | **Café Ritual** | ☕ | Daily | 5 AP | Grab something from the café after a workout or swim lesson |
| 13 | **Wellness Add-On** | 🧖 | Wellness | 25 AP | Use the spa or sauna after any facility visit |

---

### Redeemable Rewards (8 rewards)

| # | Name | Emoji | Cost | Description |
|---|---|---|---|---|
| 1 | **Guest Pass** | 🎟️ | 150 AP | Bring a non-member for a day visit — any facility |
| 2 | **Café Credit** | ☕ | 80 AP | €5 credit at the Sportsco café — applied instantly on checkout |
| 3 | **Priority Court Booking** | 🎾 | 120 AP | Book your court slot 48 hours before general availability opens |
| 4 | **First Padel Session Free** | 🏓 | 200 AP | Redeem for a complimentary padel session — designed to trigger cross-facility conversion |
| 5 | **Spa & Sauna Pass** | 🧖 | 180 AP | A standalone spa/sauna access session — redeemable for you or gifted to a guest |
| 6 | **Class Pack Top-Up** | 💪 | 250 AP | Two complimentary classes added to your account — any class type |
| 7 | **Annual Loyalty Credit** | 🏅 | 500 AP | €20 credit applied against membership renewal — highest-value redemption, signals real worth |
| 8 | **Kids Lesson Discount** | 👧 | 300 AP | 15% off the next swim lesson block enrolment — exclusive to family accounts |

---

### Tier System: **The Four Anchors**

Tier names drawn from maritime and Dublin Bay geography — specific to Ringsend's identity, not generic.

| Tier | Name | Threshold | Colour | Key Benefit |
|---|---|---|---|---|
| 1 | **Shoreline** | 0–499 AP earned | `#64B5F6` (coastal blue) | Welcome perks, café discount 5% |
| 2 | **Harbour** | 500–1,499 AP earned | `#0EA5E9` (deeper blue) | Priority booking windows, 10% café discount |
| 3 | **Channel** | 1,500–3,499 AP earned | `#D4AF37` (gold tide) | Guest passes monthly, 15% café discount, spa access priority |
| 4 | **Deep Water** | 3,500+ AP earned | `#7C3AED` (prestige) | All Channel benefits + dedicated concierge booking line, annual loyalty credit unlock |

*Tier progress resets annually on membership anniversary — not on a calendar year — so no member ever feels punished for joining mid-year. Tier status is retained for 90 days post-anniversary to allow recovery.*

---

## 3. ENGAGEMENT MECHANICS

### Daily and Weekly Challenges

These rotate. The AI generates personalised challenge sets per member; below are the structural templates.

| Challenge | Points | Cadence |
|---|---|---|
| **The Double Dip** — Visit two different facility types in one week | 35 AP | Weekly |
| **Off-Peak Pioneer** — Check in during a quiet-hour window three times this week | 30 AP | Weekly |
| **Court Block** — Book and complete a court session before Thursday | 25 AP | Weekly |
| **Wellness Window** — Use the spa or sauna once before Sunday | 20 AP | Weekly |
| **Café After** — Visit the café immediately following a workout or class, any day this week | 15 AP | Weekly |

*Challenges are surfaced in the app on Monday morning. Members see their personalised set of three (not all five). The AI selects based on their last 30 days of behaviour — a swimmer won't be pushed to gym challenges; a court player won't be pushed to class challenges.*

---

### Streak Mechanics

**7-Day Streak (any 3 visits in 7 consecutive days):**
→ +25 AP bonus, animated streak badge unlocks on dashboard, small push notification celebration: *"Three visits this week. The anchor's holding."*
→ Streak counter displays on home screen — visible progress indicator.

**30-Day Streak (minimum 10 visits in 30 consecutive days):**
→ +100 AP bonus, "Harbour Streak" badge added to profile.
→ Personalised recognition message referencing the specific facilities visited.
→ Unlocks access to the monthly "Deep Water Challenge" (a bonus activity only streak holders can see).

**Streak Freeze:**
Members get one "Tide Out" freeze per month — a 72-hour grace period that holds the streak without a visit. Must be activated before the streak breaks. This is Peloton's best mechanic, adapted. It prevents a single missed day from destroying a months-long streak and the goodwill that streak represents.

---

### Social and Referral Mechanics

**Member Referral — "Bring Them In":**
- Member shares a unique referral link or QR code from the app
- Referred person joins as a full member: referrer earns 80 AP immediately
- For every visit the new member makes in their first 60 days: referrer earns 10 AP (up to 120 AP total bonus)
- *Design rationale: rewarding the ongoing relationship, not just the sign-up, mirrors the research recommendation and creates genuine social investment in the new member's engagement*

**Court Group Mechanic:**
- When a court sport booking includes the same group of members three weeks running, all players receive a "Court Crew" badge and a shared 20 AP bonus each
- This makes the group booking feel like a collective achievement — the loyalty mechanic reinforces the social contract within the group

**Family Account Linking:**
- Family members under one account share a family points pool *and* maintain individual point balances
- Family milestones (three members active in a month) trigger a collective reward — the Murphys earn together, and losing Sportsco means the whole family loses something

---

### Surprise and Delight Moments

**1. The Loyalty Landmark**
Triggered when a member crosses a visit milestone — 50th visit, 100th visit, 5-year anniversary. The member receives a push notification with a short, human-feeling message and a meaningful points gift (150 AP). No generic graphic — the message references their specific milestone. Declan's 11-year anniversary gets a message that references 11 years of Friday squash, not 11 years of "using Sportsco." *This is the moment the system stops being a points app and becomes something a member shows someone.*

**2. The Quiet Tuesday Gift**
On the lowest-footfall day of the week (identified by the AI from booking data), the system selects 50 members with flexible visit patterns and sends a time-limited, surprise offer: *"Extra 25 AP on every visit today, no reason needed."* Framed as a gift, not a promotion. No countdown timer. No "limited time only" language. This is the digital equivalent of a staff member saying "quiet in here today, isn't it — come and enjoy it."

**3. The Return Welcome**
If a member has been absent for 20+ days and then returns, their next check-in triggers a quiet, warm acknowledgement in the app: a small animation, a personal message, and a 50 AP "Welcome back" bonus applied automatically. No fanfare. No "we've missed you." Just: *"Good to have you back."* The points appear without the member having to claim them.

---

## 4. AI PERSONALISATION LAYER

### How the AI Recommends Activities Per Persona

**For Declan (The Fixture — routine and social anchor):**
The AI never suggests activities that break his routine. It reinforces the existing pattern while building a secondary anchor. Declan's weekly challenge set will always include a squash-adjacent activity and will occasionally surface a spa-adjacent reward (the one cross-sell he might genuinely respond to). The AI monitors his squash group's booking regularity as a cohort signal — not just Declan's individual visits. If the group misses a booking, the intervention is not "book squash" — it is "your usual slot on Friday at 12:30 is available, and we've held the squash court."

**For Síofra (The Optimizer — progress and novelty):**
The AI tracks her class attendance velocity and surfaces novelty-to-habit conversion prompts when her engagement is *high* (not when it's dipping — that's the wrong moment). When Síofra has had a strong fortnight of spin, the AI offers her a padel challenge. The logic: she is in a positive emotional state about Sportsco; this is when new facility adoption sticks. The AI also monitors instructor-specific class attendance. If her preferred instructor has three consecutive absences, the AI proactively introduces another instructor by name, not as a substitute but as a recommendation: *"Have you tried Sarah's Tuesday spin? A lot of the same crowd goes."*

**For the Murphys (The Scheduler — value consolidation and friction reduction):**
The AI treats the family account as a unit. It surfaces family challenges when the whole unit is active and monitors the swim lesson block calendar as the primary retention clock. Ten days before block end, Aoife receives the re-enrolment prompt with the children's names and specific class details already populated — zero friction. The AI also tracks café visit frequency as a family comfort signal. Declining café visits trigger a family reward surfaced in the app, not via email.

---

### How the AI Generates Personalised Offers for Low-Demand Periods

The AI builds a **Visit Flexibility Score** for each member based on:
- Variance in their visit times over the last 90 days (high variance = flexible schedule)
- Historical response to off-peak prompts
- Booking lead time (same-day bookers are more flexible than members who book a week ahead)

Members with high flexibility scores are the targets for quiet-period nudges. The nudge is personalised to their usual activity ("The pool is unusually quiet this Thursday afternoon — ideal for lane swimming") not a generic promotion. Point bonuses for off-peak visits are applied automatically on check-in, not as a coupon to redeem — this removes friction and makes the reward feel effortless.

---

### Churn Prediction and Intervention Signals

The AI monitors five churn signals identified in the research brief, with specific response protocols:

| Signal | Threshold | AI Response |
|---|---|---|
| High-frequency member visit gap | 14 days no check-in (member who usually visits 3+/week) | 24-hour trigger: personalised habit-reference message, specific facility, specific usual time |
| Court group consecutive missed bookings | 2 missed weekly slots | Message references the group ritual, not individual visit; surfaces group rebooking prompt |
| Family swim lesson block ending | 10 days before block end | Re-enrolment prompt with children's names, priority placement framing, Friday deadline |
| Cross-facility usage narrowing | 30 days single-facility only (was using 2+) | Gentle cross-sell surfaced in challenge set — not a direct message, an embedded suggestion |
| Spa/café usage drop to zero | After 60+ days of regular add-on usage | Family or comfort-layer reward surfaced — the intervention is a gift, not an alarm |

**Escalation logic:** If the first intervention (push notification) is unopened after 48 hours, the system escalates to an in-app message on next login. If the member visits after an intervention, the system logs the re-engagement and resets the churn clock — no further messages for 30 days. No member receives more than two re-engagement messages in any 30-day window.

---

## 5. USER INTERFACE FLOWS

### Customer Dashboard — Home Screen

The home screen is structured in four zones, top to bottom:

**Zone 1 — Greeting and Status Bar** *(top, full width)*
Personalised greeting with first name. Current Anchor Points balance (large, prominent). Tier badge with name and next tier threshold displayed as a subtle progress ring. Example: *"Good morning, Declan — 840 AP · Harbour Member"*. The progress ring fills with the primary colour; the tier label glows softly in the tier colour.

**Zone 2 — Streak and Momentum Card** *(below greeting)*
A single card showing current streak status, days active, and the "Tide Out" freeze button if available. If a challenge is in progress, it appears here with a progress indicator. This is the member's daily emotional feedback — it should feel alive, not static.

**Zone 3 — This Week's Challenges** *(scrollable horizontal cards)*
Three personalised challenge cards. Each card shows: challenge name, emoji, points reward, and a simple progress indicator (0/3 visits, for example). Completing a challenge triggers an in-app animation — a subtle burst, points counter incrementing, a one-line acknowledgement message.

**Zone 4 — Discover** *(bottom, scrollable)*
Two to three contextual cards generated by the AI. These might be: a cross-facility suggestion ("You've never tried padel — here's why members love it"), a family prompt ("Block 4 ends in 10 days — re-enrol now"), or a time-sensitive quiet-hours bonus. These are never generic. If the AI has no relevant contextual card, this zone shows member milestones or recent activity — never filler content.

---

### Activity Completion Flow — How Earning Feels

1. **Check-in trigger:** Member taps check-in on arrival (or QR scan at turnstile/reception)
2. **Instant feedback:** Within 2 seconds, a small modal rises from the bottom of the screen. It shows: activity name, emoji, points earned (+15 AP), and a brief, warm one-liner. *"Lane Regular — +10 AP. That's 14 weeks of Tuesday swims."* (The AI pulls in a personal detail when available.)
3. **Running total:** Points counter animates upward on the modal before it dismisses. The member *sees* the number change.
4. **Challenge progress:** If the activity contributes to an active challenge, the challenge card updates immediately on the home screen — visible progress.
5. **Milestone moments:** If the check-in triggers a tier upgrade or streak milestone, the modal is replaced by a full-screen celebration moment — restrained, not garish. A brief animation, the new badge, a specific personal acknowledgement. Then it dismisses. No confetti cannons. This is Sportsco, not a slot machine.

---

### Reward Redemption Flow — How Spending Points Works

1. **Rewards tab:** Member navigates to Rewards. Cards display each reward with name, emoji, cost, and a short description. Locked rewards (insufficient points) are visible but greyed out — they show the points gap ("You need 70 more AP"). This keeps aspirational rewards in view.
2. **Selection:** Member taps a reward. A detail card expands: full description, point cost, how to use it, and a single "Redeem" button.
3. **Confirmation:** A confirmation modal: *"Redeem Café Credit? 80 AP will be deducted. Your balance will be 760 AP."* Two options: Confirm or Cancel. No dark patterns. No countdown timer on the confirmation.
4. **Redemption receipt:** Instant confirmation screen with a unique redemption code or QR code (depending on reward type). Café credit is applied to the linked account automatically — no code needed. The receipt is saved in a "My Rewards" history tab.
5. **Emotional close:** A brief, warm one-liner on the confirmation screen. *"Enjoy the coffee. You've earned it."* Not a points pitch. Not a "spend more to earn more" message. Just acknowledgement.

---

### Business Admin Panel — What Sportsco Staff Control

**Dashboard Overview:**
- Live active members count
- Points issued this week vs. last week
- Top 10 most-redeemed rewards (rolling 30 days)
- Churn risk queue: members currently flagged by the AI, with risk level and recommended action
- Off-peak fill rate: showing impact of quiet-hours bonus on specific time slots

**Programme Controls:**
- Point values per activity (adjustable per activity — can increase padel points for 8 weeks to drive adoption, then return to base)
- Reward costs (adjustable — can run a "Double Value" week on café credit)
- Challenge templates: select from the template library or write custom challenges, set duration, target segment
- Quiet-hours windows: define which time slots qualify as off-peak (updates seasonally)

**Member Segmentation View:**
- Filter members by tier, facility type, visit frequency, churn risk score
- View individual member journey (anonymised for staff below manager level — managers see full profile)
- Manual override: flag a member for a personal outreach (used by reception team when they know context the AI doesn't — e.g., member mentioned a holiday)

**Communication Controls:**
- Review and approve AI-generated re-engagement messages before send (optional — can be set to auto-approve or manual review)
- Set communication frequency caps per member (default: max 2 automated messages per 30 days)
- View message open rates, redemption rates, and reactivation rates per campaign

**Reporting:**
- Monthly cohort retention by tier
- Facility cross-sell conversion rates (how many Explore awards led to repeat visits)
- Referral network map: which members are bringing in new members
- Revenue impact estimate: member lifetime value delta for loyalty participants vs. non-participants

---

## 6. COLOUR MODE AND VISUAL THEME

### Selected Theme: **`light`**

**Justification:** Sportsco is a community health and leisure facility in a residential Dublin neighbourhood — not a nightclub, not a luxury hotel, not a gaming lounge. The light theme communicates openness, cleanliness, and warmth, which aligns with the "third place" identity that makes Sportsco irreplaceable to members like Declan and Aoife. A dark theme would signal exclusivity over accessibility; a rich theme would feel aspirational in a way that doesn't match the community-rooted, unpretentious character of Ringsend.

---

### Visual Theme Token Application

**Background:** `#F5F4F0` — the warm off-white reads as clean without the clinical sterility of pure white. It feels like a well-lit leisure centre reception, not a hospital.

**Card surfaces:** `bg: #FFFFFF`, `border: rgba(0,0,0,0.07)`, `shadow: 0 1px 3px rgba(0,0,0,0.08)` — cards sit cleanly above the background with just enough lift. No glass effects. No blur. Light theme means clarity.

**Primary colour:** `#0EA5E9` — mapped to Sportsco's maritime identity and the dental/health/wellness light-theme adjacency. This is the colour of lane ropes, Irish coastal water, and a clear Dublin Bay morning. Used exclusively on CTA buttons, progress fills, and active state indicators.

**Accent colour:** `#38BDF8` — the lighter sky blue, used for hover states and secondary highlights. Keeps the palette coherent and coastal without feeling corporate.

**Text:** `#111111` — near-black for maximum legibility on the warm background. No dark grey approximations.

**Subtext and metadata:** `rgba(0,0,0,0.42)` — used for points values below activity names, timestamps, tier thresholds. Readable but hierarchically subordinate.

**Muted backgrounds:** `rgba(0,0,0,0.04)` — used inside challenge cards to distinguish the progress area from the card surface. Barely perceptible, but creates depth without shadow.

**Navigation bar:** `bg: rgba(245,244,240,0.98)`, `border: rgba(0,0,0,0.08)` — near-opaque with backdrop blur. The nav feels grounded and permanent, not floating.

**Tier badge colours** (applied as coloured text labels, no glow on light theme):
- Shoreline: `#64B5F6`
- Harbour: `#0EA5E9`
- Channel: `#D4AF37`
- Deep Water: `#7C3AED`

**Progress bars:** Filled with primary `#0EA5E9`, unfilled track in `rgba(0,0,0,0.08)`. No glow. Clean, linear fills with 4px height for standard bars, 8px for the tier progress ring. Border radius: 8px throughout.

**Typography:** High contrast, generous line spacing. Challenge card titles at 16px/600 weight. Points values at 28px/700 weight on the dashboard greeting. Subtext at 13px/400. No decorative fonts — Sportsco is not a brand that needs typographic theatre.

---

### Full Generated Config

```json
{
  "programme": {
    "name": "Sportsco Anchors",
    "tagline": "Every visit. Every milestone. Every reason to come back.",
    "currency": "Anchor Points",
    "currencyAbbreviation": "AP"
  },
  "theme": "light",
  "colours": {
    "primary": "#0EA5E9",
    "accent": "#38BDF8",
    "bg": "#F5F4F0",
    "cardBg": "#FFFFFF",
    "cardBorder": "rgba(0,0,0,0.07)",
    "text": "#111111",
    "subtext": "rgba(0,0,0,0.42)",
    "muted": "rgba(0,0,0,0.04)",
    "navBg": "rgba(245,244,240,0.98)",
    "navBorder": "rgba(0,0,0,0.08)"
  },
  "tiers": [
    { "name": "Shoreline", "threshold": 0,    "colour": "#64B5F6" },
    { "name": "Harbour",   "threshold": 500,  "colour": "#0EA5E9" },
    { "name": "Channel",   "threshold": 1500, "colour": "#D4AF37" },
    { "name": "Deep Water","threshold": 3500, "colour": "#7C3AED" }
  ]
}
```

---

## 7. TRUST AND TRANSPARENCY DESIGN

### Communicating Data Usage to the Customer

**Plain-language data card at enrolment:**
When a member opts into Sportsco Anchors, before they confirm enrolment they see a single-screen summary — not a terms link, not a GDPR wall — with three bullet points in plain English:

> *"To personalise your Anchors experience, we use your visit history, class bookings, and café transactions. We do not use your data for advertising or share it with third parties. You can see exactly what we hold, and turn personalisation off, in your Settings at any time."*

This is the complete data disclosure for most members. It is written at secondary school reading level. It is not buried.

**Preference Centre (in-app Settings → My Data):**
- Toggle: *"Send me personalised activity suggestions"* (default: on)
- Toggle: *"Include my café and spa visits in my recommendations"* (default: on, with explanation)
- Toggle: *"Family account: link activity for family challenges"* (default: on, requires separate consent per family member account)
- Button: *"Download my data"* — generates a readable summary, not a raw export
- Button: *"Delete my loyalty data"* — removes all personalisation data while retaining membership account

**Child data handling (critical, per research brief):**
The loyalty programme trigger for swim lesson re-enrolment is derived exclusively from the *parent's* booking and billing record. Child activity files are never accessed by the loyalty engine. This is stated explicitly in the preference centre: *"Swim lesson reminders are based on your booking records, not your child's activity data."*

---

### How the System Avoids Feeling Manipulative

**The Receptionist Rule — enforced at the message generation layer:**
Every AI-generated message is evaluated against a single test before sending: *"Could a well-meaning human who knows this member plausibly say this?"* Messages that reference specific numeric data (visit counts, exact dates) are suppressed in favour of qualitative language. *"You've been a consistent swimmer this autumn"* passes. *"You've visited 23 times in the last 60 days"* does not.

**No dark patterns in redemption:**
- Rewards never expire unexpectedly
- Tier downgrade is communicated 60 days in advance with a recovery path shown ("You need 3 more visits to maintain Harbour status")
- No countdown timers on reward redemption screens
- No "You're so close!" pressure language on locked rewards
- Cancelling a redemption is always one tap — no confirmation loops

**Frequency caps, not frequency maximisation:**
The system is configured to send a maximum of two automated messages per member per 30 days. Most members receive fewer. The business admin panel shows a "message fatigue score" per member — members who rarely open notifications are moved to lower frequency automatically. The goal is not engagement rate. The goal is the right message at the right moment, which sometimes means silence.

**Honest design for the "Return Welcome" moment:**
When the 14-day intervention fires, the message explicitly does not pretend the system didn't notice the absence. It acknowledges it plainly. What it never does is make the member feel watched or judged. The tone is: a friend who noticed you hadn't been around, not a system that flagged an anomaly. The distinction is entirely in the language — and it is designed, not automated.

**Visible off-switch:**
The word "Personalisation is on" appears in the app header on the profile screen — one tap to the preference centre. Members are never surprised to discover the system knows things about them. The capability is disclosed; the controls are front-facing; the choice is genuinely theirs.

---

*Design specification prepared for handover to the LoyaltyOS Maker agent. All mechanics, flows, and visual decisions are specific to Sportsco Ringsend. Do not genericise. The maritime naming system, the community-first tone, and the receptionist rule are non-negotiable design constraints.*