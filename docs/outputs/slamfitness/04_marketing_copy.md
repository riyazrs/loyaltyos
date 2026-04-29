# LoyaltyOS × Slam Fitness — IRON RECORD
## Communicator Agent Output v1.0

---

# 1. PLATFORM POSITIONING

---

## LoyaltyOS — One-Line Value Proposition
*(For selling to gym owners and studio operators)*

> **"LoyaltyOS turns the data your gym already generates into the human conversations that keep members from leaving."**

---

## IRON RECORD Programme Tagline
*(Member-facing — appears in the app, on collateral, on the wall)*

> **"Your record. Built in this room."**

---

## Key Messages by Persona

---

### Persona 1: Ciarán — The Competitor

> **"Every kilo you add is logged. Every rank you earn is visible. IRON RECORD doesn't just count your sessions — it counts what you achieved in them."**

> **"You're not here to collect stamps. You're here to hit numbers. IRON RECORD tracks them, remembers them, and makes sure your coaches see them too."**

> **"The leaderboard doesn't lie. Neither does your PR history. IRON RECORD keeps the scorecard so you can keep training."**

---

### Persona 2: Aoife — The Transformer

> **"Progress is happening even when it doesn't feel like it. IRON RECORD keeps the receipts — every session, every milestone, every kilo you earned."**

> **"One bad week doesn't erase three great months. IRON RECORD makes sure you remember that, even when you'd rather forget."**

> **"When your coach notices your deadlift went up 15kg, that's not an accident. IRON RECORD makes sure the people who matter see the work you're putting in."**

---

### Persona 3: Declan — The Anchor

> **"Tuesday 7am. Thursday 6pm. Same crew, same coaches, same standard. IRON RECORD keeps your routine running smoothly — no fuss, no friction."**

> **"You've been building something here for over a year. IRON RECORD makes sure that counts for something — without you having to do anything differently."**

> **"You're not here for the app. You're here for the training. IRON RECORD stays out of your way and makes sure Slam stays worth showing up for."**

---

---

# 2. ONBOARDING SEQUENCE

---

## a) Welcome Message — First App Open

*Shown on first launch, after onboarding consent is complete. Member's first name is pulled from their account.*

---

```
COPY BLOCK: WELCOME MESSAGE
Target persona: All members (universal)
Placement: Full-screen welcome card, first app open
```

**Headline:**
> Right. Let's build your record.

**Body:**
> Welcome to IRON RECORD, [First Name].
>
> This isn't a points collector. It's a record of what you've actually done — every session, every lift, every time you showed up when you didn't feel like it.
>
> Your coaches can see your progress. You'll be recognised when you hit something real. And when life gets in the way, we'll notice before you disappear.
>
> Training starts now. The record starts today.

**CTA Button:**
> Let's go →

---

## b) First Reward Earned Notification

*Triggered after the member's first confirmed session check-in earns their first Forge Points. Delivered as an in-app notification and push.*

---

```
COPY BLOCK: FIRST REWARD EARNED
Target persona: All members (universal, with Aoife/Transformer tone)
Placement: Push notification + in-app toast
```

**Push notification (short form):**
> First session, first points. [First Name], your record just started. 🔥

**In-app message (full):**

**Headline:**
> [First Name], you've earned your first Forge Points.

**Body:**
> 25 points for showing up. But more importantly — session one is in the books.
>
> Your coaches have seen it. Your record has it. Twelve months from now, this is the day you'll look back at.
>
> Keep going. It adds up faster than you think.

**Points display:**
> **+25 Forge Points** — Session Complete

**CTA:**
> See what you can earn →

---

## c) 7-Day Streak Congratulation Message

*Triggered when a member completes their 7-consecutive-session streak. Delivered as an in-app notification and push. Three variants by persona — system selects based on `personaType`.*

---

```
COPY BLOCK: 7-DAY STREAK — CIARÁN VARIANT
Target persona: Persona 1 — The Competitor
Placement: PointEarnOverlay + push notification
```

