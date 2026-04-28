# LoyaltyOS — CA Submission Notes
## NCI MSc AI for Business | CEAI Final Project

---

## 1. YOUR ORGANISATION (~200 words)

**Organisation:** LoyaltyOS — a white-label AI loyalty platform

**Challenge:** Customer disengagement and churn across hospitality and service businesses. Businesses like gaming pubs and dental clinics struggle to maintain consistent customer engagement between visits. Revenue dips on off-peak days, patients miss appointments, and daily habits that drive long-term customer value are never reinforced. Existing loyalty schemes are generic, transactional, and not personalised to the customer.

**What LoyaltyOS does:** Any business can plug in, configure their engagement activities, and the platform auto-generates personalised challenges, reward mechanics, and promotional offers for their customers. The AI personalises the experience per user based on their behaviour history, tier, and streak data.

**Why agentic:** A single prompt asking "build a loyalty programme for a dental clinic" would produce a generic, shallow response. The five-agent pipeline replicates how a real consultancy works: a researcher produces a deep market brief, a designer transforms it into a coherent UX system, a maker translates it into a technical build spec, a communicator writes the actual customer-facing copy, and a manager synthesises all of it into an actionable executive summary. Each agent has a distinct personality, expertise, and output format. The handoff between agents forces specificity — each agent must be concrete enough for the next agent to act on.

---

## 2. AGENT DESIGNS (~500 words)

### Agent 1: Researcher
**Archetype:** Sharp market analyst with a focus on behavioural psychology and customer data.

**What it produces:** A structured research brief covering: customer engagement problems and churn signals, market opportunity and competitor analysis, 2-3 customer personas with loyalty triggers, 5-8 rewardable activities, data and personalisation opportunities, and GDPR/trust risks.

**Personality:** Data-driven, specific, critical. Refuses to give generic loyalty advice. Every insight must be anchored to the specific business type.

**System prompt excerpt:** "You are a sharp, data-driven analyst with a nose for customer engagement problems... Be specific to the business provided. Do not give generic loyalty programme advice."

---

### Agent 2: Designer
**Archetype:** UX architect obsessed with the moment a customer feels genuinely rewarded.

**What it produces:** A complete design specification covering: the loyalty programme name and tagline, points currency and reward tiers, engagement mechanics (streaks, challenges, referrals, surprise-and-delight), the AI personalisation layer, user interface flows, and trust/transparency design.

**Personality:** Opinionated, design-led, emotionally intelligent. Thinks in systems and user emotions.

**System prompt excerpt:** "You think in systems, flows, and user emotions. You are obsessed with the moment a customer feels genuinely rewarded."

---

### Agent 3: Maker
**Archetype:** Technical architect who translates design into a concrete build specification.

**What it produces:** A prototype plan covering: TypeScript component inventory with props interfaces, data models, white-label business config system, Claude AI API route designs (with system prompts), mini-game specification for the gaming vertical, and a deployment checklist.

**Personality:** Rigorous, TypeScript-first, direct. Produces output that an engineer can act on without follow-up questions.

**System prompt excerpt:** "This document will be used as the direct build specification by the development team."

---

### Agent 4: Communicator
**Archetype:** Brand strategist and human-sounding copywriter who believes loyalty is earned, not manufactured.

**What it produces:** All customer-facing and B2B communication: platform positioning and tagline, a 3-message onboarding sequence (welcome, first reward, streak milestone), three offer templates (low-turnover day, tier upgrade, win-back), a B2B sales pitch, and GDPR-compliant privacy notice copy.

**Personality:** Warm, confident, plain-English. Actively avoids corporate speak and buzzwords.

**System prompt excerpt:** "You are a sharp, human-sounding copywriter who believes loyalty is earned, not manufactured."

---

### Agent 5: Manager
**Archetype:** Executive decision-maker who synthesises all four previous outputs and holds the pipeline accountable.

**What it produces:** An executive summary, scored quality review of each agent (1-10 with honest feedback), strategic alignment check identifying gaps between agents, GDPR and EU AI Act compliance summary, a three-phase operational roadmap, and top 3 risks with mitigations.

**Personality:** Direct, opinionated, critical. Does not soften feedback. Acts as the internal reviewer who catches what the other agents missed.

**System prompt excerpt:** "Be direct, concise, and opinionated. This document is the final deliverable of the LoyaltyOS agentic organisation."

---

## 3. PIPELINE IN ACTION (~300 words + screenshots)

### Handoff Flow

```
[Input: business_name, business_type, business_description]
        ↓
[Researcher] → research_brief (market analysis, personas, mechanics)
        ↓
[Designer]  → design_spec (loyalty programme architecture, UX flows)
        ↓
[Maker]     → prototype_plan (TypeScript components, API routes, data models)
        ↓
[Communicator] → marketing_copy (onboarding, offers, sales pitch, privacy)
        ↓
[Manager]   → executive_summary (synthesis, quality review, compliance, roadmap)
        ↓
[5 output files saved to pipeline/outputs/]
```

Each agent receives the full output of the previous agent as its user message. The `PipelineState` TypedDict carries all outputs forward so the Manager agent has access to the complete pipeline history.

### Research Brief Extract (DentalPlus run — first 200 words)

