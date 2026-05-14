# LoyaltyOS — Full Pipeline Report

**Business slug:** `sportsco`  
**Generated:** 14 May 2026, 19:37
**Agents completed:** 5/5
**Total words:** 18,504

This document contains the raw output of every agent in the LoyaltyOS pipeline,
in handoff order. Each agent received the previous agent's output as its input.

| # | Agent | Role | Words |
|---|-------|------|-------|
| 1 | **Researcher** | Identify the opportunity | 2,670 |
| 2 | **Designer** | Create the solution | 4,571 |
| 3 | **Maker** | Build the product | 3,034 |
| 4 | **Communicator** | Get the customers | 3,028 |
| 5 | **Manager** | Run the business | 5,201 |

---


---


## Agent 1: Researcher

**Role:** Identify the opportunity — deep analysis and pattern recognition
**Output file:** `01_research_brief.md`
**Word count:** 2,670

# LoyaltyOS Research Brief: Sportsco, Ringsend Dublin

---

## 1. CUSTOMER ENGAGEMENT PROBLEM

### The Structural Diagnosis

Sportsco does not have a marketing problem. It has a **habit fragility problem** disguised by surface-level retention metrics.

The centre benefits from an unusually loyal core — members who have integrated Sportsco into their identity, not just their schedule. This masks a critical structural flaw: **Sportsco's retention is almost entirely dependent on the continuation of a single habit anchor**. When that anchor breaks — an injury, a holiday, a change in work schedule, a kids' class ending — there is no loyalty infrastructure to catch the member before they drift. The variety of facilities that makes Sportsco exceptional is, paradoxically, also why members don't develop redundant habits. They come for *one thing* and when that thing is disrupted, they're gone.

The secondary structural problem is **temporal unevenness**. Sportsco has members who visit 5x per week and members who visit 5x per year. There is no current mechanism to move casual users along the engagement curve or to redistribute demand from peak to off-peak. This is a design failure, not a demand failure.

---

### Behavioural Signals That Predict Churn — Specific to Sportsco

1. **A member who swims or attends classes 3+ times per week goes 14 days without a visit** — this is the primary churn signal. The habit is broken. Without intervention within 72 hours of the 14-day mark, reactivation probability drops sharply.

2. **A court sport booking group misses two consecutive weekly bookings** — court regulars operate as a social unit. When the group stops booking, the individual member loses their social anchor at the facility. They don't leave because they hate Sportsco; they leave because they're no longer *expected* anywhere.

3. **A family whose child completes a swim lesson block does not re-enrol within 7 days of the block ending** — the re-enrolment window is narrow. After two weeks, the family has psychologically "paused" and a competitor can capture them.

4. **A member who previously used 2+ facility types drops to 1 for 30+ consecutive days** — cross-facility usage is the strongest predictor of long-term retention. Narrowing usage signals disengagement beginning, not yet arrived.

5. **Spa or café usage drops to zero after previously being a regular add-on** — these are "comfort layer" behaviours. Members who stop using the spa or café are quietly downgrading Sportsco from "third place" to "utility gym." This is the pre-churn posture.

---

## 2. MARKET OPPORTUNITY

### Why Sportsco Needs AI-Powered Loyalty, Not a Stamp Card

A stamp card works for a coffee shop because the product is identical every visit and the frequency is daily. Sportsco's members do not have a single, repeatable transaction — they have **a complex, multi-facility relationship** that changes by season, life stage, and mood. A stamp card rewards *volume of visits*. Sportsco needs to reward *depth of relationship*.

An AI-powered system can detect that a member has only ever used the gym floor, identify that they've visited at 7am every Tuesday, notice that Tuesday usage has dropped, and send a targeted message about the 7am HIIT class — not a generic "we miss you" email. No stamp card can do this.

Additionally, Sportsco's off-peak footfall problem cannot be solved with a static discount. It requires **dynamic demand shaping** — identifying which members have flexible schedules and nudging them toward quiet slots with personalised, time-sensitive incentives. This requires behavioural prediction, not a loyalty card.

---

### Analogous Programmes and the LoyaltyOS Differentiator

**1. PureGym's usage-based engagement system** — PureGym uses app-based check-in tracking and sends re-engagement nudges based on inactivity. It works at scale but is entirely transactional. It does not differentiate between a student who cancelled and a parent whose child's swim lesson just ended. It treats all disengagement as identical.

**2. Peloton's social habit architecture** — Peloton builds retention through streaks, leaderboards, instructor relationships, and community. It is arguably the best habit-reinforcement loyalty system in fitness. But it is a single-product platform. It cannot manage the complexity of a member who swims Monday, plays padel Thursday, and uses the sauna Sunday.

**What LoyaltyOS does that neither does:** LoyaltyOS identifies the specific habit anchor for each individual member and builds a personalised retention intervention around *that anchor* — not the facility in aggregate. It also flags when a member's anchor is at risk *before* the visit gap appears, not after.

---

## 3. CUSTOMER SEGMENTS

### Persona 1: "The Fixture" — Declan, 47

**Behaviour Pattern:** Declan has been a member for 11 years. He swims 25 laps every Tuesday and Thursday at 6:45am, plays squash with the same three colleagues on Friday lunchtimes, and has used the sauna after every squash game for eight years. He has never attended a group fitness class. He doesn't engage with promotions. He pays by direct debit and hasn't checked the Sportsco website since 2019.

**Loyalty Trigger:** Routine and belonging. Sportsco is not a service Declan uses — it is a structure his week is built around. He feels a quiet, unarticulated pride in being a long-standing member.

**The One Thing That Would Cause Him to Disengage:** His squash group disbands. If one member gets injured, relocates, or quits, the Friday ritual collapses. Declan will keep swimming for a while, but without the social anchor, Sportsco will slowly become "just the pool" — and a closer pool will win.

---

### Persona 2: "The Optimizer" — Síofra, 31

**Behaviour Pattern:** Síofra joined 14 months ago after a New Year's resolution. She attends spin classes 2-3 times per week, has tried padel twice (loved it, hasn't booked again), occasionally uses the gym floor after class, and downloaded the app but only uses it to book classes. She follows Sportsco on Instagram and has tagged them twice in stories. She is aware of the spa but thinks of it as "a treat for later."

**Loyalty Trigger:** Progress and novelty. Síofra is retention-positive when she is growing — trying new classes, improving at something, or being recognised for consistency. She responds to challenge mechanics and instructor encouragement.

**The One Thing That Would Cause Her to Disengage:** Her favourite spin instructor leaves. Síofra's attachment to Sportsco is currently mediated through one person. If that instructor moves to another studio and invites their class community to follow on Instagram, Síofra will be gone within three weeks.

---

### Persona 3: "The Scheduler" — The Murphys (Family Unit, represented by Aoife, 39)

**Behaviour Pattern:** Aoife coordinates a household of four. Two kids are in Sunday swim lessons (different age groups). Her husband uses the 5-a-side pitches with a work team every other Thursday. Aoife herself attends a Wednesday morning Pilates class when school runs allow. The family views Sportsco as essential infrastructure, but their engagement is fragmented — no single family member has a daily habit. They use the café regularly after swim lessons.

**Loyalty Trigger:** Value consolidation. The Murphys stay because Sportsco serves every member of the family simultaneously. One membership, multiple reasons to come. The café after lessons is a meaningful ritual.

**The One Thing That Would Cause Them to Disengage:** A swim lesson scheduling change that conflicts with a school or activity commitment. The family's visit pattern is logistically complex. Any friction in the booking system, any schedule clash, any sense that Sportsco is "getting difficult to use" — and Aoife will find a leisure centre closer to school that is simply easier.

---

## 4. ENGAGEMENT MECHANICS

### Activities Sportsco Could Reward and Why Each One Works

| Activity | Retention Mechanism |
|---|---|
| **Check-in streak across any facility** (e.g., 3 visits in 7 days) | **Habit loop reinforcement.** Variable-ratio rewards on streak milestones create the same psychological pull as a running streak. The key is rewarding *any* visit, not gym-only — this prevents members from feeling penalised for choosing the pool or a class. |
| **First-time facility use** (e.g., first padel booking, first spa session) | **Novelty-to-habit conversion.** The single most valuable retention intervention is getting a member to try a second facility type. Reward discovery because cross-facility members churn at half the rate of single-facility members. This is not a hunch — it is the most consistent finding across multi-facility leisure centre data. |
| **Off-peak check-in** (e.g., visits before 9am, after 7pm, or on a Saturday afternoon) | **Demand shaping via loss aversion.** Frame off-peak visits as "bonus points days" — members feel they are getting more, not that they are being redirected. Sportsco solves its quiet-day problem without discounting or devaluing membership. |
| **Class attendance consistency** (e.g., attending the same class 4 weeks in a row) | **Social proof and instructor relationship anchoring.** This mechanic rewards the exact behaviour that makes class regulars sticky. It also gives instructors a reason to acknowledge loyal attendees, reinforcing the human connection that is genuinely hard to replicate. |
| **Court sport repeat booking** (e.g., booking the same court time 3 weeks running) | **Ritual formation.** Court sport players are already operating in a social unit. Rewarding repeat bookings makes the group booking feel like a shared achievement — the loyalty mechanic reinforces the social contract *within the group*, making it harder for any single person to drop out. |
| **Family multi-participation** (e.g., three or more family members active in the same calendar month) | **Value consolidation and switching cost amplification.** Rewarding whole-family activity communicates that Sportsco sees the Murphys as a family, not four separate accounts. It raises the psychological cost of switching because leaving means the whole family loses something. |
| **Swim lesson re-enrolment within 7 days of block completion** | **Churn cliff prevention.** The re-enrolment gap is the single highest-risk moment for family members. A reward for early re-enrolment (priority booking, points bonus) converts the end-of-block moment from a churn opportunity into a loyalty moment. |
| **Referral — bringing a new member or guest** | **Social proof and identity signalling.** Members who recruit others are making a public statement about their relationship with Sportsco. This deepens their own commitment (cognitive consistency) while also expanding the community. Critically, reward the *relationship* — points for every visit the referred member makes in their first 60 days, not just for sign-up. |

---

## 5. DATA AND PERSONALISATION OPPORTUNITIES

### Behavioural Signals That Can Be Ethically Collected

- **Facility check-in data:** Which facilities, what times, what days, how long between visits
- **Class booking behaviour:** Which classes booked, which attended, which cancelled, which instructors, lead time between booking and class
- **Court booking patterns:** Frequency, time of day, number of players on the booking, rebooking behaviour after completion
- **Swim lesson enrolment history:** Block completions, re-enrolment gaps, age groups (inferring child age cohort)
- **Café transaction data (if card-linked or app-linked):** Post-activity café usage as a "comfort behaviour" signal
- **App engagement:** Notification open rates, booking initiation vs. completion, feature usage
- **Self-reported preferences:** Collected at onboarding or via periodic opt-in preference updates ("What brings you to Sportsco most?" — four options, collected once)

All of the above are first-party behavioural data generated by the membership relationship. No third-party data sources. No inferred sensitive characteristics. GDPR-compliant at collection if clearly disclosed in membership terms.

---

### How AI Personalises for Each Persona

**Declan (The Fixture):**
AI detects that Declan's squash group has missed a booking for the first time in 8 months. Rather than a generic re-engagement message, Declan receives a personal acknowledgement of his loyalty ("11 years of Sportsco Fridays") and a low-friction prompt — not a discount, but a priority rebooking option for the next available squash slot at his usual time. If the group misses a second consecutive booking, an escalation message references the sauna suite: "Your post-match sauna slot is waiting." This is retention through identity, not incentive.

**Síofra (The Optimizer):**
AI identifies that Síofra has attended spin 3 times in the last 10 days (high engagement) but hasn't booked padel since her two trial sessions six months ago. This is a cross-facility conversion opportunity. She receives a personalised challenge: "You've logged 18 spin sessions this quarter. Ready to add a new challenge? You've tried padel — your next session is on us." The AI also monitors instructor-specific attendance. If Síofra's preferred instructor is absent three weeks running, an early intervention message introduces another instructor by name with a complimentary class offer before Síofra notices the absence as a reason to leave.

