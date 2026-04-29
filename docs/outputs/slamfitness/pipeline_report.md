# LoyaltyOS — Full Pipeline Report

**Business slug:** `slamfitness`  
**Generated:** 29 April 2026, 22:18
**Agents completed:** 5/5
**Total words:** 11,639

This document contains the raw output of every agent in the LoyaltyOS pipeline,
in handoff order. Each agent received the previous agent's output as its input.

| # | Agent | Role | Words |
|---|-------|------|-------|
| 1 | **Researcher** | Identify the opportunity | 2,311 |
| 2 | **Designer** | Create the solution | 2,454 |
| 3 | **Maker** | Build the product | 1,677 |
| 4 | **Communicator** | Get the customers | 2,515 |
| 5 | **Manager** | Run the business | 2,682 |

---


---


## Agent 1: Researcher

**Role:** Identify the opportunity — deep analysis and pattern recognition
**Output file:** `01_research_brief.md`
**Word count:** 2,311

# LoyaltyOS Research Brief
## Slam Fitness — Boutique Strength & Performance Studio, Stoneybatter, Dublin 7

---

## 1. CUSTOMER ENGAGEMENT PROBLEM

### The Structural Diagnosis

Slam Fitness does not have a marketing problem. It has a **progress plateau vulnerability** combined with a **social dependency risk**.

Customers join and stay because of two things: measurable physical progress and community belonging. Both are self-limiting by nature. Progress slows after 3–6 months (the body adapts), and community bonds, while powerful, are fragile — one key training partner leaves, one coach changes shift, and the gravitational pull collapses. The business has no systematic mechanism to detect either of these collapses early, and no designed response when they occur. The coaches know members by name, but that knowledge lives in coaches' heads, not in a retention system. When a coach is off sick, that relationship intelligence disappears entirely.

The secondary problem is the **quiet day footfall gap**. Peak hours are self-sustaining through social energy. Quiet periods are not — and members who only ever train in peak slots associate the gym with a specific social context. Remove that context (holidays, schedule change, summer slowdown) and they have no secondary anchor to bring them back.

### Behavioural Churn Signals — Specific Predictors

1. **A member who trained 4+ times per week drops below 2 sessions in a single week without a prior booking pattern change** — this is not "being busy," this is the first crack in habit.
2. **No class booking made within 5 days of their last session** — at Slam, booking behaviour predicts attendance more reliably than attendance itself. A member who stops booking has mentally already left.
3. **Attendance shifts from group boot camp to solo gym floor use** — social withdrawal precedes physical withdrawal. When a member stops showing up for group classes and starts lone-ranger sessions, the community hook is gone.
4. **A member skips their "anchor session"** — everyone has one. The Tuesday 6am. The Thursday 7pm. First time they miss it without rescheduling is a red flag.
5. **No engagement with a coach check-in for 14+ days** — at a studio where coach interaction is the product differentiator, silence from a previously engaged member signals emotional disengagement before physical absence arrives.

---

## 2. MARKET OPPORTUNITY

### Why a Stamp Card Fails Here

A stamp card rewards *showing up*. Slam Fitness needs to reward *not stopping*. Those are fundamentally different problems. A stamp card cannot detect a progress plateau. It cannot notice that someone has stopped booking before they stop attending. It cannot distinguish between the member who needs a challenge escalation and the one who needs a social nudge. A stamp card gives everyone the same signal at the same interval. Slam's retention problem is precisely that every member's inflection point is different.

AI-powered loyalty at Slam is not about gamification — it's about **early warning + personalised intervention at scale**, which a boutique studio cannot otherwise afford to build manually across 200+ members.

### Analogous Programmes

**Barry's Bootcamp (global)** — built strong community loyalty through class streaks, instructor shoutouts, and a cult identity. Members who hit streak milestones get recognition. Effective at reinforcing the habit loop. Weakness: entirely broadcast-based. Every member gets the same nudge at the same milestone. Barry's has no mechanism to identify *which* member is about to fall off and intervene before it happens.

**Peloton's Connected Fitness Model** — uses output data (output watts, personal records, class history) to personalise achievement recognition and surface the right challenge at the right time. Extremely effective at sustaining engagement through progress visibility. Weakness: digital-only, requires hardware, and loses entirely when the social layer weakens (see: post-pandemic Peloton collapse).

**What LoyaltyOS does that neither does:** Predictive churn intervention triggered by *behavioural absence signals*, not milestone achievement. LoyaltyOS acts before the member disappears — not after they hit a target. That asymmetry is the entire value proposition for a business like Slam.

---

## 3. CUSTOMER SEGMENTS

### Persona 1: "The Anchor" — Síofra

**Behaviour Pattern:** 35, HR manager, trains 5x per week, always books in advance, attends 6am slots before work, has been a member for 18+ months. Knows three coaches by first name. Participates in boot camps and occasionally posts progress photos. Her training log would be the most consistent in the building.

**Loyalty Trigger:** Measurable performance progress and coach recognition. Síofra stays because she is *seen*. The coach who notices her deadlift PR is not incidental — it is the product. She also derives identity from being "a Slam person."

**The ONE thing that causes disengagement:** Her primary coach leaves or changes shift pattern. Síofra's loyalty is partially coach-transferred, not fully brand-transferred. If that relationship breaks without a designed handover, she is exposed. Secondary risk: she hits a genuine plateau and no one in the system notices or responds.

---

### Persona 2: "The Performer" — Ciarán

**Behaviour Pattern:** 29, software engineer, trains 3–4x per week, primarily evening sessions, highly goal-oriented (currently bulking, tracks macros, attends for specific programming). Signs up for 8-week challenges. Refers friends occasionally when directly asked. Vocal in class, competitive but not aggressive.

**Loyalty Trigger:** Programme quality and visible results. Ciarán is not coming for the vibes — he is coming because Slam's coaching is genuinely better than what he can design himself. His loyalty is **rational**, not emotional, which means it is also auditable. He will leave the moment he believes he has extracted the value or found a superior alternative.

**The ONE thing that causes disengagement:** Programme stagnation. If Ciarán's programme hasn't meaningfully evolved in 10 weeks, he starts Googling other studios. He needs to feel like the coaching is ahead of him, not catching up to him.

---

### Persona 3: "The Community Floater" — Aoife

**Behaviour Pattern:** 31, teacher, trains 2x per week, always group boot camp, never solo floor sessions. Her consistency is socially mediated — she comes because her friend Niamh comes. Engaging on Instagram, has tagged Slam twice. Enthusiastic in class but does not engage with coaching outside sessions. Joined 7 months ago.

**Loyalty Trigger:** Social belonging and low-friction fun. Aoife is not primarily buying fitness — she is buying a social ritual with a fitness outcome. The coaching quality is a reassurance, not a driver.

**The ONE thing that causes disengagement:** Niamh leaves, or Niamh shifts to a different time slot. Without that social anchor, Aoife has no individual relationship with the gym strong enough to sustain solo attendance. She will ghost within 3 weeks of losing her training partner.

---

## 4. ENGAGEMENT MECHANICS

### Rewardable Activities and Their Retention Mechanisms

| Activity | Retention Mechanism |
|---|---|
| **Booking a session 48+ hours in advance** | *Commitment device* — pre-commitment reduces no-show probability by ~40%. Rewarding the booking, not just the attendance, reinforces the planning behaviour that sustains streaks. |
| **Attending a session outside peak hours (quiet day fill)** | *Variable reward + community norm shifting* — directly addresses the quiet footfall problem. Bonus points for off-peak sessions create a behaviour pattern that reduces Slam's revenue volatility and member schedule rigidity simultaneously. |
| **Completing a personal record in a coached lift** | *Progress loop reinforcement* — surfacing and rewarding PRs makes progress visible at the exact moment a plateau threat is highest. The reward is secondary; the *acknowledgement* is the retention mechanism. |
| **Attending with a referred friend (first visit)** | *Social proof activation* — turns the referral from a passive favour into a rewarded behaviour. The referrer gains status; the new member arrives with a social anchor already in place (critical for Aoife-type personas). |
| **Tagging Slam in a progress post** | *Identity reinforcement* — rewarding social posting amplifies the "I am a Slam person" identity signal. Members who publicly claim the identity are statistically harder to retain. This is not vanity marketing — it is identity-based retention. |
| **Completing a full programme cycle (e.g., 8-week block)** | *Loss aversion trigger* — milestone completion rewards create a sunk-cost-positive dynamic. Members approaching week 7 of an 8-week programme are far less likely to cancel. The reward at completion anchors the next enrolment. |
| **Consecutive weekly attendance (7, 14, 30-day streaks)** | *Habit loop compounding* — streak mechanics exploit the psychological cost of breaking a visible streak. Critically: streaks should reset weekly, not daily, to avoid punishing members for legitimate rest days. |
| **Coach check-in engagement (completing a goal review session)** | *Relationship deepening* — rewarding deliberate coach interaction creates a structured touchpoint that generates the data needed for personalisation, while reinforcing the coach-member bond that is Slam's primary differentiator. |

