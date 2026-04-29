# LoyaltyOS Internal Management Report & Customer Governance Document
## Client: Slam Fitness | IRON CIRCLE Programme
### Manager Agent Synthesis — v1.0

---

# SECTIONS 1–6: INTERNAL MANAGEMENT REPORT

---

## 1. EXECUTIVE SUMMARY

Slam Fitness is a boutique strength studio in Stoneybatter, Dublin 7. What has been built for them is a branded loyalty programme called **IRON CIRCLE** — a member-facing app and a coach-facing intelligence layer working together.

In plain English: members earn a currency called Iron by attending sessions, logging personal records, referring friends, and completing coach-set challenges. They progress through four tiers — Form, Load, Strength, and Iron Circle — and redeem Iron for rewards ranging from guest passes to bespoke training programmes. Behind the scenes, an AI layer monitors attendance patterns and, when a member goes quiet, prompts their coach to reach out personally. The system does not replace coach relationships; it protects them by ensuring no at-risk member falls through the cracks unnoticed.

The problem this solves is specific: Slam loses members not because they stop liking the gym, but because life disrupts their routine, nobody notices in time, and they rationalise cancellation as a budget decision. IRON CIRCLE is a detection and response system dressed as a loyalty programme.

**The single most important thing the business owner must do before launch:** commission a GDPR-reviewed Privacy Notice specific to this programme from an Irish data protection practitioner, and implement a layered consent mechanism at onboarding that separates session management data (necessary) from behavioural personalisation data (opt-in). Without this, the programme cannot legally deploy its AI personalisation layer to Irish members.

---

## 2. PIPELINE QUALITY REVIEW

**Researcher: 9/10** — The research is the strongest output in this pipeline; the persona work is specific, the behavioural churn signals are operationally useful and grounded in the actual mechanics of boutique fitness psychology, and the GDPR flag around health-adjacent inference is exactly the right risk to surface. The one gap is that no actual Slam member data was available for calibration — all thresholds are directional. — **APPROVED**

**Designer: 8/10** — The IRON CIRCLE concept is coherent, on-brand, and directly responsive to the research brief; the tier naming convention (Form → Load → Strength → Iron Circle) is genuinely clever and the surprise-and-delight mechanics (Century Ceremony, Cold Day Bonus) show real craft. The design specification was cut off mid-sentence in the churn prediction table (the "Group class drop" row is incomplete), which is a minor but real gap that must be resolved before the engineer builds against it. — **APPROVED** with one correction required (see below).

**Maker: 7/10** — The component inventory is thorough and the TypeScript interfaces are well-structured and directly traceable to the design spec. However, the Maker output was also truncated — the Claude AI integration section, the mini-game spec, and the deployment checklist are referenced in the table of contents but not delivered. This is a meaningful gap: the two API routes (`/api/personalise` and `/api/offers`) that carry the most regulatory exposure are the least documented. — **APPROVED** conditionally — the missing sections must be completed before any compliance review of the AI layer can be finalised.

**Communicator: 9/10** — The copy is the best work in the pipeline in terms of craft. The persona targeting is precise — Ian's win-back sequence in particular is exactly the right tone — and the in-app privacy notice is unusually good for a marketing output: plain English, complete, and trust-building rather than defensive. The placeholder social proof metrics `[X]%` in the business pitch must be replaced with real data before any external use; deploying fabricated statistics would be both a legal and reputational risk. — **APPROVED** with one condition (replace placeholders before any external deployment).

---

### FLAGS REQUIRING CORRECTION BEFORE LAUNCH

1. **Designer output truncated:** The churn prediction table row for "Group class drop" ends without completing the AI Action column. The Engineer cannot build the correct trigger logic without the full specification. **Resolution required: Designer to complete the table.**