**The Murphys (The Scheduler):**
AI tracks the family as a unit. When the swim lesson block end date is 10 days away, Aoife receives a personalised message via the app: "Ciarán and Éabha's Block 4 ends on 14th March. Block 5 spots fill quickly — re-enrol by Friday for priority placement." The message references the children by name (already in the system) and creates genuine urgency without manufactured scarcity. Simultaneously, the AI notes that the family's café visits have declined and surfaces a family reward: "Bring the family this Sunday — coffee on us after lessons."

---

### The Single Highest-Value Personalisation Intervention for Sportsco

**The 14-Day Habit Break Intervention.**

When a member who has visited 3+ times per week for 4+ consecutive weeks goes 14 days without a check-in, the AI triggers a highly personalised, facility-specific re-engagement message within 24 hours. This message does not say "We miss you." It says:

*"You haven't missed a Tuesday swim in months, Declan — hope everything's okay. Your usual lane is free this Thursday at 6:45am if you want to get back into it."*

The message references the specific habit, the specific time, and implies social continuity. It is not a marketing message. It is the digital equivalent of a receptionist who knows your name. This single intervention, executed correctly, is worth more than any points system.

---

## 6. KEY RISKS

### GDPR Risk: Behavioural Profiling of Minors

**The Risk:** Sportsco holds data on children — swim lesson enrolments, kids' activity bookings, summer camp attendance. The moment LoyaltyOS links a parent account to child activity data for personalisation purposes (e.g., "Ciarán's swim lesson ends next week"), it is processing data *about* a child to influence the parent's behaviour. Under GDPR and Ireland's implementation, children's data carries heightened protection. Processing it for commercial loyalty purposes — even indirectly — requires explicit legal basis and careful consent architecture.

**Mitigation:** LoyaltyOS must maintain strict separation between child activity records and loyalty programme logic. The trigger for "swim lesson block ending" must be derived from the *parent's* booking record and invoice data — not the child's activity file. Consent language in the loyalty programme enrolment must explicitly describe this use. Legal review required before launch. This is not optional.

---

### Trust Risk: The Surveillance Feeling

**The Risk:** Sportsco's core appeal is community and belonging — members describe it as a "third place." The moment a member receives a message that reveals how closely their behaviour has been tracked ("You haven't missed a Tuesday swim in months"), it can tip from *warm and personal* to *unsettling and watched*. Declan does not want to feel like a data point. If the personalisation feels too precise, too observational, or arrives at the wrong emotional moment (e.g., when a member has been absent due to a health issue), the loyalty programme becomes a source of discomfort rather than connection.

**Mitigation:** Establish a **"receptionist rule"** for all AI-generated communications: every message must read as something a well-meaning, observant human could plausibly say — not something only a surveillance system would know. Avoid referencing specific numeric data in member-facing messages ("You've visited 47 times this year" is creepy; "You've been a consistent member this year" is warm). Give members a visible, simple preference centre where they can control communication frequency and type. Transparency about how data is used — stated plainly in the app, not buried in terms — is the single most effective trust-preservation mechanism available.

---

*Brief prepared for handover to LoyaltyOS Designer. Diagnosis is specific to Sportsco's structure, member base, and Dublin 4 community context. Do not genericise.*


---


## Agent 2: Designer

**Role:** Create the solution — creative problem-solving and design thinking
**Output file:** `02_design_spec.md`
**Word count:** 4,571

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


---


## Agent 3: Maker

**Role:** Build the product — technical craftsmanship and rapid prototyping
**Output file:** `03_prototype_plan.md`
**Word count:** 3,034

# LoyaltyOS — Technical Build Specification
## Sportsco Anchors, Ringsend Dublin

*Build document produced by the Maker agent. Derived directly from the Designer agent specification. All Sportsco-specific naming, tone constraints, and design decisions are preserved as hard requirements, not suggestions.*

---

## 1. COMPONENT INVENTORY

### 1.1 Layout and Shell Components

---

**`AppShell`**
`src/components/layout/AppShell.tsx`

```typescript
interface AppShellProps {
  config: BusinessConfig;
  customer: Customer;
  children: React.ReactNode;
  activeTab: 'home' | 'challenges' | 'rewards' | 'profile';
}
```

Core behaviour: Renders the persistent navigation bar, injects the `BusinessConfig` into a React context (`LoyaltyConfigContext`) so every child component can access theme tokens without prop drilling. Applies the config's `theme` and `colours` as CSS custom properties on the root element. Handles tab routing.

Implements: Design spec §5 (all screens), §6 (theme token application).

---

**`BottomNav`**
`src/components/layout/BottomNav.tsx`

```typescript
interface BottomNavProps {
  activeTab: 'home' | 'challenges' | 'rewards' | 'profile';
  onTabChange: (tab: string) => void;
  config: Pick<BusinessConfig, 'colours' | 'programme'>;
}
```

Core behaviour: Four tab icons (Home, Challenges, Rewards, Profile). Active tab uses `config.colours.primary`. Nav background applies `config.colours.navBg` with `backdrop-filter: blur(12px)`. `border-top: 1px solid config.colours.navBorder`.

Implements: Design spec §6 (navigation bar tokens).

---

### 1.2 Dashboard Home Screen Components

---

**`GreetingBar`**
`src/components/dashboard/GreetingBar.tsx`

```typescript
interface GreetingBarProps {
  customer: Customer;
  config: BusinessConfig;
  currentHour: number; // 0–23, for time-aware greeting
}
```

Core behaviour: Derives greeting string (`Good morning` / `Good afternoon` / `Good evening`) from `currentHour`. Renders customer first name, current AP balance (28px/700 weight), tier badge with name, and a subtle progress ring showing progress to next tier. Progress ring is an SVG circle — `strokeDashoffset` calculated from `(customer.points / nextTierThreshold) * circumference`. Tier badge text colour taken from `config.tiers[currentTierIndex].colour`. No glow on light theme.

State: `currentTier`, `nextTier`, `progressPercent` — all derived synchronously from `customer.points` and `config.tiers`.

Implements: Design spec §5 (Zone 1), §6 (tier badge colours, typography).

---

**`StreakCard`**
`src/components/dashboard/StreakCard.tsx`

```typescript
interface StreakCardProps {
  customer: Customer;
  onActivateTideOut: () => void;
  config: BusinessConfig;
}

interface StreakDisplayState {
  currentStreak: number;
  streakType: '7-day' | '30-day' | null;
  tideOutAvailable: boolean;
  tideOutActive: boolean;
  activeChallenge: Challenge | null;
  challengeProgress: number;
}
```

Core behaviour: Reads `customer.streaks` to compute display state. Shows streak count, streak badge (animated on mount using CSS keyframe — a gentle pulse, not a bounce). If `tideOutAvailable` is true, renders a "Tide Out" button — single tap activates a 72-hour freeze, writes to `customer.streaks.tideOutActivatedAt`. If an active challenge exists, renders a progress indicator (`completedCount / requiredCount` as a filled bar). Card background uses `config.colours.cardBg`, border `config.colours.cardBorder`, shadow as specified.

Animation: Streak badge uses `@keyframes anchorPulse` — a 1.2s ease-in-out scale from 1.0 → 1.05 → 1.0, runs once on mount and again when streak increments.

Implements: Design spec §3 (streak mechanics, Tide Out freeze), §5 (Zone 2).

---

**`ChallengeCarousel`**
`src/components/dashboard/ChallengeCarousel.tsx`

```typescript
interface ChallengeCarouselProps {
  challenges: PersonalisedChallenge[];
  onChallengeComplete: (challengeId: string) => void;
  config: BusinessConfig;
  isLoading: boolean;
}
```

Core behaviour: Horizontally scrollable row of exactly three `ChallengeCard` components. On initial load, `isLoading` shows three skeleton cards (same dimensions, `config.colours.muted` fill, animated shimmer). Challenges are fetched from `/api/personalise` on mount and cached in `localStorage` with a `Monday 00:00` expiry key — challenges do not re-fetch mid-week.

Implements: Design spec §3 (weekly challenges), §5 (Zone 3).

---

**`ChallengeCard`**
`src/components/dashboard/ChallengeCard.tsx`

```typescript
interface ChallengeCardProps {
  challenge: PersonalisedChallenge;
  onComplete: (challengeId: string) => void;
  config: BusinessConfig;
}

interface PersonalisedChallenge {
  id: string;
  name: string;
  emoji: string;
  pointReward: number;
  description: string;
  progressCurrent: number;
  progressRequired: number;
  cadence: 'daily' | 'weekly';
  expiresAt: string; // ISO timestamp
  aiReason: string; // Why the AI selected this for the member — shown on tap
}
```

Core behaviour: Shows name, emoji, points reward, and a progress indicator (`progressCurrent / progressRequired` as filled bar, `config.colours.primary` fill). On completion, triggers a CSS burst animation (`@keyframes pointBurst` — radial scale-up of a points badge, 400ms, ease-out) and calls `onComplete`. Tapping the card (not completing) reveals `aiReason` in an expandable sub-panel — keeps the AI's reasoning visible, satisfies transparency design.

Implements: Design spec §3 (daily/weekly challenges), §4 (AI personalisation), §7 (trust/transparency).

---

**`DiscoverSection`**
`src/components/dashboard/DiscoverSection.tsx`

```typescript
interface DiscoverSectionProps {
  offers: DynamicOffer[];
  customer: Customer;
  config: BusinessConfig;
  isLoading: boolean;
}
```

Core behaviour: Renders 2–3 contextual cards from `/api/offers`. If no AI offers are available (API error or no relevant context), falls back to rendering `MilestoneCard` components derived from `customer.activityHistory` — never renders generic filler. Each offer card has a title, description, and an optional CTA button. No countdown timers. No "limited time only" language — the offer wording is handled by the AI prompt constraints defined in §4.

Implements: Design spec §4 (AI contextual offers), §5 (Zone 4), §7 (no dark patterns).

---

**`MilestoneCard`**
`src/components/dashboard/MilestoneCard.tsx`

```typescript
interface MilestoneCardProps {
  milestone: {
    type: '50th-visit' | '100th-visit' | 'anniversary' | 'streak-record';
    label: string;
    pointsAwarded: number;
    personalMessage: string; // AI-generated, passes Receptionist Rule
  };
  config: BusinessConfig;
}
```

Core behaviour: Full-screen overlay variant triggered on milestone detection. Restrained animation — the tier badge scales in over 300ms, a one-line personal message fades in beneath it, the points gift counter increments. No confetti. Auto-dismisses after 5 seconds or on tap.

Implements: Design spec §3 (Surprise and Delight — The Loyalty Landmark), §5 (milestone moments in activity flow).

---

### 1.3 Activity and Check-in Components

---

**`CheckInModal`**
`src/components/checkin/CheckInModal.tsx`

```typescript
interface CheckInModalProps {
  activity: Activity;
  customer: Customer;
  config: BusinessConfig;
  onDismiss: () => void;
  onPointsAwarded: (points: number, newTotal: number) => void;
}

interface CheckInDisplayState {
  pointsEarned: number;
  personalDetail: string | null; // e.g. "That's 14 weeks of Tuesday swims."
  challengeUpdated: PersonalisedChallenge | null;
  isMilestone: boolean;
  newPointsTotal: number;
}
```

Core behaviour: Slides up from the bottom of the screen (CSS `transform: translateY(100%)` → `translateY(0)`, 280ms cubic-bezier). Shows activity name, emoji, points earned. The `personalDetail` string is retrieved from a pre-computed cache (generated by `/api/personalise` alongside challenges) — it does not make a live API call on every check-in, which would add latency to the critical feedback moment. Points counter animates upward using a `requestAnimationFrame` loop — increments from previous total to new total over 600ms. If `challengeUpdated` is non-null, a secondary line shows challenge progress. If `isMilestone`, replaces itself with `MilestoneCard`. Dismisses after 3.5 seconds or on tap. Must dismiss within 2 seconds for the initial feedback to appear — the `personalDetail` and challenge update can render 300ms after the modal opens without degrading the experience.

Implements: Design spec §5 (Activity Completion Flow, all five steps).

---

**`QRCheckIn`**
`src/components/checkin/QRCheckIn.tsx`