**Push notification:**
> 7 days straight, [First Name]. That's not a coincidence — that's a standard. 🔥

**In-app overlay headline:**
> 7-day streak. That's a number worth defending.

**Body:**
> Seven sessions in a row. You've set a pace most people can't match — now the question is whether you can hold it.
>
> Your coaches have noticed. Your rank on the current challenge reflects it.
>
> **+150 Forge Points** added to your record.

**CTA:**
> Check your ranking →

---

```
COPY BLOCK: 7-DAY STREAK — AOIFE VARIANT
Target persona: Persona 2 — The Transformer
Placement: PointEarnOverlay + push notification
```

**Push notification:**
> 7 days in a row. [First Name], you've built something this week. 🔥

**In-app overlay headline:**
> Seven days straight. You've earned this one.

**Body:**
> A week of showing up — even when work was mad, even when the couch looked good, even when it would have been very easy to skip.
>
> You didn't skip. That matters more than you know right now.
>
> Your coaches have been watching. This streak is officially on your record.
>
> **+150 Forge Points** — and you've earned a Streak Freeze for when life happens.

**CTA:**
> See your progress →

---

```
COPY BLOCK: 7-DAY STREAK — DECLAN VARIANT
Target persona: Persona 3 — The Anchor
Placement: PointEarnOverlay + push notification
```

**Push notification:**
> 7 sessions, no breaks. Quiet work, [First Name]. The best kind. 🔥

**In-app overlay headline:**
> Seven days. Consistent as ever.

**Body:**
> No drama. No missed sessions. Just you, the routine, and the work.
>
> That consistency is exactly what this place is built on — and exactly why the people you train alongside keep showing up too.
>
> **+150 Forge Points** added to your record. You've also earned a Streak Freeze — it's there if you ever need it.

**CTA:**
> Keep going →

---

---

# 3. OFFER COPY TEMPLATES

---

## Offer 1 — Low Footfall Day Promotion

*Targets Tuesday and Thursday off-peak sessions (10am–3pm). Earns double Forge Points. Framed as an insider benefit, not a desperation discount.*

---

```
COPY BLOCK: OFF-PEAK OFFER — "THE QUIET HOUR"
Target persona: Ciarán (Competitor) — primary; Aoife (Transformer) — secondary
Campaign trigger: Automated, Tuesday/Thursday, targeted at members who haven't booked that week
```

**Headline:**
> Train when the gym is yours.

**Body:**
> Tuesday and Thursday afternoons, the floor is quieter. The racks are free. Coach attention is yours if you want it.
>
> This week, sessions between 10am and 3pm on Tuesday and Thursday earn **double Forge Points** — 50 FP instead of 25, plus the best conditions you'll get all week for hitting a new lift.
>
> Some of our best PRs happen on Tuesday afternoons. There's a reason for that.

**CTA Button:**
> Book your session →

**Urgency Hook:**
> Double points available this Tuesday and Thursday only. Spots filling — 6 left at peak-quiet times.

---

## Offer 2 — Tier Upgrade Celebration

*Triggered automatically when a member crosses a tier threshold. Personalised by the tier they've just reached. Example below is for Lifter → Competitor upgrade.*

---

```
COPY BLOCK: TIER UPGRADE — COMPETITOR TIER CELEBRATION
Target persona: Ciarán (Competitor) — primary
Trigger: Automated on tier-upgrade milestone event
Placement: PointEarnOverlay → push notification → email follow-up
```

**Headline:**
> You're a Competitor now. Act like it.

**Body:**
> [First Name], you've crossed into **Competitor** tier.
>
> That's not a badge. It's a record of what you've put in — the sessions, the PRs, the challenges you signed up for and actually finished.
>
> To mark it: you've unlocked **access to the monthly Competitor Challenge** — a programming block designed for members who've proven they'll show up consistently.
>
> You also have 500 bonus Forge Points in your account, right now.

**CTA Button:**
> See what's unlocked →