2. **Maker output truncated:** Claude AI integration section (`claudeClient.ts`), mini-game spec, and deployment checklist are missing. The `/api/personalise` and `/api/offers` routes are the highest-compliance-risk components in the system and they have no documented implementation. **Resolution required: Maker to deliver the missing sections before any AI layer build begins.**

3. **Marketing social proof placeholders:** `[X]%` metrics in the business sales pitch must not be used externally until replaced with verified data. **Resolution required: replace or remove before any external pitch use.**

---

## 3. STRATEGIC ALIGNMENT CHECK

### Does the loyalty design directly address the specific retention problem the Researcher named?

**Substantially yes, with one partial miss.**

The Researcher's primary finding was: *"The moment a member stops feeling like they're getting stronger, faster, or leaner — or the moment their life disrupts their routine and the social thread snaps — they rationalise cancellation as a financial decision rather than a behavioural one."*

The design responds to this directly through: PR logging mechanics and milestone recognition (addressing the progress plateau problem), the coach-triggered re-engagement prompt at 10-day silence (addressing the social thread snap), and the grace period and Welcome Back bonus (addressing routine disruption without shame). These are precise, not generic.

The partial miss: the Researcher identified **"quiet day atrophy"** as a structural problem and recommended off-peak incentives as a direct fix. The design does include an Off-Peak Power Hour activity (25 Iron) and the Off-Peak Explorer challenge, and the AI nudging spec explicitly addresses this. However, the churn prediction table does not include off-peak avoidance as a monitored signal — a member who has *never* attended off-peak is not flagged as structurally at risk, even though the research identifies this mental model as a precursor to full dropout. **This is a gap.** The AI layer should include a signal for "peak-only attendance pattern with no off-peak history" as a background retention risk, not just an offer-targeting opportunity.

---

### Does the prototype plan implement all key features from the design spec?

The component inventory maps cleanly to the design spec's core features: tier system, Iron currency, progress ring, journey stage, streak mechanics, reward grid, leaderboard, and AI suggestions. The mapping is direct and traceable.

**Missing or incomplete features in the prototype plan:**

- **The Century Ceremony** is listed as a component (`CenturyCelebration.tsx`) but has no implementation spec — no trigger logic, no API call, no physical card notification to staff.
- **The Cold Day Bonus** (Met Éireann API integration) is in the design spec but does not appear anywhere in the Maker's component inventory or file structure. This feature requires an external API integration that has not been planned.
- **Coach notification system** — the entire coach-facing intelligence layer (prompts to coaches when members go quiet) is referenced in the design spec and is the Researcher's single highest-value intervention, but there is no corresponding component, API route, or data model in the Maker's output. This is the most significant missing feature. A dashboard or notification mechanism for coaches must be scoped and built.
- **Chain Bonus referral mechanic** (50 Iron when a referred friend themselves refers someone) has no data model or tracking logic specified.
- **Community Leaderboard studio display** — the design specifies a physical dashboard display inside the studio; the Maker has built the in-app leaderboard but there is no spec for the studio-facing display output.

---

### Does the marketing copy target the exact three personas the Researcher defined?

**Yes, with one nuance to note.**

- **Committed Cliona** — Confirmed. The copy correctly centres her on progress acknowledgement, milestone recognition, and the fear of losing something she has built. The tier upgrade offer copy is clearly written for her profile.
- **Inconsistent Ian** — Confirmed and strongest. The win-back copy, the welcome sequence tonal centre of gravity, and the guilt-free re-entry framing are precisely calibrated to the Researcher's finding that Ian *"responds to being seen, not marketed to"* and cancels quietly when *"nobody noticed."*
- **Social Síle** — Confirmed. The community recognition messaging, referral leaderboard framing, and the line *"you're a reason other people stay"* directly address her loyalty trigger. 

