# LoyaltyOS — Full Pipeline Report

**Business slug:** `slamfitness`  
**Generated:** 29 April 2026, 23:24
**Agents completed:** 5/5
**Total words:** 19,000

This document contains the raw output of every agent in the LoyaltyOS pipeline,
in handoff order. Each agent received the previous agent's output as its input.

| # | Agent | Role | Words |
|---|-------|------|-------|
| 1 | **Researcher** | Identify the opportunity | 2,314 |
| 2 | **Designer** | Create the solution | 4,373 |
| 3 | **Maker** | Build the product | 3,226 |
| 4 | **Communicator** | Get the customers | 3,654 |
| 5 | **Manager** | Run the business | 5,433 |

---


---


## Agent 1: Researcher

**Role:** Identify the opportunity — deep analysis and pattern recognition
**Output file:** `01_research_brief.md`
**Word count:** 2,314

# LoyaltyOS Research Brief
## Client: Slam Fitness | Boutique Strength & Performance Studio | Stoneybatter, Dublin 7

---

## 1. CUSTOMER ENGAGEMENT PROBLEM

### The Structural Diagnosis

Slam Fitness does not have a marketing problem. It has a **progress plateau retention problem** compounded by a **social dependency cliff**.

Here is the uncomfortable truth: the very thing that makes Slam Fitness compelling — personalised coaching, measurable progress, tight community bonds — is also the architecture of its churn risk. When a member stops *feeling* progress (whether real or perceived), the premium justification for a boutique studio over a €30/month commercial gym collapses overnight. And when a member's social anchor — a training partner, a favourite coach, a regular class crew — is disrupted, the belonging that kept them accountable disappears with it.

Quiet day footfall is not a scheduling problem. It is a **perceived-value erosion signal**. Members on quiet days are members whose habit loop has weakened. They are 6–10 weeks from cancellation.

### Behavioural Churn Signals (Specific)

1. **The Frequency Drop**: A member who visited 4–5x per week drops to 2x per week for two consecutive weeks without an explained absence (holiday, illness). This is the single most predictive early churn signal.
2. **The Class Switch**: A member who attended the same class slot for 6+ weeks suddenly books a different time or class type — social anchor disruption. They've lost their crew or their coach availability has changed.
3. **The Quiet Day Slide**: A member begins attending only during off-peak hours (mid-morning weekdays) after previously attending peak sessions. They are disengaging from the community without cancelling.
4. **The Ghost Booking**: A member books sessions 3+ times in a two-week window but no-shows or late-cancels. Ambivalence is materialising. They want to want to come. They're not coming.
5. **The Progress Silence**: A member who previously engaged with coaching feedback, logged PRs, or participated in gym challenges goes quiet for 21+ days. They've stopped measuring. When members stop tracking progress, they stop believing in it.

---

## 2. MARKET OPPORTUNITY

### Why a Stamp Card Fails Slam Fitness Completely

A stamp card rewards *transactions*. Slam Fitness sells *transformation*. These are categorically different value propositions.

A stamp card for a boutique gym says: "Come 10 times, get a free session." It treats attendance as the product. But the member who comes 10 times and feels no stronger, looks no different, and has made no friends will leave regardless of the free session. Worse, it commoditises the experience — which is exactly what Slam Fitness is not.

What Slam Fitness needs is a loyalty system that **rewards identity formation**, not transaction volume. The member needs to feel like a *Slam Fitness athlete*, not a points collector.

AI-powered loyalty can detect the ghost booking pattern before the member consciously knows they're disengaging and trigger a human coach intervention — not a discount voucher, but a personal message. That is not possible with a stamp card.

### Analogous Programmes

**1. Peloton's Milestone & Streak System**
Peloton rewards output-based milestones (100th ride, personal output records) and streaks, building identity around the number. Members celebrate milestones publicly. It works because it ties loyalty mechanics to *measurable progress*, not just attendance.
*What LoyaltyOS does that Peloton doesn't:* Peloton's system is self-reported and app-driven in isolation. LoyaltyOS integrates coach awareness — so the intervention when a streak breaks is a *human* message from someone who knows your name, not an automated push notification from an algorithm.

**2. Barry's Bootcamp Community Leaderboards**
Barry's uses class energy, branded community language ("Barry's Baby," "Barry's Regular"), and social identity markers to create belonging. Members wear the identity.
*What LoyaltyOS does that Barry's doesn't:* Barry's community mechanics are uniform — everyone gets the same experience. LoyaltyOS segments by persona and personalises the trigger. A competitive member gets a leaderboard nudge. A progress-motivated member gets a PR reminder. A community-driven member gets a "your crew misses you" prompt. One system, three different interventions.

---

## 3. CUSTOMER SEGMENTS

### Persona 1: "The Competitor" — Ciarán

**Behaviour Pattern:** Male, 28–36, attends 5x per week, predominantly strength sessions, tracks his lifts obsessively, compares himself to others without admitting it. Shows up early to set up. Stays late to ask the coach about programming. Volunteers for every challenge, event, or benchmark workout.

**Loyalty Trigger:** Public recognition of measurable performance. Ciarán needs to *rank*. A leaderboard, a PR board on the wall, a callout in the group chat — these are not vanity metrics to him, they are proof that the investment is working.

**The ONE thing that causes disengagement:** He plateaus for 4+ weeks with no programme adjustment and no acknowledgement from coaching staff. When progress stalls and no one addresses it, Ciarán starts researching other gyms. He will not tell you he's leaving. He'll just stop showing up.

---

### Persona 2: "The Transformer" — Aoife

**Behaviour Pattern:** Female, 25–33, joined with a specific goal (lose weight, get stronger, prepare for an event). Attends 3–4x per week. Highly coachable, responds emotionally to encouragement, shares progress on Instagram stories. Her attendance correlates directly with how confident she feels about her progress.

**Loyalty Trigger:** Visible, documented, emotionally-validated progress milestones. Aoife needs someone to notice. When the coach says "Aoife, your deadlift has gone up 15kg in three months" in front of the group, she posts about it. She refers two friends the following week.

**The ONE thing that causes disengagement:** A life disruption (work stress, illness, bad week) breaks her 3-week streak and nobody reaches out. Aoife's inner narrative turns negative ("I've fallen off, I've wasted their time, I'll restart in January"). She does not restart in January.

---

### Persona 3: "The Anchor" — Declan

**Behaviour Pattern:** Male or female, 35–45, been a member for 18+ months, attends 3x per week like clockwork, always the same sessions, always greets newer members, knows everyone. Does not care about leaderboards. Does not post on social media. Comes because Tuesday at 7am is simply what he does.

**Loyalty Trigger:** Community belonging and routine preservation. Declan is not motivated by rewards. He is retained by *friction removal* — the gym must make it effortless to maintain his routine. His loyalty is entirely habitual and social.

**The ONE thing that causes disengagement:** His class time is discontinued, his favourite coach leaves, or a cohort of his "Tuesday crew" all cancel around the same period. Declan's gym is his third place — disrupt the social geography and the habit collapses. He won't be angry. He'll just quietly stop renewing.

---

## 4. ENGAGEMENT MECHANICS

| Activity | Retention Mechanism |
|---|---|
| **Logging a Personal Record (PR)** | **Progress loop reinforcement.** Every logged PR is evidence that the membership is working. LoyaltyOS surfaces this historically ("You've hit 7 PRs since joining"). Prevents the "I'm not getting anywhere" narrative that kills memberships silently. |
| **Attending during a Quiet Period (off-peak weekday)** | **Loss aversion + variable reward.** Members earn bonus points for attending Tuesday 11am or Thursday 2pm. This directly addresses Slam Fitness's stated footfall problem. Frame it as an exclusive "Off-Peak Athlete" benefit, not a discount bribe. |
| **Referring a Friend Who Joins** | **Social identity amplification.** The referring member becomes a *founding member of someone else's journey* — this deepens their own commitment. A referral is not just a business transaction; it is a public declaration of belief in the gym. Reward both parties. |
| **Completing a Full Programme Cycle** | **Sunk cost positivity + milestone identity.** Completing an 8 or 12-week programme is a behavioural commitment signal. Reward it with a badge, a coach callout, and an automatic re-enrolment prompt with a personalised next-phase recommendation. |
| **Tagging Slam Fitness in a Social Post** | **Social proof + identity investment.** When Aoife posts her deadlift video tagging Slam Fitness, she has publicly committed to her identity as a Slam athlete. LoyaltyOS rewards this and surfaces it internally so coaches can acknowledge it. The post makes it harder to quietly cancel. |
| **Attending a Streak (7, 14, 30 days without missing a scheduled session)** | **Habit loop solidification + loss aversion.** Streaks work because breaking them *costs something*. The reward is secondary to the psychological weight of the streak itself. Alert members at day 5 ("You're 2 days from a 7-day streak") to activate loss aversion before the streak, not after it breaks. |
| **Participating in a Gym Challenge or Event** | **Community anchoring.** Challenges (a 4-week strength block, a team bootcamp competition) create temporary but powerful social bonds. Members who complete a challenge together have a shared narrative. LoyaltyOS tracks participation and uses it to identify natural community clusters. |
| **Leaving a Coach Review or Feedback** | **Reciprocity + relationship deepening.** When a member takes time to acknowledge a coach, they articulate what they value — which deepens their own perceived investment in the relationship. This data is also gold for LoyaltyOS personalisation. |

---

## 5. DATA AND PERSONALISATION OPPORTUNITIES

### Ethically Collectible Behavioural Signals

- **Session attendance timestamps** — which days, which times, how frequently
- **Class type selection** — strength vs. conditioning vs. bootcamp preferences
- **Booking behaviour** — advance booking vs. same-day, cancellation patterns, no-show frequency
- **PR and progress logs** — if integrated with coaching software or manually logged
- **Referral activity** — who referred whom, and how active referrals become
- **Social engagement** — tagged posts, shares (opt-in, not scraped)
- **Streak and milestone data** — streaks started, broken, resumed
- **Coach interaction frequency** — direct messages, feedback submissions, challenge participation

All of this is first-party, consent-based, and tied to explicit value exchange (they share, they earn). Nothing passive. Nothing inferred from data they didn't choose to give.

### How AI Personalises for Each Persona

**Ciarán (The Competitor):**
AI detects a 3-week PR plateau. It does not send him a discount. It triggers a coach prompt: *"Ciarán hasn't logged a new lift PR in 21 days — consider a programming check-in this week."* The coach reaches out. Ciarán feels seen. The plateau is addressed before it becomes a disengagement narrative. AI also surfaces his ranking on any active leaderboard the moment he logs in.

**Aoife (The Transformer):**
AI detects a broken 3-session-per-week streak following two consecutive missed sessions. It surfaces a personalised milestone recap: *"In the last 90 days, you've attended 34 sessions and added 12kg to your back squat."* This is sent not as a win-back email but as a progress celebration — timed to arrive 48 hours after the second missed session, before the negative self-narrative calcifies. It also prompts her coach with a soft check-in flag.

**Declan (The Anchor):**
AI never pushes Declan with progress metrics — he doesn't care. Instead, it monitors his social cluster. If two of his regular Tuesday classmates cancel memberships in the same week, AI flags this to management *before* Declan's renewal date. It also ensures his routine is never disrupted without a personal communication from staff. His loyalty programme experience is frictionless and quiet — which is exactly what he wants.

### The Single Highest-Value Personalisation Intervention

**The 48-Hour Streak-Break Rescue.**

When a member breaks a streak or misses two consecutive scheduled sessions, LoyaltyOS triggers a coach-attributed (not automated-feeling) message within 48 hours that references something specific: their last PR, their current programme week, or their personal goal. Not: *"We miss you! Here's 10% off."* But: *"Hey Aoife — Coach Rían here. Noticed you missed Tuesday and Thursday. You're 3 weeks into the strength block and your numbers have been brilliant. Don't let this week derail it. See you Monday?"*

This intervention, delivered at the right moment with genuine specificity, converts the most recoverable churn. It is impossible to automate with authenticity using a stamp card. It is entirely possible with LoyaltyOS.

---

## 6. KEY RISKS

### GDPR Risk

