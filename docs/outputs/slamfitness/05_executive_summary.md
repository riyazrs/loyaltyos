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