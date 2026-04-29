# LoyaltyOS Internal Management Report
## Slam Fitness — FORGED Loyalty Programme
### Pipeline Synthesis | Manager Agent

---

## 1. EXECUTIVE SUMMARY

Slam Fitness has a specific problem: members don't dramatically quit — they quietly drift. A progress plateau hits around weeks 8–12, a training partner stops coming, a routine shifts, and the member simply attends less until they don't attend at all. By the time this is visible to any coach, the decision has usually already been made.

What has been built is a loyalty programme called FORGED that addresses this pattern directly. Members earn Iron Points for every session they attend, every personal best they log, every friend they bring through the door, and every coach check-in they complete. Those points unlock real rewards: priority booking, free coaching sessions, merchandise. There are four membership tiers — Raw, Tempered, Forged, Ironclad — that give members a visible identity tied to their commitment level.

Underneath the points economy, the system monitors five behavioural signals that predict when a member is about to leave — broken routines, missed bookings, social withdrawal — and alerts their coach before the member has consciously decided to go. The coach then reaches out. The AI identifies the moment; the human delivers the relationship. That distinction is not incidental — it is the product's core integrity.

**The single most important action before launch:** Complete a formal Data Protection Impact Assessment and appoint a named data lead at Slam Fitness. The AI churn-prediction function processes behavioural data to influence coaching interventions. That requires GDPR-compliant consent architecture, specific data retention policies, and documented human oversight of automated decisions. This is not optional and it is not bureaucracy — it is the legal and reputational foundation the entire programme sits on.

---

## 2. PIPELINE QUALITY REVIEW

**Researcher: 9/10** — The diagnosis of Slam Fitness's retention problem is precise, persona-specific, and actionable; the five churn signals are ranked by predictive weight and directly inform the designer's intervention logic, though the brief would benefit from a quantified estimate of current monthly churn rate to give the programme a baseline to measure against. — **APPROVED**

**Designer: 9/10** — The design specification is comprehensive, internally consistent, and demonstrates genuine understanding of why each mechanic serves each persona; the trust and transparency section is unusually strong for a design document, though the streak shield earned via coach check-in requires clarification in the admin panel on how coaches confirm check-in completion to prevent the shield from being gamed. — **APPROVED**

**Maker: 8/10** — The component inventory and data models are implementation-ready and faithfully execute the design specification; the data model section is truncated mid-definition on the `Reward` interface's `redemptionMethod` field, which must be completed before any developer begins build, and the absence of a defined API layer (beyond references to `/api/personalise` and `/api/offers`) leaves the Claude AI integration points underspecified. — **APPROVED with mandatory pre-build correction noted.**

**Communicator: 9/10** — The copy is exceptional in tone calibration, persona alignment, and ethical discipline; the win-back offer and AI transparency section in particular set a high standard; the social proof section in the sales pitch contains placeholder data with no instruction for when or how it will be populated with real client evidence, which is a launch readiness gap, not a copy quality issue. — **APPROVED**

**Pipeline Verdict:** All four agents are APPROVED. No agent is flagged as a blocker. Two pre-launch corrections are mandatory before any build work begins:

1. The Maker's `Reward` interface must be completed — the `redemptionMethod` field definition is truncated at `'in_gym' |` and the remainder of the data model is missing.
2. The API layer for Claude AI integration (`/api/personalise`, `/api/offers`, and the churn signal computation endpoint) must be specified before developer handoff. These are not frontend component questions — they are backend architecture decisions with GDPR and EU AI Act implications.

---

## 3. STRATEGIC ALIGNMENT CHECK

### Does the loyalty design directly address the retention problem the Researcher named?

The Researcher's core finding: *"Slam Fitness loses members not because they stop caring about fitness, but because the experience of progress becomes invisible to them, and the community that made skipping feel socially costly becomes thinner."*

The Designer's response is structurally sound. The Iron Ring progress indicator, Personal Best logging mechanic, milestone ghost screens, and tier progression system all directly address progress invisibility. The referral mechanics, boot camp crew activity, and community contribution board address the social thinning problem. The pre-lapse coach trigger — the Designer's most important mechanic — directly operationalises the Researcher's highest-value personalisation intervention verbatim.

**Alignment confirmed.** The design does not simply implement a generic loyalty programme. It implements the specific retention theory the Researcher diagnosed.