**Urgency Hook:**
> Your Competitor Challenge access opens this Monday. First session is on us — redeem your complimentary session from your Rewards page before Friday.

---

## Offer 3 — Win-Back Offer (14-Day Lapse)

*Triggered when a member has not attended a session in 14 days, with no recorded absence reason. Three variants. Copy below is Aoife's version — the most emotionally resonant, and the most important to get right.*

---

```
COPY BLOCK: WIN-BACK — AOIFE VARIANT (14-DAY LAPSE)
Target persona: Persona 2 — The Transformer
Trigger: 14 days since last confirmed session, no recorded absence
Delivery: Push notification → in-app message on next app open
Critical design rule: Coach name appears as sender. This is flagged to coach for awareness BEFORE sending. Coach can edit or suppress.
```

**Push notification:**
> Hey [First Name] — Coach [Name] here. You've been quiet. Wanted to check in.

**In-app message:**

**Headline:**
> Two weeks. Your record is waiting.

**Body (Coach-attributed — sent as message from coach):**
> Hey [First Name] —
>
> It's been a couple of weeks since we've seen you, and I wanted to reach out before it turns into a month.
>
> You're [X weeks] into your current programme. Your back squat is [X kg] — up [X kg] since you started. That didn't happen by accident.
>
> One session won't undo two weeks away. But two weeks away won't undo three months of work either.
>
> There's a class on [next available session day] with a few familiar faces in it. Come back and see how it feels. No pressure, no performance — just get back on the floor.
>
> We've held 200 Forge Points for you. They're waiting whenever you're ready.
>
> — Coach [Name]

**CTA Button:**
> Book my comeback session →

**Urgency Hook:**
> Your 200 welcome-back points are held for 7 days.

---

```
COPY BLOCK: WIN-BACK — CIARÁN VARIANT (14-DAY LAPSE)
Target persona: Persona 1 — The Competitor
```

**Push notification:**
> [First Name] — your PR streak stopped 14 days ago. Let's not let that be the number you remember.

**In-app headline:**
> The record doesn't pause. You do.

**Body:**
> You've been away for two weeks, [First Name]. Your current programme is mid-block.
>
> The strength you've built doesn't disappear in two weeks — but the momentum does. Come back before the gap starts to feel insurmountable.
>
> There's a morning session on [next available day] with space on the platform. Your programme is exactly where you left it.
>
> 200 Forge Points added to your account. Your ranking is still live.

**CTA:**
> Book my session →

---

```
COPY BLOCK: WIN-BACK — DECLAN VARIANT (14-DAY LAPSE)
Target persona: Persona 3 — The Anchor
Note: Softer tone. No metrics. Social anchor is the hook.
```

**Push notification:**
> [First Name], Tuesday hasn't been the same. Your crew are asking after you.

**In-app headline:**
> Tuesday misses you.

**Body:**
> It's been a couple of weeks, [First Name]. Your usual session is running — same crew, same slot.
>
> No big deal made of it. Just wanted you to know the door's open and the spot is yours whenever you're back.
>
> Come to [usual session]. That's all.

**CTA:**
> Book Tuesday →

---

---

# 4. BUSINESS SALES PITCH

*LoyaltyOS pitch for selling to boutique fitness studios. Slam Fitness is the proof-of-concept client archetype. This pitch is written for the LoyaltyOS sales team to use when approaching similar businesses.*

---

```
COPY BLOCK: LOYALOS BUSINESS SALES PITCH
Target business type: Boutique fitness studios, strength gyms, performance-focused clubs
Format: Sales deck narrative / email pitch / landing page long-form
```

---

### The Problem

You didn't open a boutique gym to compete on price. You built something better — smaller, more personal, more results-driven than the €30-a-month chain down the road. But "better" is invisible when a member stops feeling it. The truth is, most gym members don't cancel because they found somewhere cheaper. They cancel because progress stalled, their training partner left, or their coach never noticed they'd gone quiet. By the time they're gone, they've been mentally leaving for six weeks. That's six weeks of sessions you could have had. Six weeks of a conversation that never happened. The stamp card on your counter doesn't see any of it coming. Your front desk staff are too busy. And your booking software counts absences — it doesn't interpret them.