**Nuance:** The Communicator correctly identifies Ian as the tonal centre of gravity for the welcome sequence. This is the right call — Ian is the highest churn risk in the first 60 days and the hardest to re-engage. However, the onboarding sequence only has three messages. The Researcher flagged that members who have *not* referred anyone or posted anything by day 60 are "transactional, not tribal." There is no onboarding message specifically designed to convert Síle-type members into community participants during that critical window. A day-45 community activation prompt should be added to the sequence.

---

## 4. REGULATORY AND COMPLIANCE SUMMARY

### GDPR

**Data Collected — Every Category This System Processes:**

1. **Identity data:** Name, email address, membership ID
2. **Transactional/behavioural data:** Session booking timestamps, attendance records, class format selections, cancellation patterns, booking lead times
3. **Programme activity data:** Points balance, tier level, streak length, challenge completions, reward redemptions
4. **Progress data:** Coach-logged or member-logged personal records (PRs) in specific lifts
5. **Social/referral data:** Referral link generation and conversion, opted-in social media tag confirmations
6. **Communication response data:** Push notification open rates and response patterns
7. **Coach interaction data:** Timestamps of coach touchpoints (in-app or session floor)
8. **Temporal pattern data:** Peak vs. off-peak attendance distribution, day-of-week patterns, time-of-day patterns
9. **Inferred behavioural profiles:** AI-generated risk scores and persona classifications (Cliona-type / Ian-type / Síle-type signals) — **this is the most legally sensitive category**

**Note on health-adjacent data:** The Researcher correctly flagged that gym attendance data combined with session type, frequency changes, and progress logging sits close to Article 9 health data, particularly when the AI infers possible injury or health disruption from absence patterns. The system as designed does *not* store explicit health inferences — coach prompts reference behavioural signals only ("hasn't booked in 10 days") not health conclusions ("may be injured"). This boundary must be enforced by design constraint in the AI prompt engineering for both `/api/personalise` and `/api/offers`, and must be documented.

---

**Lawful Basis:**

Two distinct bases apply, and they must not be conflated at onboarding:

- **Session management and attendance data (categories 1–3 above):** **Legitimate interest** applies. Processing this data is necessary for the operation of the membership contract and the loyalty programme functionality the member has signed up for. A Legitimate Interest Assessment (LIA) should be documented.

- **AI personalisation, behavioural profiling, coach prompt generation, and communication pattern tracking (categories 7–9 above):** **Consent** is required. This processing goes beyond what a member would reasonably expect as part of a session booking system. It involves profiling their behaviour to influence what content, rewards, and coach interactions they receive. Consent must be specific, informed, and separately obtained at onboarding — not bundled into general terms. The Communicator's in-app privacy notice includes an opt-out mechanism (`Settings → Privacy → Personalisation Preferences`), which is the correct design, but opt-out is not the same as opt-in consent. **The system must require affirmative opt-in for personalisation at onboarding, not assume consent.**

---

**Article 22 GDPR — Automated Decision-Making:**

Article 22 applies here and must be addressed directly. The system makes two categories of automated decisions that affect what a member sees and receives:

1. **Tier upgrades:** Automatic promotion through Form → Load → Strength → Iron Circle based on lifetime Iron accumulation. This determines access to tier-specific benefits (priority booking, early programme access).

2. **Personalised offer and content targeting:** The `/api/personalise` and `/api/offers` endpoints use AI to determine which activities are surfaced to which members, which offers are deployed, and which churn signals trigger which interventions.

Both of these produce decisions that have a legal-or-similarly-significant effect on what the member receives. Tier upgrades affect access to material benefits (discounts, priority booking). Personalised offer targeting affects what financial and experiential rewards a member is exposed to.