One gap: the Researcher identifies **coach departure** as Ciarán's single highest churn risk — *"If the person who knows his back injury history is replaced without careful transition, Ciarán re-evaluates everything."* Neither the Designer nor the Maker addresses coach continuity in the data model or admin panel. The `Coach` model exists, and `assignedCoachId` is tracked per customer, but there is no handover protocol, no alert when a coach leaves, and no mechanic for transitioning a member's programme history to a new coach. This is a named risk from the Researcher with no designed mitigation. **Explicit misalignment flagged.**

### Does the prototype plan implement all key features from the design spec?

The Maker implements all thirteen earnable activities, all eight rewards, all four tiers, the streak shield mechanic, the three surprise-and-delight moments, the admin panel with intervention queue, the consent screen, and the data transparency page. The AI-personalised prompt card and off-peak bonus are implemented. The tier badge visual language and activity category chips are implemented.

**One missing feature:** The design specification describes a **Community Contribution Board** in the social/referral mechanics section — *"Members who make 5+ referrals in a 12-month period receive an 'Inner Circle' badge and are given a named callout in the monthly Slam Fitness newsletter."* This feature appears in the Designer's output but has no corresponding component in the Maker's component inventory, no data model field for tracking the 5-referral threshold, and no mention of a newsletter integration or admin trigger. The `Customer.referrals.successfulReferrals` count exists in the data model, but the Community Contribution Board UI and Inner Circle badge award logic are unimplemented. **Explicit gap flagged.**

**Second missing feature:** The design spec describes an **in-gym kiosk display** that shows tier badges and the monthly streak board. The Maker builds only the app-facing components. No kiosk component, no kiosk data endpoint, and no physical display integration are specified. This may be intentional scope reduction, but it is not documented as such. **Explicit gap flagged — requires a scope decision before launch.**

### Does the marketing copy target the exact three personas the Researcher defined?

**Ciarán, 31, "The Grafter":** Confirmed. Section 1.3 addresses his progress-visibility and streak-identity needs directly. Section 2c's streak congratulation copy is calibrated for his aversion to being patronised ("that's not nothing" instead of "amazing work!"). The off-peak promotion targeting in Section 3a correctly routes to him as a schedule-flexible, data-oriented member.

**Aoife, 28, "The Social Achiever":** Confirmed. The referral power messaging, tier upgrade social shareability design note, community contribution board callout, and win-back offer are all primarily targeted at Aoife. The Communicator correctly identifies that the line "The bar will be exactly where you left it" is doing retention work specifically for members whose barrier to return is shame — which is Aoife's profile, not Ciarán's.

**David, 38, "The Optimiser":** Confirmed with one challenge. The Communicator's message for David — *"You'll only hear from us when there's something worth saying. No spam. No generic check-ins."* — is correct in principle, but the off-peak promotion (Section 3a) is targeted at David as a primary persona. The Researcher is explicit: *"AI can identify which members have schedule flexibility and offer targeted, time-sensitive incentives to attend off-peak slots."* However, the Researcher is also explicit that David *"responds to expertise signals"* and that *"discounts tell David the product is worth less than he's paying."* The off-peak promotion as written — *"earn DOUBLE Iron Points"* — is a promotional mechanic, not an expertise signal. For David specifically, the framing should be *"quiet floor, coaches have time for you"* as the primary hook, with double points as the secondary note. As currently written, the offer leads with the incentive rather than the expertise access. **Partial misalignment flagged — copy adjustment required for David persona targeting.**

---

## 4. REGULATORY AND COMPLIANCE SUMMARY

### GDPR

**Data collected — complete inventory:**

1. **Identity data:** Name, email address, phone number (optional)
2. **Session attendance data:** Booking timestamps, check-in confirmations, session type, time slot, cancellation and no-show events
3. **Behavioural pattern data:** Frequency calculations (average sessions per week, rolling 8-week window), preferred time slots, schedule flexibility score (0–1 derived value), booking lead time
4. **Programme performance data:** Personal bests (exercise, value, date), programme milestone completions, coach-confirmed achievements
5. **Social and engagement data:** Referral relationships (who referred whom), community posts tagged, challenge participation and completion status
6. **Coach interaction data:** Coach check-in frequency, response recency to coach outreach, message interaction history
7. **Inferred/computed data:** Engagement temperature score (0–100, AI-computed), churn flag severity and reason, AI-generated intervention briefs
8. **Consent data:** Consent preference, timestamp of consent given and last updated
9. **Redemption data:** Rewards redeemed, redemption codes, redemption timestamps