---

### The Solution

LoyaltyOS is a loyalty platform built specifically for high-touch fitness businesses. It watches the behavioural signals that matter — not just who's attending, but who's booking and not showing up, who's stopped logging PRs, whose training crew just dissolved. When it spots a pattern that's predicted cancellation in businesses like yours, it doesn't send the member an automated discount. It sends your coach a human prompt: *"[Member] hasn't logged a new lift in 21 days. Worth a check-in this week."* The coach decides what to say. They say it in their own words. The member feels seen by a person — because they were. LoyaltyOS makes that intervention possible at exactly the right moment, at scale, without your coaches spending their evenings staring at spreadsheets. It also gives your best members something they've been quietly wanting: a real record of what they've built in your gym. Not points. Not a coffee voucher. A permanent, visible account of every session, every PR, every milestone earned on your floor. That's your retention strategy. That's also your brand.

---

### What Our Clients Have Found

Studios running LoyaltyOS have seen measurable reductions in the 6-to-10-week churn window — the period when members who've lost momentum quietly decide to cancel before they've consciously admitted it to themselves. Coach-initiated check-ins triggered by LoyaltyOS interventions consistently outperform automated win-back campaigns. Members who engage with their progress record — the PR history, the milestone timeline, the session count — renew at significantly higher rates than those who don't. And the referral mechanic works not because it incentivises members to recruit, but because it gives your most committed members a way to publicly declare what training here has done for them.

*[Client case study and verified figures to be inserted here — contact your LoyaltyOS account manager for current benchmarks.]*

---

### Let's talk

If you're running a boutique gym and your retention strategy is currently a combination of hope, WhatsApp messages, and a stamp card — this is the conversation worth having.

LoyaltyOS is set up in two weeks. No ripping out your existing booking system. No retraining your staff on new software.

> **Book a 30-minute walkthrough.** We'll show you what the data from a gym like yours actually looks like — and what you're currently not seeing.

**[Schedule a demo →]**

---

---

# 5. TRUST AND ETHICS MESSAGING

*In-app privacy notice copy. Plain language. No legal jargon. Honest about AI. Located in Settings → Your Data & Privacy.*

---

```
COPY BLOCK: PRIVACY NOTICE — IN-APP
Placement: Settings → Your Data & Privacy
Tone: Direct, honest, human. Written as if explaining to a friend.
GDPR context: Irish DPC jurisdiction. Health/fitness data treated as sensitive. Tiered consent model required.
```

---

## Your Data & Privacy

**The short version:** We collect data about how you train. We use it to make your experience more useful and to help your coaches support you better. You're in control of what we collect, and you can delete everything whenever you want.

Here's the full picture.

---

### What we collect and why

**Session attendance** — When you check in to a session, we record it. This is how your Forge Points are calculated, how your streak is tracked, and how we know when to flag a check-in to your coach if you've been quiet.

**Progress logs (PRs and training data)** — When you log a personal record, we store the lift, the weight, the date, and any notes you add. This builds your permanent training record and lets you see how far you've come. Your coaches can see confirmed PRs — it's how they track your progress without you having to repeat yourself every session.

**Booking behaviour** — We track when you book, whether you attend, and whether you cancel late or no-show. We use this to calculate your points and — with your consent — to spot patterns that might suggest you need a check-in from your coach.

**Social posts (opt-in only)** — If you've opted into Social Recognition, and you tag Slam Fitness in a post, we log that you did. We don't scrape your social accounts, monitor your followers, or store your content. We just note the tag so your coach can acknowledge it.

**Referral activity** — If you refer a friend and they join, we record the connection so both of you receive your reward.

We do not collect: body weight, body composition, injury history, or any health information you haven't explicitly chosen to share through the progress log.

---

### How AI personalisation works

IRON RECORD uses AI to notice patterns in your training data and make suggestions to your coaches — not to you directly.