---

## 5. DATA AND PERSONALISATION OPPORTUNITIES

### Ethical Data Collection at Slam

The following signals can be collected with explicit member consent and a clear value exchange (better coaching, relevant rewards):

- **Session booking patterns** — time of day, day of week, class type, advance booking window
- **Attendance vs. booking ratio** — no-show frequency, late cancellations
- **Class type preferences** — boot camp vs. open floor vs. specific programmes
- **Coach interaction frequency** — check-ins logged, programme reviews completed
- **Streak and attendance consistency data** — week-on-week visit rate, anchor session regularity
- **Referral activity** — who referred whom, social connection map within the member base
- **Opt-in progress metrics** — weight lifted, programme milestones (shared voluntarily via coach log or app input)
- **Social engagement signals** — tagged posts, story mentions (public data, opt-in linking)

### AI Personalisation by Persona

**Síofra (The Anchor):** AI monitors her anchor session attendance and coach interaction frequency. If either drops, it triggers a coach notification *before* she misses a second session. When her coach is unavailable, the system proactively introduces her to a secondary coach via a warm check-in prompt. It surfaces her 12-month progress data at the point she is most likely to plateau (months 4–6 of a training block) to reignite motivation with evidence rather than encouragement.

**Ciarán (The Performer):** AI tracks programme evolution — specifically whether his logged activities have materially changed in 8 weeks. If stagnation is detected, it triggers a programme refresh prompt from his coach. It surfaces his performance data comparatively (his own historical bests, not peer comparison) and pre-emptively enrols him in challenge events before he goes looking for them elsewhere. Rewards are framed in performance currency (unlock advanced programming, access to performance testing sessions) not discounts.

**Aoife (The Community Floater):** AI maps her social connection to Niamh. If Niamh's attendance drops, Aoife receives a proactive class invitation or social challenge within 48 hours — before her attendance pattern is affected. The system gradually introduces her to a second social anchor (another boot camp regular) through structured class challenges and group rewards, reducing her single-point-of-failure dependency. Rewards are socially framed ("bring a friend for free" rather than "10% off next month").

### Single Highest-Value Personalisation Intervention

**The Coach Alert System for Pre-Churn Signals.**

When a member's booking frequency drops below their personal baseline for 5 consecutive days, the system sends the member's assigned coach a contextual alert: *"Síofra hasn't booked since Tuesday — her usual pattern is 5x this week. Last coach note: deadlift plateau flagged."* The coach sends a personal message. Not a marketing email. A message from a person who knows her name.

This is the intervention Slam cannot currently scale manually. This is what AI makes possible. And it is precisely the kind of high-touch behaviour that defines Slam's brand — the system doesn't replace the coach relationship, it operationalises it.

---

## 6. KEY RISKS

### GDPR Risk

**Specific concern:** Slam is collecting fitness and health-related behavioural data. Under GDPR, data concerning physical health and fitness progression may qualify as **special category data** (Article 9) depending on how granularly it is recorded and linked to identifiable individuals. A member's deadlift progression linked to their name and medical history (even informally held by coaches) creates compliance exposure if not handled under explicit consent frameworks. The referral social graph also creates an implicit data relationship between members who have not individually consented to being mapped.

**Mitigation:** Implement a layered consent model at onboarding — separate consent for (a) operational data, (b) personalisation data, and (c) social/referral data. Appoint a data processor agreement with LoyaltyOS as the platform provider. Store health-adjacent metrics only in aggregated or anonymised form unless member explicitly opts into progress tracking. Review under Ireland's Data Protection Commission guidance for fitness operators.

---

### Trust Risk

**Specific concern:** The churn prediction system — specifically the pre-churn coach alert — risks feeling like surveillance if members become aware of it without understanding it. Aoife receiving a "coincidental" coach message the day after she misses a session three times is warm and personal. Aoife *knowing* that an algorithm flagged her absence and triggered that message may feel instrumentalised. The "no-ego" brand positioning is entirely incompatible with a loyalty programme that feels like it is optimising members rather than serving them.

The second trust risk is **reward devaluation**: if Ciarán perceives that points and rewards are a mechanism to extract more sessions from him rather than recognise his commitment, his rational-consumer instinct will reject the programme entirely. Performers spot incentive structures.

**Mitigation:** Radical transparency in framing. The loyalty programme should be introduced not as a rewards scheme but as a **"coaching intelligence layer"** — *"We use your data to make sure your coach always knows where you are in your journey."* Tell members the system flags absence to coaches. Most members, at a community gym with this culture, will find that *reassuring*, not creepy — but only if told upfront. For Ciarán-types, frame rewards as unlocking capability, not accumulating points. Never let the mechanics show more than the intent.

---

*Brief prepared for Designer handoff. All personas, signals, and intervention triggers are specific to Slam Fitness's described context and should be treated as design constraints, not suggestions.*


---


## Agent 2: Designer

**Role:** Create the solution — creative problem-solving and design thinking
**Output file:** `02_design_spec.md`
**Word count:** 2,454

# LoyaltyOS Design Specification
## Slam Fitness — Boutique Strength & Performance Studio, Stoneybatter, Dublin 7

---

## 1. LOYALTY EXPERIENCE CONCEPT

### Programme Name: **SLAM FORM**
### Tagline: *"Every rep remembered."*

The name does double work: **FORM** refers to training form (the technical quality Slam coaches obsess over) and to the record of who you are as an athlete. "Every rep remembered" is a direct promise — this system sees your progress, holds your history, and never lets a milestone go unacknowledged. It positions the loyalty programme not as a marketing tool but as a **coaching memory system** with rewards attached.

---

### The Emotional Journey

| Stage | Member State | Design Goal |
|---|---|---|
| **Onboarding (Week 1–2)** | Hopeful but uncertain — *"Will I stick with this?"* | Make commitment feel visible and celebrated immediately. First activity earned within the first session. |
| **Early Habit (Week 3–8)** | Building momentum — *"I'm actually doing this."* | Streak mechanics and quick wins. Small rewards that arrive before they feel earned to anchor the habit. |
| **Plateau Risk (Month 3–6)** | Quietly doubting — *"Am I still improving?"* | AI surfaces progress evidence. Coach alerts fire. New challenges unlock. The system acts *before* the member articulates the doubt. |
| **Identity Ownership (Month 6+)** | *"I am a Slam person."* | Tier status, public recognition, peer challenges. Rewards shift from transactional to identity-affirming. |
| **Renewal Moment (Milestone completions)** | Pride, then forward pull — *"What's next?"* | Programme completion triggers the next challenge enrolment *automatically as reward*, not as upsell. |

---

## 2. POINTS AND REWARDS SYSTEM

### Points Currency: **Reps**

*"Reps" is the language of the gym floor — familiar, honest, and impossible to detach from physical effort. Earning Reps feels earned because the word itself implies work done. It also scales naturally: "You've banked 2,400 Reps this month" reads as athletic achievement, not consumer loyalty.*

---

### Earnable Activities (14 Activities)

| # | Activity Name | Emoji | Category | Reps | Description |
|---|---|---|---|---|---|
| 1 | **Show Up** | 🏋️ | Visit | 10 | Attend any session — the base earn, no conditions. |
| 2 | **Plan Ahead** | 📅 | Booking | 15 | Book a session 48+ hours in advance. Rewards commitment, not just attendance. |
| 3 | **Off-Peak Pioneer** | 🌅 | Workout | 20 | Attend a session during designated quiet hours (10am–4pm weekdays). |
| 4 | **PR Unlocked** | 🔥 | Achievement | 75 | Log a personal record on a coached lift, verified by a coach. |
| 5 | **Block Complete** | 🏆 | Challenge | 150 | Finish a full programme cycle (e.g., 8-week strength block). |
| 6 | **Coach Connect** | 🤝 | Training | 25 | Complete a scheduled goal review or check-in session with your coach. |
| 7 | **Slam Form Post** | 📸 | Social | 40 | Tag @SlamFitness in a progress post (verified via linked account, once per week). |
| 8 | **Bring Your Crew** | 👥 | Referral | 100 | A friend completes their first session using your referral code. |
| 9 | **Boot Camp Regular** | ⚡ | Class | 15 | Attend a group boot camp session (additional earn on top of Show Up). |
| 10 | **7-Day Streak** | 🔑 | Streak | 50 | Attend at least once across 7 consecutive days (rest days allowed). |
| 11 | **30-Day Streak** | 🔥 | Streak | 200 | Maintain weekly attendance across 30 consecutive days. |
| 12 | **Challenge Accepted** | ⚔️ | Challenge | 30 | Enrol in a studio challenge event (e.g., 8-week block, seasonal competition). |
| 13 | **Solid Week** | 📊 | Workout | 20 | Complete 4 or more sessions in a single calendar week. |
| 14 | **Early Bird** | 🌄 | Daily | 5 | Attend a session starting at or before 7am. Stackable daily bonus. |