**Specific concern:** Slam Fitness collects health and fitness data — session attendance, performance metrics, and potentially body composition or injury history through coaching interactions. Under GDPR, fitness and health data may qualify as **special category data (Article 9)**, requiring explicit consent, a clear legal basis, and stricter handling protocols. Dublin-based businesses fall under Irish DPC jurisdiction, which has been active in enforcement.

Additionally, any social media monitoring (even opt-in) for tagged posts creates a data trail that must be governed under a clear retention and deletion policy.

**Mitigation:** LoyaltyOS must implement a **tiered consent model at onboarding** — members explicitly opt into each data category (attendance tracking, progress logging, social recognition) as separate consent actions, not buried in T&Cs. Data collected must be limited to what is functionally necessary for loyalty personalisation, with a clear retention period (e.g., 24 months post-cancellation maximum). A privacy dashboard where members can view and delete their data is non-negotiable.

---

### Trust Risk

**Specific concern:** The streak mechanic and the 48-hour rescue intervention carry a real manipulation risk. If Ciarán or Aoife ever *realise* the personal message from Coach Rían was algorithmically triggered — that the coach didn't notice on their own, but was prompted by a system — the trust collapse is catastrophic. Boutique gyms sell authentic human relationships. The moment the relationship feels engineered, the premium justification evaporates. This is not theoretical. It is the exact failure mode of loyalty programmes in high-touch service businesses.

**Mitigation:** The rule is: **AI flags, humans decide**. LoyaltyOS surfaces the insight to the coach — it never auto-sends on the coach's behalf. The coach reads the flag, decides whether it's relevant, and sends their own message in their own words. The authenticity is preserved because the action is genuinely human. The efficiency is preserved because the prompt is intelligently timed. This boundary must be hard-coded into the product design — coaches receive recommendations, never auto-sent communications.

---

*Brief prepared for the LoyaltyOS Designer. Diagnosis is confirmed: this is a progress-plateau and social-anchor retention problem, not a marketing problem. Build accordingly.*


---


## Agent 2: Designer

**Role:** Create the solution — creative problem-solving and design thinking
**Output file:** `02_design_spec.md`
**Word count:** 4,373

# LoyaltyOS Design Specification
## Client: Slam Fitness | Boutique Strength & Performance Studio | Stoneybatter, Dublin 7

---

## 1. LOYALTY EXPERIENCE CONCEPT

### Programme Name: **IRON RECORD**
### Tagline: *"Every rep remembered. Every milestone earned."*

The name does double work: "Iron" is the material of the barbell — the literal tool of transformation — and "Record" carries both personal records (PRs) and the act of documenting progress. It signals that this programme is not about collecting stamps. It is about building a permanent, visible history of becoming stronger.

---

### The Core Emotional Journey

The IRON RECORD experience is designed around a single emotional truth: **the feeling that your effort is being witnessed and remembered.** Not by an app. By a system that reflects your actual progress back at you in a way a commercial gym never could.

| Stage | Moment | Target Emotion |
|---|---|---|
| **Onboarding** | Member scans their QR code for the first time after their intro session | *"This gym actually knows who I am"* — belonging, not novelty |
| **First Week** | First logged PR or first class attendance earns Forge Points | *"Something is being counted that matters"* — validation |
| **First Month** | Dashboard shows "11 sessions, 3 PRs, 1 challenge completed" | *"I can see myself getting stronger"* — pride with proof |
| **Streak Building** | Day 5 notification: "You're 2 sessions from your first 7-day streak" | *"I don't want to break this"* — purposeful loss aversion |
| **Tier Progression** | Member hits Competitor tier — coach shouts it out in class | *"I've earned my place here"* — identity confirmation |
| **Churn Risk Moment** | Coach message referencing their specific numbers after a missed week | *"Someone actually noticed I was gone"* — re-anchoring to relationship |
| **Long-Term** | Member sees their full 12-month PR history | *"This is the record of who I've become"* — legacy and ownership |

---

## 2. POINTS AND REWARDS SYSTEM

### Points Currency: **Forge Points** (FP)

*"You forge them every session. You spend them when you're ready."*

The name connects to the metallurgical identity of the programme — iron, forge, records cast in metal. It avoids the gamification clichés of "coins" or "gems" while feeling earned rather than given.

---

### Earnable Activities (14 Activities)

| # | Activity Name | Emoji | Category | Forge Points | Description |
|---|---|---|---|---|---|
| 1 | **Session Complete** | 🏋️ | Workout | 15 FP | Attend any scheduled class or open gym session |
| 2 | **Off-Peak Athlete** | ⚡ | Training | 25 FP | Attend a session during a designated quiet period (Tue/Thu 10am–3pm) |
| 3 | **New Personal Record** | 🔥 | Achievement | 50 FP | Log a verified lift PR with coach confirmation |
| 4 | **7-Day Streak** | 📅 | Streak | 75 FP | Complete all scheduled sessions across a 7-day window without a miss |
| 5 | **30-Day Streak** | 🔱 | Streak | 200 FP | Complete all scheduled sessions across a 30-day window — rare, celebrated publicly |
| 6 | **Challenge Enrolled** | ⚔️ | Challenge | 10 FP | Sign up for any gym challenge or programme block |
| 7 | **Challenge Completed** | 🏆 | Challenge | 100 FP | Complete a full gym challenge or 8–12 week programme cycle |
| 8 | **Refer a Friend (joins)** | 🤝 | Referral | 150 FP | A referred friend completes their first paid month |
| 9 | **Social Tag** | 📸 | Community | 20 FP | Tag @SlamFitness in a public training post (opt-in, max 1x per week) |
| 10 | **Coach Feedback** | 💬 | Service | 10 FP | Submit a coach or session review (max 2x per month) |
| 11 | **Programme Week Complete** | 📋 | Training | 30 FP | Log all prescribed sessions in a given programme week |
| 12 | **First Session of the Month** | 🌅 | Special | 5 FP | Attend your first session in any calendar month — low-friction re-engagement reward |
| 13 | **Bring a Guest** | 👥 | Community | 40 FP | Bring a non-member guest to a guest pass session |
| 14 | **Milestone Anniversary** | 🎖️ | Achievement | 100 FP | Awarded automatically on 3-month, 6-month, and 12-month membership anniversaries |

---

### Redeemable Rewards (8 Rewards)

| # | Reward Name | Emoji | Cost | Description |
|---|---|---|---|---|
| 1 | **Protein Shake** | 🥤 | 75 FP | One post-session shake from the Slam Fitness bar |
| 2 | **Guest Day Pass** | 🎟️ | 150 FP | Bring a friend for a free single session — doubles as a referral seed |
| 3 | **Slam Kit — Water Bottle** | 💧 | 250 FP | Branded Slam Fitness stainless steel bottle |
| 4 | **Priority Class Booking** | 🔓 | 100 FP | 48-hour early booking window for one week's classes (beats the standard 24-hr window) |
| 5 | **1-on-1 Programming Session** | 📊 | 400 FP | 30-minute private session with a coach to design your next training block |
| 6 | **Slam Kit — Training Tee** | 👕 | 500 FP | Premium Slam Fitness training top — identity wear, walking billboard |
| 7 | **One Month Membership Credit** | 🏅 | 800 FP | One month knocked off membership — reserved for highest-tier members only |
| 8 | **The IRON RECORD Plaque** | 🪨 | 1200 FP | Physical custom-engraved plaque recording member's top 5 all-time PRs — the ultimate identity reward |

> **Design Note on the Plaque:** This reward exists to do one thing — make leaving unthinkable. A member who has earned a physical artefact with their name and numbers on it does not cancel their membership quietly. It is not cost-effective to offer freely; it is designed to be aspirational for the top 5% of members and celebrated publicly when awarded.

---

### Tier Levels (4 Tiers — Strength-Identity Naming)

| Tier | Name | Entry Threshold | Identity Statement | Unlocks |
|---|---|---|---|---|
| 1 | **Rookie** | 0 FP | "You've started. That's the hardest part." | Access to standard rewards catalogue |
| 2 | **Lifter** | 300 FP | "Your habits are forming. Your numbers are moving." | Priority class booking reward unlocked; monthly FP bonus of +5 FP per session |
| 3 | **Competitor** | 750 FP | "You've earned your place in this gym." | Access to 1-on-1 programming reward; coach shoutout on tier achievement; +10 FP per session |
| 4 | **Iron** | 1,500 FP | "You are what this gym is built on." | Membership credit and plaque rewards unlocked; permanent name on the IRON RECORD Wall (physical display in gym); +15 FP per session; invited to beta-test new programme blocks |

> **Tier Design Note:** Tier names map to a genuine athletic identity arc — you don't start as "Bronze", you start as a Rookie with authentic beginner dignity. Reaching "Iron" is not a loyalty programme milestone. It is a statement about who you are as an athlete.

---

## 3. ENGAGEMENT MECHANICS

### Daily/Weekly Challenges (Rotating)

| Challenge | Duration | Forge Points | Mechanic |
|---|---|---|---|
| **"Early Iron"** — Attend 3 sessions before 8am this week | Weekly | 40 FP | Targets morning slot utilisation; appeals to Ciarán's discipline identity |
| **"Off-Peak Beast"** — Attend 2 quiet-period sessions this week | Weekly | 50 FP | Directly addresses Slam's footfall problem; reframed as exclusive access, not discount |
| **"PR Hunt"** — Log a new PR in any lift this week | Weekly | 60 FP | Progress reinforcement loop; only valid with coach confirmation to prevent inflation |
| **"Crew Builder"** — Attend the same class as someone you referred | Monthly | 75 FP | Social anchor strengthening; community cluster formation |
| **"Full Block"** — Complete all 4 prescribed sessions in a programme week | Weekly | 45 FP | Habit completion loop; prevents the "I'll skip one, it won't matter" rationalisation |

---

### Streak Mechanics

**7-Day Streak:**
- Award: 75 FP + a coach-flagged notification (human, not automated) — *"Ciarán hit his 7-day streak this week"* sent to coaching dashboard
- Pre-streak alert at Day 5: *"You're 2 sessions away from your 7-day streak. Don't let it go."*
- UI: Streak flame counter visible on dashboard homepage; increases in intensity visually with each consecutive day

**30-Day Streak:**
- Award: 200 FP + automatic tier points boost + public acknowledgement in the gym's weekly community update (opt-in)
- The 30-day streak should feel like an event, not a notification. Coaches are briefed to mention it in class.
- Pre-streak alert at Day 25 and Day 28: escalating urgency in copy
- If streak is broken: 48-hour grace window for "streak freeze" (one per quarter) — prevents the catastrophic abandonment that follows a broken streak

**Streak Freeze mechanic:** A member can protect one streak break per quarter using a Streak Freeze (costs 25 FP to activate). This converts a psychological failure into a strategic decision — they're spending something to protect something, which reinforces the value of the streak rather than zeroing out the investment.

---

### Social and Referral Mechanics

**Referral Architecture:**
- Member shares a personal referral link or QR code
- Referred friend receives a **free 2-week trial** (not a discount — a genuine try-before-you-buy)
- When the referred friend completes their **first paid month**: referring member earns **150 FP**; referred friend earns **50 FP** as a joining bonus
- Additional **50 FP** awarded to the referring member if the referred friend reaches the Lifter tier within 90 days — long-term social investment, not a quick grab

**Why structured this way:** Awarding on the first *paid* month (not the first visit) eliminates low-quality referrals. Awarding a bonus at tier progression makes the referring member invested in the success of their referral — creating a natural mentorship dynamic that deepens both members' commitment.

---

### Surprise and Delight Moments (3 Triggers)

**1. The Quiet Milestone**
When a member hits their 50th lifetime session (or 100th), LoyaltyOS triggers a reward of 100 FP — but delivers it *through a coach*, not an app notification. The coach receives: *"Declan just hit 50 sessions — great moment to mention it in class this week."* The points appear in the member's app after the coach has acknowledged it in person. The digital confirmation follows the human moment.

**2. The PR Anniversary**
Exactly one year after a member logs their first PR, LoyaltyOS surfaces a comparison: *"One year ago today, your deadlift was 80kg. Last week it was 120kg. That's a 40kg increase. That's IRON RECORD stuff."* This arrives as an in-app card, earns 25 FP, and includes a share prompt. The emotion: legacy, proof, pride.

