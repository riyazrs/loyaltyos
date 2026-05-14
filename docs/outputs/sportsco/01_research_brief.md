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