---

### Redeemable Rewards (8 Rewards)

| # | Reward Name | Emoji | Rep Cost | Description |
|---|---|---|---|---|
| 1 | **Guest Pass** | 🎟️ | 200 | Bring a friend for one free session — socially framed, not discounted. |
| 2 | **Slam Kit Credit** | 👕 | 350 | €10 credit toward Slam-branded apparel or accessories. |
| 3 | **Performance Test Session** | 🧪 | 500 | One-on-one coach-led testing session: 1RM assessment, movement screen, or performance benchmarking. |
| 4 | **Programme Upgrade** | 📋 | 400 | Access to a bespoke 4-week advanced programme block designed by a senior coach. |
| 5 | **Recovery Session** | 💆 | 300 | A 45-minute foam rolling and mobility session with a coach — premium quiet-hours slot. |
| 6 | **Protein Bar Bundle** | 🍫 | 150 | A week's supply of Slam-stocked nutrition products. Low-bar, high-frequency redemption. |
| 7 | **Month Free** | 🎁 | 1,500 | One month's membership credited — the aspirational anchor reward. Visible in every member's wallet as a long-term goal. |
| 8 | **Wall of Form Feature** | 🏅 | 600 | Your name and a PR milestone posted to Slam's physical "Wall of Form" in the studio and on social channels. Identity reward, not transactional. |

---

### Tier Levels (Thematic to Slam)

| Tier | Name | Threshold | What Changes |
|---|---|---|---|
| 1 | **Foundation** | 0–499 Reps | Base access. App features unlocked. Streak tracking begins. |
| 2 | **Conditioning** | 500–1,499 Reps | Priority booking window opens 15 minutes earlier. Coach check-in reminders personalised. |
| 3 | **Performance** | 1,500–3,499 Reps | Access to challenge enrolment before general release. 10% Rep bonus on all activities. Coach alert system activates full history view. |
| 4 | **Elite Form** | 3,500+ Reps | Dedicated coach liaison. Invite-only events. Wall of Form eligibility. Rep multiplier (1.2×) on all earned activities. Tier badge visible in class booking to coaches. |

*Tier names track the actual language of a training periodisation plan — the progression feels athletic, not corporate.*

---

## 3. ENGAGEMENT MECHANICS

### Daily / Weekly Challenges

| Challenge | Cadence | Reps | Description |
|---|---|---|---|
| **Hit the Floor** | Daily | 5 | Check in to any session today. One tap, instant reward — keeps daily activation high. |
| **Week of Work** | Weekly | 60 | Complete 3 sessions this week. Resets every Monday. Achievable for Aoife-types, automatic for Síofra-types. |
| **Quiet Hours Hero** | Weekly | 40 | Attend one session during off-peak hours this week. Directly addresses footfall gap. |
| **Form Check** | Weekly | 35 | Log one exercise note or coach interaction this week. Rewards engagement depth, not just attendance. |
| **Crew Challenge** | Monthly | 120 | Both you and a tagged training partner complete 8 sessions this month. Directly defends against Aoife's single-point-of-failure risk. |

---

### Streak Mechanics

**Design principle:** Streaks at Slam track *weekly* attendance, not daily — because legitimate rest days should not break a streak. A member who trains Tuesday, Thursday, and Saturday has not failed to be consistent.

**7-Day Streak (one session per week for 7 consecutive days rolling):**
- Earns 50 bonus Reps
- Unlocks a streak flame 🔥 on profile visible to coaches in the booking system
- Sends a coach notification: *"[Name] is on a 7-day streak — worth acknowledging in class."*

**30-Day Streak (consistent weekly attendance across 4 rolling weeks):**
- Earns 200 Reps
- Tier progress accelerated — streak days count at 1.5× toward tier threshold
- Unlocks a "Streak Shield" — one missed week within the next 30 days will not break the streak (one-use protection, communicated warmly as *"You've earned a rest week."*)
- Personal progress summary auto-generated and sent to member: lift totals, sessions attended, rep volume — framed as evidence of progress, timed specifically at the plateau risk window

---

### Social and Referral Mechanics

**Referral Flow:**
1. Member receives a unique **Crew Code** in-app (e.g., SIOFRAX7)
2. Friend enters Crew Code at first session booking — no friction, no app required for the friend initially
3. Referrer earns **100 Reps** when the friend completes their first session
4. Referrer earns an additional **50 Reps** if the friend books a second session within 14 days — incentivises the referrer to *actually introduce* the friend rather than just pass a code
5. New member earns a **25 Rep welcome bonus** — they arrive with status, not zero

**Crew Challenge:**
- Members can form a named crew of 2–4 people in-app
- Monthly collective challenges generate bonus Reps for all crew members when the group goal is met
- Crew leaderboard visible in-app — social pressure is positive and opt-in
- *Specifically designed for Aoife: her dependency on Niamh becomes a mutual dependency, and the system introduces crew challenges that naturally incorporate a third and fourth member, diluting the single-point-of-failure risk.*

---

### Surprise and Delight Moments (3 Triggers)

1. **The Comeback Welcome**
   *Trigger:* A member returns after a 10+ day absence and attends a session.
   *Response:* Immediate push notification: *"Good to have you back, [Name]. Your coaches noticed."* + 30 bonus Reps credited instantly, no explanation required. The warmth lands before they leave the building.

2. **The Silent PR Celebration**
   *Trigger:* A coach logs a member PR in the system.
   *Response:* The member's app home screen transforms — their PR stat is displayed full-bleed with a 🔥 animation and the message *"New personal record. This is what Form looks like."* The moment is cinematic, not incremental. Reps arrive, but the visual moment is the actual reward.

3. **The Loyalty Anniversary**
   *Trigger:* Member anniversary (6 months, 1 year, 2 years).
   *Response:* Personalised message from the studio with a summary of their entire training history — total sessions, estimated total weight lifted, first ever logged PR vs. most recent. Signed off with *"Slam's better because you train here."* + 100 Reps. Framed as a record of who they've become, not a coupon.

---

## 4. AI PERSONALISATION LAYER

### Activity Recommendations by Persona

**Síofra (The Anchor — high-frequency, coach-bonded):**
The AI monitors her anchor session (Tuesday 6am, Thursday 6am pattern) and compares weekly booking behaviour against her personal 8-week rolling baseline. If booking frequency drops below baseline for 5 consecutive days, the system fires a **Coach Alert** (see below). Recommended activities surface in her app in this order: streak continuation, coach check-in (when last check-in was 10+ days ago), and any PR-linked challenges relevant to her current programme phase. The AI never surfaces off-peak incentives to Síofra — she already has a fixed schedule, and disrupting it adds friction.

**Ciarán (The Performer — goal-rational, programme-sensitive):**
The AI tracks programme diversity — specifically whether his logged class types and coaching interactions indicate meaningful programme evolution over an 8-week rolling window. If stagnation is detected (same class types, no new coach notes, no new programme phase logged), it surfaces a **Programme Refresh** prompt directly from his coach: *"Ciarán — your block is due for a review. Want to schedule a performance test this week?"* Recommended activities for Ciarán foreground Challenge Accepted, PR Unlocked, and Performance Test Session redemption. Rewards are framed in capability language, never discount language.

**Aoife (The Community Floater — socially mediated, low individual bond):**
The AI maps her social graph — specifically her attendance correlation with Niamh. If Niamh's attendance drops below 50% of her personal baseline in any given week, Aoife receives a proactive class invitation within 48 hours, *before her own attendance is affected*. Recommended activities for Aoife foreground Crew Challenge, Bring Your Crew, and Boot Camp Regular. The system gradually surfaces challenges that include a third social connection, building a diversified social anchor over 60–90 days.

---

### AI-Generated Personalised Offers

**Low-Turnover Day Promotions:**
The system identifies Slam's three quietest booking slots per week in real time. Members who have not yet booked for those slots and who have attended similar time slots before receive a targeted push: *"Quiet morning at the studio — your kind of session. Extra 10 Reps if you book by tonight."* The offer is time-limited (expires midnight), volume-capped (offered to maximum 8 members per slot to avoid overcrowding), and never framed as a discount — always framed as an exclusive access moment.

**Milestone Proximity Nudge:**
When a member is within 50 Reps of a reward threshold or tier boundary, the AI surfaces a specific achievable activity that would close the gap in one session: *"You're 30 Reps from Performance tier. An off-peak session tomorrow would get you there."* This is precision motivation, not generic encouragement.

**Programme Re-enrolment Timing:**
The AI identifies when a member is in Week 6–7 of an 8-week block (the highest churn-risk window, when the sunk cost is high but the end is near and "what's next?" anxiety sets in). It pre-emptively surfaces the next programme block with personalised framing: *"You're two weeks from completing your block. Your coach has already recommended your next phase."*

---

### Churn Prediction and Intervention Signals

The AI monitors the following composite signal stack:

| Signal | Threshold | Weight |
|---|---|---|
| Booking frequency vs. personal baseline | Drop below 50% for 5 days | High |
| Anchor session missed without rebooking | Single occurrence | High |
| Group class → solo floor attendance shift | Observed across 2+ consecutive visits | Medium |
| Coach interaction gap | 14+ days since last logged check-in | Medium |
| Social partner (crew) attendance drop | Training partner below 50% baseline | Medium |
| App engagement | No app opens for 7 days | Low |
| Last PR logged | 45+ days with no PR or progress note | Low |

**When 2+ Medium signals or 1 High signal fires:**
→ Coach Alert dispatched: contextual, named, and specific. Not a generic retention email.
Example: *"Ciarán hasn't booked since Monday — his usual pattern is 4× this week. Last programme note: bulk phase, week 7. May be approaching a transition point."*

**When 1 High signal fires for a Foundation/Conditioning tier member:**
→ Surprise and Delight trigger fires automatically (Comeback Welcome) alongside coach alert, so the intervention lands as warmth rather than surveillance.

---

## 5. USER INTERFACE FLOWS

### Customer Dashboard — Home Screen

**Layout (top to bottom):**

1. **Header Strip** — Member name + tier badge (e.g., "Ciarán · Performance ⚡"). Tier badge glows in the primary colour.
2. **Rep Balance Card** — Large, centred display of total Reps with a ring progress bar showing distance to next tier.


---


## Agent 3: Maker

**Role:** Build the product — technical craftsmanship and rapid prototyping
**Output file:** `03_prototype_plan.md`
**Word count:** 1,677

# LoyaltyOS — SLAM FORM Technical Build Specification

**Platform:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Claude AI (Anthropic SDK)
**Prepared by:** Maker Agent · LoyaltyOS Platform
**Target Client:** Slam Fitness, Stoneybatter, Dublin 7

---

## TABLE OF CONTENTS

