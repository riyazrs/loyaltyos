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