```typescript
interface QRCheckInProps {
  customerId: string;
  config: BusinessConfig;
  onScan: (activityCode: string) => void;
}
```

Core behaviour: Renders a unique QR code (using `qrcode.react`) encoding `{customerId}:{timestamp}:{hmacSignature}` — the HMAC prevents QR spoofing. Camera-scan variant uses `react-qr-reader` for turnstile/kiosk flow. Manual tap-to-check-in button available as fallback.

Implements: Design spec §5 (check-in trigger, step 1).

---

### 1.4 Rewards Components

---

**`RewardsGrid`**
`src/components/rewards/RewardsGrid.tsx`

```typescript
interface RewardsGridProps {
  rewards: Reward[];
  customerPoints: number;
  config: BusinessConfig;
  onRedeem: (rewardId: string) => void;
}
```

Core behaviour: Renders all 8 rewards. Rewards the customer cannot afford are visible but rendered with 40% opacity and a `points gap` label ("You need 70 more AP") — they remain visible for aspirational effect, but are not interactive. Rewards are sorted: affordable first, then locked, ascending by points gap.

Implements: Design spec §5 (Rewards tab, locked reward behaviour), §7 (no dark patterns — locked rewards visible but honest).

---

**`RewardDetailDrawer`**
`src/components/rewards/RewardDetailDrawer.tsx`

```typescript
interface RewardDetailDrawerProps {
  reward: Reward;
  customerPoints: number;
  config: BusinessConfig;
  onConfirmRedeem: (rewardId: string) => void;
  onDismiss: () => void;
}
```

Core behaviour: Slides up as a bottom drawer. Shows full description, point cost, how-to-use instructions, "Redeem" button. Tapping "Redeem" opens `RedemptionConfirmModal`.

Implements: Design spec §5 (Reward Redemption Flow, steps 2–3).

---

**`RedemptionConfirmModal`**
`src/components/rewards/RedemptionConfirmModal.tsx`

```typescript
interface RedemptionConfirmModalProps {
  reward: Reward;
  customerCurrentPoints: number;
  config: BusinessConfig;
  onConfirm: () => void;
  onCancel: () => void;
}
```

Core behaviour: Displays: `"Redeem [Reward Name]? [X] AP will be deducted. Your balance will be [Y] AP."` Two buttons: Confirm (primary, `config.colours.primary`) and Cancel (ghost button). No countdown timer. Cancel is always one tap — no confirmation loop. After confirm, renders `RedemptionReceiptScreen`.

Implements: Design spec §5 (Reward Redemption Flow, step 3), §7 (no dark patterns, no countdown timers, one-tap cancel).

---

**`RedemptionReceiptScreen`**
`src/components/rewards/RedemptionReceiptScreen.tsx`

```typescript
interface RedemptionReceiptScreenProps {
  reward: Reward;
  redemptionCode?: string; // Undefined for auto-applied rewards (e.g. café credit)
  closingMessage: string; // e.g. "Enjoy the coffee. You've earned it."
  config: BusinessConfig;
  onDismiss: () => void;
}
```

Core behaviour: Full-screen receipt. Shows reward name, emoji, redemption code or "Applied to your account" message, closing message (human tone, no upsell), and a "Done" button. Saves to "My Rewards" history. `closingMessage` is pre-defined per reward in the business config — it is not AI-generated at this step (the AI is not invoked in the redemption path to avoid latency).

Implements: Design spec §5 (Reward Redemption Flow, steps 4–5).

---

### 1.5 Profile and Settings Components

---

**`ProfileScreen`**
`src/components/profile/ProfileScreen.tsx`

```typescript
interface ProfileScreenProps {
  customer: Customer;
  config: BusinessConfig;
}
```

Core behaviour: Shows member name, tier, total lifetime AP, member since date, activity history summary, referred members count. Header prominently shows: `"Personalisation is on"` as a tappable label leading to `PreferenceCentre`. This is the visibility requirement from §7 — the capability is disclosed, front-facing.

Implements: Design spec §7 (visible off-switch, "Personalisation is on" in profile header).

---

**`PreferenceCentre`**
`src/components/profile/PreferenceCentre.tsx`

```typescript
interface PreferenceCentreProps {
  customer: Customer;
  onUpdatePreferences: (prefs: CustomerPreferences) => void;
  config: BusinessConfig;
}

interface CustomerPreferences {
  personalisedSuggestions: boolean;
  includeCafeAndSpa: boolean;
  familyAccountLinking: boolean; // requires separate per-member consent
  messageFrequencyOverride: 'auto' | 'low' | 'off';
}
```

Core behaviour: Four toggles as specified in §7. "Download my data" button calls `GET /api/customer/data-export`. "Delete my loyalty data" button calls `DELETE /api/customer/personalisation-data` with a typed confirmation ("Type DELETE to confirm" — necessary here, not a dark pattern, this is data deletion). Child data handling note rendered as static text below the family toggle.

Implements: Design spec §7 (Preference Centre, all five controls, child data statement).

---

### 1.6 Business Admin Panel Components

---

**`AdminDashboard`**
`src/components/admin/AdminDashboard.tsx`

```typescript
interface AdminDashboardProps {
  businessId: string;
  config: BusinessConfig;
  staffRole: 'reception' | 'manager' | 'owner';
}
```

Core behaviour: Tab-based admin interface. Tabs: Overview, Programme Controls, Members, Communications, Reports. `staffRole` gates visibility: `reception` sees anonymised member data; `manager` and `owner` see full profiles. Implements design spec §5 (Business Admin Panel) in full.

---

**`ChurnRiskQueue`**
`src/components/admin/ChurnRiskQueue.tsx`

```typescript
interface ChurnRiskQueueProps {
  flaggedMembers: ChurnRiskEntry[];
  onManualOverride: (customerId: string, note: string) => void;
  staffRole: 'reception' | 'manager' | 'owner';
}

interface ChurnRiskEntry {
  customerId: string;
  displayName: string; // Anonymised for reception staff
  riskLevel: 'medium' | 'high';
  triggerSignal: ChurnSignal;
  recommendedAction: string;
  lastContactDate: string | null;
  interventionPending: boolean;
}
```

Core behaviour: Sortable list of at-risk members. Each entry shows risk level, the specific churn signal that fired, and the AI's recommended action. "Manual override" button allows reception staff to flag a member for personal outreach (the holiday context use case from §4).

Implements: Design spec §4 (churn prediction table), §5 (Churn risk queue in admin).

---

## 2. DATA MODELS

```typescript
// src/types/loyalty.ts

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  memberSince: string; // ISO date
  tier: TierName;
  points: {
    current: number;        // Spendable balance
    lifetimeEarned: number; // Never decremented — used for tier calculation
  };
  streaks: {
    current7Day: number;    // Visits in current rolling 7-day window
    current30Day: number;   // Visits in current rolling 30-day window
    longestStreak: number;
    tideOutAvailable: boolean;
    tideOutActivatedAt: string | null; // ISO timestamp
    tideOutExpiresAt: string | null;
  };
  activityHistory: ActivityRecord[];
  redemptionHistory: RedemptionRecord[];
  referrals: {
    referredMemberIds: string[];
    loyalFriendBonusVisits: Record<string, number>; // referredMemberId → visit count
  };
  familyAccount: {
    isLinked: boolean;
    familyGroupId: string | null;
    familyPointsPool: number;
    linkedMemberIds: string[];
  };
  preferences: CustomerPreferences;
  visitFlexibilityScore: number; // 0–100, computed by AI layer, cached
  churnRiskScore: number;        // 0–100, computed by AI layer, cached
  lastCheckIn: string | null;    // ISO timestamp
  facilityTypesUsed: FacilityType[];
  anniversaryDate: string;       // ISO date — tier resets on this date, not calendar year
}

export type TierName = 'Shoreline' | 'Harbour' | 'Channel' | 'Deep Water';
export type FacilityType = 'pool' | 'court' | 'gym-class' | 'spa' | 'cafe' | 'padel';

export interface ActivityRecord {
  id: string;
  activityId: string;        // References Activity.id
  activityName: string;
  category: ActivityCategory;
  pointsEarned: number;
  completedAt: string;       // ISO timestamp
  facilityType: FacilityType;
  personalDetail: string | null; // Pre-computed detail string for CheckInModal
}

export type ActivityCategory =
  | 'Explore'
  | 'Streak'
  | 'Booking'
  | 'Class'
  | 'Special'
  | 'Family'
  | 'Referral'
  | 'Daily'
  | 'Wellness';

export interface Activity {
  id: string;
  name: string;
  emoji: string;
  category: ActivityCategory;
  pointValue: number;
  description: string;
  isOneTime: boolean;         // e.g. First Dip — earns once per facility type
  requiresStreak: boolean;    // e.g. Four-Week Fix
  streakLength?: number;
  facilityTypes: FacilityType[];
}

export interface Reward {
  id: string;
  name: string;
  emoji: string;
  pointCost: number;
  category: 'Access' | 'Credit' | 'Booking' | 'Class' | 'Membership' | 'Family';
  description: string;
  howToUse: string;
  closingMessage: string;     // Displayed on receipt — human tone, no upsell
  deliveryMethod: 'qr-code' | 'auto-applied' | 'booking-credit';
  redeemedAt?: string;        // ISO timestamp — on RedemptionRecord only
  redemptionCode?: string;    // Generated at redemption time
  familyAccountOnly: boolean; // e.g. Kids Lesson Discount
}

export interface RedemptionRecord {
  id: string;
  rewardId: string;
  rewardName: string;
  pointsSpent: number;
  redeemedAt: string;
  redemptionCode: string | null;
  status: 'active' | 'used' | 'expired';
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  offerType: 'points-bonus' | 'cross-facility' | 'family-prompt' | 're-enrolment' | 'quiet-hours';
  pointsBonus?: number;
  validUntil: string;         // ISO timestamp
  targetSegment: CustomerSegment;
  ctaText?: string;
  ctaAction?: 'navigate-to-rewards' | 'navigate-to-booking' | 'navigate-to-challenges';
  aiGenerated: boolean;
  aiReason?: string;          // For admin transparency — not shown to member
  hasCountdownTimer: false;   // Structurally enforced — always false per §7
}

export type CustomerSegment =
  | 'all'
  | 'high-frequency'
  | 'flexible-schedule'
  | 'family-account'
  | 'court-player'
  | 'swimmer'
  | 'class-regular'
  | 'churn-risk'
  | 'streak-holder';

export type ChurnSignal =
  | 'high-frequency-gap'
  | 'court-group-missed'
  | 'swim-block-ending'
  | 'cross-facility-narrowing'
  | 'addon-usage-drop';
```

---

## 3. BUSINESS CONFIG SYSTEM

### 3.1 The Config Interface

```typescript
// src/types/config.ts

export interface BusinessConfig {
  businessId: string;
  businessName: string;
  businessType: BusinessVertical;
  
  programme: {
    name: string;
    tagline: string;
    currency: string;
    currencyAbbreviation: string; // Displayed in UI — "AP", "pts", etc.
  };

  theme: 'light' | 'dark' | 'rich';

  colours: {
    primary: string;
    accent: string;
    bg: string;
    cardBg: string;
    cardBorder: string;
    text: string;
    subtext: string;
    muted: string;
    navBg: string;
    navBorder: string;
  };

  tiers: TierConfig[];

  activities: Activity[];    // The full earn menu for this business
  rewards: Reward[];         // The full redemption menu for this business

  quietHoursWindows: QuietHoursWindow[];

  facilityTypes: FacilityType[];  // Which facility types exist for this business

  communicationConfig: {
    maxMessagesPerMember30Days: number;  // Default: 2
    autoApproveAIMessages: boolean;
    messageFatigueSensitivity: 'low' | 'medium' | 'high';
    receptionistRuleEnabled: boolean;    // Always true for Sportsco
  };

  aiConfig: {
    personalisationModel: string;        // e.g. 'claude-opus-4-5'
    challengesRefreshCadence: 'weekly';  // Monday 00:00 per spec
    offerRefreshCadence: 'daily' | 'hourly';
    churnSignalThresholds: Record<ChurnSignal, number>;
    visitFlexibilityLookbackDays: number; // Default: 90
  };

  adminConfig: {
    staffRoles: ('reception' | 'manager' | 'owner')[];
    anonymiseMembersForRole: Record<string, boolean>;
    requireMessageApproval: boolean;
  };

  branding: {
    logoUrl: string;
    faviconUrl: string;
    locale: string;           // e.g. 'en-IE'
    currency: string;         // e.g. 'EUR'
    timezone: string;         // e.g. 'Europe/Dublin'
  };
}

export type BusinessVertical =
  | 'leisure-centre'
  | 'gaming-pub'
  | 'dental-practice'
  | 'gym'
  | 'spa';

export interface TierConfig {
  name: string;
  threshold: number;         // Lifetime AP earned
  colour: string;
  benefits: string[];
  cafeDiscount?: number;     // Percentage
  guestPassesPerMonth?: number;
  priorityBooking: boolean;
  conciergeAccess: boolean;
}

export interface QuietHoursWindow {
  label: string;             // e.g. "Early Morning"
  daysOfWeek: number[];      // 0 = Sunday
  startTime: string;         // "HH:MM" 24h
  endTime: string;
  bonusPoints: number;
}
```