**No biometric data, health records, or financial data beyond membership tier is collected. This is consistent across all four pipeline outputs and should be preserved as a hard constraint.**

---

**Lawful basis:**

The appropriate lawful basis for this system is **a combination of consent (Article 6(1)(a)) and legitimate interest (Article 6(1)(f)), applied by data category.**

*Consent* is the correct basis for the AI-driven proactive coaching outreach function — specifically, the processing of behavioural patterns to generate churn flags and coach intervention briefs. This processing goes beyond what a member would reasonably expect from a loyalty programme, involves inferred data about their psychological state (engagement temperature, churn risk), and affects how the coaching relationship is managed. The Designer and Communicator correctly implement explicit consent at onboarding with a meaningful binary choice. This must be genuine, withdrawable consent — not consent bundled into terms of service.

*Legitimate interest* is the appropriate basis for core programme operation: points calculation, tier assignment, streak tracking, reward redemption, and session logging. These functions are necessary to deliver the service the member has actively signed up for. A Legitimate Interest Assessment (LIA) should be documented before launch confirming that this processing does not override member interests or rights.

*Legitimate interest alone is not sufficient for the AI personalisation and churn prediction functions.* The engagement temperature score, schedule flexibility score, and churn flag generation involve automated profiling that influences how coaches interact with members. These are not routine operational functions. Consent is required.

---

**Article 22 GDPR — Automated Decision-Making:**

Article 22 applies where there is a decision based *solely* on automated processing that produces *legal or similarly significant effects* on a data subject.

This system's tier upgrade logic and personalised offer targeting are partially automated but do not, on their own, produce legal or similarly significant effects. A tier upgrade changes what rewards a member can access — this is a loyalty benefit change, not a decision that significantly affects their legal rights, financial position, or access to services in a material sense. On this narrow basis, Article 22 does not apply to tier progression.

However, the churn prediction and coach intervention function warrants closer analysis. The AI generates a flag, produces a brief, and determines whether and when a coach is prompted to make contact. While the coach writes the message and makes the final decision to reach out, the system controls the information the coach receives and the framing of the intervention. If a member is never flagged (or incorrectly flagged as low-risk), they may not receive a retention intervention that would have kept them as a member — with downstream effects on their access to the community, their training relationships, and potentially their health outcomes. This falls short of the "legal or similarly significant" threshold for Article 22 in most interpretations, but it is proximate enough to warrant a **voluntary human review mechanism** as a matter of good practice and risk management.

**Recommended safeguard:** The admin panel should include a member-facing function allowing any member to request a human review of their engagement data and confirm whether any AI-generated flags exist against their account. This is not legally mandated in this case but is consistent with the Researcher's trust risk analysis and the spirit of Article 22.

---

**Retention periods — by data category:**

| Data Category | Recommended Retention Period | Justification |
|---|---|---|
| Identity data (name, email, phone) | Duration of membership + 12 months | Operational necessity; allows membership reinstatement |
| Session attendance data | Duration of membership + 24 months | Supports streak and milestone continuity for returning members |
| Behavioural pattern data (flexibility score, averages) | Recalculated rolling; raw inputs retained 12 months | Stale data degrades model accuracy; 12 months captures seasonal patterns |
| Programme performance data (PBs, milestones) | Duration of membership + 36 months | Member may wish to reference their history; low sensitivity |
| Inferred/computed data (engagement temperature, churn flags) | 90 days from computation | High sensitivity; stale inferences create false intervention risk |
| Coach interaction data | Duration of membership + 12 months | Operational; supports coaching continuity |
| Social and engagement data (referrals, posts) | Duration of membership + 12 months | Referral attribution must be maintained for programme integrity |
| Consent data | Duration of membership + 60 months | GDPR audit requirement |
| Redemption data | Duration of membership + 60 months | Financial records; consumer protection |

---

**Erasure — how a customer deletes their loyalty data:**

The Communicator has designed the erasure pathway: Profile → Settings → Delete my account. This must technically execute the following:

1. Hard deletion of all identity data, session data, behavioural data, inferred scores, and coach interaction data
2. Anonymisation (not deletion) of aggregate data used for programme-level analytics — individual records removed, population-level counts preserved
3. Cancellation of any unredeemed rewards and pending referral credits with notification to the member
4. Written confirmation of deletion sent to the member's registered email within 72 hours
5. Any third-party integrations (booking system webhooks) must receive a deletion notification to purge the member's data from those systems

The "pause" option described by the Communicator — *"if you're taking a break rather than leaving, consider pausing"* — is good UX design and reduces unnecessary erasure requests. This should be implemented as a formal account state (not just a recommendation) in the `Customer` data model, which currently has no `accountStatus` field. **Gap flagged for Maker.**

---

**DPIA — is one required?**

**Yes. A Data Protection Impact Assessment is required before this system launches.**

The argument is straightforward. Under Article 35 GDPR, a DPIA is required where processing is likely to result in a high risk to individuals' rights and freedoms, particularly where there is: (a) systematic and extensive profiling used to make decisions that produce significant effects; or (b) large-scale processing of sensitive data.

This system profiles customer behaviour (attendance patterns, social activity, engagement temperature) using AI to determine which members receive personalised coaching interventions, which offers they see, and what tier status they hold. The Researcher explicitly identifies that this profiling is designed to influence purchasing decisions (membership retention) and behavioural patterns (session attendance, social engagement). The Irish Data Protection Commission's guidance on DPIAs specifically lists "profiling to predict behaviour" and "monitoring of individuals in publicly accessible areas" as triggers — the latter is relevant if the in-gym kiosk component is implemented.

A DPIA for this system must document: the nature and purpose of the processing, necessity and proportionality assessment, identification of risks to member rights (including trust collapse risk named by the Researcher), and the technical and organisational measures taken to mitigate those risks. This document should be completed by Slam Fitness's data lead (to be appointed) with LoyaltyOS providing technical documentation. It should be completed before any member data enters the system — not after launch.

---

### EU AI Act

**Article 5 — Prohibited Practices:**

This requires an honest assessment, and it deserves one.

The FORGED loyalty programme uses several mechanics — streak counters, loss-aversion via streak break anxiety, urgency mechanics on time-limited offers, and personalised churn interventions — that are proximate to the prohibited territory of "subliminal techniques" and "exploiting psychological vulnerabilities" under Article 5(1)(a) and (b).

The specific mechanics that require scrutiny:

*Streak mechanics and loss aversion:* The 2-week streak requirement, the flame animation, and the "streak shield" mechanic all leverage loss aversion. The psychological mechanism is deliberate and named in the Researcher's brief — streaks make missing feel costly. The Designer is aware of this and has implemented a streak shield specifically to prevent the mechanic from becoming punishing. The shield is a meaningful safeguard, but it must be communicated clearly and must not itself become a vehicle for engagement pressure (e.g., making the shield feel scarce or threatening to expire).

*Urgency on off-peak offers:* The Cold Day Bonus and off-peak promotion use time-limited offers with countdown timers. The Designer explicitly distinguishes genuine scarcity (the floor really is quiet now) from manufactured urgency (false countdown timers). This distinction is ethically sound — but it requires technical enforcement. The system must not deploy countdown timers on offers where the scarcity is artificial. This should be a hard rule in the `Activity.isBonusActive` logic: the timer appears only when live occupancy data confirms the stated condition.

*The pre-lapse coach trigger:* This is the mechanic most proximate to prohibited territory. It identifies members whose behavioural patterns suggest psychological disengagement and initiates an intervention designed to reverse that decision before it becomes conscious. The Researcher acknowledges this directly: *"The pre-lapse coach trigger is also its highest-trust risk."* Whether this constitutes exploitation of psychological vulnerability depends entirely on implementation. If the AI generates the message and the member receives it without knowing the AI's role, and if the message is designed to exploit the member's emotional connection to the coach relationship — this crosses a line. If the AI informs the coach, the coach makes a genuinely human decision about whether and how to reach out, and the member is informed through the consent screen that their data is used for proactive coaching outreach — this is a legitimate service function.

**Conclusion:** In its designed form, this system does not violate Article 5. The Designer has included meaningful safeguards against each manipulative pattern. However, the distance between the designed system and a prohibited system is measured in implementation decisions, not design intentions. Three specific commitments must be enforced in build: (1) streak shields are clearly communicated and not made artificially scarce; (2) countdown timers appear only when live data confirms genuine scarcity; (3) the AI never generates member-facing messages — only coach-facing briefs.