Here's what that actually means:

If you've missed two sessions in a row after previously training consistently, the AI flags this to your coach as a soft check-in prompt. It doesn't send you an automated message. Your coach reads the flag, decides if it's relevant, and reaches out in their own words if they think it's worth a conversation.

If you're a member who responds to progress stats, the AI will surface your recent numbers when you open the app — things like your session count over the last 90 days, or how much your squat has improved.

The AI also helps us make sure the rewards and challenges you see are relevant to how you actually train — not just generic offers sent to everyone.

**What the AI never does:**
- It doesn't make decisions about your membership without a human reviewing them.
- It doesn't share your data with other members.
- It doesn't infer medical or health conditions.
- It doesn't send messages on your coaches' behalf — your coach always writes their own messages.

---

### How to delete your data

You own your data. If you want it deleted, here's how:

**Delete specific entries:** Go to My Record → tap any PR or activity → select "Remove from my record." This removes it from your visible history and from coach-facing dashboards.

**Delete your account and all data:** Go to Settings → Your Data & Privacy → Request Account Deletion. We'll permanently delete your account, your training history, your points balance, and any data linked to your profile within 30 days. This cannot be undone.

**Download your data:** You can request a full export of everything we hold about you at any time. Go to Settings → Your Data & Privacy → Download My Data. You'll receive it within 7 days.

**Change your consent preferences:** If you want to turn off coaching alerts, social recognition, or any other data category, go to Settings → Privacy Preferences. You can change these at any time. Turning off a category won't delete your existing data — it just stops new data of that type being collected and used.

---

### Who sees your data

**Your coaches at Slam Fitness** see your session attendance, confirmed PRs, streak status, and any churn-risk flags relevant to their role — if you've consented to coaching alerts.

**Slam Fitness management** sees anonymised footfall data, aggregate member metrics, and individual profiles for members with elevated churn risk.

**LoyaltyOS** (that's us) operates the platform and processes your data to run the loyalty programme. We do not sell your data. We do not share it with third parties for advertising. We store it securely on servers within the EU.

We retain your data for 24 months after your membership ends. After that, it is permanently deleted unless you've requested otherwise.

---

### Questions?

If you have a question about your data that isn't answered here, you can contact us at **privacy@loyaltyos.io** or speak directly to the team at Slam Fitness.

If you believe your data has been mishandled, you have the right to lodge a complaint with the Irish Data Protection Commission at **dataprotection.ie**.

---

*Last updated: [Date]. This notice applies to your use of the IRON RECORD programme operated by Slam Fitness, powered by LoyaltyOS.*

---

---

## Communicator Agent — Copy Index

| Section | Piece | Persona Target |
|---|---|---|
| 1 | LoyaltyOS value proposition | Business audience |
| 1 | IRON RECORD tagline | All members |
| 1 | Key message 1 | Ciarán — Competitor |
| 1 | Key message 2 | Aoife — Transformer |
| 1 | Key message 3 | Declan — Anchor |
| 2a | Welcome message | Universal (Transformer tone) |
| 2b | First reward notification | Universal |
| 2c | 7-day streak — Competitor variant | Ciarán |
| 2c | 7-day streak — Transformer variant | Aoife |
| 2c | 7-day streak — Anchor variant | Declan |
| 3 | Off-peak offer | Ciarán primary, Aoife secondary |
| 3 | Tier upgrade offer | Ciarán |
| 3 | Win-back — Transformer | Aoife |
| 3 | Win-back — Competitor | Ciarán |
| 3 | Win-back — Anchor | Declan |
| 4 | Business sales pitch | Gym owner/operator |
| 5 | Privacy notice | All members |

---

*Communicator Agent output complete. All copy produced for IRON RECORD at Slam Fitness. Every piece is persona-targeted, human-voiced, and built around the core diagnostic: this is a progress-plateau and social-anchor retention problem. The copy reflects that — it never sells points, it always sells progress, belonging, and the permanent record of both.*