**3. The Weather Day Bonus**
On days where Dublin weather is genuinely miserable (API-triggered rain/wind threshold), any member who attends a session earns a surprise 15 FP bonus with the message: *"You showed up in that? Legendary. 15 bonus Forge Points — because iron doesn't rust."* This is the low-effort surprise moment that builds affection for the brand voice. It is unexpected, slightly absurd, and completely on-brand.

---

## 4. AI PERSONALISATION LAYER

### Persona-Based Activity Recommendations

**Ciarán (The Competitor):**
The AI monitors his lift log frequency. When no PR has been logged in 18+ days, it surfaces the "PR Hunt" weekly challenge at the top of his dashboard — not as a generic challenge, but framed as: *"You haven't logged a new PR in 18 days. Time to hunt."* The AI also maintains a personal leaderboard card on his home screen showing his rank in the current challenge among all active members. Every session login surfaces his rank first — because that is what he opens the app to see.

**Aoife (The Transformer):**
The AI monitors her session cadence. When two consecutive scheduled sessions are missed, it generates a **Progress Recap Card** — not a push notification, but a visually rich in-app card that surfaces on her next login: *"34 sessions in 90 days. +12kg on your back squat. +8kg on your overhead press. Your programme is working."* The AI simultaneously flags her coach dashboard: *"Aoife — 2 sessions missed, consider a soft check-in before her next scheduled session."* The coach acts. The AI does not.

**Declan (The Anchor):**
The AI never pushes Declan with performance metrics. His home screen is streamlined — his streak counter, his next scheduled session, and a community card showing who else is attending his Tuesday 7am class that week. The AI monitors his social cluster silently: if two or more of his regular classmates cancel memberships within a 3-week window, management receives an alert: *"Declan's Tuesday cohort has lost 2 members. Renewal is in 6 weeks. Consider a direct relationship check-in."* Declan never sees any of this working. He just notices that his gym seems to always run smoothly.

---

### AI-Generated Personalised Offers

**Low-Footfall Day Promotions:**
When LoyaltyOS detects that Tuesday and Thursday 10am–3pm slots are below 40% capacity, it generates a targeted push to members who have attended off-peak sessions before (or whose booking history shows flexibility) — not a discount, but a challenge activation: *"Off-Peak Beast challenge is live this week. 50 FP for 2 quiet sessions. Tuesday 11am has 6 spots open."* The framing is always access and reward, never desperation.

**Re-engagement Offers:**
When a member hasn't booked in 10 days (below their personal baseline), AI generates a personalised re-entry nudge tied to their live programme status: *"You're in Week 6 of the 12-week strength block. The back half is where the gains are. Next session: Thursday 6pm — 3 spots left."* Urgency is genuine (real capacity), not manufactured.

---

### Churn Prediction and Intervention Signals

The AI monitors a composite churn score using the following signals, weighted by persona type:

| Signal | Weight | Trigger Threshold |
|---|---|---|
| Frequency drop (vs. personal baseline) | High | 40% drop over 2 consecutive weeks |
| Class switch (away from habitual slot) | Medium | 2+ deviations from regular booking pattern |
| Ghost bookings (book + no-show) | High | 3+ no-shows in a 2-week window |
| PR silence (for progress-motivated personas) | Medium | 21+ days without a logged milestone |
| Streak break (combined with frequency drop) | High | Streak broken + no rebooking within 5 days |
| Social cluster disruption | High (for Anchor persona) | 2+ cohort members cancel within 3-week window |

**Intervention Protocol:**
- **Score 1–2 signals:** AI adds a soft prompt to coach dashboard ("Keep an eye on this member this week")
- **Score 3+ signals:** AI generates a full intervention brief for the coach: member name, last session, current programme week, most recent PR, suggested personal message tone — and flags it as a priority action
- **Hard rule:** The AI generates the brief. The coach sends the message. Always. No automated outreach, ever.

---

## 5. USER INTERFACE FLOWS

### Customer Dashboard — Home Screen

The home screen is built around **three information hierarchies** that speak directly to the three personas without customisation:

**Top Section — The Identity Bar:**
- Member name + current tier badge (e.g., "⚔️ Competitor")
- Current Forge Points total (large, prominent)
- Streak flame counter with day number

**Mid Section — The Progress Card (primary real estate):**
A single, visually dominant card that rotates based on AI persona signal:
- For Ciarán: Live leaderboard rank in current challenge
- For Aoife: Progress recap ("34 sessions · +12kg squat · 6 PRs")
- For Declan: "Tuesday 7am · 8 members attending · Your streak: 23 days"

**Lower Section — Active Challenges + Quick Actions:**
- 2–3 currently active challenges with FP values and completion progress bars
- "Log a PR" CTA button (prominent — this is the highest-value action for the platform)
- "Book Next Session" button pulling from class schedule integration

**Bottom Navigation:**
- Home / Activity Feed / Rewards / My Record (PR history + milestone archive)

---

### Activity Completion Flow — Earning Points

The moment of earning should feel like a physical sensation, not a database update.

1. **Trigger:** Member checks into a session (QR scan at the door or coach confirms attendance)
2. **Immediate feedback:** Full-screen micro-animation — a forge-hammer strike effect, orange-to-amber ember burst, with the points value appearing: *"+15 Forge Points"*
3. **Contextual overlay:** Below the animation, a progress bar shows progress toward the next challenge or tier milestone — *"You're 35 FP from your next 7-day streak bonus"*
4. **PR Log prompt:** If it's a strength session, a single-tap prompt appears: *"Hit anything new today? Log a PR →"* — one tap to open the PR logging screen, three fields only (exercise, weight, reps)
5. **Return to dashboard:** After 2.5 seconds, member is back on their home screen with updated totals — the new FP figure pulses once to confirm

**Coach PR Confirmation flow:** When a member logs a PR, the coach receives a one-tap confirmation request in their admin panel: *"Aoife logged: Deadlift 95kg × 3. Confirm?"* — Yes / Flag for Review. PR points only release on confirmation, preserving integrity.

---

### Reward Redemption Flow — Spending Points

Redemption should feel deliberate and satisfying — not frictionless. Spending earned Forge Points should carry weight.

1. **Rewards Catalogue:** Organised into two tabs — "Available Now" (within current FP balance) and "Coming Up" (aspirational, shows FP needed and a progress bar)
2. **Reward Selection:** Member taps a reward. Full-screen card expands showing: reward name, cost in FP, current FP balance, and a single CTA: *"Redeem for [X] Forge Points"*
3. **Confirmation screen:** Shows remaining FP balance after redemption. Copy: *"[Reward name] unlocked. Show this screen at the desk / Your coach has been notified."*
4. **Redemption method:** Physical rewards (shakes, kit) generate a single-use QR code valid for 7 days. Experiential rewards (1-on-1 session, priority booking) trigger a direct notification to the admin panel for fulfilment.
5. **Post-redemption:** Dashboard reflects updated FP total. A small "Redeemed" tag appears on the reward card. The "Coming Up" tab updates to show the next aspirational goal.

---

### Business Admin Panel — Owner and Coach Views

**Two distinct role views:**

**Owner Dashboard:**
- Total active members / tier distribution chart
- Monthly Forge Points issued vs. redeemed (balance health indicator — ensures rewards liability is manageable)
- Footfall heatmap by day/time (showing the impact of Off-Peak Athlete incentives on quiet sessions)
- Churn risk register: members with a composite churn score of 3+ signals, listed with their last activity and AI-suggested intervention brief
- Challenge performance: completion rates, FP distributed, which challenges drive the most re-engagement
- Referral pipeline: referred members, conversion rate, referring member activity correlation

**Coach Dashboard:**
- Daily action list: members flagged for check-in (AI-generated, coach-reviewed)
- Session attendance confirmations + PR confirmation queue
- Individual member profile: full attendance history, PR log, current streak, tier, and AI persona tag
- Challenge participation view: who's enrolled, who's close to completing, who dropped off
- "Shoutout Queue": members approaching milestones (50th session, tier upgrade, 30-day streak) so coaches can acknowledge in class before the system does

> **Design Principle for Admin:** The admin panel exists to make coaches faster, not to replace their judgment. Every AI recommendation is labelled *"Suggested by IRON RECORD AI — coach discretion applies."* The UI should feel like a well-organised briefing, not a management surveillance tool.

---

## 6. COLOUR MODE AND VISUAL THEME

### Selected Theme: **`dark`**

**Justification:** Slam Fitness is a performance and strength studio — the visual language of iron, forge, and intensity belongs to the dark theme's world of energy, contrast, and neon-on-black drama, not the clean wellness aesthetic of a dental practice or coffee shop.

---

### Exact Token Configuration

```json
{
  "programme": "IRON RECORD",
  "client": "Slam Fitness",
  "theme": "dark",
  "primary": "#DC2626",
  "accent": "#F97316",
  "tokens": {
    "bg": "#0a0a0f",
    "cardBg": "rgba(255,255,255,0.05)",
    "cardBorder": "rgba(255,255,255,0.10)",
    "text": "#ffffff",
    "subtext": "rgba(255,255,255,0.4)",
    "muted": "rgba(255,255,255,0.06)",
    "navBg": "rgba(10,10,15,0.97)",
    "navBorder": "rgba(255,255,255,0.08)"
  }
}
```

---

### Visual Language Directives for the Maker Agent

**Background:** `#0a0a0f` — near-black, not pure black. Feels like a weightroom at 6am, not a void.

**Glow Blob:** A 200px radial gradient in `#DC2626` at 15% opacity sits at the top-centre of the home screen. On sessions where a PR is logged, it pulses to `#F97316` for 3 seconds. This is the single most important micro-animation — the forge fires up when you set a record.

**Cards:** `rgba(255,255,255,0.05)` background with `rgba(255,255,255,0.10)` border. The glass effect should feel industrial, not delicate — heavier border weight than a default glass card, 6px border radius (not the soft 12px of lifestyle apps).

**Progress Rings:** Ring-style progress bars in `#DC2626` with `box-shadow: 0 0 12px #DC262699` — the neon glow effect from the dark theme spec. For streak counters, the ring transitions from red (`#DC2626`) to amber (`#F97316`) as it fills, simulating a forge heating up.

**Tier Badge Visual:**
- Rookie: `#6B7280` (cool grey) with no glow — understated, not dismissive
- Lifter: `#0EA5E9` (steel blue) with subtle glow — getting sharper
- Competitor: `#F59E0B` (gold-amber) with medium glow — earning status
- Iron: `#DC2626` (primary red) with full neon glow effect — `box-shadow: 0 0 16px #DC2626CC` — the top tier burns

**Typography:** White (`#ffffff`) for primary values (points, names, tier). `rgba(255,255,255,0.4)` for secondary labels. All numbers — Forge Points totals, PR values, streak counts — should render in a slightly heavier weight than surrounding text. The number is the hero.

**CTA Buttons:** `#DC2626` fill with white text. Hover/press state transitions to `#F97316` — the forge accent activates on interaction.

**Navigation:** `rgba(10,10,15,0.97)` with `backdrop-filter: blur(12px)`. Near-opaque but not fully solid — depth is visible beneath. Border: `rgba(255,255,255,0.08)`.

**Activity category colours** (from spec — applied to challenge and activity cards as left-border accent strips):
- Workout sessions: `#EF4444` (Training)
- Streak activities: `#F97316` (Streak)
- Challenge activities: `#F59E0B` (Challenge)
- Achievement / PRs: `#D4AF37` (Achievement)
- Community / Social / Referral: `#A78BFA` (Referral) / `#34D399` (Community)

---

## 7. TRUST AND TRANSPARENCY DESIGN

### Communicating Data Usage to Members

**Onboarding Consent Flow (tiered, not buried):**

The IRON RECORD onboarding is a 4-screen consent experience — not a wall of text, but a series of single-question opt-ins, each explained with a concrete benefit statement:

| Screen | Consent Ask | Benefit Statement Shown |
|---|---|---|
| 1 | Attendance tracking | *"We track which sessions you attend so we can show you your full training history and calculate your streak."* |
| 2 | Progress logging | *"We store your logged PRs and milestones so your IRON RECORD grows over time. You can delete it anytime."* |
| 3 | Personalised coaching alerts | *"We share your progress signals with your coach so they can check in at the right moments — not randomly."* |
| 4 | Social recognition | *"If you tag us in a post, we'll surface it internally so your coach sees it. We never scrape public posts without your permission."* |

Each consent is a binary opt-in toggle. All four default to **off**. The member turns them on by choice. The system works with whatever subset they consent to — reduced personalisation is acknowledged honestly: *"With coaching alerts off, we won't share your activity patterns with coaches. You'll still earn Forge Points for everything you do."*

**In-App Privacy Card:**
Accessible from the profile screen at all times: a single-tap view showing exactly what data is currently being collected, when it was last used, and a **"Delete My Data"** button that triggers a 30-day erasure workflow (with a 30-day cancellation window in case of error). This is not hidden in settings. It is a first-class UI element.

---

### Avoiding Manipulation — Design Rules

**Rule 1: The AI Never Pretends to Be Human.**
All AI-generated suggestions in the coach dashboard are labelled *"IRON RECORD AI Suggestion."* All member-facing nudges that are algorithmically triggered carry a subtle footer: *"This reminder was generated by IRON RECORD based on your activity."* Transparency costs almost nothing and protects everything.

**Rule 2: Streak Breaks Are Not Punished — They Are Acknowledged.**
When a streak breaks, the app does not say "You broke your streak." It says: *"Streak paused at [X] days. That's [X] days of consistent training. Ready to start a new one?"* The history is preserved. The member's effort is not erased. Loss aversion is used to *build* habits, not to shame members into return visits.

**Rule 3: The Rewards Are Real, Not Manufactured Urgency.**
Class availability shown in re-engagement nudges reflects actual live capacity from the booking system. The number *"3 spots left"* is never a dark pattern — it is a real integration with the class schedule. If there are 12 spots available, the nudge says *"Plenty of space — see you there."* Authenticity is a design constraint, not a nice-to-have.

**Rule 4: Members Can See Their Own Score.**
Any member can tap their profile and see their current "engagement health" indicators — streak, visit frequency, active challenges. They cannot see their churn risk score (this lives only in the coach view). But they can see all the inputs, which means they understand what the system is tracking and why. The system is legible to its users.

**Rule 5: The Coach Owns the Relationship. Always.**
The hardest design rule to maintain under pressure to scale: no automated outreach is ever sent on behalf of a named coach. If the platform ever sends a message as "Coach Rían," it was written and sent by Coach Rían. The AI brief sits in a queue until a human acts on it or dismisses it. If no coach acts within 72 hours, the flag is escalated to the owner — not auto-sent to the member. The relationship is the product. The system protects it.

---

*Design specification complete. Ready for the Maker agent.*

*IRON RECORD — Every rep remembered. Every milestone earned.*


---


## Agent 3: Maker

**Role:** Build the product — technical craftsmanship and rapid prototyping
**Output file:** `03_prototype_plan.md`
**Word count:** 3,226

# LoyaltyOS — Technical Build Specification
## Client: Slam Fitness | Programme: IRON RECORD
### Maker Agent Output v1.0

---

## PREAMBLE

This document is the authoritative build specification for the IRON RECORD loyalty platform. It translates the Designer agent's specification into implementable technical decisions. Every section maps directly to a design spec section. Where the design spec makes an implicit technical requirement, this document makes it explicit.

**Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Claude API (Anthropic SDK), Prisma ORM, PostgreSQL (Supabase), Vercel deployment.

---

## 1. COMPONENT INVENTORY

### 1.1 Layout Components

---

#### `RootLayout`
**File:** `app/layout.tsx`

```typescript
interface RootLayoutProps {
  children: React.ReactNode;
  businessConfig: BusinessConfig; // injected at build/request time
}
```

**Core behaviour:** Injects CSS custom properties from `BusinessConfig.tokens` into `:root`, sets dark/light mode class, loads brand fonts. All colour tokens become CSS variables consumed by every child component — this is the white-label switching mechanism. No component hardcodes a colour value; all reference `var(--primary)`, `var(--bg)`, etc.

**Design spec:** Section 6, Token Configuration.

---

#### `NavBar`
**File:** `components/layout/NavBar.tsx`

```typescript
interface NavBarProps {
  activePath: 'home' | 'activity' | 'rewards' | 'record';
  memberName: string;
  tier: TierLevel;
  unreadCount?: number;
}
```

**Core behaviour:** Fixed bottom navigation on mobile, sidebar on desktop breakpoint. Renders four tabs: Home / Activity Feed / Rewards / My Record. Active state uses `var(--primary)` fill. Background uses `navBg` token with `backdrop-filter: blur(12px)`. Tab icons are SVG inline — no icon library dependency, allows per-client icon swaps.

**Design spec:** Section 5, Bottom Navigation.

---

#### `GlowBlob`
**File:** `components/layout/GlowBlob.tsx`

```typescript
interface GlowBlobProps {
  state: 'idle' | 'pr-active';
  primaryColor: string;
  accentColor: string;
}
```

**Core behaviour:** Absolutely positioned 200px radial gradient element at top-centre of home screen. In `idle` state: `primaryColor` at 15% opacity. When `state === 'pr-active'`: Framer Motion animates opacity to 25% and transitions colour to `accentColor`, holds for 3 seconds, returns to idle. This is a pure CSS/Framer element — no canvas.

**Design spec:** Section 6, Glow Blob directive.

---

### 1.2 Member Dashboard Components

---

#### `IdentityBar`
**File:** `components/dashboard/IdentityBar.tsx`

```typescript
interface IdentityBarProps {
  memberName: string;
  tier: TierLevel;
  forgePoints: number;
  streakDays: number;
  streakState: 'cold' | 'warm' | 'hot'; // <7, 7-29, 30+
}
```

**Core behaviour:** Three-element horizontal bar. Left: member name + `TierBadge`. Centre: Forge Points total rendered in bold, larger weight, colour `var(--text)`. Right: `StreakCounter`. Points value uses a Framer Motion number counter that animates upward on first render and on point-earning events (subscribe to a Zustand store action).

**Design spec:** Section 5, Top Section — The Identity Bar.

---

#### `TierBadge`
**File:** `components/dashboard/TierBadge.tsx`

```typescript
interface TierBadgeProps {
  tier: TierLevel;
  size: 'sm' | 'md' | 'lg';
  showLabel: boolean;
}

type TierLevel = 'Rookie' | 'Lifter' | 'Competitor' | 'Iron';

const TIER_VISUAL_CONFIG: Record<TierLevel, {
  color: string;
  glowColor: string;
  glowIntensity: string;
  icon: string;
}> = {
  Rookie:     { color: '#6B7280', glowColor: 'transparent', glowIntensity: 'none',                    icon: '🥋' },
  Lifter:     { color: '#0EA5E9', glowColor: '#0EA5E940',   glowIntensity: '0 0 8px #0EA5E940',       icon: '⚡' },
  Competitor: { color: '#F59E0B', glowColor: '#F59E0B60',   glowIntensity: '0 0 12px #F59E0B60',      icon: '⚔️' },
  Iron:       { color: '#DC2626', glowColor: '#DC2626CC',   glowIntensity: '0 0 16px #DC2626CC',      icon: '🔱' },
};
```

**Core behaviour:** Renders a pill-shaped badge with tier icon, tier name, and an ambient glow via `box-shadow`. Glow intensity is applied inline from `TIER_VISUAL_CONFIG`. For `Iron` tier, a subtle pulse animation (Framer Motion keyframes, 3s loop, opacity 0.8→1.0→0.8) keeps the badge alive without being distracting.

**Design spec:** Section 2, Tier Levels; Section 6, Tier Badge Visual.

---

#### `StreakCounter`
**File:** `components/dashboard/StreakCounter.tsx`

```typescript
interface StreakCounterProps {
  currentStreak: number;
  targetStreak: 7 | 30;
  hasFreezeAvailable: boolean;
  onActivateFreeze: () => void;
}
```

**Core behaviour:** Circular progress ring (SVG-based, not CSS border-radius trick — SVG gives clean control over stroke dash offset for animation). Ring stroke colour transitions from `#DC2626` (0%) to `#F97316` (100%) via an SVG linearGradient that updates its stops dynamically based on `currentStreak / targetStreak`. The flame emoji inside the ring grows in size from 14px to 22px proportionally. Tapping the counter opens a bottom sheet showing streak history and the Streak Freeze button if available.

**Design spec:** Section 3, Streak Mechanics; Section 6, Progress Rings.

---

#### `ProgressCard`
**File:** `components/dashboard/ProgressCard.tsx`

```typescript
interface ProgressCardProps {
  personaType: 'competitor' | 'transformer' | 'anchor' | 'default';
  memberData: Customer;
  leaderboardRank?: number;       // competitor only
  cohortsAttending?: string[];    // anchor only — names of classmates
  sessionStats?: {                // transformer only
    totalSessions: number;
    squat1RMGain?: number;
    ohpGain?: number;
    prCount: number;
  };
  nextSession?: {
    time: string;
    dayName: string;
    attendeeCount: number;
  };
}
```

**Core behaviour:** Single dominant card in mid-section. Conditionally renders one of three sub-templates based on `personaType`. Sub-templates are separate named exports in the same file: `<CompetitorCard />`, `<TransformerCard />`, `<AnchorCard />`. The `personaType` is derived from the AI personalisation API response and stored in the customer record. Card animates in with a subtle upward slide on dashboard load (Framer Motion, 300ms, ease-out).

**Design spec:** Section 5, Mid Section — The Progress Card.

---

#### `ChallengeCard`
**File:** `components/dashboard/ChallengeCard.tsx`

```typescript
interface ChallengeCardProps {
  challenge: ActiveChallenge;
  memberProgress: number;       // 0–1 float
  isEnrolled: boolean;
  onEnroll: (challengeId: string) => void;
}

interface ActiveChallenge {
  id: string;
  name: string;
  description: string;
  forgePointsReward: number;
  category: ActivityCategory;
  durationDays: number;
  endsAt: Date;
  requiredCompletions: number;
  currentCompletions: number;
}
```

**Core behaviour:** Card with a left-border accent strip (4px, colour derived from `CATEGORY_COLOURS` map). Progress bar fills in `var(--primary)` colour. Points reward badge in top-right corner. Enroll CTA only visible if `!isEnrolled`. On enroll, optimistic UI update — shows enrolled state immediately, API call in background, reverts on error.

**Design spec:** Section 3, Daily/Weekly Challenges; Section 5, Lower Section.

```typescript
const CATEGORY_COLOURS: Record<ActivityCategory, string> = {
  Workout:   '#EF4444',
  Streak:    '#F97316',
  Challenge: '#F59E0B',
  Achievement: '#D4AF37',
  Referral:  '#A78BFA',
  Community: '#34D399',
  Training:  '#EF4444',
  Special:   '#0EA5E9',
  Service:   '#94A3B8',
};
```

---

#### `QuickActionBar`
**File:** `components/dashboard/QuickActionBar.tsx`

```typescript
interface QuickActionBarProps {
  onLogPR: () => void;
  onBookSession: () => void;
  nextSessionInfo?: { time: string; spotsLeft: number };
}
```

**Core behaviour:** Two CTA buttons side by side. "Log a PR" is primary (`var(--primary)` fill, white text, hover transitions to `var(--accent)`). "Book Next Session" is outlined (transparent fill, `var(--primary)` border and text). If `spotsLeft` is ≤ 5, shows authentic capacity indicator alongside the booking button. Both buttons have a 150ms press-down scale transform (Framer Motion `whileTap={{ scale: 0.97 }}`).

**Design spec:** Section 5, Lower Section — Quick Actions; Section 7, Rule 3 (authentic capacity).

---

### 1.3 Point-Earning Flow Components

---

#### `PointEarnOverlay`
**File:** `components/earn/PointEarnOverlay.tsx`

```typescript
interface PointEarnOverlayProps {
  pointsEarned: number;
  activityName: string;
  progressToNextMilestone: {
    label: string;       // e.g. "7-day streak bonus"
    currentFP: number;
    targetFP: number;
  };
  showPRPrompt: boolean; // true for strength sessions
  onLogPR: () => void;
  onDismiss: () => void;
}
```