1. [Component Inventory](#1-component-inventory)
2. [Data Models](#2-data-models)
3. [Business Config System](#3-business-config-system)
4. [Claude AI Integration](#4-claude-ai-integration)
5. [Mini-Game Spec](#5-mini-game-spec)
6. [Deployment Checklist](#6-deployment-checklist)

---

## 1. COMPONENT INVENTORY

### 1.1 Layout Components

---

#### `AppShell`
**File:** `src/components/layout/AppShell.tsx`

```typescript
interface AppShellProps {
  config: BusinessConfig;
  customer: Customer;
  children: React.ReactNode;
  activePage: 'home' | 'earn' | 'rewards' | 'crew' | 'profile';
}
```

**Behaviour & State:**
- Renders the persistent bottom navigation bar and top header strip
- Injects CSS custom properties from `config.theme` onto `:root` at mount, enabling full white-label theming
- Manages mobile viewport height via `--vh` CSS variable (avoids iOS Safari bottom-bar collapse)
- Active page highlighted in bottom nav using `activePage` prop
- No internal state — purely presentational shell driven by props

**Design Spec:** Implements the persistent navigation frame referenced across all dashboard screens

---

#### `HeaderStrip`
**File:** `src/components/layout/HeaderStrip.tsx`

```typescript
interface HeaderStripProps {
  customerName: string;
  tier: TierLevel;
  tierConfig: TierConfig;
  onProfileTap: () => void;
}
```

**Behaviour & State:**
- Displays member name and tier badge side by side
- Tier badge pulses with a CSS keyframe glow animation using `tierConfig.primaryColour`
- Tapping the badge triggers a micro-interaction: badge scales to 1.15× then returns over 200ms
- `onProfileTap` routes to `/profile`

**Design Spec:** Design Spec §5 — "Header Strip — Member name + tier badge"

---

### 1.2 Dashboard Components

---

#### `RepBalanceCard`
**File:** `src/components/dashboard/RepBalanceCard.tsx`

```typescript
interface RepBalanceCardProps {
  currentReps: number;
  nextTierThreshold: number;
  currentTierName: string;
  nextTierName: string;
  repsCurrencyLabel: string; // "Reps" for Slam, configurable per business
  onCardTap: () => void;
}
```

**Behaviour & State:**
- Local state: `animatedReps: number` — on mount, counts up from 0 to `currentReps` over 1.2s using `requestAnimationFrame` easing (ease-out cubic). Makes the balance feel earned on every visit.
- SVG ring progress bar: `strokeDashoffset` calculated as `circumference × (1 - progress)` where `progress = currentReps / nextTierThreshold`
- Ring colour interpolates between `tierConfig.primaryColour` and `tierConfig.accentColour` based on progress percentage
- Tap opens an animated drawer showing tier benefit summary
- Inner state: `isDrawerOpen: boolean`

**Design Spec:** Design Spec §5 — "Rep Balance Card — Large, centred display of total Reps with ring progress bar"

---

#### `ActivityFeed`
**File:** `src/components/dashboard/ActivityFeed.tsx`

```typescript
interface ActivityFeedProps {
  recentActivities: ActivityRecord[];
  repsCurrencyLabel: string;
  maxItems?: number; // default 5
}
```

**Behaviour & State:**
- Renders a vertically scrollable list of recent activity completions
- Each item has an enter animation: slides in from right with opacity 0→1, staggered by index × 80ms
- Items group by date using a `useMemo` date-grouping function
- New activities (completedAt within last 2 hours) render with a pulsing green dot indicator
- No pagination — truncated to `maxItems`, with "View all" link to `/profile/history`

**Design Spec:** Supports the activity history element of the member dashboard

---

#### `StreakTracker`
**File:** `src/components/dashboard/StreakTracker.tsx`

```typescript
interface StreakTrackerProps {
  currentStreak: number; // weeks
  streakShieldActive: boolean;
  lastSessionDate: string; // ISO 8601
  weeklyAttendanceThisStreak: WeeklyAttendance[];
  onStreakTap: () => void;
}

interface WeeklyAttendance {
  weekStarting: string; // ISO 8601 Monday
  sessionsAttended: number;
  qualified: boolean; // ≥1 session = streak week
}
```

**Behaviour & State:**
- Renders a horizontal row of week bubbles (filled/empty/shield-protected)
- Flame emoji 🔥 displayed with CSS scale animation when `currentStreak >= 7`
- If `streakShieldActive`, the next unfilled bubble renders with a shield icon and gold border
- State: `showStreakDetail: boolean` — tapping opens a modal with full streak history
- Motivational copy updates based on streak length: 0–2 weeks = "Build your base", 3–6 = "Momentum building", 7+ = "You're on fire 🔥"

**Design Spec:** Design Spec §3 — Streak Mechanics

---

#### `ChallengeCard`
**File:** `src/components/dashboard/ChallengeCard.tsx`

```typescript
interface ChallengeCardProps {
  challenge: ActiveChallenge;
  onEnrol: (challengeId: string) => Promise<void>;
  onViewProgress: (challengeId: string) => void;
  isEnrolled: boolean;
}

interface ActiveChallenge {
  id: string;
  name: string;
  description: string;
  cadence: 'daily' | 'weekly' | 'monthly';
  repsReward: number;
  repsCurrencyLabel: string;
  targetCount: number;
  currentProgress: number;
  expiresAt: string; // ISO 8601
  emoji: string;
}
```

**Behaviour & State:**
- Progress bar fills from left to right: `width = (currentProgress / targetCount) * 100%`
- Enrol button shows loading spinner during `onEnrol` async call
- On completion (`currentProgress >= targetCount`): card background transitions to a celebratory gradient, confetti particle burst fires (CSS-only, 12 pseudo-elements)
- Countdown timer updates every minute via `useEffect` interval showing time remaining
- State: `enrolling: boolean`, `justCompleted: boolean`

**Design Spec:** Design Spec §3 — Daily/Weekly Challenges table

---

#### `PersonalisedSuggestions`
**File:** `src/components/dashboard/PersonalisedSuggestions.tsx`

```typescript
interface PersonalisedSuggestionsProps {
  customerId: string;
  businessConfig: BusinessConfig;
  customerProfile: Customer;
  onActivitySelect: (activityId: string) => void;
}
```

**Behaviour & State:**
- On mount, fires `POST /api/personalise` with customer profile + business config
- State: `suggestions: AISuggestion[] | null`, `loading: boolean`, `error: string | null`
- Loading state: three skeleton cards with shimmer animation
- Each suggestion card shows: activity name, emoji, rep value, and a one-line AI-generated reason string
- Reason text renders with a subtle typewriter effect (character-by-character reveal, 30ms per char) to signal AI provenance
- Error state: falls back to static top-3 activities by `defaultPriority` from business config

**Design Spec:** Design Spec §4 — AI Personalisation Layer

---

#### `DynamicOfferBanner`
**File:** `src/components/dashboard/DynamicOfferBanner.tsx`

```typescript
interface DynamicOfferBannerProps {
  businessConfig: BusinessConfig;
  currentDateTime: string; // ISO 8601
  isLowTurnoverSlot: boolean;
  onOfferClaim: (offerId: string) => Promise<void>;
}
```

**Behaviour & State:**
- On mount, fires `POST /api/offers`
- State: `offers: DynamicOffer[] | null`, `loading: boolean`, `claimedOfferIds: Set<string>`
- Renders as a horizontally swipeable carousel (touch events + mouse drag)
- Each offer card has a countdown timer to `validUntil`
- Claimed offers show a checkmark animation and are greyed out but remain visible
- State: `currentSlide: number`, `isDragging: boolean`, `dragStartX: number`

**Design Spec:** Design Spec §4 — AI-Generated Personalised Offers

---

### 1.3 Rewards Components

---

#### `RewardsWallet`
**File:** `src/components/rewards/RewardsWallet.tsx`

```typescript
interface RewardsWalletProps {
  availableReps: number;
  rewards: Reward[];
  redeemedRewards: RedeemedReward[];
  repsCurrencyLabel: string;
  onRedeem: (rewardId: string) => Promise<RedemptionResult>;
}

interface RedemptionResult {
  success: boolean;
  confirmationCode?: string;
  errorMessage?: string;
}
```

**Behaviour & State:**
- State: `activeTab: 'available' | 'redeemed'`, `redeemingId: string | null`, `confirmationModal: RedemptionResult | null`
- Rewards sorted: affordable (reps ≤ available) first, then by rep cost ascending
- Affordable rewards render with full colour; unaffordable render at 60% opacity with "X more Reps needed" label
- The anchor reward (Month Free / highest cost) always renders last with a distinct "Goal Reward" badge regardless of affordability
- On redeem: confirmation modal shows with 3-second countdown before finalising (allows accidental-tap cancellation)

**Design Spec:** Design Spec §2 — Redeemable Rewards

---

#### `RewardCard`
**File:** `src/components/rewards/RewardCard.tsx`

```typescript
interface RewardCardProps {
  reward: Reward;
  availableReps: number;
  repsCurrencyLabel: string;
  onRedeem: () => void;
  isRedeeming: boolean;
  isGoalReward: boolean;
}
```

**Behaviour & State:**
- Purely presentational with redeem button state management lifted to `RewardsWallet`
- `isGoalReward` renders a distinct card style: gradient border, star badge, slightly larger card
- Rep cost displayed as `{cost} {repsCurrencyLabel}` — white-label safe

**Design Spec:** Design Spec §2 — Redeemable Rewards table

---

### 1.4 Social Components

---

#### `CrewPanel`
**File:** `src/components/social/CrewPanel.tsx`

```typescript
interface CrewPanelProps {
  crew: CrewMember[];
  crewCode: string;
  monthlyChallenge: CrewChallenge | null;
  onInvite: () => void;
  onViewLeaderboard: () => void;
}

interface CrewMember {
  id: string;
  displayName: string;
  avatarInitials: string;
  sessionsThisMonth: number;
  isAtRisk: boolean; // attendance below 50% of their baseline
}

interface CrewChallenge {
  id: string;
  name: string;
  targetSessions: number;
  completedSessions: number;
  bonusReps: number;
  expiresAt: string;
  repsCurrencyLabel: string;
}
```

**Behaviour & State:**
- At-risk crew members (low attendance) highlighted with a gentle amber indicator — no alarming language, framed as "check in with them"
- Crew code displayed with one-tap copy-to-clipboard + share sheet trigger
- State: `copiedCode: boolean` — shows "Copied!" for 2 seconds after tap
- Monthly challenge progress bar aggregates all crew member sessions

**Design Spec:** Design Spec §3 — Social and Referral Mechanics, Crew Challenge

---

### 1.5 Notification / Delight Components

---

#### `SurpriseDelightToast`
**File:** `src/components/notifications/SurpriseDelightToast.tsx`

```typescript
interface SurpriseDelightToastProps {
  trigger: 'comeback' | 'pr_celebration' | 'anniversary';
  memberName: string;
  bonusReps: number;
  repsCurrencyLabel: string;
  customMessage?: string;
  prStat?: PRStat; // required if trigger === 'pr_celebration'
  onDismiss: () => void;
}

interface PRStat {
  exerciseName: string;
  newRecord: string; // e.g. "140kg"
  previousRecord: string;
  improvementPercent: number;
}
```

**Behaviour & State:**
- For `pr_celebration`: full-screen overlay, PR stat displayed full-bleed, 🔥 SVG flame animation loops 3 times, then auto-scales to bottom-sheet style
- For `comeback`: slides up from bottom, warm amber background, auto-dismisses after 6 seconds
- For `anniversary`: full-screen celebration with confetti burst (CSS custom property driven colours), scrollable history summary
- State: `phase: 'entering' | 'displaying' | 'exiting'`, managed by a state machine using `useReducer`

**Design Spec:** Design Spec §3 — Surprise and Delight Moments

---

#### `CoachAlertBadge`
**File:** `src/components/notifications/CoachAlertBadge.tsx`

```typescript
interface CoachAlertBadgeProps {
  alerts: CoachAlert[];
  onAlertRead: (alertId: string) => void;
}

interface CoachAlert {
  id: string;
  memberName: string;
  alertType: 'booking_drop' | 'anchor_missed' | 'programme_transition' | 'coach_gap' | 'social_risk';
  contextMessage: string; // AI-generated contextual message
  triggeredAt: string;
  isRead: boolean;
}
```

**Behaviour & State:**
- **This component is coach-facing, not member-facing**
- Renders in a coach admin sidebar panel
- Unread alerts show red badge count on nav icon
- Each alert expands to show the full contextual AI message
- State: `expandedAlertId: string | null`

**Design Spec:** Design Spec §4 — Churn Prediction and Intervention Signals

---

### 1.6 Earn Screen Components

---

#### `ActivityGrid`
**File:** `src/components/earn/ActivityGrid.tsx`

```typescript
interface ActivityGridProps {
  activities: ActivityDefinition[];
  completedActivityIds: string[];
  repsCurrencyLabel: string;
  onActivityInfo: (activityId: string) => void;
}

interface ActivityDefinition {
  id: string;
  name: string;
  emoji: string;
  category: ActivityCategory;
  repValue: number;
  description: string;
  completionType: 'automatic' | 'coach_verified' | 'self_log';
  weeklyCapCount?: number; // e.g. Slam Form Post = once per week
  defaultPriority: number;
}
```

**Behaviour & State:**
- Grid layout: 2 columns on mobile, 3 on tablet
- Activities filter by category via a horizontally scrollable pill filter row
- Completed activities show a checkmark overlay with rep value strikethrough
- State: `activeFilter: ActivityCategory | 'all'`
- `completionType === 'coach_verified'` activities show a small coach icon — sets correct expectation

**Design Spec:** Design Spec §2 — Earnable Activities (14


---


## Agent 4: Communicator

**Role:** Get the customers — persuasion and storytelling
**Output file:** `04_marketing_copy.md`
**Word count:** 2,515

# LoyaltyOS × Slam Fitness — Communications Package

**Prepared by:** Communicator Agent · LoyaltyOS Platform
**Client:** Slam Fitness, Stoneybatter, Dublin 7

---

## 1. PLATFORM POSITIONING

---

### One-Line Value Proposition (LoyaltyOS selling to businesses)

> **LoyaltyOS turns the relationships your best coaches already have into a retention system that works even when they're not in the room.**

---

### Tagline for Slam Fitness's Loyalty Programme

> **SLAM FORM — Every session counts. Especially the one you almost skipped.**

*Design note: "SLAM FORM" works as a double meaning — the platform name and a genuine coaching cue. It positions the programme as part of training culture, not a marketing layer on top of it.*

---

### Key Messages by Persona

---

#### Síofra — The Anchor

1. **"Your progress is visible here, even on the days it doesn't feel like it."**
*Speaks to her identity investment and the plateau vulnerability. Data makes invisible progress tangible.*

2. **"Your coaches know where you've been. Now the platform does too."**
*Reassures her that the relationship intelligence she depends on isn't fragile anymore — it's systematic.*

3. **"You've built something real at Slam. SLAM FORM makes sure no one loses track of it."**
*Addresses her risk of coach-dependency by positioning the system as a continuity mechanism, not a replacement.*

---

#### Ciarán — The Performer

1. **"Your programme should be ahead of you — not catching up."**
*Speaks directly to his stagnation trigger. Positions the system as proactively serving his development, not just recording it.*

2. **"Points are fine. Unlocking your next performance block is better."**
*Signals that rewards at Slam aren't discounts and supermarket stamps. They're capabilities. Appeals to his rational, results-first outlook.*

3. **"SLAM FORM tracks what matters: where you are now vs. where you were. Nothing else."**
*Speaks to his auditable loyalty — he needs to see that the system is built around performance data, not engagement manipulation.*

---

#### Aoife — The Community Floater

1. **"Training is more fun when you're in it together. SLAM FORM is built for that."**
*Centres the social ritual, not the fitness outcome. Meets her where she actually is.*

2. **"Bring Niamh. Earn together. It's literally more rewarding when you come as a pair."**
*Directly protects against her single-point-of-failure risk by making the social bond part of the reward structure.*

3. **"You don't have to be obsessed with the gym to belong here. You just have to show up."**
*Low-pressure framing that respects her 2x-per-week reality and validates it without pushing her toward Síofra's commitment level.*

---

---

## 2. ONBOARDING SEQUENCE

---

### a) Welcome Message — First App Open

**Targets:** All three personas, with Síofra's identity investment as the emotional anchor

---

```
WELCOME TO SLAM FORM

Hey [First Name] — you're in.

This is how Slam keeps track of your journey, 
makes sure your coaches know where you're at, 
and (occasionally) gives you something back for 
the work you're putting in.

No gimmicks. No "spin the wheel for a free 
protein bar." Just your training, made visible.

You earn Reps for the things you're probably 
already doing — showing up, booking ahead, 
hitting personal bests, bringing friends along.

Your coaches can see your progress. You can 
see your progress. And we'll flag it when 
something worth celebrating happens.

That's it.

→ Let's set up your profile
   (takes 90 seconds, makes everything better)
```

---

**Tone notes:** Direct, no fluff, treats the member as an adult. "No spin the wheel" pre-empts Ciarán's scepticism. "Your coaches can see your progress" signals transparency upfront — crucial for trust architecture.

---

### b) First Reward Earned Notification

**Primary persona targeted: Aoife — The Community Floater**
*(First rewards are most likely triggered by attendance or a booking action — the lowest-friction activities. Aoife is most at risk of not returning after session 1–2, so this message does the most work here.)*

---

```
Push notification:
"You just earned your first Reps at Slam 💪"

───────────────────────────────────────

In-app message (on tap):

FIRST REPS. GOOD START.

You've just picked up [X] Reps for [Activity Name].

Not a big deal yet — but these add up fast, 
especially when you're training with someone 
else. Bring a mate next session and you'll both 
earn bonus Reps just for showing up together.

Your balance: [X] Reps
Next milestone: [Y] Reps — [Tier Name]

The [Tier Name] tier unlocks [specific benefit]. 
You're [Z] sessions away if you keep the 
current pace.

See you on the floor.
— The Slam team
```

---

**Tone notes:** "Not a big deal yet" is intentional — it avoids the hollow over-celebration of most loyalty apps that treats a first click like a moon landing. It respects Ciarán's BS detector while still being warm for Aoife. The friend nudge is embedded naturally, not as a pushy referral ask.

---

### c) 7-Day (1-Week) Streak Congratulation Message

**Primary persona targeted: Síofra — The Anchor**
*(Streak mechanics resonate most with members who have existing consistency. Síofra's training log is the most consistent in the building — this message rewards her identity, not just her behaviour.)*

---

```
Push notification:
"One full week. Every single session. 🔥"

───────────────────────────────────────

In-app message (on tap):

SEVEN DAYS.

That's a full week without a reason good 
enough to skip.

You've trained [X] times this week. You've 
earned [Y] Reps. And your streak is alive.

We know you're not doing this for the points.
But the points notice.

Here's what stood out this week:
✓ [Most recent activity — e.g. "Deadlift 
   session, Thursday 6am"]
✓ [Streak bonus — e.g. "+25 bonus Reps 
   for 7-day streak"]
✓ [Progress note if available — e.g. 
   "Coaches have flagged progress on your 
   programme this week"]

Your streak is protected by a Streak Shield 
this week — one missed week won't break it.

Keep going.
— The Slam team

P.S. Your coach [Name] has been watching 
your form. Literally. (That's their job.)
```

---

**Tone notes:** "We know you're not doing this for the points. But the points notice." — this line is specifically for Síofra. It acknowledges her intrinsic motivation while giving the extrinsic reward its rightful place: secondary, not primary. The PS humanises the coach relationship without being sentimental.

---

---

## 3. OFFER COPY TEMPLATES

---

### Offer 1 — Low Turnover Day Promotion (Tuesday Night)

**Primary persona targeted: Ciarán — The Performer**
*(He trains evenings. He's goal-oriented. A quieter floor is a feature for him, not a consolation.)*

---

```
HEADLINE:
Tuesday nights hit different.

BODY COPY:
Quieter floor. Same coaches. More time under 
the bar.

Train at Slam this Tuesday between 7pm–9pm 
and earn double Reps on every activity you 
log. That means your session, your 
post-session coach check-in, your early 
booking — all of it counts twice.

Peak hours are great for energy. Off-peak 
is great for work.

TUESDAY DOUBLE REP NIGHT
This Tuesday · 7pm–9pm · Slam Fitness

CTA:
→ Book Tuesday's session (takes 30 seconds)

URGENCY HOOK:
Double Reps are capped at the first 20 
members who book. Slots are already moving.
```

---

**Design note:** "More time under the bar" is a direct speak to Ciarán's programming focus. The cap creates genuine urgency without manufactured scarcity — it's operationally real (quiet sessions have capacity limits).

---

### Offer 2 — Tier Upgrade Celebration Offer

**Primary persona targeted: Síofra — The Anchor**
*(Tier progression is most meaningful to members with long tenure and identity investment. This is Síofra's moment.)*

---

```
HEADLINE:
You've just become a [New Tier Name].

BODY COPY:
This didn't happen overnight.

You've put in [X] sessions, logged [Y] Reps, 
and according to [Coach Name], you've been 
one of the most consistent people on this 
floor for the past [Z] months.

[New Tier] means [specific benefit — e.g. 
"priority booking on all peak slots"]. It 
also means a one-off celebration offer, 
because you've earned something that's 
actually worth celebrating.

This week only: bring a friend to any class 
for free. No strings. They don't need to 
join. They just need to show up with you.

Because that's how you got here.

CTA:
→ Claim your guest pass now

URGENCY HOOK:
Your guest pass expires in 7 days. After 
that, it's gone — your next tier is a 
long way off, so use this one.
```

---

**Tone notes:** "This didn't happen overnight" is the emotional core. It validates the work, not just the milestone. The friend invite is positioned as a reward Síofra shares, which reinforces her social identity at Slam. The urgency hook is honest — tier upgrades are genuinely infrequent events.

---

### Offer 3 — Win-Back Offer (14 Days Inactive)

**Primary persona targeted: Aoife — The Community Floater**
*(14 days of absence is most dangerous for Aoife — she has no individual relationship with the gym to pull her back. This message needs to re-establish that social hook fast.)*

---

```
HEADLINE:
The Tuesday crew has been asking about you.

BODY COPY:
Not in a weird way. Just — you haven't been 
in a while, and these things get noticed.

Life gets in the way. We know. No lecture.

But here's the thing: your [X]-week streak is 
still sitting there. Your Reps haven't gone 
anywhere. And Niamh's [or: a few of your 
regular crew are] still showing up on 
Thursdays.

Come back this week and we'll add 50 bonus 
Reps to your account. No conditions. 
Just book a class, show up, and they're yours.

It's genuinely good to have you here.

CTA:
→ Book a class this week

URGENCY HOOK:
The 50 bonus Reps are available until 
[Date — 5 days from send]. After that, 
they expire. But your spot in the class 
doesn't — we always have room for you.
```

---

**Tone notes:** "Not in a weird way" disarms the surveillance concern. "No lecture" is critical — Aoife is the most likely to feel guilty after absence, and guilt is the enemy of re-engagement. Using Niamh's name (if available in social graph data) makes this feel like a message from a person, not a system. The final line — "we always have room for you" — is specifically crafted to counter the social anxiety of returning after absence.

---

---

## 4. BUSINESS SALES PITCH

**LoyaltyOS selling to boutique fitness studios like Slam**

---

### The Problem

Every good gym owner knows their members by name, and at first that feels like the whole job. But somewhere around 150–200 members, knowing names isn't enough. You start losing people you never saw coming — the ones who were training five days a week and then, quietly, weren't. You find out three weeks after they cancelled. You find out when your coach mentions it in passing, or when you notice the direct debit has stopped. By then, the decision was made weeks ago, probably when their training partner left or their programme started to feel like it was going nowhere. There was a moment — a specific, predictable moment — when they were still yours to keep. You just didn't have a system that could see it.

---

### The Solution

SLAM FORM is a loyalty and retention platform built specifically for studios where the coach relationship is the product. It doesn't replace what you already do well — it operationalises it. The system watches for the behavioural signals that precede cancellation: a member stops booking ahead, misses their anchor session, drifts from group classes to solo sessions. When those signals appear, the right coach gets a contextual alert — not a generic email report, but a specific message: *"Síofra hasn't booked since Tuesday. Her usual pattern is 5x this week. Last note: deadlift plateau flagged."* The coach sends a message. The member feels seen. That's not automation replacing a human relationship — that's automation making human relationships scalable. On top of that, the member-facing app rewards the behaviours that build the habits you need: early booking, consistency, coach engagement, bringing friends. And because it's built on LoyaltyOS's white-label infrastructure, the whole thing carries your brand, your name, and your voice — not ours.

---

### Social Proof

Studios like Slam that implement LoyaltyOS typically see a measurable shift in two areas within the first 90 days: a reduction in silent churn — members who leave without a conversation — and an increase in off-peak attendance driven by targeted incentives. *(Client case study to be inserted here: e.g. "One Dublin studio reduced 90-day churn by 23% after deploying pre-churn coach alerts in their first quarter. Their head coach described it as 'the thing I always wanted to do manually, finally running itself.'")* The studios that see the strongest results are those where coaches adopt the alert system quickly — because the technology is only as good as the human on the other end of it.

---

### Call to Action

> **Book a 30-minute walkthrough. We'll show you exactly what SLAM FORM would look like for your studio — your branding, your member data model, your coach workflow. No deck. No demo theatre. Just the real thing.**
>
> → [Schedule a call with the LoyaltyOS team]

---

---

## 5. TRUST AND ETHICS MESSAGING

**In-app privacy notice — plain language**

---

```
YOUR DATA AT SLAM FORM
─────────────────────────────────────

WHAT WE COLLECT AND WHY

We collect three types of information, and 
we want to be clear about each one:

1. HOW YOU USE THE GYM
   Things like when you book sessions, 
   whether you attend, what class types 
   you prefer, and how often you train. 
   We use this to make sure your rewards 
   are relevant and to help your coaches 
   understand your training patterns.

2. YOUR PROGRESS (if you choose to share it)
   Things like personal bests, programme 
   milestones, and goal check-ins. This is 
   entirely opt-in. You can use SLAM FORM 
   fully without sharing any of this. If you 
   do share it, your coaches can use it to 
   give you better support — and the app 
   uses it to surface the right challenges 
   and rewards for where you actually are 
   in your training.

3. YOUR CONNECTIONS
   If you refer friends or train as a crew, 
   we track those connections to enable 
   crew challenges and referral rewards. 
   We only create this social map with 
   explicit consent from everyone involved.

We do not sell your data.
We do not share it with advertisers.
We do not use it for any purpose outside 
making your experience at Slam better.


HOW THE AI WORKS

SLAM FORM uses AI to do two things:

First, it suggests activities and offers 
that are relevant to how you actually 
train — not generic promotions sent to 
everyone. If you always train in the 
evenings, you won't get 6am offers.

Second — and we want to be upfront about 
this — it watches for patterns that might 
suggest you're losing momentum. Things 
like a drop in your usual booking 
frequency, or missing a session you 
almost never skip. When that happens, 
the system flags it to your coach, who 
may reach out personally.

We're telling you this because we think 
you should know how it works. Most 
members find it reassuring — it


---


## Agent 5: Manager

**Role:** Run the business — leadership and orchestration
**Output file:** `05_executive_summary.md`
**Word count:** 2,682

# LoyaltyOS Internal Management Report & Customer Governance Document
## Slam Fitness — SLAM FORM Programme
### Manager Agent Synthesis

---

# SECTIONS 1–6: INTERNAL MANAGEMENT REPORT

---

## 1. EXECUTIVE SUMMARY

Slam Fitness has a retention problem that no stamp card can solve. Members don't leave because they stop caring — they leave because the studio can't detect the early warning signs of disengagement fast enough to intervene. A coach who knows every member by name is a competitive advantage, but it's also a single point of failure: one schedule change and that relationship intelligence disappears.

What has been built is a coaching memory system with rewards attached. Called SLAM FORM, it earns members points ("Reps") for behaviours that genuinely matter — booking in advance, completing programme blocks, engaging with coaches, training with friends. It uses AI to watch for the quiet signals that precede cancellation and alerts the right coach before the member has mentally left. It rewards consistency rather than just attendance, and it makes the coach-member relationship scalable beyond what any individual coach can hold in their head.

Three retention problems are directly addressed: the progress plateau vulnerability (AI surfaces evidence of progress at exactly the moment doubt sets in), the social dependency risk (crew mechanics reduce single-partner dependency), and the quiet-hours footfall gap (targeted off-peak incentives create new attendance patterns).

**The single most important thing the business owner must do before launch:** Complete a GDPR-compliant consent framework and Data Protection Impact Assessment. The system processes behavioural and potentially health-adjacent data. Without this in place, the programme cannot legally operate in Ireland.

---

## 2. PIPELINE QUALITY REVIEW

**Researcher: 9/10** — Exceptional diagnostic specificity; the five named churn signals, three sharply differentiated personas, and the distinction between "rewarding showing up" versus "rewarding not stopping" are genuine strategic contributions that correctly anchor every downstream decision. Minor gap: the GDPR special category data concern (Article 9) is raised but not fully resolved — the recommendation to store health-adjacent data "in aggregated or anonymised form" is underspecified and may conflict with the personalisation model's need for individual-level data. — **APPROVED**

**Designer: 8/10** — The SLAM FORM concept is coherent, the "Reps" currency earns its keep linguistically, and the tier naming is genuinely on-brand rather than generic. The emotional journey mapping across retention stages is the strongest design work in the pipeline. Two concerns: (1) the `DynamicOfferBanner` countdown timer on offer expiry is a potential EU AI Act red flag — the Researcher explicitly warned against mechanics that exploit loss aversion, and a visible countdown is precisely that mechanic; this requires a design decision before launch. (2) The Design Spec is truncated — Section 5 (UI Flows) ends mid-sentence. Whether this reflects an incomplete handoff or an editing artefact, it creates a gap the Maker had to bridge without confirmed specification. — **APPROVED with noted caveat on countdown timer**

**Maker: 8/10** — The component inventory is technically thorough and well-typed. The white-label architecture is correctly implemented via the `BusinessConfig` injection pattern. The `CrewPanel` component's `isAtRisk` flag — which exposes one member's attendance data to other crew members — is a GDPR concern that the Maker has not flagged and the Designer did not specify. This must be resolved before launch. The `CoachAlertBadge` contextual messages are described as "AI-generated" but the privacy notice does not adequately address the Article 22 automated decision-making implications of the churn prediction system. The build spec is otherwise internally consistent with the design spec. — **APPROVED with named GDPR flag on CrewPanel**

**Communicator: 9/10** — The persona-specific copy is the strongest in the pipeline. "We know you're not doing this for the points. But the points notice" is the best line in the entire output — it handles Síofra's intrinsic motivation and Ciarán's scepticism simultaneously. The win-back message for Aoife is correctly calibrated against her guilt-avoidance psychology. One material concern: the in-app privacy notice is truncated — it ends mid-sentence ("Most members find it reassuring — it"). This is not a cosmetic issue; a partial privacy notice is a compliance failure, not a copywriting note. It must be completed before the programme goes live. — **APPROVED, with privacy notice completion as a pre-launch blocker**

---

### Verdict Summary

| Agent | Score | Status |
|---|---|---|
| Researcher | 9/10 | APPROVED |
| Designer | 8/10 | APPROVED — countdown timer design decision required |
| Maker | 8/10 | APPROVED — CrewPanel data exposure must be resolved |
| Communicator | 9/10 | APPROVED — privacy notice must be completed |

**No agent is FLAGGED AS BLOCKER.** However, three specific pre-launch corrections are required and are listed in Section 4.

---

## 3. STRATEGIC ALIGNMENT CHECK

### Does the loyalty design directly address the specific retention problem the Researcher named?

**Yes — with one alignment gap.**

The Researcher's central finding: *"Slam Fitness does not have a marketing problem. It has a progress plateau vulnerability combined with a social dependency risk... The business has no systematic mechanism to detect either of these collapses early, and no designed response when they occur."*

The Designer's Emotional Journey Map directly addresses the plateau vulnerability at exactly the right stage: *"Plateau Risk (Month 3–6): AI surfaces progress evidence. Coach alerts fire. New challenges unlock. The system acts before the member articulates the doubt."* The Churn Prediction Signal Stack translates all five of the Researcher's named behavioural signals into operational triggers. The Crew Challenge and social graph mechanics directly address social dependency risk for Aoife-type members.

**Alignment gap:** The Researcher's highest-priority finding — the Coach Alert System — is correctly implemented in the `CoachAlertBadge` component, but this component is coach-facing only. There is no member-facing transparency mechanism that tells members the system is watching for these signals on their behalf. The Researcher explicitly recommended radical transparency: *"Tell members the system flags absence to coaches. Most members, at a community gym with this culture, will find that reassuring, not creepy — but only if told upfront."* The Communicator's privacy notice addresses this, but it is truncated. Until that notice is complete and surfaced at onboarding, the Researcher's core trust recommendation is unimplemented.

---

### Does the prototype plan implement all key features from the design spec?

**Largely yes. Two features require confirmation.**

The Maker's component inventory implements:
- ✅ All 14 earnable activities (ActivityGrid with ActivityDefinition model)
- ✅ All 8 redeemable rewards (RewardsWallet + RewardCard)
- ✅ All 4 tier levels (TierLevel type, tier-conditional rendering in HeaderStrip and RepBalanceCard)
- ✅ All 5 challenge cadences (ChallengeCard with daily/weekly/monthly cadence)
- ✅ All 3 Surprise and Delight triggers (SurpriseDelightToast with trigger union type)
- ✅ Crew mechanics (CrewPanel with CrewChallenge)
- ✅ Coach alert system (CoachAlertBadge)
- ✅ AI personalisation endpoints (/api/personalise via PersonalisedSuggestions, /api/offers via DynamicOfferBanner)

**Missing or unconfirmed:**
1. **The "Wall of Form" physical integration** — the Designer specified this as a reward (600 Reps: name and PR milestone posted to Slam's physical studio wall and social channels). The Maker has no component or API endpoint for this. It may be an out-of-app workflow, but it needs an explicit owner — either a manual admin process or a notification to the studio owner.
2. **The Design Spec Section 5 UI Flows** — the specification was truncated before completion. The Maker has built components without a confirmed UI flow spec for the full dashboard. The components are internally consistent, but layout decisions (particularly the home screen below the Rep Balance Card) were made without confirmed design direction.

---

### Does the marketing copy target the exact three personas the Researcher defined?

**Yes — with strong fidelity.**

| Persona | Researcher Definition | Communicator Targeting | Assessment |
|---|---|---|---|
| **Síofra — The Anchor** | Coach-bonded, high-frequency, identity-invested, plateau-vulnerable | "Your progress is visible here, even on the days it doesn't feel like it." Streak messaging directly addresses her identity investment. Tier upgrade copy validates tenure, not just behaviour. | ✅ Correctly targeted |
| **Ciarán — The Performer** | Goal-rational, programme-sensitive, sceptical of manipulation, will leave when value is extracted | "Points are fine. Unlocking your next performance block is better." Low-turnover copy frames quiet floor as a feature, not a consolation. Welcome message pre-empts his BS detector with "No gimmicks." | ✅ Correctly targeted |
| **Aoife — The Community Floater** | Socially mediated, single-point-of-failure dependency, guilt-avoidant, low individual gym bond | Win-back message leads with "The Tuesday crew has been asking about you" and explicitly avoids lecturing. First reward message embeds the friend nudge naturally. | ✅ Correctly targeted |

**One naming misalignment to flag:** The Communicator's win-back message references "Niamh" by name as Aoife's training partner. This is correct as a copywriting template, but it requires the live system to dynamically substitute the actual connected crew member's name from the social graph. If that data is unavailable (e.g., new member, no crew linked), the fallback must be tested. The Maker's `CrewPanel` component has the data model to support this, but the dynamic substitution logic in the offer template is not confirmed in the build spec.

---

## 4. REGULATORY AND COMPLIANCE SUMMARY

### GDPR

**Data collected — every category this system processes:**

| Data Category | Examples | GDPR Classification |
|---|---|---|
| Identity data | Name, email, phone number, member ID | Personal data |
| Behavioural/attendance data | Session bookings, attendance records, class type preferences, booking advance window, no-show frequency | Personal data |
| Programme and progress data | Coach notes, programme phase, lift logs, personal records | Potentially special category — see Article 9 analysis below |
| Social graph data | Referral relationships, crew membership, training partner linkage | Personal data (third-party relational) |
| Engagement data | App opens, notification interactions, streak data, Reps balance | Personal data |
| AI-generated inferences | Churn risk score, persona classification, personalised offer targeting | Derived personal data |
| Social media signals | Tagged posts, Instagram mentions (opt-in linking) | Personal data (third-party sourced) |

**Article 9 — Special Category Data Assessment:**

The Researcher correctly flagged this risk. The system collects lift progression data, programme phase data, and coach notes that, when linked to an identifiable individual, may constitute data concerning a person's physical health or physical condition under Article 9(1) GDPR. The critical threshold is granularity and purpose: a raw attendance count is not special category data. A record that a named member's deadlift has stalled, linked to a coach note about a potential injury plateau, combined with programme modification data, is materially closer to health data. **Conservative position: treat all progress metrics and coach notes as potentially special category data and apply Article 9(2)(a) — explicit consent — as the lawful basis for processing them.** This means a separate, granular consent at onboarding, not a bundled terms acceptance.

**Lawful basis:**

| Data Type | Recommended Lawful Basis | Justification |
|---|---|---|
| Attendance and booking data | Article 6(1)(b) — Contract performance | Processing attendance is necessary to deliver the loyalty programme the member has contracted for |
| Streak, Reps, tier data | Article 6(1)(b) — Contract performance | Core programme mechanics |
| AI churn prediction inferences | Article 6(1)(f) — Legitimate interests | The studio has a legitimate interest in understanding retention risk; the member has a corresponding interest in receiving proactive support. Requires legitimate interest assessment (LIA) documenting the balance test |
| Progress and coach notes | Article 9(2)(a) — Explicit consent | Health-adjacent data requires the higher standard; legitimate interest does not satisfy Article 9 |
| Social graph / referral data | Article 6(1)(a) — Consent | Affects third parties (referred friends, crew members) who must separately consent to being mapped |
| Social media signal linking | Article 6(1)(a) — Consent | Opt-in only; cannot be inferred from public posting |
| AI-generated personalisation inferences | Article 6(1)(f) — Legitimate interests (with Article 22 safeguards — see below) | Subject to the automated decision-making analysis below |

**Article 22 GDPR — Automated Decision-Making:**

Article 22 applies where a decision is based solely on automated processing and produces legal or similarly significant effects on the individual. The relevant question for SLAM FORM is whether tier upgrades and personalised offer targeting meet this threshold.

**Assessment:** Tier upgrades produce tangible effects — access to priority booking windows, challenge early access, Rep multipliers. These are not merely cosmetic; they materially affect what services a member can access and at what cost. The churn prediction system, while not making a decision about membership termination, generates AI inferences that trigger coach interventions — and the member's subsequent experience (receiving or not receiving a personalised check-in, being surfaced or not surfaced specific challenges) is meaningfully shaped by that inference.

**Conclusion:** Article 22 is engaged for tier progression decisions and for the churn prediction trigger mechanism. The right to not be subject to solely automated decisions applies unless one of the Article 22(2) exceptions applies. Exception (a) — necessary for contract — is arguable for tier progression (it is a core programme mechanic). Exception (c) — explicit consent — is the safer basis for churn prediction inferences.

**Required safeguard:** Members must be informed (a) that automated processing is used in tier and offer decisions, (b) that the churn prediction system generates inferences about their engagement, and (c) that they have the right to request human review of any automated decision that materially affects their programme experience. A simple in-app mechanism — "Request a coach review of my programme status" — satisfies this requirement and is on-brand for a studio that leads with coach relationships.

**Retention periods — recommended:**

| Data Category | Recommended Retention Period | Justification |
|---|---|---|
| Active membership data (bookings, attendance, Reps) | Duration of membership + 12 months | Dispute resolution, programme continuity |
| AI-generated inferences (churn scores, persona tags) | 90 days rolling, overwritten on refresh | Inferences become stale and should not persist longer than they are operationally useful |
| Progress and coach notes (special category) | Duration of active coaching relationship + 6 months | Only retained as long as the coaching purpose is active |
| Social graph / referral data | Duration of both parties' memberships | Cannot maintain a referral relationship record after either party has left |
| Post-cancellation data | 12 months maximum, then deletion | Win-back window; no legitimate purpose beyond that |

**Erasure — exact mechanism:**

A member exercising their Article 17 right to erasure must be able to:
1. Submit a deletion request via an in-app "Delete my data" button (Settings → Privacy → Delete my account and data)
2. Receive confirmation of the request within 72 hours
3. Receive confirmation of completed deletion within 30 days
4. The deletion must cover: all personal data, all AI inferences, all Reps and tier history, and removal from any crew social graph (with notification to connected crew members that a member has left, without disclosing the reason)
5. **Exception:** Anonymised, aggregated data (e.g., "Studio had 47 session completions in Week 12") may be retained as it no longer constitutes personal data
6. **Business record exception:** If a redemption creates a financial transaction record (e.g., Month Free reward), the record of that transaction may be retained for 7 years under Irish tax and accounting law — but personal identifiers should be pseudonymised

**DPIA — is one required?**

**Yes. A DPIA is required and should be completed before launch.**

The threshold under Article 35 GDPR is met on multiple grounds:
- **Systematic profiling:** The system profiles individual members' behavioural patterns to influence their purchasing decisions (session attendance, programme enrolment, membership renewal) — this is the definition of profiling under Article 4(4)
- **Potentially special category data:** Progress and health-adjacent data is processed
- **Innovative technology:** AI-driven churn prediction and personalised offer generation constitutes a new form of processing for this business context
- **Vulnerable data subjects:** While gym members are not a formally protected vulnerable group, the system is specifically designed to target individuals showing disengagement signals — a state that may correlate with mental health pressures, life stress,