---

**Risk Classification — EU AI Act:**

This system is classified as **Limited Risk** under the EU AI Act, with elements that must be monitored against High Risk criteria.

The primary AI functions in use are: personalisation (offer generation, challenge surfacing), behavioural pattern monitoring (churn signal detection), and inference (engagement temperature scoring, schedule flexibility scoring). None of these functions fall into the Annex III High Risk categories as currently defined — the system does not make decisions about employment, creditworthiness, access to essential services, or law enforcement.

However, the churn prediction function profiles individuals' behaviour to predict psychological states and influence how human relationships are managed. The European AI Office has signalled that loyalty programme AI systems with significant personalisation depth may face reclassification as AI Act implementation matures. This system should be designed to be High Risk compliant even if it currently sits at Limited Risk — specifically by maintaining human oversight of all consequential interventions, logging all AI-generated outputs for review, and documenting the logic of the churn signal escalation model.

---

**Article 52 — Transparency Obligations:**

Article 52 requires that systems using AI to generate content shown to users must disclose AI involvement. The `/api/personalise` and `/api/offers` endpoints use Claude AI to generate the personalised prompt cards and dynamic offer copy that members see on their dashboards.

The transparency obligations that apply:

1. **At point of interaction:** When a member sees an AI-generated personalised prompt (e.g., a streak nudge, a Cold Day Bonus offer, a personalised training suggestion), the system must indicate that this content is AI-generated. This does not require a large disclaimer — a small "Personalised for you" label with an information icon linking to the AI transparency page satisfies the spirit of Article 52 in a Limited Risk context.

2. **In the privacy notice:** The app's privacy notice must contain the following disclosure, in plain language: *"FORGED uses AI to personalise the offers, challenges, and prompts you see in the app based on your attendance history and engagement patterns."*

3. **For the coach intervention function specifically:** The coach-facing AI briefs and outreach hooks do not require member-facing disclosure at the point of generation — because the member does not see the brief. The member's disclosure is provided through the consent screen: *"We use your attendance history to help your coach support you better."* This is adequate provided the consent is genuine, informed, and specific.

The Communicator's AI transparency section (Section 5c) already provides the substantive content for these disclosures. It needs to be rendered in the app with an Article 52-compliant label mechanism, not just as a static settings page.

---

**Annex III — Profiling with Significant Effects on Individual Rights:**

The churn prediction mechanism warrants specific assessment here. It profiles individual behaviour using AI to compute an engagement temperature score and generate churn flags that determine whether a coach intervention is triggered. The question is whether this profiling "significantly affects" individual rights.

On the current evidence: the churn prediction does not restrict the member's access to the gym, affect their membership status, determine their eligibility for benefits, or produce a decision with legal force. The coach intervention it triggers is a human-to-human outreach — the member is not penalised for being flagged, and they are not aware they have been flagged.

**Assessment:** Annex III High Risk classification does not currently apply to this specific function. However, two conditions must hold for this assessment to remain valid: (1) the AI must never directly contact members based on churn flags — all interventions must be human-mediated; and (2) members must retain the ability to opt out of having their data used for churn monitoring (the "app only" consent preference must exclude this processing). If either condition is violated in build, the risk classification must be revisited.

---

**Compliance Actions Before Launch — numbered list:**

1. **Complete a DPIA.** Appoint a named data lead at Slam Fitness (can be an existing staff member with documented responsibility). LoyaltyOS provides technical processing documentation. DPIA completed and signed before any member data enters the system.

2. **Finalise the consent architecture.** The onboarding consent screen must clearly distinguish between (a) processing for programme operation and (b) processing for AI-driven churn monitoring and proactive coach outreach. The "app only" preference must technically exclude the member from churn flag generation, not just from the coach intervention queue. Verify this in the `CustomerConsent` logic before build is complete.

3. **Document and enforce data retention schedules.** Implement automated deletion or anonymisation for each data category per the retention periods above. Inferred data (engagement temperature, churn flags) must be purged at 90 days. This requires a scheduled background job in the system architecture — it is not a manual process.

4. **Implement Article 52 transparency labels.** AI-generated content visible to members (personalised prompts, dynamic offers) must display an identifiable label. Add an information icon with a one-tap link to the AI transparency page. Update the app privacy notice with the required disclosure sentence.