**Core behaviour:** Full-screen overlay triggered on session check-in confirmation. Sequence (Framer Motion, orchestrated with `staggerChildren`):
1. **0ms:** Background fades to `rgba(0,0,0,0.85)`
2. **100ms:** Forge-hammer SVG animation — a simplified hammer SVG drops from top, impact at centre triggers an ember particle burst (12–16 CSS-animated `<div>` elements in orange/amber colours, physics approximated with CSS keyframes varying `translateX/Y` and `opacity`)
3. **400ms:** Points value appears: `+{pointsEarned} Forge Points` in 48px bold white, with a brief scale-in (0.5→1.0)
4. **600ms:** Progress bar slides in from left showing milestone progress
5. **800ms:** PR prompt card appears if `showPRPrompt`
6. **2500ms:** Auto-dismiss if no interaction; points total on underlying dashboard pulses once

**Design spec:** Section 5, Activity Completion Flow.

---

#### `PRLogModal`
**File:** `components/earn/PRLogModal.tsx`

```typescript
interface PRLogModalProps {
  memberId: string;
  sessionId: string;
  onSubmit: (pr: PRSubmission) => void;
  onClose: () => void;
}

interface PRSubmission {
  exercise: string;
  weight: number;
  weightUnit: 'kg' | 'lb';
  reps: number;
  notes?: string;
}
```

**Core behaviour:** Bottom sheet modal. Three fields only — `exercise` (autocomplete from a predefined exercise list stored in business config), `weight` (numeric input with kg/lb toggle), `reps` (numeric stepper). Submit sends to `POST /api/prs` which creates a pending PR record and notifies coach dashboard. Points are NOT awarded until coach confirms. Member sees: *"PR logged — waiting for coach confirmation."* in a pending state indicator.

**Design spec:** Section 5, Activity Completion Flow (step 4); Section 2, PR confirmation flow.

---

### 1.4 Rewards Components

---

#### `RewardsCatalogue`
**File:** `components/rewards/RewardsCatalogue.tsx`

```typescript
interface RewardsCatalogueProps {
  rewards: Reward[];
  memberFP: number;
  memberTier: TierLevel;
  onRedeem: (rewardId: string) => void;
}
```

**Core behaviour:** Two-tab layout: "Available Now" (rewards where `memberFP >= reward.pointCost && tierRequirementMet(memberTier, reward)`) and "Coming Up" (all others, sorted by distance from current FP). Tab switching uses a sliding indicator (CSS, no JS animation needed). Rewards in "Coming Up" are not greyed out — they are full colour with a progress bar showing `(memberFP / reward.pointCost * 100)%` filled. The aspiration must feel achievable.

**Design spec:** Section 5, Reward Redemption Flow, step 1.

---

#### `RewardCard`
**File:** `components/rewards/RewardCard.tsx`

```typescript
interface RewardCardProps {
  reward: Reward;
  memberFP: number;
  memberTier: TierLevel;
  isAvailable: boolean;
  onSelect: (reward: Reward) => void;
}
```

**Core behaviour:** Tap expands to `RewardDetailSheet`. Shows reward emoji, name, cost in FP, and category. If `!isAvailable`, shows progress bar with `{reward.pointCost - memberFP} FP to go`. No lock icons, no greyed-out states — the framing is always forward motion, not exclusion.

**Design spec:** Section 5, Reward Redemption Flow, steps 1–2.

---

#### `RewardDetailSheet`
**File:** `components/rewards/RewardDetailSheet.tsx`

```typescript
interface RewardDetailSheetProps {
  reward: Reward;
  memberFP: number;
  onConfirmRedeem: () => void;
  onClose: () => void;
}
```

**Core behaviour:** Full-screen bottom sheet. Shows reward name, emoji (large, 64px), description, cost, and member's current FP balance. Single CTA: "Redeem for {X} Forge Points". Below the CTA: remaining balance preview — *"After redemption: {memberFP - reward.pointCost} FP remaining."* On confirm: transitions to `RedemptionConfirmScreen`.

**Design spec:** Section 5, Reward Redemption Flow, step 2.

---

#### `RedemptionConfirmScreen`
**File:** `components/rewards/RedemptionConfirmScreen.tsx`

```typescript
interface RedemptionConfirmScreenProps {
  reward: Reward;
  redemptionCode?: string;  // for physical rewards — single-use QR
  remainingFP: number;
  fulfilmentMethod: 'qr-code' | 'admin-notification' | 'automatic';
  onDone: () => void;
}
```

**Core behaviour:** Renders appropriate fulfilment UI based on `fulfilmentMethod`. For `qr-code`: generates a QR code (using `qrcode.react`) from `redemptionCode`, displays it at full width, shows 7-day expiry. For `admin-notification`: shows *"Your coach has been notified. They'll confirm your booking."* For `automatic`: shows confirmation with updated FP balance. All variants show the new FP total and the "next aspirational reward" progress bar.

**Design spec:** Section 5, Reward Redemption Flow, steps 3–5.

---

### 1.5 PR History / My Record Components

---

#### `MyRecordView`
**File:** `components/record/MyRecordView.tsx`

```typescript
interface MyRecordViewProps {
  memberId: string;
  prHistory: PRRecord[];
  milestones: Milestone[];
  memberSince: Date;
  totalSessions: number;
}
```

**Core behaviour:** The "My Record" tab. Four sections: PR History (sortable by lift, date, or weight), Milestone Timeline (visual, chronological), Session Count (large number, prominent — the headline statistic), and the PR Anniversary Card when applicable. This view is the "permanent visible history" concept — designed to feel like a document, not a feed. Typography is heavier here; the numbers are the content.

**Design spec:** Section 1, Emotional Journey ("12-month PR history"); Section 4, PR Anniversary surprise moment.

---

#### `PRHistoryChart`
**File:** `components/record/PRHistoryChart.tsx`

```typescript
interface PRHistoryChartProps {
  exercise: string;
  records: Array<{ date: Date; weight: number; reps: number }>;
  unit: 'kg' | 'lb';
}
```

**Core behaviour:** Line chart showing PR progression over time for a single exercise. Uses `recharts` (lightweight, React-native, no D3 dependency). Line colour `#DC2626`. Points on the line are dots; hovering/tapping shows the exact weight, reps, and date. The most recent PR is marked with a distinct filled circle + annotation. The chart's x-axis only shows dates where a PR was logged — not continuous time — to keep the visual reading as an achievement record, not a gap-revealing timeline.

**Design spec:** Section 1, "12-month PR history" moment; Section 5, My Record tab.

---

### 1.6 Admin Panel Components

---

#### `AdminLayout`
**File:** `app/admin/layout.tsx`

```typescript
interface AdminLayoutProps {
  role: 'owner' | 'coach';
  children: React.ReactNode;
}
```

**Core behaviour:** Separate layout from member-facing app. Role determines which nav items are visible. Owner sees: Overview, Members, Challenges, Churn Risk, Referrals, Settings. Coach sees: Today's Actions, Sessions, PR Queue, Member Profiles, Shoutout Queue. Both views use a light variant of the dark theme — `#111318` background — to signal "this is the back office" without abandoning the brand identity.

---

#### `ChurnRiskRegister`
**File:** `components/admin/ChurnRiskRegister.tsx`

```typescript
interface ChurnRiskRegisterProps {
  riskMembers: ChurnRiskMember[];
  onViewBrief: (memberId: string) => void;
  onDismissFlag: (memberId: string) => void;
  onMarkActioned: (memberId: string) => void;
}

interface ChurnRiskMember {
  customer: Customer;
  riskScore: number;           // 1–6, matching signal count
  activeSignals: ChurnSignal[];
  aiInterventionBrief: string; // generated by Claude
  flaggedAt: Date;
  coachActionDue: Date;        // flaggedAt + 72 hours
  isEscalated: boolean;        // true if 72hrs passed without action
}
```

**Core behaviour:** Sorted by risk score descending. Each row shows member name, tier, last session date, signal count, and a "View Brief" button. Clicking "View Brief" opens a side panel with the full AI-generated intervention brief, labelled prominently: *"IRON RECORD AI Suggestion — coach discretion applies."* An action timestamp is recorded when coach marks as actioned. If `isEscalated`, row is highlighted in amber with an owner-visible alert badge.

**Design spec:** Section 5, Owner Dashboard — Churn Risk Register; Section 7, Rule 5 (coach owns relationship, 72-hour escalation).

---

#### `CoachActionList`
**File:** `components/admin/CoachActionList.tsx`

```typescript
interface CoachActionListProps {
  date: Date;
  checkInConfirmations: SessionAttendance[];
  prConfirmations: PRSubmission[];
  memberCheckIns: ChurnRiskMember[];
  shoutoutQueue: MilestoneShoutout[];
}

interface MilestoneShoutout {
  member: Customer;
  milestoneType: 'session-50' | 'session-100' | 'tier-upgrade' | 'streak-30' | 'streak-7';
  suggestedAcknowledgement: string; // AI-generated suggestion
  isActioned: boolean;
}
```

**Core behaviour:** The coach's daily view — a prioritised list of human actions required. Ordered: Escalated churn flags → PR confirmations → Check-in confirmations → Soft check-in nudges → Shoutout queue. Each item is a card with a primary action button (Confirm / Send / Dismiss). PR confirmations have two options: "Confirm ✓" and "Flag for Review ⚑". Confirming releases the 50 FP reward. Flagging opens a notes field.

**Design spec:** Section 5, Coach Dashboard; Section 5, Coach PR Confirmation flow; Section 3, Quiet Milestone surprise moment.

---

#### `FootfallHeatmap`
**File:** `components/admin/FootfallHeatmap.tsx`

```typescript
interface FootfallHeatmapProps {
  data: Array<{
    dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    hour: number;        // 0–23
    attendanceRate: number; // 0–1
    offPeakTarget: boolean;
  }>;
  weeks: number;         // how many weeks of data shown
}
```

**Core behaviour:** 7×24 grid (days × hours). Each cell's background opacity maps to `attendanceRate`. Off-peak target cells (Tue/Thu 10am–3pm) are outlined in `var(--accent)` to make the business objective legible at a glance. Hovering/tapping shows exact count and rate. This is a pure CSS grid — no charting library needed.

**Design spec:** Section 5, Owner Dashboard — Footfall heatmap.

---

### 1.7 Onboarding Components

---

#### `OnboardingConsent`
**File:** `components/onboarding/OnboardingConsent.tsx`

```typescript
interface OnboardingConsentProps {
  onComplete: (consents: ConsentRecord) => void;
}

interface ConsentRecord {
  attendanceTracking: boolean;
  progressLogging: boolean;
  coachingAlerts: boolean;
  socialRecognition: boolean;
  agreedAt: Date;
}
```

**Core behaviour:** Four-screen stepper (not a single form). Each screen: one toggle, one benefit statement, one "Why we need this" expandable (initially collapsed). All toggles default to `false`. Progress indicator (dots) at top. On each screen, "Continue" button is always active — consent is never required to proceed. Final screen summarises chosen consents and shows the reduced-personalisation notice if any are off: *"With coaching alerts off, we won't share your activity patterns with coaches. You'll still earn Forge Points for everything you do."* This copy is hardcoded per the design spec.

**Design spec:** Section 7, Onboarding Consent Flow.

---

## 2. DATA MODELS