> LoyaltyOS Research Brief — Business: DentalPlus | Type: Dental Clinic | Focus: Preventive Care
>
> Dental clinics face a structurally unique disengagement problem: the service is inherently unpleasant for many patients, infrequent by design, and only urgently valued when pain occurs. DentalPlus compounds this with a preventive positioning — meaning the very patients they most want to retain are those who feel least urgency to return.
>
> Core disengagement drivers: pain-avoidance psychology, invisible progress problem (good oral hygiene produces no dramatic visible reward), appointment friction at every booking step, habit decay between visits, and trust erosion from upselling perception.
>
> Five churn signals identified: no-show without rebooking within 72 hours; appointment gap exceeding 9 months; declining post-appointment hygiene product recommendations; no response to 2+ consecutive reminders; repeated short-notice cancellations signalling anxiety-driven avoidance.

### Executive Summary Extract (DentalPlus run — first 200 words)

> LoyaltyOS is a white-label AI loyalty platform that converts passive patient relationships into active, data-driven engagement programmes. For dental and healthcare businesses, it replaces the 180-day silence between appointments with daily habit loops, personalised rewards, and behaviour-change mechanics.
>
> DentalPlus's problem is structural: its preventive care model serves patients who feel no urgency to return. The result is appointment no-shows, habit decay, and silent churn — particularly among avoidant and anxious patient profiles who represent both the highest risk and highest lifetime value if retained.
>
> The pipeline has produced a complete go-to-market package: a research-validated engagement model built on three patient personas; a fully specified loyalty programme (BrightPath) with a points economy, tier structure, streak mechanics, and AI personalisation layer; a React component build specification ready for engineering handoff; and a copywriting suite covering onboarding, offers, re-engagement, B2B sales, and GDPR-compliant trust messaging.

*Full outputs available in `/pipeline/outputs/`*

**[SCREENSHOT PLACEHOLDER — add terminal screenshots of pipeline run showing all 5 agent completion messages]**

**Live app link:** https://loyaltyos.vercel.app *(update once deployed)*

---

## 4. REGULATORY AND ETHICAL CONSIDERATIONS (~200 words)

### GDPR

LoyaltyOS collects behavioural data (activity completion, streak history, points balance) and where integrated, appointment data. For the DentalPlus vertical this constitutes **health-adjacent data** under GDPR Article 9, requiring explicit consent as the lawful basis. Key obligations:

- **Data minimisation:** Only collect what is needed for loyalty mechanics — no clinical notes, no treatment data
- **Right to erasure:** Customers must be able to delete their loyalty profile and all associated behavioural data on request
- **Data retention:** Points history and activity logs should not be retained beyond the active customer relationship without renewed consent
- **DPA registration:** The business operates as a data controller; a Data Processing Agreement is required if a third-party loyalty provider processes data on their behalf

### EU AI Act

The AI personalisation system (activity suggestions, offer generation) classifies as **limited risk** under the EU AI Act. The system interacts with users but does not make high-stakes decisions affecting health, employment, or rights. Key obligations:

- **Transparency:** Users must be informed when AI is generating their activity suggestions or offers
- **Human oversight:** Business admins retain control over which offers are published
- **No manipulation:** The system must not use dark patterns or exploit psychological vulnerabilities to drive engagement

### Trust Design Principles Applied

- Plain-English privacy notices (no legalese)
- Visible data deletion option in the customer profile
- AI suggestions labelled as AI-generated in the UI
- Admin panel keeps humans in the loop for offer activation

---

## 5. REFLECTION (~300 words)

### What the LangGraph Pipeline Did Well

The sequential handoff model produced a coherent output that would be difficult to replicate with a single large prompt. Each agent brought genuine focus: the Researcher stayed analytical and avoided prescribing solutions; the Designer produced a named, emotionally coherent loyalty system (BrightPath) rather than a generic points scheme; the Communicator wrote copy that felt distinctly human and non-corporate. The Manager's quality review was particularly valuable — scoring each agent and identifying specific gaps forced an honest audit of what the pipeline actually produced versus what was asked for.

LangGraph's `StateGraph` proved well-suited to this sequential pattern. State persistence between nodes worked cleanly, and the compiled graph made the execution order explicit and auditable.

### Where Handoffs Were Lossy

The most significant information loss occurred at the Researcher → Designer handoff. The Researcher produced a nuanced persona framework with specific churn signals and psychological drivers, but the Designer partially flattened this into a more generic tier/points architecture. The "anxiety-driven avoidance" persona insight, which the Researcher identified as requiring a fundamentally different intervention approach, was only partially translated into the design mechanics.

Context window limitations also truncated some outputs. The Maker's `FamilyDashboard` component and the Manager's churn intervention section both cut off before completion, which the Manager itself noted in its quality review.

### What Surprised Me About Multi-Agent Collaboration

The Manager agent's ability to identify gaps between the other agents was unexpectedly sophisticated. It correctly identified that the Designer referenced "anxiety-pattern flagging" without specifying the mechanism, and flagged the children's data GDPR gap that the Maker had not addressed. Emergent critique — agents evaluating each other's work — was more valuable than any individual agent's output.

### What I'd Improve With More Time

- **Agent memory:** Each agent currently receives only the immediate predecessor's output (except the Manager). Adding a RAG layer with persistent business knowledge would allow agents to reference prior runs and improve over time.
- **Human-in-the-loop review:** A checkpoint after the Designer's output would allow a human to validate the loyalty programme concept before the Maker builds a spec for it.
- **Structured output enforcement:** Using Claude's tool_use mode with JSON schemas would prevent truncated outputs and make agent-to-agent data passing more reliable than raw markdown parsing.
- **Vertical-specific prompt tuning:** The current prompts are general enough to work for any business type, but a dental-specific Researcher prompt would produce sharper, more clinically-informed outputs.

---

*Format: clean markdown — use as basis for final Word document submission*
*Full pipeline outputs available in `/pipeline/outputs/`*
*Screenshots to be added before final submission*