**Obligations that follow:** Members must be informed that these automated decisions occur (satisfied partially by the Communicator's privacy notice but not sufficiently explicitly). Members must have the right to request human review of any automated decision — specifically, if a member believes a tier classification or a withheld offer is incorrect, they must have a clear mechanism to contest it. **The app must include a "Review My Profile" or equivalent human-review request mechanism, accessible from Settings.** This does not currently exist in the prototype plan.

---

**Retention Periods (recommended):**

| Data Category | Recommended Retention Period | Rationale |
|---|---|---|
| Identity data (name, email) | Duration of active membership + 12 months | Re-engagement window post-cancellation |
| Session and attendance data | Duration of active membership + 24 months | Retention analysis and dispute resolution |
| Programme activity data (points, tiers, streaks) | Duration of active membership | No legitimate purpose post-cancellation |
| PR and progress data | Duration of active membership + 12 months | Member may request their own record |
| Social/referral data | Duration of active membership + 6 months | Referral commission resolution window |
| AI-generated behavioural profiles and risk scores | 90 days rolling maximum | No legitimate basis for long-term retention of inferred profiles |
| Financial transaction records | 7 years | Irish Revenue / Companies Act obligations |
| Communication response data | 6 months rolling | Campaign analysis only |

---

**Erasure — Exact Process:**

The Communicator has correctly specified two erasure pathways:
1. In-app: **Settings → Privacy → Delete My Account** — permanent deletion within 30 days, confirmation email sent
2. Email: **privacy@slamfitness.ie** — manual processing within 30 days, confirmation sent

**What must additionally be specified in the system design (currently absent):**
- Erasure must cascade to AI-generated profiles and risk scores held in any separate datastore, not just the member-facing database
- Coach notification logs that reference a specific member must be purged
- Any data passed to the Claude API must not be retained by Anthropic under the terms of the API agreement — this must be confirmed and documented
- A deletion audit log (recording that deletion occurred, without retaining the deleted data itself) must be maintained for compliance evidence

---

**DPIA — Is One Required?**

**Yes. A DPIA is required and should be completed before launch.**

The case for requirement:

Under Article 35 GDPR, a DPIA is mandatory when processing is likely to result in a high risk to individuals' rights and freedoms, particularly where it involves: (a) systematic and extensive profiling; (b) processing of sensitive data on a large scale; or (c) systematic monitoring of publicly accessible areas.

This system engages (a) directly. It profiles member behaviour systematically — attendance patterns, class format preferences, response to communications, booking habits — and uses those profiles to make automated decisions about what rewards, content, and coach interactions each member receives. The profiling is not incidental; it is the core function of the AI layer.

The health-data adjacency risk identified by the Researcher strengthens the case further. While the system is designed to avoid explicit health inferences, the combination of absence pattern monitoring, session type tracking, and frequency analysis creates a dataset that, in aggregate, could constitute health-adjacent profiling under a regulator's reading of Article 9.

The DPC (Ireland's supervisory authority) has published guidance indicating that AI-driven profiling in consumer contexts requires a DPIA where decisions affecting individuals are automated. This system meets that threshold.

**The DPIA must be completed before the personalisation layer goes live.** It can be scoped to the AI functions specifically and need not delay the basic points-and-rewards functionality.

---

### EU AI Act

**Article 5 — Prohibited Practices Assessment:**

This requires an honest answer, and the honest answer is: **the system approaches the boundary but does not, as designed, cross it — provided specific safeguards are maintained.**

The practices the EU AI Act prohibits under Article 5 include AI systems that deploy subliminal techniques to distort behaviour in ways individuals are not aware of, and systems that exploit psychological vulnerabilities to influence behaviour in a harmful way.

Loyalty programmes, by design, use psychological mechanisms — streak loss aversion, milestone anticipation, social recognition, tier identity — to create habitual behaviour. The Researcher explicitly references these: *"the psychological cost of breaking a visible streak is disproportionate to the effort of continuing it."* The Designer builds in "surprise and delight" moments designed to feel organic rather than engineered. The off-peak offer uses time-limited availability (expiry at 10:30am) alongside personalisation and reward to drive urgent behaviour.

None of these, individually or in combination as currently designed, cross into Article 5 prohibition — **provided** the following safeguards hold:

1.