```typescript
// ============================================================
// CORE ENUMS
// ============================================================

type TierLevel = 'Rookie' | 'Lifter' | 'Competitor' | 'Iron';

type ActivityCategory =
  | 'Workout'
  | 'Training'
  | 'Achievement'
  | 'Streak'
  | 'Challenge'
  | 'Referral'
  | 'Community'
  | 'Service'
  | 'Special';

type PersonaType = 'competitor' | 'transformer' | 'anchor' | 'default';

type ChurnSignal =
  | 'frequency-drop'
  | 'class-switch'
  | 'ghost-bookings'
  | 'pr-silence'
  | 'streak-break'
  | 'social-cluster-disruption';

// ============================================================
// CUSTOMER
// ============================================================

interface Customer {
  id: string;
  businessId: string;

  // Identity
  name: string;
  email: string;
  phone?: string;
  avatarUrl?: string;
  memberSince: Date;

  // Loyalty State
  tier: TierLevel;
  forgePoints: number;            // current redeemable balance
  lifetimePoints: number;         // total ever earned (for tier calc)
  personaType: PersonaType;       // AI-assigned, updated monthly

  // Streak State
  currentStreak: number;          // days
  longestStreak: number;
  lastSessionDate: Date | null;
  streakFreezeUsedThisQuarter: boolean;
  streakFreezeActive: boolean;

  // Session Metrics
  totalSessions: number;
  sessionsThisMonth: number;
  averageSessionsPerWeek: number; // rolling 8-week average
  lastSessionBaseline: number;    // for churn detection (avg sessions/week)

  // Churn Risk
  churnSignals: ChurnSignal[];
  churnScore: number;             // 0–6, count of active signals
  lastChurnCheck: Date;

  // Consent
  consents: ConsentRecord;

  // Activity History
  activityHistory: Activity[];
  prHistory: PRRecord[];
  milestones: Milestone[];
  redeemedRewards: RedeemedReward[];

  // Referral
  referralCode: string;
  referredByMemberId?: string;
  referredMemberIds: string[];

  // Metadata
  createdAt: Date;
  updatedAt: Date;
}

// ============================================================
// ACTIVITY
// ============================================================

interface Activity {
  id: string;
  businessId: string;
  customerId: string;

  name: string;
  emoji: string;
  pointValue: number;
  category: ActivityCategory;
  description: string;

  completedAt: Date;
  sessionId?: string;             // links to class booking system
  confirmedByCoachId?: string;    // required for PR activities
  isConfirmed: boolean;

  // For streak calculation
  countsTowardStreak: boolean;
}

// ============================================================
// PR RECORD
// ============================================================

interface PRRecord {
  id: string;
  customerId: string;
  sessionId?: string;

  exercise: string;
  weight: number;
  weightUnit: 'kg' | 'lb';
  reps: number;
  notes?: string;

  status: 'pending' | 'confirmed' | 'flagged';
  submittedAt: Date;
  confirmedAt?: Date;
  confirmedByCoachId?: string;

  // For PR Anniversary feature
  firstPRForExercise: boolean;
  previousBest?: number;          // weight in same unit
  improvement?: number;           // calculated field
}

// ============================================================
// MILESTONE
// ============================================================

interface Milestone {
  id: string;
  customerId: string;

  type:
    | 'session-count'       // 50th, 100th session
    | 'tier-upgrade'
    | 'streak-7'
    | 'streak-30'
    | 'anniversary'         // 3, 6, 12 month membership
    | 'pr-anniversary'      // 1 year since first PR
    | 'challenge-complete';

  value?: number;           // e.g. session number, streak length, months
  pointsAwarded: number;
  achievedAt: Date;

  // Human acknowledgement tracking
  coachAcknowledged: boolean;
  coachAcknowledgedAt?: Date;
  publiclyAcknowledged: boolean;  // for 30-day streak community post
}

// ============================================================
// REWARD
// ============================================================

interface Reward {
  id: string;
  businessId: string;

  name: string;
  emoji: string;
  description: string;
  pointCost: number;
  category: 'physical' | 'experiential' | 'access' | 'identity';

  fulfilmentMethod: 'qr-code' | 'admin-notification' | 'automatic';
  qrCodeValidDays?: number;       // 7 for physical rewards

  // Tier gating
  minimumTier?: TierLevel;        // e.g. 'Iron' for Membership Credit

  isActive: boolean;
  stockLimited: boolean;
  stockRemaining?: number;

  createdAt: Date;
}

interface RedeemedReward {
  id: string;
  customerId: string;
  rewardId: string;
  reward: Reward;

  pointsSpent: number;
  redeemedAt: Date;
  fulfilledAt?: Date;

  qrCode?: string;                // single-use token
  qrCodeExpiresAt?: Date;
  isQrCodeUsed: boolean;

  adminNotified: boolean;
  notes?: string;
}

// ============================================================
// OFFER (AI-generated)
// ============================================================

interface Offer {
  id: string;
  businessId: string;

  title: string;
  description: string;
  ctaLabel: string;
  ctaAction: 'enroll-challenge' | 'book-session' | 'view-rewards' | 'log-pr';

  validFrom: Date;
  validUntil: Date;

  targetSegment: PersonaType | 'all' | 'at-risk' | 'off-peak-eligible';
  pointsIncentive?: number;

  // Generation metadata
  generatedByAI: boolean;
  aiPromptContext?: string;       // stores the trigger condition for audit
  isLowFootfallOffer: boolean;

  impressions: number;
  conversions: number;
}

// ============================================================
// BUSINESS
// ============================================================

interface Business {
  id: string;
  name: string;
  type: BusinessType;
  slug: string;                   // URL namespace: /[slug]/dashboard

  config: BusinessConfig;
  activities: ActivityDefinition[];
  rewards: Reward[];
  challenges: ChallengeDefinition[];

  // Integration config
  bookingSystemWebhookUrl?: string;
  weatherApiEnabled: boolean;
  weatherLocationId?: string;

  createdAt: Date;
  subscriptionTier: 'starter' | 'growth' | 'enterprise';
}

type BusinessType =
  | 'fitness-strength'
  | 'fitness-yoga'
  | 'food-beverage'
  | 'retail'
  | 'health-dental'
  | 'gaming-entertainment';

// ============================================================
// ACTIVITY DEFINITION (business-level template)
// ============================================================

interface ActivityDefinition {
  id: string;
  businessId: string;
  name: string;
  emoji: string;
  category: ActivityCategory;
  pointValue: number;
  description: string;
  requiresCoachConfirmation: boolean;
  maxPerDay?: number;
  maxPerWeek?: number;
  maxPerMonth?: number;
  isActive: boolean;
}

// ============================================================
// CHALLENGE DEFINITION
// ============================================================

interface ChallengeDefinition {
  id: string;
  businessId: string;
  name: string;
  description: string;
  emoji: string;
  category: ActivityCategory;
  pointsReward: number;
  enrollmentPoints: number;       // points for signing up (e.g. 10 FP)
  durationDays: number;
  requiredCompletions: number;
  completionActivityIds: string[]; // which ActivityDefinition IDs count
  isRecurring: boolean;
  recurrencePeriod?: 'weekly' | 'monthly';
  isActive: boolean;
}
```

---

## 3. BUSINESS CONFIG SYSTEM

### 3.1 White-Label Switching Architecture


---


## Agent 4: Communicator

**Role:** Get the customers — persuasion and storytelling
**Output file:** `04_marketing_copy.md`
**Word count:** 3,654

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


---


## Agent 5: Manager

**Role:** Run the business — leadership and orchestration
**Output file:** `05_executive_summary.md`
**Word count:** 5,433

# LoyaltyOS Management Report
## Client: Slam Fitness | Programme: IRON RECORD
### Manager Agent Synthesis v1.0

---

# SECTIONS 1–6: INTERNAL MANAGEMENT REPORT

---

## 1. EXECUTIVE SUMMARY

Slam Fitness is losing members not because it is doing anything wrong, but because members stop *feeling* their progress — and nobody notices in time to intervene. By the time a member cancels, they have been mentally leaving for six weeks.

What has been built is a loyalty programme called **IRON RECORD** that solves this specific problem. It gives every Slam Fitness member a permanent, visible record of their training — every session, every personal best, every milestone. When the AI detects that a member is drifting (missing sessions, stopping progress logs, losing their training crew), it does not send them an automated discount. It alerts their coach with a precise, human-readable prompt so the coach can reach out in their own words at exactly the right moment.

The programme rewards members with **Forge Points** for the things that actually build commitment: logging personal records, attending consistently, completing challenges, and referring friends. Points convert into real rewards — from a post-session shake to a permanently engraved plaque recording a member's best lifts.

On the business side, the owner gets a live dashboard showing footfall patterns, which members are at risk, and whether the off-peak incentive is actually moving Tuesday and Thursday attendance.

**The single most important thing the business owner must do before launch:** Complete the GDPR onboarding checklist in Section 7, specifically signing the data processing agreement with LoyaltyOS and implementing the tiered consent flow. Without this, the programme cannot legally go live in Ireland.

---

## 2. PIPELINE QUALITY REVIEW

**Researcher: 9/10** — Exceptional diagnosis; the structural framing of progress-plateau and social-anchor churn is specific, evidenced, and actionable, with the five behavioural churn signals providing a genuinely useful operational framework for the AI detection layer. *One deduction: the GDPR risk section correctly identifies special category data risk but does not resolve whether fitness performance data (PRs, session attendance) crosses the Article 9 threshold in Irish DPC guidance — this ambiguity should have been flagged more sharply.* — **APPROVED**

**Designer: 9/10** — The IRON RECORD design is internally coherent, emotionally intelligent, and directly responsive to the Researcher's diagnosis. The tier naming, the plaque reward, the Streak Freeze mechanic, and the five hard design rules around manipulation are all excellent decisions. *One deduction: the design specifies that the 7-day streak notification carries "+150 Forge Points" but the points table awards 75 FP for a 7-day streak — this numerical inconsistency exists across the design spec and must be resolved before the Maker finalises point values.* — **APPROVED** *(with required correction noted below)*

**Maker: 8/10** — The technical specification is thorough, professionally structured, and correctly implements almost all design decisions. The data model is well-designed and the component architecture is sound. *One deduction: the Business Config white-label switching section (Section 3.1) is listed in the document but its content is absent — the spec is incomplete at that section. Additionally, the Maker does not address the weather API integration for the Weather Day Bonus mechanic despite the Designer specifying it. These gaps must be closed before build begins.* — **APPROVED** *(with required completions noted below)*

**Communicator: 9/10** — The copy is the strongest output in the pipeline after the Research Brief. Persona targeting is precise, the win-back variants are genuinely differentiated and emotionally calibrated, and the privacy notice is one of the best plain-English GDPR documents produced by this pipeline to date. *One deduction: the business sales pitch section contains unverified performance claims ("Studios running LoyaltyOS have seen measurable reductions in the 6-to-10-week churn window") with a placeholder noting that verified figures are absent. This copy cannot be used externally until real benchmarks replace the placeholder — using it in current form is a legal and reputational risk.* — **APPROVED** *(with mandatory correction on sales claims)*

---

### Blockers Requiring Resolution Before Launch

**Blocker 1 — Point Value Inconsistency:** The Designer's points table (Section 2) awards **75 FP** for a 7-day streak. The Communicator's copy (Section 2c) states **+150 Forge Points** for the same event. The Maker's data model must implement one canonical figure. Decision required: 75 FP (points table) is the authoritative source. All copy must be corrected to 75 FP before the Communicator's streak notification copy is used in production.

**Blocker 2 — Incomplete Maker Spec:** Section 3.1 of the Maker output (Business Config System / White-Label Switching Architecture) contains a header and no content. This section governs how LoyaltyOS deploys to multiple clients — it is architecturally critical. The Maker must complete this section before build begins.

**Blocker 3 — Weather API Integration Gap:** The Designer specifies a weather API trigger for the "Weather Day Bonus" mechanic. The Maker does not implement this in the component inventory or data model. The `Business` interface includes `weatherApiEnabled` and `weatherLocationId` fields, suggesting intent, but no component, API route, or logic is specified for execution. The Maker must add a `WeatherBonus` service and the corresponding `Offer` generation trigger.

**Blocker 4 — Unverified Sales Claims:** The Communicator's business pitch must not be distributed externally in its current form. The placeholder for client benchmarks must be replaced with verified, attributable data, or the performance claims must be removed entirely until evidence exists.

---

## 3. STRATEGIC ALIGNMENT CHECK

### Does the loyalty design directly address the specific retention problem the Researcher named?

**Yes — with one noted gap.**

The Researcher's core diagnosis: *"When a member stops feeling progress (whether real or perceived), the premium justification for a boutique studio over a €30/month commercial gym collapses overnight. And when a member's social anchor — a training partner, a favourite coach, a regular class crew — is disrupted, the belonging that kept them accountable disappears with it."*

The IRON RECORD design addresses both failure modes explicitly:

- **Progress plateau:** The PR log, Progress Recap Card, PR Anniversary mechanic, My Record tab, and the churn signal "PR Silence at 21+ days" all directly combat the invisible erosion of perceived progress. The system makes progress legible at the moment a member is most at risk of concluding it isn't happening.

- **Social anchor disruption:** The Anchor persona monitoring (social cluster surveillance, cohort cancellation alert), the community-framing of challenges, the Crew Builder challenge, and Declan's persona-specific dashboard are all directly targeting this failure mode.

**Noted gap:** The Researcher names "The Class Switch" (a member deviating from their habitual class slot) as the second most predictive churn signal, flagging it as social anchor disruption. The Designer includes `class-switch` as a churn signal in the composite score table, but no specific intervention mechanic or UI response is designed for this signal beyond the generic churn risk register. A member who switches away from their habitual class slot because their coach has changed schedules — the exact scenario Declan's persona describes — receives no tailored response. This gap should be addressed in Phase 2 iteration.

---

### Does the prototype plan implement all key features from the design spec?

**Mostly yes. Three features require completion or confirmation:**

- ✅ All 14 earnable activities are implemented in the `ActivityDefinition` data model
- ✅ All 8 rewards are implemented in the `Reward` interface with correct fulfilment methods
- ✅ All 4 tiers are implemented with correct visual configuration in `TierBadge`
- ✅ The 5-screen churn intervention protocol is implemented in `ChurnRiskRegister` and `CoachActionList`
- ✅ The Streak Freeze mechanic is implemented in `StreakCounter` and the `Customer` model
- ✅ The 4-screen tiered consent onboarding is implemented in `OnboardingConsent`
- ❌ **Weather Day Bonus** mechanic is not implemented (Blocker 3 above)
- ❌ **Business Config white-label system** is incomplete (Blocker 2 above)
- ⚠️ **PR Anniversary "Quiet Milestone"** mechanic is referenced in `MyRecordView` and `Milestone` types, but no API trigger, scheduled job, or notification service is specified for the anniversary date calculation — the Maker must add this to the backend service layer

---

### Does the marketing copy target the exact three personas the Researcher defined?

**Yes — confirmed for all three.**

| Persona | Researcher Definition | Communicator Coverage | Alignment |
|---|---|---|---|
| **Ciarán — The Competitor** | Male, 28–36, performance-obsessed, triggered by public recognition of measurable progress, disengages when plateau is unacknowledged | Dedicated key messages, 7-day streak variant, off-peak offer primary, tier upgrade offer, win-back variant — all framed around rankings, PRs, and performance evidence | ✅ Confirmed |
| **Aoife — The Transformer** | Female, 25–33, goal-driven, highly coachable, emotionally responsive, disengages when a streak break is met with silence | Dedicated key messages, 7-day streak variant, win-back variant (coach-attributed, emotionally calibrated, progress-anchored), welcome message tone | ✅ Confirmed |
| **Declan — The Anchor** | 35–45, habitual, community-anchored, anti-friction, disengages when social geography is disrupted | Dedicated key messages, 7-day streak variant, win-back variant (no metrics, social hook only, minimal copy) | ✅ Confirmed |

**One challenge:** The Communicator's off-peak offer targets "Ciarán primary, Aoife secondary" — but the Researcher makes clear that Declan's retention depends on his habitual slot, not flexibility. Offering off-peak incentives to Declan risks signalling schedule disruption, which is precisely his churn trigger. The AI targeting logic must explicitly exclude Anchor-persona members from off-peak push offers unless their booking history already demonstrates time flexibility.

---

## 4. REGULATORY AND COMPLIANCE SUMMARY

### GDPR

**Data Collected — Every Category This System Processes:**

1. **Identity data:** Name, email address, phone number, avatar image
2. **Behavioural data:** Session attendance timestamps, class type selection, booking patterns, no-show and late-cancellation records
3. **Performance data:** Exercise names, weights lifted, rep counts, improvement calculations — logged as Personal Records
4. **Biometric-adjacent data:** Progress metrics that in aggregate could constitute a fitness and health profile (session frequency, physical performance trajectory)
5. **Social data (opt-in):** Record of social media tags referencing Slam Fitness
6. **Relational data:** Referral connections between members, social cluster groupings (who trains with whom)
7. **Behavioural inference data:** AI-generated persona classification (Competitor / Transformer / Anchor), composite churn score, intervention briefs
8. **Consent records:** Timestamped record of each consent toggle decision
9. **Financial-adjacent data:** Points balances, reward redemption history, tier status

---

**Lawful Basis:**

The system operates on a **dual basis** that must be clearly documented:

- **Consent (Article 6(1)(a))** applies to: progress logging (PRs), coaching alerts (sharing activity patterns with coaches), and social recognition. The tiered consent model the Designer has specified is legally correct — these are genuinely optional features that require explicit, granular opt-in. Consent is the right basis here because these uses go beyond what a member would reasonably expect from joining a gym loyalty programme.

- **Legitimate interest (Article 6(1)(f))** applies to: session attendance tracking for points calculation and basic programme administration. A member who joins IRON RECORD has a reasonable expectation that their attendance will be recorded for loyalty purposes — this is the core function of the service and does not require consent beyond the programme terms. A Legitimate Interest Assessment (LIA) must be documented before launch confirming that this interest is not overridden by member privacy rights.

**Special Category Data (Article 9) — Critical Issue:**

The Researcher correctly flags this risk. Physical performance data (PR logs showing weight lifted, rep counts, and progressive overload over time) combined with session frequency data creates, in aggregate, a *health and physical fitness profile*. The Irish DPC has taken an expansive view of what constitutes health data. While a single PR entry is arguably not health data, a longitudinal record of physical performance over 12 months almost certainly qualifies.

**Recommendation:** Treat PR and performance log data as special category data requiring **explicit consent (Article 9(2)(a))** with a clear, standalone consent statement. This is already partially addressed by the Designer's tiered consent flow for "Progress Logging" — but the consent language must explicitly state that this data constitutes health-related information and explain why it is collected. Legal counsel with Irish DPC expertise should review the consent wording before launch.

---

**Article 22 GDPR — Automated Decision-Making:**

Article 22 **does apply** to this system in two specific respects:

1. **Tier upgrades** are fully automated — a member crosses a points threshold and is automatically reclassified. This changes what rewards they can access (the Membership Credit and Plaque are tier-gated) and what content appears on their dashboard. This is an automated decision that produces a legal or similarly significant effect on the member's access to programme benefits.

2. **Persona classification** (Competitor / Transformer / Anchor) is AI-generated and determines what personalised content, offers, and interventions a member receives. Being classified as a particular persona changes the offers surfaced, the challenges prioritised, and the tone of all communications. This is automated profiling that produces effects on what the member experiences.

The churn risk score itself, by design, **does not trigger automated action** — it only generates a brief for human coach review. This is correct design and means Article 22 does not apply to the churn score in isolation, because no automated decision is taken on its basis alone.

**Required response to Article 22:** The programme must offer members:
- The right to request human review of their tier classification
- The right to contest their persona classification and have it manually reviewed or overridden
- A clear explanation (in plain English, in the privacy notice) that these classifications are automated and what factors determine them

The Communicator's privacy notice does not currently address Article 22 rights. This must be added before launch.

---

**Retention Periods — Recommended:**

| Data Category | Recommended Retention Period | Justification |
|---|---|---|
| Session attendance records | Duration of membership + 24 months | Fraud prevention, points dispute resolution |
| PR and performance logs | Duration of membership + 24 months | Member's own historical record; they benefit from this |
| Booking behaviour patterns | 12 months rolling | Churn prediction only requires recent data; older data degrades model quality |
| AI-generated persona classification | Reviewed and updated monthly; deleted 30 days post-membership | Inference data should not outlive its operational purpose |
| Churn risk scores and intervention briefs | 90 days; deleted after coach action or member return | Sensitive inference data; short operational window |
| Social tag records | Duration of consent; deleted on consent withdrawal | Consent-based collection requires consent-based deletion |
| Consent records | Duration of membership + 5 years | Legal evidence of lawful basis |
| Redemption history | Duration of membership + 24 months | Financial record, dispute resolution |

---

**Erasure — Exact Process:**

The Designer has specified a "Delete My Data" button in the in-app Privacy Card triggering a 30-day erasure workflow. This must be implemented as follows:

1. Member taps "Request Account Deletion" in Settings → Your Data & Privacy
2. System sends a confirmation email requiring the member to confirm the request within 48 hours (prevents accidental deletion)
3. On confirmation: all personal data is queued for deletion. A 30-day reversibility window opens — the account is suspended (not deleted) and the member is notified they can cancel the request within 30 days
4. At day 30: all personal data is permanently deleted from production databases. Anonymised aggregate data (e.g., "Member attended 47 sessions" without the member's identity) may be retained for business analytics if this is disclosed in the privacy notice
5. A deletion confirmation is sent to the member's email
6. Deletion of data shared with coaches (PR records in coach dashboard, churn briefs) must be simultaneous — not deferred

The Communicator's privacy notice describes this process correctly. The Maker must implement it technically, including cascade deletion across all related records in the PostgreSQL schema.

---

**DPIA — Required:**

**A Data Protection Impact Assessment is required before this system goes live.** The argument is unambiguous:

This system (a) processes health-adjacent performance data at scale, (b) uses AI to profile members and classify them into behavioural personas, (c) uses those profiles to make automated decisions affecting what content, offers, and interventions members receive, and (d) monitors social relationships between members to predict churn risk. This meets the Irish DPC's criteria for mandatory DPIA under Article 35 GDPR: systematic profiling, processing of sensitive data categories, and innovative use of technology in ways that could not reasonably be anticipated by data subjects from the membership contract alone.

The DPIA must document: the purposes and necessity of processing, the risks to member rights, and the specific technical and organisational safeguards implemented. It should be completed before launch and reviewed annually.

---

### EU AI Act

**Article 5 — Prohibited Practices Assessment:**

This requires an honest answer, not a defensive one. The IRON RECORD system deliberately uses several psychological mechanisms:

- **Loss aversion:** The streak mechanic is explicitly designed around the psychological cost of breaking a streak. The pre-streak alert at Day 5 ("You're 2 sessions away from your 7-day streak. Don't let it go") activates loss aversion before a streak is at risk — this is intentional by design, documented in the Designer's spec.
- **Streak mechanics:** The 30-day streak creates a "sunk cost positivity" dynamic, also acknowledged in the Researcher's spec.
- **Urgency triggers:** The 48-hour win-back window for Forge Points in the win-back copy creates time pressure.

The honest assessment is that these mechanics sit at the edge of acceptable practice under Article 5(1)(b), which prohibits "subliminal techniques beyond a person's consciousness" and exploitation of "psychological vulnerabilities." The distinction between legitimate persuasion and prohibited manipulation under EU AI Act guidance turns on three factors: transparency, consent, and whether the technique causes harm.

**Conclusion:** The system does not currently cross into prohibited territory, for the following reasons:
1. The streak mechanic is fully transparent — members see their streak counter and understand what it means
2. Members opt into the programme and can withdraw at any time
3. The pre-streak alerts are visible, not subliminal — members are aware they are being prompted
4. The Streak Freeze mechanic converts a psychological pressure point into a member-controlled tool, which actively reduces exploitation risk

**The safeguard that must be maintained:** The Designer's Rule 2 — "Streak Breaks Are Not Punished, They Are Acknowledged" — is not optional. If this rule is ever softened under commercial pressure (e.g., adding shame-based language, removing the Streak Freeze, or making break messaging more punitive), the system would likely cross into prohibited territory. This rule must be documented as a binding product constraint in the system's compliance record.

**The urgency mechanic in win-back copy** (the 7-day Forge Points hold) is acceptable only if the 7-day window is genuine and not artificially constructed. The Communicator's copy must not be deployed with manufactured scarcity — the points hold must reflect a real system rule.

---

**Risk Classification: LIMITED RISK**

Justified as follows:

- The system is not used in education, employment, credit, or law enforcement contexts — none of the Annex III High Risk categories apply directly
- The personalisation, churn prediction, and offer generation functions affect what loyalty content a member sees, not decisions that materially affect their legal rights, access to essential services, or economic opportunities in a significant way
- The system is used in a commercial leisure context where members enter voluntarily and can exit freely
- The AI functions are supervised by humans at every consequential decision point (coach reviews all intervention briefs; no automated outreach)

However, the system is not Minimal Risk. The profiling functions, the persona classification, and the influence on purchasing behaviour (renewal decisions) create obligations under the Limited Risk category, specifically Article 52 transparency requirements.

---

**Article 52 — Transparency Obligations:**

The `/api/personalise` and `/api/offers` endpoints use Claude AI to generate content shown to members. Article 52 requires that persons interacting with AI systems be informed they are interacting with an AI where this is not otherwise obvious.

**Specific obligations that apply:**

1. The in-app privacy notice must include an explicit statement disclosing AI involvement in personalisation. The Communicator's current privacy notice describes how AI works but does not use the specific language required for Article 52 compliance. The following sentence must be added to the "How AI Personalisation Works" section:

> *"This programme uses artificial intelligence (AI) to analyse your training data and generate personalised content, offers, and coaching prompts. You are not interacting with a human when the app surfaces personalised recommendations — these are generated automatically by the IRON RECORD AI system, powered by Claude (Anthropic)."*

2. The coach dashboard's AI-generated intervention briefs are already correctly labelled: *"IRON RECORD AI Suggestion — coach discretion applies."* This satisfies Article 52 for the B2B coach-facing interface.

3. Any member-facing in-app card or notification that is AI-generated must carry a subtle disclosure. The Designer's Rule 1 specifies: *"All member-facing nudges that are algorithmically triggered carry a subtle footer: 'This reminder was generated by IRON RECORD based on your activity.'"* This is legally correct and must be implemented without exception.

4. The win-back messages attributed to named coaches (e.g., "Coach Rían") present a specific risk: if the AI generates the content and a coach sends it verbatim, this is effectively an AI-generated message presented as human-authored. The hard rule that coaches must write their own messages must be technically enforced — the system should provide AI-generated *briefs* to coaches, not pre-written messages ready to send. The Communicator's win-back copy templates should be coach guidance, not copy-paste send text.

---

**Annex III — Significant Effects on Individual Rights:**

The churn prediction mechanism requires specific assessment. Annex III covers AI systems used for profiling of natural persons in ways that significantly affect them.

**Assessment:** The churn prediction score does not, in its current design, significantly affect individual rights in the Annex III sense. It does not determine access to credit, employment, housing, healthcare, or essential services. A member flagged as high churn risk receives more human attention from their coach — which is a benefit, not a detriment.

However, a scenario exists where this could change: if a business owner were to use the churn risk register to selectively offer renewal discounts only to high-risk members, or to exclude low-risk members from retention offers, the system would then be making commercially consequential distinctions between members based on AI profiling. This use case must be explicitly prohibited in the LoyaltyOS terms of service and documented in the DPIA.

---

### Compliance Actions Before Launch — Numbered List

1. **Complete a Data Protection Impact Assessment** covering: persona profiling, churn prediction, special category data (performance logs), and automated tier decisions. Engage Irish DPC-experienced legal counsel. This is mandatory, not optional.

2. **Obtain explicit Article 9 consent** for PR and performance log data by updating the onboarding consent screen to describe performance logs as health-related information. Revise the consent language with legal review before deploying the onboarding flow.

3. **Add Article 22 rights disclosure** to the in-app privacy notice: explain to members that tier upgrades and persona classifications are automated, what factors determine them, and how members can request human review. Add a human review request mechanism to Settings.

4. **Add the Article 52 AI disclosure sentence** (specified above) to the in-app privacy notice and confirm that all AI-generated member-facing content carries the footer disclosure specified in the Designer's Rule 1.

5. **Sign and document a Data Processing Agreement** between Slam Fitness (data controller) and LoyaltyOS (data processor), and a separate DPA with Anthropic for Claude API usage. Both must be in place before any member data is processed.

6. **Implement and test the cascade deletion workflow** for account erasure — confirm that deletion of a member's account simultaneously removes their data from: the member-facing app, the coach dashboard (PR queue, churn flags, intervention briefs), the admin analytics, and any cached AI inference results. Test with a real deletion before launch.

---

## 5. OPERATIONAL ROADMAP

### Phase 1 — Weeks 1–2: Launch Preparation (Slam Fitness Specific)

**Week 1 — Pre-Technical:**
- Slam Fitness owner and LoyaltyOS sign Data Processing Agreement. Anthropic DPA also executed.
- DPIA commissioned — engage Irish data protection solicitor. Target completion before any member data is processed.
- Resolve Blocker 1 (point value inconsistency: 7-day streak = 75 FP confirmed as canonical).
- Maker completes Business Config white-label section (Blocker 2) and Weather API integration (Blocker 3).
- Sales claims in the business pitch are either replaced with verified benchmarks or removed pending evidence (Blocker 4).
- Owner defines the 5 off-peak time slots (Tue/Thu 10am–3pm) in the Business Config and confirms class schedule integration with existing booking system (the Maker notes `bookingSystemWebhookUrl` in the `Business` model — this integration must be tested before launch).

**Week 2 — Soft Launch (Staff Only):**
- Deploy to staging environment. All five coaches at Slam Fitness use the coach dashboard for 7 days before any member access.
- Coaches complete a 90-minute briefing: what the churn signals mean, what the AI intervention brief is (and is not), the hard rule that they write their own messages, and how PR confirmation works.
- Owner tests the admin panel: footfall heatmap, churn risk register, challenge management.
- Run end-to-end test of the deletion workflow with a dummy member account.
- Article 52 disclosure footer confirmed on all AI-generated content in staging.
- Onboarding consent flow reviewed by legal counsel — sign-off obtained before member-facing launch.

---

### Phase 2 — Month 1: Measure, Iterate, and Threshold Watch

**What to measure:**
- **Off-peak footfall change:** Tue/Thu 10am–3pm attendance as a percentage of total weekly sessions. Baseline week 0, measure weekly. Target: 15% increase in off-peak sessions within 30 days.
- **Streak engagement rate:** Percentage of members who start a streak and reach day 7. Below 30% signals the streak mechanic is not resonating — review notification copy or streak threshold.
- **Coach action rate on churn flags:** What percentage of churn-risk flags result in a confirmed coach action within 72 hours? Below 60% means coaches are not trusting the system or the workflow is too burdensome — simplify the brief format.
- **PR log rate:** What percentage of strength session check-ins result in a PR log? This is the highest-value action in the system. Below 20% suggests the PR log prompt (the single-tap post-session CTA) is not visible enough or the coach confirmation friction is too high.
- **Consent completion rate:** Of members who begin onboarding, what percentage complete all four consent screens? What is the opt-in rate for coaching alerts specifically? If coaching alert opt-in is below 50%, the benefit statement needs revision.

**Thresholds that trigger a redesign:**
- If off-peak footfall does not increase by any measurable amount within 30 days, the Off-Peak Athlete framing needs revision — consider running a coached focus group to understand whether members perceive the off-peak benefit as genuinely valuable or as a consolation prize.
- If the 30-day member churn rate during the programme period is not lower than the pre-launch 30-day average, the churn prediction and intervention protocol must be reviewed — the AI signals may not be calibrated to Slam Fitness's specific member base.

---

### Phase 3 — Months 2–3: Next Capability

Based on the Researcher's findings, the single highest-return next capability is **Class Switch Detection with Personalised Social Bridging.**

The Researcher identifies "The Class Switch" (a member deviating from their habitual class slot) as the second most predictive churn signal, specifically linked to social anchor disruption. The current system detects this signal and adds it to the churn score — but has no tailored intervention.

Phase 3 should build: when the AI detects a class switch signal for an Anchor-persona member, it identifies who else from their habitual slot is still attending and surfaces a personalised prompt to the coach: *"Declan has moved away from his Tuesday 7am slot. Four members from that cohort are still attending. Consider a direct message reconnecting him with the group."* This closes the single gap identified in the Strategic Alignment Check and addresses the Researcher's most important social-anchor retention finding with a specific, targeted mechanic.

---

## 6. TOP 3 RISKS AND MITIGATIONS

### Risk 1: The Trust Collapse — AI Prompts Presented as Human Authenticity

**Why it matters for Slam Fitness specifically:** The Researcher names this as the exact failure mode of loyalty programmes in high-touch service businesses: *"The moment the relationship feels engineered, the premium justification evaporates."* Slam Fitness's entire competitive advantage over a €30/month commercial gym is the authenticity of its coaching relationships. If Ciarán or Aoife ever discovers that "Coach Rían's" message was written by an AI and sent without the coach reading it, the trust collapse is not a loyalty programme problem — it is an existential brand problem for the studio.

**The specific risk pathway in this system:** The Communicator has produced detailed win-back message templates (e.g., the Aoife win-back) that are so polished and complete that a time-pressured coach might copy and paste them verbatim rather than rewriting in their own voice. If this becomes standard practice, the system will begin sending AI-written messages under coach names — which is exactly what the Designer's Rule 5 prohibits.

**Mitigation:** The coach dashboard must technically prevent copy-paste of the full intervention brief text into the outreach tool. The AI brief should appear as a *structured summary* (member name, last session, current week, suggested tone) rather than pre-written prose. The Communicator's win-back templates should be repositioned as training materials for coaches, not operational send-ready copy. This is a product design decision that must be made before the coach dashboard is finalised.

---

### Risk 2: Special Category Data Enforcement Action — Irish DPC

**Why it matters for Slam Fitness specifically:** Slam Fitness is a Dublin 7 business collecting what the Irish DPC may classify as health data (longitudinal physical performance records) from Irish residents. The Irish DPC is one of the most active data protection regulators in the EU — it processed over 10,000 complaints in 2023 and has issued significant fines against organisations for exactly the kind of consent failures this system must avoid: inadequate consent language, insufficient data subject rights mechanisms, and failure to conduct DPIAs for AI profiling systems.

The Researcher flags this risk explicitly: *"Dublin-based businesses fall under Irish DPC jurisdiction, which has been active in enforcement."*

**The specific risk pathway:** If the DPIA is not completed before launch, if the Article 9 consent wording does not meet the Irish DPC's standard for explicit consent for health data, or if the cascade deletion workflow fails to actually remove data from all locations, a single member complaint to the Irish DPC could result in an investigation, an enforcement notice, and reputational damage disproportionate to the size of the business.

**Mitigation:** Do not launch without a completed DPIA and legal sign-off on the consent language. This is the non-negotiable prerequisite. The cost of a Dublin data protection solicitor reviewing the consent flow and DPIA documentation is trivially small relative to the cost of an enforcement action. Budget for it and complete it before any member data is processed.

---

### Risk 3: Points Liability Imbalance — Unredeemed Points Becoming a Financial Obligation

**Why it matters for Slam Fitness specifically:** The Designer identifies this risk implicitly: *"Monthly Forge Points issued vs. redeemed (balance health indicator — ensures rewards liability is manageable)"* appears in the Owner Dashboard metrics. This is the right instinct, but the risk is not yet fully managed.

If the programme is successful, a significant number of members will accumulate large Forge Points balances. The Membership Credit reward (800 FP = one month's membership free) and the 1-on-1 Programming Session (400 FP) represent real cost to the business when redeemed at scale. If 20% of members simultaneously reach Iron tier and redeem Membership Credits in the same month, the cash flow impact on a small boutique studio could be material.

The Maker's data model tracks `forgePoints` and `lifetimePoints` separately, and the `Business` interface supports reward management — but no points expiry policy, redemption rate cap, or liability reserve calculation is specified anywhere in the pipeline.

**Mitigation:** Before launch, the owner must define: (a) a points expiry policy (e.g., points expire 12 months after earning if the membership lapses — this is already partially addressed by the 24-month retention period, but expiry for inactive members must be explicit), (b) a monthly redemption budget cap per reward category (the admin panel should flag when monthly redemption approaches a preset threshold), and (c) a rolling liability estimate in the Owner Dashboard showing the total FP liability if all current balances were redeemed today. The Maker must add this liability metric to the Owner Dashboard in Phase 1.

---

# 7. CUSTOMER GOVERNANCE REPORT

---

## Your LoyaltyOS