5. **Complete and test the erasure pathway.** The Profile → Settings → Delete my account flow must execute full hard deletion across all data stores, trigger deletion notifications to booking system integrations, and send written confirmation to the member's email. Test this end-to-end before launch, including the booking system webhook notification. Add `accountStatus` field to the `Customer` data model to support the pause state.

6. **Establish a human review request mechanism.** Add a function in the admin panel and member-facing settings allowing any member to request confirmation of whether any AI-generated flags exist against their account and to request human review of their engagement profile. This satisfies the spirit of Article 22 and the Researcher's trust risk analysis, and it is materially relevant to the brand integrity of a community gym where trust is the product.

---

## 5. OPERATIONAL ROADMAP

### Phase 1 — Weeks 1–2: Controlled Launch Preparation

**These are not generic SaaS steps. They are specific to a boutique Dublin strength studio launching a behavioural data programme.**

- **Coach briefing session (before any member sees the app).** Every Slam Fitness coach must understand two things: (1) what the AI does and does not do — specifically that it generates briefs, not messages; and (2) how to respond to a member who asks whether their coach was prompted by a system. The answer is honest: *"The app flagged that you'd been away — I wanted to check in."* Coaches who are not briefed will either deny the system's role (creating a trust problem) or over-explain it (creating an awkwardness problem). Brief them specifically.
- **Soft launch to 20–30 founding members only.** Select members who represent all three personas — include at least one natural Ciarán, one natural Aoife, one natural David. Do not launch to the full member base until the consent flow, points attribution, and coach intervention queue have been tested with real users in real sessions. At Slam Fitness, a trust failure with 10 members is a community-level event, not a product metric.
- **Complete DPIA and consent architecture verification.** No member data enters the system until this is done.
- **Configure Slam Fitness-specific activity rules.** Verify that Morning Iron time gates (6am–9am), Off-Peak Pioneer windows (10am–4pm weekdays), and session confirmation via booking system webhooks are working correctly. A misfire in the points attribution system in the first week is a retention event in the wrong direction.
- **Populate the admin panel with actual coach assignments.** Every active member should have a named assigned coach before the system goes live. The intervention queue is useless without this mapping.
- **Resolve the truncated Maker data model.** The `Reward.redemptionMethod` field and the remainder of the data model must be completed before any developer writes a line of production code.

---

### Phase 2 — Month 1: Measure, Learn, Threshold

**What to measure:**

- **Points issuance vs. redemption ratio.** Target: redemption rate of 40–60% of issued points in the first month. Below 40% suggests rewards are not compelling or members are not discovering the rewards tab. Above 70% suggests the economy will be depleted within the quarter and rewards need rebalancing.
- **Consent split.** What proportion of members choose "full" vs. "app only"? If more than 40% choose "app only," the consent language or the value proposition of proactive coaching needs re-examination. A high app-only rate is also a signal about member trust that the business owner should hear directly.
- **Coach intervention queue utilisation.** Are coaches marking interventions as actioned? If the queue fills up and coaches aren't using it, the mechanic has failed — not because the AI is wrong, but because the coaches haven't integrated it into their workflow. This is a training problem, not a technology problem.
- **Off-peak attendance uplift.** The Researcher identifies quiet day concentration risk as a structural problem. Measure weekday 10am–4pm attendance in month 1 against the 60-day pre-launch baseline. The target is a 15–20% uplift. Below 10% suggests the off-peak bonus offer is either not reaching flexible members or the incentive is insufficient.
- **7-day and 30-day streak completion rates.** These are the primary habit formation metrics. Target: 60%+ of active members holding a current streak at the 30-day mark.

**Redesign threshold:** If any two of the following conditions are met at the 30-day review, a formal programme review is required before month 2 actions:
- Redemption ratio above 75% or below 25%
- Consent split more than 50% "app only"
- Coach intervention queue actioned rate below 30%
- Off-peak attendance uplift below 5%
- More than three member complaints about feeling surveilled or managed

---

### Phase 3 — Months 2–3: Next Capability

The Researcher identifies two specific opportunities not yet addressed in the current build:

**1. Referred member retention tracking.** The Researcher's market opportunity section highlights that AI should track whether referred members are themselves retained — not just whether the referral was completed. Currently, the `Customer.referrals.convertedReferrals` count tracks conversion to paid membership but does not monitor the referred member's subsequent engagement or churn signals. In months 2–3, the system should begin mapping social network retention — if Aoife refers a friend and that friend churns at 8 weeks, Aoife's own churn risk increases. The system should model this dependency and surface it in the coach intervention queue.