### 3.2 How Switching Businesses Changes the UI

The `AppShell` component reads `BusinessConfig` from `LoyaltyConfigContext`. On config change:

1. **CSS custom properties** are updated on `document.documentElement` — every colour token, font, and spacing value updates in one synchronous operation. No component re-renders for visual changes.
2. **Programme name and currency** update everywhere via `useLoyaltyConfig()` hook — the string "Anchor Points / AP" becomes whatever the new business uses without touching component code.
3. **Tier names and colours** update the `GreetingBar` progress ring, `BottomNav` active states, and all tier badge renders.
4. **Activities and rewards arrays** are replaced entirely — the `RewardsGrid` and challenge generation system use only the config's arrays.
5. **Facility types** gate which check-in flows and cross-sell suggestions are available.
6. **AI prompts** are dynamically constructed using the business config — the same Claude endpoints serve different businesses with different context injected.

### 3.3 Sportsco Anchors — Full Config Object

```typescript
// src/config/businesses/sportsco.ts

export const sportscoConfig: BusinessConfig = {
  businessId: 'sportsco-ringsend-001',
  businessName: 'Sportsco',
  businessType: 'leisure-centre',

  programme: {
    name: 'Sportsco Anchors',
    tagline: 'Every visit. Every milestone. Every reason to come back.',
    currency: 'Anchor Points',
    currencyAbbreviation: 'AP',
  },

  theme: 'light',

  colours: {
    primary: '#0EA5E9',
    accent: '#38BDF8',
    bg: '#F5F4F0',
    cardBg: '#FFFFFF',
    cardBorder: 'rgba(0,0,0,0.07)',
    text: '#111111',
    subtext: 'rgba(0,0,0,0.42)',
    muted: 'rgba(0,0,0,0.04)',
    navBg: 'rgba(245,244,240,0.98)',
    navBorder: 'rgba(0,0,0,0.08)',
  },

  tiers: [
    {
      name: 'Shoreline',
      threshold: 0,
      colour: '#64B5F6',
      benefits: ['Welcome perks', '5% café discount'],
      cafeDiscount: 5,
      priorityBooking: false,
      conciergeAccess: false,
    },
    {
      name: 'Harbour',
      threshold: 500,
      colour: '#0EA5E9',
      benefits: ['Priority booking windows', '10% café discount'],
      cafeDiscount: 10,
      priorityBooking: true,
      conciergeAccess: false,
    },
    {
      name: 'Channel',
      threshold: 1500,
      colour: '#D4AF37',
      benefits: ['Monthly guest passes', '15% café discount', 'Spa access priority'],
      cafeDiscount: 15,
      guestPassesPerMonth: 1,
      priorityBooking: true,
      conciergeAccess: false,
    },
    {
      name: 'Deep Water',
      threshold: 3500,
      colour: '#7C3AED',
      benefits: [
        'All Channel benefits',
        'Dedicated concierge booking line',
        'Annual loyalty credit unlock',
      ],
      cafeDiscount: 15,
      guestPassesPerMonth: 1,
      priorityBooking: true,
      conciergeAccess: true,
    },
  ],

  activities: [
    {
      id: 'first-dip',
      name: 'First Dip',
      emoji: '🏊',
      category: 'Explore',
      pointValue: 100,
      description: 'Earn once for your first visit to any facility type you\'ve never used before',
      isOneTime: true,
      requiresStreak: false,
      facilityTypes: ['pool', 'court', 'gym-class', 'spa', 'padel'],
    },
    {
      id: 'lane-regular',
      name: 'Lane Regular',
      emoji: '🌊',
      category: 'Streak',
      pointValue: 10,
      description: 'Check in for any pool session — swim lanes, lessons observation, aqua class',
      isOneTime: false,
      requiresStreak: false,
      facilityTypes: ['pool'],
    },
    {
      id: 'court-committed',
      name: 'Court Committed',
      emoji: '🎾',
      category: 'Booking',
      pointValue: 15,
      description: 'Complete a court sport booking (squash, padel, 5-a-side)',
      isOneTime: false,
      requiresStreak: false,
      facilityTypes: ['court', 'padel'],
    },
    {
      id: 'class-regular',
      name: 'Class Regular',
      emoji: '🏋️',
      category: 'Class',
      pointValue: 15,
      description: 'Attend any group fitness class (spin, Pilates, HIIT, yoga)',
      isOneTime: false,
      requiresStreak: false,
      facilityTypes: ['gym-class'],
    },
    {
      id: 'four-week-fix',
      name: 'Four-Week Fix',
      emoji: '📅',
      category: 'Streak',
      pointValue: 40,
      description: 'Attend the same class four consecutive weeks',
      isOneTime: false,
      requiresStreak: true,
      streakLength: 4,
      facilityTypes: ['gym-class'],
    },
    {
      id: 'quiet-hours',
      name: 'Quiet Hours',
      emoji: '🌅',
      category: 'Special',
      pointValue: 20,
      description: 'Check in during off-peak windows (before 9am, after 7pm, Saturday afternoon)',
      isOneTime: false,
      requiresStreak: false,
      facilityTypes: ['pool', 'court', 'gym-class', 'spa', 'padel'],
    },
    {
      id: 'court-ritual',
      name: 'Court Ritual',
      emoji: '🔁',
      category: 'Booking',
      pointValue: 30,


---


## Agent 4: Communicator

**Role:** Get the customers — persuasion and storytelling
**Output file:** `04_marketing_copy.md`
**Word count:** 3,028

# LoyaltyOS — Sportsco Anchors: Marketing & Communications Pack

*Produced by the Communicator agent. All copy derived from the Researcher and Maker briefs. Persona targeting is explicit throughout. No generic copy.*

---

## 1. PLATFORM POSITIONING

---

### LoyaltyOS One-Line Value Proposition
*(For businesses — the B2B sell)*

> **LoyaltyOS turns your members' habits into a retention system — so when life interrupts, they come back instead of drift.**

---

### Sportsco Anchors Programme Tagline

> **Every visit counts. Every milestone remembered.**

*Secondary tagline (for in-app use):*
> **Your Sportsco, your pace. We notice.**

---

### Key Messages by Persona

---

#### Persona 1 — Declan, "The Fixture" (47, long-standing routine member)

> **Message 1: Recognition**
> "Eleven years of early mornings and Friday squash games. Sportsco Anchors is built for members like you — people who've made this place part of who they are. We see that, and we're not going to take it for granted."

> **Message 2: Belonging, not just benefit**
> "This isn't about points. It's about making sure the things you've built here — the lanes, the games, the rituals — stay yours. Your membership has a memory now."

> **Message 3: Low-friction continuity**
> "No apps to learn. No challenges to chase. Your habits earn for you automatically. The only thing that changes is that we'll know when something's off — and we'll be there before you have to ask."

---

#### Persona 2 — Síofra, "The Optimizer" (31, class-based, progress-driven)

> **Message 1: Progress recognised**
> "You've been putting the work in. Sportsco Anchors tracks that — your streaks, your consistency, the fact that you've shown up when it would've been easier not to. That deserves more than a membership card."

> **Message 2: The next challenge**
> "You've nailed spin. There's padel, Pilates, and about four other things here you haven't tried yet. Anchors will nudge you toward them — and reward you when you take the leap."

> **Message 3: Something that grows with you**
> "The more you explore, the more you earn. The more you earn, the higher your tier. But honestly? The best part is watching your habits build into something you're actually proud of."

---

#### Persona 3 — Aoife Murphy, "The Scheduler" (39, family logistics coordinator)

> **Message 1: The whole family, one place**
> "Between swim lessons, Pilates, and the 5-a-side — your family covers a lot of ground here. Sportsco Anchors ties it all together. One account. Everyone's activity earns. Everyone benefits."

> **Message 2: Never miss a beat**
> "Swim lesson blocks end. New ones fill fast. Anchors keeps track so you don't have to — you'll always know when it's time to re-enrol before the good slots go. No scrambling. No missed weeks."

> **Message 3: The little things matter**
> "Coffee after Sunday lessons. The Wednesday Pilates class that's yours for an hour. Anchors rewards the whole pattern of your family's time here — not just the big moments."

---

---

## 2. ONBOARDING SEQUENCE

---

### a) Welcome Message — First App Open

*Shown on-screen, not push notification. Character limit: generous. Tone: warm, direct, zero corporate.*

---

**[Displayed on first app open, after name confirmed]**

---

> **Welcome to Sportsco Anchors, [First Name].**
>
> This is where your time at Sportsco starts working for you.
>
> Every swim, class, court session, or quiet coffee after a Sunday lesson earns you Anchor Points. Hit milestones, unlock rewards, and move up through four tiers — from Shoreline all the way to Deep Water.
>
> We've built this to feel like a member who's looked after, not a customer who's tracked. You'll only hear from us when it's worth your time. And you're always in control of what we know and how we reach you.
>
> Your first Anchor Points are waiting. Go use the place.
>
> — The Sportsco team

---

*Persona note: Written to resonate across all three personas. The "coffee after Sunday lessons" line is a direct nod to the Murphys. "Every swim, class, court session" covers Declan and Síofra. "Feel like a member who's looked after, not a customer who's tracked" directly addresses the Researcher's surveillance risk.*

---

### b) First Reward Earned — Push Notification

*Triggered on first Anchor Points activity completion. Arrives as a push notification with an in-app expanded state.*

---

**Push notification (short):**
> **You've earned your first Anchor Points, [First Name]. 🎉**
> Open to see what just happened.

**In-app expanded message:**
> **That's your first [X] Anchor Points.**
>
> Not bad for a [Tuesday morning swim / spin class / Friday squash game]. Keep going and those points turn into real things — free spa sessions, café credit, a guest pass for someone who keeps saying they'll join you.
>
> You're on Shoreline right now. Harbour is closer than you think.
>
> [See your rewards →]

---

*Persona targeting:*
- *Declan (The Fixture): "Friday squash game" variant. Tone is low-key — he doesn't want fanfare.*
- *Síofra (The Optimizer): "Spin class" variant. "Harbour is closer than you think" is engineered for her progress drive.*
- *Aoife (The Scheduler): "Tuesday morning swim" or "Sunday lessons" variant — the rewards listed (guest pass, café credit) are directly relevant to family life.*

---

### c) 7-Day Streak Congratulation Message

*Triggered when a member completes their first 7-day visit streak. Push notification + in-app card.*

---

**Push notification (short):**
> **7 days in a row, [First Name]. That's a streak worth keeping. 🔥**

**In-app card message:**
> **Seven days. That's not a coincidence, that's a habit.**
>
> You've checked in every day this week — and Sportsco Anchors noticed. You've earned a streak bonus, and you've unlocked something useful: a Tide Out.
>
> A Tide Out is a 72-hour streak freeze. Life happens — use it when you need it, and your streak survives. We built it because we know missing a day isn't the same as giving up.
>
> Keep going. Your next milestone is [X] visits away.

---

*Persona targeting:*
- *Síofra (The Optimizer): This hits her progress-and-challenge loyalty trigger directly. The Tide Out explanation frames it as a smart tool, not a safety net — language she'll respect.*
- *Declan (The Fixture): "That's not a coincidence, that's a habit" is designed to land without being effusive. He won't read this twice, but the first read should feel accurate.*
- *Aoife (The Scheduler): The Tide Out framing — "Life happens" — speaks directly to the logistical chaos of coordinating a family of four. She will use this feature.*

---

---

## 3. OFFER COPY TEMPLATES

---

### Offer 1 — Low-Turnover Day Promotion

**Target day:** Tuesday evenings (identified in brief as low-demand window)
**Target persona:** Síofra (The Optimizer) — flexible schedule, class-based
**Mechanic:** Off-peak bonus points

---

**Headline:**
> **Tuesday evenings are quieter. Make them yours.**

**Body copy:**
> The pool's calmer. The gym floor has breathing room. And right now, Tuesday visits after 6pm earn you double Anchor Points.
>
> Not because we're pushing you somewhere you don't want to be — but because if you've got the flexibility, this is genuinely a better time to be here.
>
> Book a lane, drop into a class, or just use the space without the Monday-morning rush energy.

**CTA:**
> **Check availability →**

**Urgency hook:**
> *Double points run Tuesday evenings this month. Check the app each week — the bonus updates.*

---

*Note: No countdown timer. No artificial scarcity. Urgency is honest — the bonus is real and time-windowed, stated plainly.*

---

### Offer 2 — Tier Upgrade Celebration Offer

**Target trigger:** Member crosses from Harbour (500 AP) to Channel (1,500 AP)
**Target persona:** Síofra (The Optimizer) — progress-driven, responds to recognition
**Mechanic:** Complimentary facility access tied to their new tier

---

**Headline:**
> **You've reached Channel. Here's what that actually means.**

**Body copy:**
> You've earned 1,500 Anchor Points. That's not a number on a screen — that's months of showing up, staying consistent, and actually doing the thing.
>
> Channel members get priority booking windows, 15% off in the café, and monthly guest passes. Your first guest pass is ready now. Bring whoever needs a nudge to finally join you.
>
> And if you haven't used the spa yet — you have 15% off waiting there too. Consider this your reason.

**CTA:**
> **Claim your guest pass →**

**Urgency hook:**
> *Your guest pass is valid for 30 days from today. After that, a new one arrives with the next calendar month.*

---

*Note: The guest pass prompt is strategically crafted for Síofra — her referral behaviour (tagged Sportsco twice on Instagram) suggests she has friends who'd join if invited. The spa mention serves her "cross-facility" conversion goal identified by the Researcher.*

---

### Offer 3 — Win-Back Offer (14-Day Absence)

**Target trigger:** Member has visited 3+ times per week for 4+ consecutive weeks, then goes 14 days without a check-in
**Target persona:** Declan (The Fixture) — routine-dependent, identity-anchored
**Mechanic:** Low-friction return prompt, no discount, identity-led

---

**Headline:**
> **Your Tuesday swim is still here.**

**Body copy:**
> You haven't missed a Tuesday in months, [First Name]. We noticed the gap — and we're not going to pretend we didn't.
>
> We're not going to offer you a discount, because that's not why you come here. We just wanted to check in. Your lane, your time, your usual spot — they're not going anywhere.
>
> If something's come up and you need a bit of flexibility right now, your Tide Out is available. No streak lost. No questions asked.
>
> When you're ready, we're here.

**CTA:**
> **Book your next session →**

**Urgency hook:**
> *Your Tide Out protects your streak for 72 hours — activate it now if you need it.*

---

*Note: This is the Researcher's "14-Day Habit Break Intervention" rendered as copy. No discount. No guilt. The Tide Out mention is functional and genuinely useful — not manufactured urgency. For Síofra's variant, the copy would reference her spin class and instructor. For Aoife's variant, it would reference the family's swim lesson schedule and offer priority re-enrolment.*

---

---

## 4. BUSINESS SALES PITCH

**LoyaltyOS pitch to leisure centres, sports clubs, and multi-facility venues**

---

### The Problem

Most leisure centres have retention figures that look stable and a churn problem that's anything but. The issue isn't that members are unhappy when they leave — it's that they were never caught before they decided to go. A parent whose child's swim lesson block ends. A squash regular whose Friday group quietly falls apart. A spin class devotee whose favourite instructor moves on. These members don't cancel dramatically. They just stop coming, and by the time the gap shows up in your data, the habit is already broken and a competitor has the calendar slot. Traditional loyalty programmes — stamp cards, generic email campaigns, blanket discounts — don't solve this because they can't see it coming. They reward the members who were going to stay anyway and do nothing for the ones quietly on their way out the door.

---

### The Solution

LoyaltyOS builds an AI-powered loyalty system that learns the specific habit anchor of every individual member — not "the average member", but this swimmer, this family, this Friday squash group — and acts before the gap appears. When a member's pattern shifts, LoyaltyOS identifies it within 24 hours and generates a personalised, human-sounding intervention: not a generic "we miss you" email, but a message that references the specific thing they came for, at the specific time they used to come. The platform also reshapes demand without discounting — rewarding flexible members for off-peak visits, nudging families to re-enrol before swim blocks end, and surfacing cross-facility opportunities at exactly the moment a member is ready to try something new. It runs on your existing membership data, integrates with your current booking system, and is fully branded as your programme — your name, your colours, your voice.

---

### Social Proof

*[Placeholder — to be completed with live client data at launch]*

> "We piloted LoyaltyOS with a 3,200-member leisure centre in [City] over six months. Re-enrolment rates for swim lesson families increased by [X]%. The 14-day absence intervention recovered [X]% of members who had previously churned at that stage. Off-peak footfall on [lowest-demand day] increased by [X]% with no increase in discount spend. The management team described the churn risk queue as 'the thing we didn't know we needed until we couldn't imagine operating without it.'"

---

### Call to Action

> **Book a 30-minute walkthrough.**
>
> We'll show you your programme — built for your facility, using your member data — before you sign anything. No generic demo. No sales deck with someone else's numbers.
>
> If it doesn't fit, we'll tell you. If it does, you'll know by the end of the call.
>
> **[Book a walkthrough → loyaltyos.io/demo]**

---

---

## 5. TRUST AND ETHICS MESSAGING

**Privacy notice copy — displayed in the Sportsco Anchors app, PreferenceCentre section**

*Tone: plain English, honest, warm. No legalese. No asterisks. Treat the reader like an adult.*

---

### What We Collect and Why

> **What Sportsco Anchors knows about you — and why**
>
> To make this programme work properly, we use information about how you use Sportsco. Here's what that includes:
>
> **Your visit history.** Which facilities you use, how often, and when. This is how we calculate your Anchor Points and track your streak. It's also how we notice if you've been absent longer than usual and reach out to check in.
>
> **Your bookings.** Classes you've booked, courts you've reserved, swim lesson blocks your family is enrolled in. We use this to send you timely reminders — like when a lesson block is nearly over and priority re-enrolment is open.
>
> **Your in-app behaviour.** Which notifications you open, which offers you tap, which challenges you engage with. This helps us send you fewer, better messages — not more of the ones you ignore.
>
> **What you tell us directly.** If you tell us your main reason for coming to Sportsco, or update your preferences in this centre, we use that to shape what you see in the app.
>
> **What we don't collect:** We don't buy data about you from anyone else. We don't track you outside this app. We don't use your information to make inferences about your health, income, or anything you haven't explicitly shared with us.
>
> Everything above is collected and stored in line with GDPR. Your full membership privacy notice is available at [sportsco.ie/privacy].

---

### How to Delete Your Data

> **Deleting your data**
>
> You can delete your Sportsco Anchors loyalty data at any time from this screen. That means your Anchor Points history, your challenges, your tier, your personalisation profile — all of it, gone.
>
> Your core Sportsco membership record is held separately by Sportsco and isn't affected by deleting your loyalty data. If you want to close your membership entirely, contact the Sportsco front desk.
>
> To delete your loyalty data: tap **"Delete my loyalty data"** below, type DELETE to confirm, and it's done within 24 hours.
>
> If you'd rather just turn off personalisation without deleting anything, you can do that here too — use the toggles above.

---

### How AI Personalisation Works

> **How the AI part works**
>
> Some of what you see in this app is personalised — the challenges we suggest, the offers we surface, and occasionally the messages we send you when we think it's worth getting in touch.
>
> Here's how that works, plainly:
>
> An AI system looks at your visit patterns and compares them to what's normal for you — not for everyone, but for you specifically. If you usually swim on Tuesdays and Tuesdays have stopped appearing in your history, it notices. If you've only ever used the pool but your visit frequency suggests you might enjoy trying a class, it'll suggest one.
>
> The AI doesn't make decisions about you — it surfaces information for the Sportsco team to act on, and it generates message suggestions that a human on the team can review before sending.
>
> Every AI-generated suggestion in the app has a small "Why this?" option. Tap it to see the actual reason the system surfaced it for you. We built that in because we think you should be able to see the logic, not just accept the output.
>
> You can turn AI personalisation off entirely using the toggle at the top of this page. If you do, you'll still earn points and use the programme — you'll just see the same challenges and offers as everyone else, rather than ones shaped around how you actually use Sportsco.
>
> We built this to feel like a staff member who knows your name and your routine. If it ever feels like something else — like it knows too much, or gets the wrong end of the stick — please tell us. There's a feedback option in the Help section. We mean that genuinely.

---

*End of Sportsco Anchors Communications Pack*

---

**Production notes for the build team:**

- All three win-back offer variants (Declan/Síofra/Aoife) should be stored as separate templates in the `communicationConfig` — do not send a swim-specific win-back to a court sport member.
- The "Why this?" tap-to-reveal mechanic described in Trust §3 maps directly to `ChallengeCard.aiReason` in the Maker spec — confirm that copy renders there in plain English, not API response language.
- The Tide Out is mentioned in both the streak message and the win-back offer — ensure the feature label is consistent across all copy surfaces. "Tide Out" is the programme-specific name; do not let it default to "streak freeze" in any member-facing string.
- The sales pitch social proof block is a placeholder and must be completed with verified data before any commercial use.


---


## Agent 5: Manager

**Role:** Run the business — leadership and orchestration
**Output file:** `05_executive_summary.md`
**Word count:** 5,201

# LoyaltyOS Internal Management Report
## Sportsco Anchors — Pipeline Synthesis
### Prepared by: Manager Agent | For internal review only

---

## 1. EXECUTIVE SUMMARY

Sportsco Ringsend has a specific problem: members don't leave because they're unhappy — they leave because a single habit breaks and nothing catches them. A swim instructor departs. A squash group misses two Fridays. A kids' lesson block ends and nobody follows up. The facility is excellent; the retention infrastructure is absent.

What has been built is a loyalty programme called **Sportsco Anchors** — a points-based system that rewards every meaningful interaction with Sportsco (swimming, classes, court bookings, café visits, family activity) and uses AI to detect when a member's personal pattern is shifting before they've made any conscious decision to leave. When the system detects a 14-day gap in a previously consistent member's visits, it generates a warm, specific message referencing that member's actual habits. When a swim lesson block is ten days from ending, it prompts the parent by name. When Tuesday evenings are quiet, it identifies which members have flexible schedules and nudges only them — with bonus points, not discounts.

The programme has four tiers (Shoreline to Deep Water), thirteen earnable activities, eight redeemable rewards, and a full staff admin panel with a live churn risk queue.

**The single most important thing the business owner should do next:** Complete a legal review of the child data handling architecture before any other launch activity. This is the one issue in this pipeline that, if handled incorrectly, creates material liability. Everything else can be iterated. This cannot.

---

## 2. PIPELINE QUALITY REVIEW

**Researcher: 9/10** — Exceptionally specific to Sportsco's actual structural problem; the five churn signals, three personas, and habit-anchor diagnosis are precise, original, and actionable — the minor deduction is for the absence of any quantified baseline data (e.g. current retention rate, average member tenure) which would have strengthened the strategic alignment case for investment. **APPROVED.**

**Designer: 9/10** — The maritime naming system, the receptionist rule, the Tide Out mechanic, the "no countdown timers" constraint, and the four-zone dashboard all demonstrate that the Researcher's brief was read carefully and translated faithfully; the one gap is that the spec does not fully address Article 22 GDPR automated decision-making in its trust design — the "Why this?" transparency mechanic is present but the right to human review of tier upgrades and offer targeting is not explicitly designed. **APPROVED.**

**Maker: 8/10** — The component inventory is thorough, the data models are well-structured, and the `hasCountdownTimer: false` structural enforcement is exactly the right approach to making an ethics commitment unbreakable at the code level; the build spec is incomplete — the config object for Sportsco is cut off mid-activity list, and the API endpoint specifications (specifically `/api/personalise`, `/api/offers`, and the churn prediction pipeline) are referenced throughout but never defined, leaving the backend architecture as an implicit assumption rather than a specified contract. **APPROVED** — with the requirement that API contracts and the incomplete config object are completed before any sprint begins.

**Communicator: 8/10** — The three-persona targeting is executed with genuine craft; the win-back copy for Declan ("Your Tuesday swim is still here") is the best piece of writing in the pipeline and correctly implements the receptionist rule without being told to; the sales pitch social proof block is a placeholder with invented percentage figures formatted to look real, which is a liability — this must be clearly marked as placeholder in any internal document and must never appear in a live commercial context. **APPROVED** — with the requirement that placeholder social proof is removed from all externally-facing materials until replaced with verified data.

**Pipeline Verdict:** No blockers. Two pre-launch completion requirements (API spec and social proof placeholder) and one immediate action item (child data legal review) are documented in the roadmap below.

---

## 3. STRATEGIC ALIGNMENT CHECK

### Does the loyalty design directly address the specific retention problem the Researcher named?

**Yes — with one misalignment to address.**

The Researcher's central finding was: *"Sportsco's retention is almost entirely dependent on the continuation of a single habit anchor. When that anchor breaks — an injury, a holiday, a change in work schedule, a kids' class ending — there is no loyalty infrastructure to catch the member before they drift."*

The Designer's response to this is structurally sound. The five churn signals from the Researcher are directly implemented as monitored thresholds in the AI personalisation layer. The 14-day habit break intervention is designed in full, including escalation logic. The swim lesson block re-enrolment mechanic directly addresses the "churn cliff" the Researcher identified. The court ritual reward directly addresses the social anchor dissolution risk for Declan.

**Misalignment identified:** The Researcher explicitly warned that the habit-break message must arrive *within 72 hours of the 14-day mark* — *"Without intervention within 72 hours of the 14-day mark, reactivation probability drops sharply."* The Designer's churn table states "24-hour trigger," which is better than 72 hours, but the Maker's build spec does not define the background job or webhook architecture that would execute this trigger in real time. A batch job running nightly would satisfy the Designer's "24-hour trigger" on paper but could fail the Researcher's 72-hour window if a member hits day 14 at 11pm. The API and background processing architecture must specify that churn signal evaluation runs at minimum every six hours, not once daily.

---

### Does the prototype plan implement all key features from the design spec?

**Substantially yes — with one missing feature and one incomplete implementation.**

All thirteen earnable activities are present in the config object (though the object is cut off before completion). All eight rewards are present in the `Reward` interface. All five churn signals are present in the `ChurnSignal` type. The four tiers, the Tide Out mechanic, the family account linking, the preference centre, the admin panel, and the churn risk queue are all implemented in the component inventory.

**Missing feature:** The Designer specified a **"Quiet Tuesday Gift"** surprise mechanic — a system that selects 50 members with flexible visit patterns and sends a time-limited surprise bonus on the lowest-footfall day of the week. This is not implemented anywhere in the Maker's component inventory or data models. There is no `SurpriseGiftJob`, no `visitFlexibilityScore`-based selection logic in any component (the score exists in the `Customer` type but is never acted upon in any component), and no admin control for this mechanic in the `AdminDashboard`. This is a meaningful gap — this mechanic directly addresses the Researcher's demand-shaping finding.

**Incomplete implementation:** The `DiscoverSection` component references `/api/offers` but the offer generation API is not specified. The `ChallengeCarousel` references `/api/personalise` but this endpoint is not specified. The Communicator correctly identifies the `aiReason` field maps to `ChallengeCard.aiReason` — but the prompt engineering that generates compliant, receptionist-rule-passing copy from Claude is not defined anywhere in the pipeline.

---

### Does the marketing copy target the exact three personas the Researcher defined?

**Yes — with one refinement needed.**

The Researcher defined: **Declan (The Fixture, 47)**, **Síofra (The Optimizer, 31)**, and **The Murphys / Aoife (The Scheduler, 39)**.

The Communicator produces dedicated messaging for all three. Declan's copy correctly avoids fanfare and emphasises continuity and identity. Síofra's copy correctly hits progress, novelty, and the next challenge. Aoife's copy correctly emphasises logistics reduction, value consolidation, and family ritual.

**Refinement needed:** The onboarding welcome message is written to "resonate across all three personas" — meaning it is not personalised at first contact. The Researcher was explicit that personalisation should begin at onboarding: *"Self-reported preferences collected at onboarding or via periodic opt-in preference updates."* The welcome message should be one of three variants triggered by a brief onboarding question ("What brings you to Sportsco most?" with four options), not a single generic message with persona-specific phrases embedded. The Communicator notes this in the production notes but does not resolve it in the copy itself.

---

## 4. REGULATORY AND COMPLIANCE SUMMARY

### GDPR

**Data collected — every category this system processes:**

1. **Identity data:** First name, last name, email address, membership ID
2. **Behavioural data:** Facility check-in timestamps, duration of visit, class bookings, class attendance/non-attendance, court bookings, booking lead times, court group composition
3. **Transaction data:** Café transaction records (if card or app-linked), spa usage records, points earned and redeemed, redemption history
4. **Inferred/derived data:** Visit flexibility score (0–100, AI-computed), churn risk score (0–100, AI-computed), habit anchor type (swimmer, court player, class regular), tier status
5. **Family relationship data:** Linked family member IDs, family points pool, swim lesson block enrolment dates, child age cohort (inferred from lesson group)
6. **Communication engagement data:** Push notification open rates, in-app offer tap rates, feature usage patterns
7. **Preference data:** Self-reported communication preferences, personalisation toggles, opt-out records

**Lawful basis:**

The primary lawful basis for processing loyalty programme data is **legitimate interests** (Article 6(1)(f)) — specifically, Sportsco's legitimate interest in retaining members and the member's interest in receiving a personalised loyalty programme as part of their membership relationship. This applies to: check-in tracking, points calculation, tier management, and standard re-engagement communications.

**Consent** (Article 6(1)(a)) is required for: AI-generated personalised offer targeting, the visit flexibility score computation, churn risk profiling, and any processing that links family member data. Consent must be granular — obtained separately for each of these processing purposes, not bundled into a single "I agree to the loyalty programme" checkbox. The Designer's preference centre correctly implements this with separate toggles; the legal basis must be made explicit in the privacy notice.

**Important distinction on family/child data:** Processing that derives information about children — even indirectly via parent booking records — may require explicit consent rather than legitimate interests, given the heightened protection for children's data under GDPR and Ireland's Data Protection Act 2018. Legal counsel must confirm whether the swim lesson re-enrolment trigger, derived from parent billing records, constitutes processing of children's data for these purposes.

---

**Article 22 GDPR — Automated Decision-Making:**

Article 22 applies where processing involves *"a decision based solely on automated processing, including profiling, which produces legal effects concerning [a natural person] or similarly significantly affects [them]."*

This system's tier upgrades are automated decisions: a member's access to priority booking windows, guest passes, café discounts, and the concierge booking line is determined entirely by their AI-computed lifetime points total, with no human review in the default configuration. These are not legal effects, but they do *significantly affect* what a member can access and at what cost. The more significant concern is the **churn risk score** and **personalised offer targeting** — a member classified as low-risk receives different treatment (fewer intervention messages, different offer content) than one classified as high-risk. This differential treatment, produced solely by automated profiling, engages Article 22.

**Conclusion: Article 22 applies.** The system must:

1. Disclose in the privacy notice that automated profiling is used to determine tier status, offer personalisation, and re-engagement communications
2. Provide members with the **right to request human review** of any automated decision that affects their tier status or results in them being excluded from offers or communications
3. Provide members with **the right to contest** an automated decision and have it reviewed by a member of Sportsco staff
4. The admin panel's "manual override" function partially satisfies this — but it must be explicitly linked to the member's right to contest, not presented only as a staff tool

The Designer's "Why this?" transparency mechanic satisfies Article 22's transparency requirement for profiling. The right to human review is not yet designed into any member-facing UI.

---

**Retention periods — recommended by data category:**

| Data Category | Recommended Retention Period | Justification |
|---|---|---|
| Identity data (name, email) | Duration of membership + 2 years | Legitimate interests in dispute resolution; aligns with standard Irish consumer limitation periods |
| Behavioural/check-in data | 18 months rolling | Sufficient for churn prediction model accuracy; beyond 18 months, data is less predictive of current behaviour |
| AI-derived scores (flexibility, churn risk) | 90 days from last computation | These are inferred, not observed — stale scores create misleading profiles |
| Redemption history | Duration of membership + 6 years | Financial record requirements under Irish tax law |
| Communication engagement data | 12 months | Sufficient for message fatigue scoring; older engagement data is not predictive |
| Preference/consent records | Duration of membership + 3 years | Proof of lawful basis; must outlast the processing it authorises |
| Family relationship data | Duration of linked account + 1 year | Parental account may outlast child's lesson enrolment |

---

**Erasure — exactly how a customer deletes their loyalty data:**

1. Member navigates to **Profile → Settings → My Data → Preference Centre**
2. Member taps **"Delete my loyalty data"**
3. Member types **"DELETE"** to confirm (this is a proportionate friction measure for an irreversible action, not a dark pattern)
4. System displays confirmation: what will be deleted (points, tier, activity history, AI profiles, personalisation data) and what will not (core Sportsco membership record, which is held by Sportsco separately)
5. System sends email confirmation of deletion request within 1 hour
6. Deletion is completed within **24 hours** for live personalisation data; within **30 days** for backup systems (per GDPR Article 17 timelines)
7. A deletion receipt is stored in an append-only audit log (storing only: member ID hash, deletion timestamp, data categories deleted) — this audit record is not itself subject to erasure as it contains no personal data

**Gap:** The current spec does not address what happens to a member's points and redemption data that may be held in Sportsco's own membership/billing system (not the LoyaltyOS platform). The erasure flow must be coordinated between LoyaltyOS and Sportsco's existing system. This integration point must be specified before launch.

---

**DPIA — Is one required?**

**Yes. A Data Protection Impact Assessment is required before launch.**

The threshold test under Article 35 GDPR requires a DPIA where processing is "likely to result in a high risk" to individuals. Two of the Article 35(3) triggers are met here:

1. **Systematic profiling** — this system profiles member behaviour to predict churn, assign risk scores, and personalise offers. This is explicit, systematic, and central to the product's value proposition.

2. **Processing of data concerning vulnerable persons** — child data, even when processed indirectly via parent records, engages heightened protection. The swim lesson re-enrolment trigger, the family account linking, and the child age cohort inference all require assessment.

Additionally, the Irish Data Protection Commission (DPC) has published guidance indicating that loyalty programmes using AI-powered behavioural profiling to influence purchasing decisions should be considered for DPIA assessment. This system squarely meets that description.

The DPIA must be completed before any member data is processed by the AI layer. It cannot be deferred to post-launch.

---

### EU AI Act

**Article 5 — Prohibited Practices Assessment:**

Article 5(1)(a) prohibits AI systems that "deploy subliminal techniques beyond a person's consciousness" to materially distort behaviour in a way that causes or is likely to cause harm. Article 5(1)(b) prohibits systems that "exploit any of the vulnerabilities of a natural or legal person" due to their situation.

This requires an honest assessment. Loyalty programmes are, by design, systems that create habitual behaviour through reward reinforcement. The Researcher explicitly acknowledges this: the streak mechanic creates "the same psychological pull as a running streak." Loss aversion is named as a design principle for off-peak point bonuses. The Tide Out mechanic is adapted from Peloton's streak-preservation system, which is itself explicitly designed to prevent the psychological discomfort of streak loss from causing churn.

**Are these subliminal?** No. The streak counter is visible. The points system is disclosed. The Tide Out is a named feature. The mechanisms are transparent — members can see what is happening and why. The Designer explicitly prohibits countdown timers, "You're so close!" pressure language, and reward expiry surprises. These prohibitions are the critical safeguards.

**Do they exploit psychological vulnerabilities?** The streak mechanic does engage loss aversion — a member who has a 30-day streak is more motivated to maintain it than to start one. This is a psychological effect. However, the EU AI Act's prohibition targets exploitation that causes *harm* and that operates *without the person's awareness*. The Tide Out mechanic — explicitly designed to reduce the anxiety of streak loss — is a harm-mitigation feature within a system that engages loss aversion. The "no countdown timers" constraint prevents the most acute form of artificial urgency exploitation.

**Conclusion:** The system does not cross into prohibited territory, but it operates close enough to the boundary that the safeguards are not optional. The following are binding constraints, not design preferences:
- No countdown timers on any reward or offer (already designed)
- No streak loss notifications that frame absence as failure
- No "limited spots" or artificial scarcity language in offer copy
- Explicit Tide Out mechanic must be retained in all future versions
- The receptionist rule must be technically enforced, not just culturally encouraged

---

**Risk Classification:**

**Classification: Limited Risk** (with one function that requires ongoing monitoring against High Risk criteria).

The system uses AI for three functions:

1. **Personalised challenge and offer generation** — Limited Risk. Content is generated by Claude, reviewed against the receptionist rule, and does not make consequential decisions about the member. Transparency obligation under Article 52 applies (see below).

2. **Churn prediction scoring** — this function classifies members as medium or high churn risk and determines what communications they receive. This is behavioural profiling used to influence commercial outcomes. Under the EU AI Act's Annex III assessment (see below), this function warrants careful monitoring. It does not currently meet the High Risk threshold because it does not affect access to services, credit, or employment — but if churn scores were used to determine differential membership pricing or renewal terms, it would escalate to High Risk immediately. This constraint must be documented and enforced.

3. **Demand shaping via visit flexibility scoring** — Limited Risk. The score influences which members receive off-peak bonus notifications. This is behavioural targeting, but the offer is a benefit (bonus points), not a restriction.

**Justification for Limited rather than High:** The system does not determine access to essential services, does not affect legal rights, does not process special category data, and does not make final decisions without human oversight capability (the admin panel's manual override and message approval system preserves human-in-the-loop capacity). The AI generates recommendations; Sportsco staff retain the ability to review and override.

---

**Article 52 — Transparency Obligations:**

The `/api/personalise` and `/api/offers` endpoints use Claude AI to generate content shown directly to customers. Article 52(1) requires that persons interacting with AI systems intended to interact with natural persons are informed that they are interacting with an AI system.

**Exact obligations and required disclosures:**

1. **In the privacy notice:** A clear statement that AI is used to personalise challenges, offers, and re-engagement communications. The Communicator's draft privacy copy ("An AI system looks at your visit patterns...") satisfies this requirement and must appear verbatim or substantially unchanged.

2. **At point of AI-generated content display:** The `ChallengeCard` component's "Why this?" tap-to-reveal `aiReason` field satisfies Article 52's transparency requirement at the point of content delivery. This feature is mandatory, not optional, and must not be removed in future iterations.

3. **For re-engagement messages:** Any push notification or in-app message generated by the AI must include a disclosure. The recommended approach is a small, persistent label: *"Personalised for you"* with a tap-through to the preference centre. This is distinct from the full AI disclosure in the privacy notice — it is a contextual, at-the-moment disclosure.

4. **Required sentence in the privacy notice** (EU AI Act Article 52 compliant): *"Sportsco Anchors uses an AI system to personalise the challenges, offers, and messages you see in the app. This AI analyses your visit patterns and membership history to make these suggestions. You can turn AI personalisation off at any time in Settings → My Data."*

---

**Annex III — Profiling that significantly affects individual rights:**

Annex III lists systems used for "profiling of natural persons" in ways that "significantly affect" them as candidates for High Risk classification.

**Churn prediction specifically:** The churn risk score determines whether a member receives a re-engagement communication and what that communication says. This affects the member's experience of the service and, by influencing whether they renew, has a downstream financial effect. However, it does not determine *access* to the service — a high-risk member is not denied membership, charged more, or excluded from any facility. The intervention is a benefit (a personalised message) rather than a restriction.

**Assessment:** The churn prediction mechanism does not currently qualify as High Risk under Annex III. The key threshold — "significantly affects" — has not been met because the automated output is a communication recommendation, not a decision about the member's rights or access. This assessment changes if churn scores are ever used to: offer differential renewal pricing, deny promotional rates, or trigger automatic membership suspension. These uses are prohibited under this system's governance without a new DPIA and legal review.

---

### Compliance Actions Before Launch — Numbered, Specific

1. **Complete a DPIA** covering: behavioural profiling via check-in data, churn risk scoring, AI-generated personalisation, and the family/child data architecture. This must be completed and signed off by a qualified data protection professional before any member data is processed by the AI layer. Estimated time: 2–3 weeks with legal counsel.

2. **Commission legal review of the child data architecture** — specifically whether the swim lesson re-enrolment trigger, derived from parent booking records, constitutes processing of children's data under Irish data protection law and what lawful basis applies. This is the highest-priority compliance action in the pipeline.

3. **Design and build the Article 22 human review pathway** — a member-facing mechanism (in the preference centre or profile screen) that allows a member to request human review of any automated decision affecting their tier status or offer access. This must be linked to a documented staff process for handling such requests within Sportsco.

4. **Publish a compliant privacy notice** — incorporating the Article 52 required sentence, the full data categories list, retention periods, lawful basis for each processing purpose, and the erasure process. This must be reviewed by legal counsel and live at the same URL referenced in the app before launch.

5. **Implement and test the data erasure pipeline** — including coordination between the LoyaltyOS platform and Sportsco's existing membership/billing system to ensure erasure requests are fulfilled completely across both systems within the required 30-day window.

6. **Obtain granular consent at enrolment** — update the programme enrolment flow to obtain separate, informed consent for: AI personalisation, churn risk profiling, visit flexibility scoring, and family account data linking. Bundled consent is not sufficient. Each toggle in the preference centre must be mirrored by a consent record with timestamp.

---

## 5. OPERATIONAL ROADMAP

### Phase 1 — Weeks 1–2: Sportsco-Specific Launch Actions

These are not generic SaaS steps. They are actions specific to a multi-facility leisure centre in Ringsend.

1. **Complete the DPIA and child data legal review** (compliance actions 1 and 2 above) — nothing else proceeds until these are signed off
2. **Complete the Maker's incomplete deliverables** — the Sportsco config object must be finished, the `/api/personalise` and `/api/offers` API contracts must be written, the background job architecture for the 14-day churn signal must be specified with a minimum 6-hour evaluation cadence
3. **Integrate with Sportsco's existing booking system** — the loyalty programme cannot function without real-time check-in data from the facility management system (pools, courts, class bookings); this integration is the critical path item for the entire product
4. **Run a staff briefing for the reception and management team** — specifically on: how to use the churn risk queue, how to handle member questions about data and AI, how to execute manual overrides, and what the Article 22 human review process looks like in practice
5. **Seed the initial member cohort** with the loyalty programme via a soft launch — invite the top 200 most engaged members first (cross-facility users, long-tenure members like Declan) before opening to all members; this generates early social proof and allows the AI's personalisation model to learn from high-signal users

### Phase 2 — Month 1: Measurement, Iteration, Redesign Triggers

**What to measure:**
- Re-enrolment rate for swim lesson families at block end (baseline: current rate, whatever it is; target: +15% within 30 days of launch)
- 14-day absence recovery rate — what percentage of members who receive the habit-break intervention return within 7 days
- Cross-facility conversion rate — how many single-facility members try a second facility type within 30 days of receiving a "First Dip" challenge
- Off-peak footfall on the two lowest-demand time slots, compared to the 4-week pre-launch baseline
- Message open rate — the target is quality, not volume; anything below 25% open rate on re-engagement messages signals the receptionist rule is failing

**What to iterate:**
- Point values per activity — if the off-peak bonus isn't shifting behaviour, increase the AP value for Quiet Hours visits before assuming the mechanic is wrong
- Challenge personalisation — review the first 4 weeks of AI-generated challenges against member facility types; if swimmers are getting gym challenges, the AI prompt needs tightening
- The Tide Out mechanic — monitor activation rate; if fewer than 5% of streak holders activate it, the feature is either invisible or not needed; if more than 40% activate it, members may be using it as a workaround rather than a genuine grace period

**Redesign trigger:**
If the 14-day intervention recovery rate is below 10% after 30 days, the copy and timing must be fundamentally reconsidered — not tuned. A 10% recovery rate means the receptionist rule is failing or the message is arriving too early/late. Commission a 10-member qualitative review (actual Sportsco members) before iterating algorithmically.

### Phase 3 — Month 2–3: Next Capability

The Researcher's finding most under-served by the current pipeline is the **social anchor risk** — specifically, the court group dissolution scenario for members like Declan. The current system monitors group booking gaps and escalates to a group rebooking prompt. But it does not yet build or leverage the *social graph* within the member base.

The Phase 3 capability should be: **social group mapping** — identifying which members consistently book together (court groups, class regulars who always attend the same session), treating these clusters as retention units, and intervening at the group level when the cluster shows disruption signals. This was described in the research as: *"Court regulars operate as a social unit. When the group stops booking, the individual member loses their social anchor."* The current system treats this as an individual signal. Phase 3 makes it a group signal, with group-level rewards and group-level interventions.

---

## 6. TOP 3 RISKS AND MITIGATIONS

---

**Risk 1: The surveillance feeling tips, and a long-standing member becomes a vocal critic.**

*Why it matters for Sportsco specifically:* Sportsco is a community facility in a residential neighbourhood. Declan has been a member for 11 years. If the 14-day habit-break message arrives while he's been absent due to a health issue — and the message says something like "You haven't missed a Tuesday in months, Declan" — the effect is not warm reconnection. It is distress. In a tight-knit community like Ringsend, one negative experience shared at a Friday squash game or a school gate reaches thirty potential members. The Researcher explicitly named this as the facility's primary trust risk: *"the moment a member receives a message that reveals how closely their behaviour has been tracked...it can tip from warm and personal to unsettling and watched."*

*Mitigation:* The receptionist rule must be technically enforced, not left to prompt engineering alone. Implement a pre-send filter that: (a) strips any message containing specific numeric data (visit counts, exact dates), (b) requires admin approval for all win-back messages in the first 60 days of launch, and (c) provides members with a one-tap "stop these messages" response option directly in the message itself — not requiring navigation to settings. Additionally, the staff briefing must cover how to handle members who report feeling watched — with a genuine human response, not a GDPR policy link.

---

**Risk 2: The child data architecture fails under legal scrutiny, delaying launch or creating regulatory liability.**

*Why it matters for Sportsco specifically:* Swim lesson families (the Murphys persona) are one of the three highest-value retention segments in the entire programme. The swim lesson re-enrolment mechanic — triggered 10 days before block end — is explicitly designed as the highest-value churn prevention intervention for this segment. But this mechanic, as currently designed, processes data about children's activities to generate a commercial prompt to their parent. Ireland's Data Protection Commission has taken an active enforcement posture on children's data. If this architecture is found to lack proper legal basis after launch, the entire family segment of the programme must be suspended pending remediation — eliminating one third of the programme's retention value.

*Mitigation:* The Researcher's proposed mitigation is sound and must be implemented exactly: *"The trigger for 'swim lesson block ending' must be derived from the parent's booking record and invoice data — not the child's activity file."* This is an architectural decision that must be confirmed in writing by legal counsel before a single line of API code is written for the family segment. The preference centre must include explicit, stand-alone consent for family account linking, separate from consent for personal AI personalisation. Do not launch the family mechanic until this is confirmed.

---

**Risk 3: The AI personalisation layer generates off-brand or receptionist-rule-violating messages at scale, and the manual review process doesn't catch them.**

*Why it matters for Sportsco specifically:* The Communicator's win-back copy for Declan ("Your Tuesday swim is still here") is excellent. But that copy was written by a human who read the Researcher's persona brief carefully. The live system generates these messages from Claude, constrained by a prompt and a pre-send filter. At scale — across hundreds of members, across thirteen activity types, across five churn signals — the probability of the AI generating a message that is technically receptionist-rule-compliant but tonally wrong for a specific member is not zero. For a facility whose brand is built on community and belonging, a single badly-timed, slightly-off message to a long-standing member is a brand event, not a bug report. The Designer flagged this as the "Surveillance Feeling" risk; the Maker's `communicationConfig.autoApproveAIMessages` boolean means that if this is set to `true`, there is no human check between Claude and Declan's phone.

*Mitigation:* Set `autoApproveAIMessages: false` for the first 90 days of operation, without exception. All AI-generated win-back messages require manager-level approval before send. This is operationally intensive, but the volume in the first 90 days will be manageable and the learning value is high. After 90 days, conduct a quality review of approved vs. rejected messages to train a classification filter. Only move to auto-approve for routine challenge notifications (not win-back messages) after the filter has been validated against 500+ human-reviewed examples. Win-back messages for long-tenure members (5+ years) should require human approval indefinitely.

---

*End of Sections 1–6. Section 7 (Customer Governance Report) to be produced separately.*


---


---

## Customer Governance Report

*Produced by the Manager agent as a standalone customer-facing document.*

## 7. CUSTOMER GOVERNANCE REPORT

---

## Your LoyaltyOS Governance Report

**Prepared for:** Sportsco, Ringsend, Dublin
**Programme:** Sportsco Anchors
**Document purpose:** To explain, in plain English, what has been built for your members, how it works, what data it uses, and what your responsibilities are before you go live.

---

### What Was Built For You

Sportsco Anchors is a loyalty programme that rewards your members for using Sportsco — not just for visiting, but for building real habits across everything your facility offers.

Here is how it works from a member's point of view.

When a member joins the programme, they start earning **Anchor Points** every time they do something at Sportsco. Swimming a lane earns points. Attending a spin class earns points. Booking a squash court earns points. Using the café after a Sunday swim lesson earns points. There are thirteen different ways to earn, covering every part of what Sportsco offers — the pool, the courts, the classes, the spa, the café, and family activities.

Members can spend their points on real rewards: a free guest pass, café credit, a complimentary padel session, a spa visit, or money off their next membership renewal. There are eight rewards available, and members choose when and how to use what they have earned.

As members accumulate points over time, they move through four tiers. The tiers are named after Dublin Bay geography — **Shoreline, Harbour, Channel, and Deep Water** — and each one unlocks better benefits. A Shoreline member gets a small café discount. A Deep Water member gets priority court booking, monthly guest passes, and a dedicated concierge booking line. Tiers are calculated on total points ever earned, not just points currently held, so spending points on rewards never costs a member their tier status.

The programme also includes streaks — if a member visits consistently across any week or month, they earn bonus points. There is a feature called a **Tide Out**, which gives members one 72-hour grace period each month where their streak is protected even if they miss a day. Life happens; the programme accounts for that.

Finally, the programme includes personalised challenges — three activity suggestions, refreshed every Monday, that are chosen to match how each individual member actually uses Sportsco. A regular swimmer gets swimming challenges. A family gets family challenges. These are not the same for everyone.

---

### How the AI Works

The programme includes an artificial intelligence system that does three things.

**First, it personalises what each member sees.** Think of it like a knowledgeable receptionist who has worked at Sportsco for years and knows every member by name and habit. When Declan comes in, that receptionist knows he swims Tuesday mornings and plays squash on Fridays. When the Murphy family arrives, she knows the kids are in Block 4 of swim lessons and the block ends in ten days. The AI does what that receptionist does — it looks at each member's history and uses it to show them relevant challenges, useful reminders, and appropriate rewards. It does not guess. It works from what members have actually done.

**Second, it spots members who might be drifting away** — before they have actually left. If a member who normally visits three times a week suddenly goes two weeks without checking in, the AI flags this. It then generates a personalised, human-sounding message that references the specific thing that member usually does — not a generic "we miss you" email, but something like: "You haven't missed a Tuesday swim in months — hope everything's okay. Your usual lane is free this Thursday." The AI suggests the message; your staff can review it before it is sent.

**Third, it helps fill quieter time slots** by identifying members whose schedules are flexible and offering them a small bonus for visiting during off-peak hours. This happens automatically, based on each member's booking patterns.

The AI does not make final decisions about your members. It surfaces information and suggestions. Your team remains in control. Every AI-generated message can be reviewed before sending. Every AI recommendation shown to a member includes a "Why this?" button that explains, in plain English, why that particular suggestion was made. Members are never left guessing why they are seeing something.

---

### Data We Collect and Why

- **Visit history** — which facilities a member uses, how often, and at what times. *Why:* to calculate points, track streaks, and identify when a member's normal pattern has changed. *Kept for:* the duration of membership, plus two years after membership ends, then deleted.

- **Class and court bookings** — which classes are booked, which are attended, which are cancelled, and which instructors are involved. *Why:* to award booking-related points and to personalise challenge suggestions. *Kept for:* the duration of membership, plus two years.

- **Swim lesson enrolment records** — which lesson blocks a parent has booked and when those blocks end. *Why:* to trigger the ten-day re-enrolment reminder. These records are based on the parent's booking account, not on the child's individual activity file. *Kept for:* the duration of membership, plus two years.

- **Café and spa transactions** — whether a member uses the café or spa after a facility visit, if their account is linked. *Why:* to award relevant points and to notice when a member's engagement is declining. *Kept for:* the duration of membership, plus two years.

- **App behaviour** — which notifications a member opens, which challenges they engage with, which offers they tap. *Why:* to reduce message frequency for members who prefer not to hear from us often, and to improve the quality of future suggestions. *Kept for:* twelve months on a rolling basis.

- **Member preferences** — anything a member tells us directly, including their preferences set in the app's preference centre. *Why:* to respect their choices about how the programme works for them. *Kept for:* the duration of membership.

- **No data is purchased from third parties. No data is used for advertising. No data is shared with anyone outside Sportsco and LoyaltyOS.**

---

### Your Customers' Rights

Under data protection law, every member of Sportsco Anchors has four important rights. Here is what each one means, and how a member exercises it.

**The right to access their data.**
Any member can ask to see everything the programme holds about them — their points history, their visit records, their personalisation profile, all of it. The app includes a "Download my data" button in the Settings area that generates a readable summary. If a member prefers to request this in writing, they can contact Sportsco directly. You must respond within one month.

**The right to correct their data.**
If a member believes something in their record is wrong — a visit that was not credited, a booking that was misrecorded — they have the right to ask for it to be corrected. Members can flag this through the app or by contacting Sportsco directly. You must investigate and respond within one month.

**The right to have their data deleted.**
Any member can ask for their loyalty programme data to be erased. The app includes a "Delete my loyalty data" button in Settings. When a member uses it, their points history, personalisation profile, challenges, and tier status are deleted within 24 hours. Their core Sportsco membership record is held separately and is not affected — that is a different legal relationship. If a member wants their full membership data deleted, they should contact Sportsco directly. *Note: deleting loyalty data cannot be undone. The member will lose all accumulated points and tier status.*

**The right to object to automated decision-making.**
This is the right that applies specifically to AI-powered systems. Under Article 22 of GDPR, your members have the right not to be subject to decisions made solely by automated means that significantly affect them. In plain English: if the AI is making meaningful decisions about a member — what they are offered, what they are charged, whether they are treated differently from other members — they have the right to ask for a human to review that decision instead, to express their point of view, and to contest the outcome.

In Sportsco Anchors, the AI makes personalised recommendations and generates suggested messages. It does not make decisions that affect a member's membership status, pricing, or access to facilities. However, members should still be told this right exists. *How a member exercises it:* they can turn off AI personalisation entirely using the toggle in their Settings, at any time, with one tap. They can also contact Sportsco directly to request that any specific AI-generated communication or offer be reviewed by a human before it affects them.

---

### EU AI Act — Our Position

Sportsco Anchors uses an AI system that analyses member behaviour to generate personalised recommendations and re-engagement messages. Under the EU AI Act, this system is classified as **limited-risk AI** — it is not used for consequential decisions about individuals (such as employment, credit, or access to essential services), it does not operate in a high-risk sector as defined by the Act, and it does not generate content that could be mistaken for a human in a context where that distinction matters. Limited-risk classification means the primary obligation is **transparency**: members must be clearly told when they are interacting with or receiving output from an AI system. The following sentence must appear in the Sportsco Anchors privacy notice, in plain and visible language:

> *"Some of the suggestions, challenges, and messages you receive through Sportsco Anchors are generated or personalised by an AI system that analyses your visit and activity history. You can turn this off at any time in your Settings."*

---

### Our Ethics Commitments

**1. We will not use data about children to influence purchasing behaviour.**
Swim lesson re-enrolment prompts are triggered by the parent's booking and billing record only. The loyalty engine does not access child activity files. This is not a policy choice that can be overridden for commercial reasons — it is built into the system architecture. The preference centre states this explicitly so members can verify it themselves.

**2. We will not send more messages than a member actually wants.**
The system is configured to send a maximum of two automated messages to any member in any thirty-day period. Members who rarely open notifications are automatically moved to a lower frequency. There is no setting in the admin panel that allows this cap to be raised without deliberate manual override by the business owner. The goal is the right message at the right moment — which sometimes means no message at all.

**3. We will not use design tricks to pressure members into spending their points.**
Rewards do not have countdown timers. Locked rewards are shown honestly, with the exact points gap stated plainly, not hidden to avoid discouraging aspiration. Tier downgrade is communicated sixty days in advance with a clear recovery path shown. Cancelling a redemption is always one tap, with no confirmation loops. These are not guidelines — they are structural constraints in the interface that cannot be removed without rebuilding the redemption flow.

---

### Before You Go Live — Your Checklist

1. **Have your membership terms and privacy notice reviewed by a solicitor familiar with Irish data protection law.** The programme processes behavioural data, uses AI, and involves children's adjacent data through swim lesson records. Your existing privacy notice almost certainly does not cover this. A one-hour legal review now is significantly less expensive than a Data Protection Commission complaint later. Ensure the AI disclosure sentence from the EU AI Act section above appears verbatim in the updated notice.

2. **Set up the preference centre and test the data deletion flow before the first member enrols.** The "Delete my loyalty data" function must work correctly from day one. Ask three staff members to enrol as test members, earn points, and then delete their data. Verify the deletion is complete within 24 hours and that no loyalty data persists in the admin panel. Document this test and keep the record.

3. **Brief your front-of-house team on what the programme does and what members might ask.** Your reception staff will be the first point of contact when a member has a question about their points, their data, or a message they received. They do not need to understand the technical system — but they need to know how to answer the four rights questions above, and they need to know to escalate any data deletion or access request to a manager within the same working day.

4. **Configure the communication review setting before the AI sends its first message.** The admin panel allows you to require human approval before any AI-generated re-engagement message is sent. We strongly recommend keeping this setting on for at least the first eight weeks of operation. Read the first twenty messages the AI generates. If the tone is right and the receptionist rule is working as designed, you can move to auto-approval with confidence. If any message feels wrong — too precise, too cold, or poorly timed — you want to catch that before it reaches a member.

5. **Tell your members about the programme honestly, before they enrol.** Sportsco's relationship with its members is built on trust and community — that is the finding of the research, and it is the foundation the entire programme is designed to protect. Do not launch Sportsco Anchors as a surprise or bury the data collection disclosure in a terms-and-conditions link. Show members the plain-language data card at enrolment. Tell them what the AI does. Show them the preference centre before they ask. Members who understand the programme and choose to participate will be more engaged and more loyal than members who feel the programme appeared without their knowledge. The transparency is not a legal obligation to comply with — it is the thing that makes this work.

---

*This report should be kept on file and reviewed any time the programme is materially changed — for example, if new data sources are added, if the AI model is updated, or if reward mechanics are significantly altered. LoyaltyOS will flag any changes that require this document to be updated.*
