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