**2. Programme periodisation intelligence.** The Researcher identifies David's primary churn trigger as a perceived drop in programme quality. The current build tracks PB frequency and coach interaction recency but does not model whether the member's programme has been appropriately updated. In months 2–3, a "programme freshness" signal should be developed: if a member has completed the same monthly programme block twice without an updated prescription from their coach, the system should flag this — not as a churn signal, but as a coaching quality prompt. This directly serves David's retention driver without requiring any member-facing change.

---

## 6. TOP 3 RISKS AND MITIGATIONS

### Risk 1: The Coach Becomes the Algorithm

**What the risk is:** The Researcher names the pre-lapse coach trigger as the system's highest-value intervention and its highest-trust risk simultaneously. The Designer reinforces this — *"The AI generates the intelligence. The human delivers the relationship. This is not a technicality — it is the product's integrity and the brand's survival."* The Communicator's AI transparency section makes the same commitment: *"The AI spotted the pattern; your coach wrote the words."*

**Why it matters for Slam Fitness specifically:** Slam Fitness is a community gym in Stoneybatter. Its competitive advantage is not equipment or price — it is the coaching relationship. Members like Ciarán stay because their coach knows their back injury history. Members like Aoife stay because the coach knows her name. If members discover that the personalised coaching messages they received were AI-generated or system-prompted without their knowledge, the trust collapse is not a churn event — it is a community event. In a boutique gym, one member's loss of trust becomes a group conversation within days.

**Mitigation:** Three hard rules must be enforced at the technical level, not the policy level. First, the AI must never generate or send a member-facing message — ever. The `CoachInterventionQueue` outputs a brief; the coach writes the message; the message is sent from the coach's account. Any endpoint that generates member-facing content must be blocked from the intervention queue system architecture. Second, coaches must be trained — before launch — to answer honestly if a member asks whether the check-in was prompted. The honest answer is the only acceptable one. Third, the consent screen disclosure *"we use your attendance history to help your coach support you better"* must be presented as a genuine description of the system, not legal cover. If the system changes to automate message generation, the consent screen must change first.

**Reference:** Researcher §6 (Trust Risk), Designer §4 (AI rule that must never be broken), Communicator §5c (AI transparency).

---

### Risk 2: The Points Economy Becomes Financially Unviable

**What the risk is:** The Maker's admin panel includes a points economy health monitor tracking IP issued vs. IP redeemed, with a flag if the redemption ratio exceeds 0.8. However, no agent has modelled the actual cost of the rewards catalogue against a realistic membership base and engagement rate. The "Slam Month" reward (600 IP = €20 off next month's membership) and the "Coach Session Upgrade" (400 IP = one free 30-minute session) represent real costs to Slam Fitness. If the points economy is calibrated incorrectly — particularly if early members earn points faster than expected through the combination of challenge bonuses, streak bonuses, and referral rewards — the business could face a liability in month 1.

**Why it matters for Slam Fitness specifically:** A boutique gym with a relatively small member base (estimated 100–300 members based on the operating profile) does not have the economic buffer of a large chain. A 20% redemption surge of Coach Session Upgrades in month 2 represents real labour hours from coaches who are already running six classes a day. Unlike a national chain that can absorb a points liability as a marketing cost, Slam Fitness would experience it as a staffing pressure.

**Mitigation:** Before launch, model the full points economy under three scenarios: conservative engagement (30% of members active in the programme), moderate engagement (60%), and high engagement (90%). For each scenario, calculate the expected monthly IP issuance, expected redemption at historical loyalty programme redemption rates (typically 20–30% of earned currency), and the cost to the business in actual service delivery. Cap the high-cost rewards (Coach Session Upgrade, Slam Month) with inventory limits per month in the admin panel — a feature the Maker has designed but that requires Slam Fitness to set explicit monthly caps before launch. Set the initial caps conservatively and adjust upward based on month 1 data.

**Reference:** Maker §1.6 (AdminDashboard — Points Economy health monitor, Rewards Management with inventory cap controls), Designer §2 (Rewards catalogue with real service costs).

---

### Risk 3: Social Withdrawal Signal