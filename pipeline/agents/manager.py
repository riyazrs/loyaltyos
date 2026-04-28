import os
import anthropic
from dotenv import load_dotenv
from state import PipelineState

load_dotenv()

client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

MANAGER_SYSTEM_PROMPT = """You are the Manager agent for LoyaltyOS, a white-label AI loyalty platform.

You are the final agent in the pipeline. You receive all four previous outputs: the research brief, design specification, prototype plan, and marketing copy. Your job is to synthesise everything into an executive summary and operational plan that a real business could act on.

Produce the following:

1. EXECUTIVE SUMMARY (200 words max)
   - What is LoyaltyOS?
   - What problem does it solve for this specific business?
   - What has the team (pipeline) produced?
   - What is the recommended next step?

2. PIPELINE QUALITY REVIEW
   Score each agent's output (1-10) and give one sentence of honest feedback:
   - Researcher: [score] — [feedback]
   - Designer: [score] — [feedback]
   - Maker: [score] — [feedback]
   - Communicator: [score] — [feedback]

3. STRATEGIC ALIGNMENT CHECK
   - Does the design match the research findings? Identify any gaps.
   - Does the prototype plan implement the design spec fully?
   - Does the marketing copy speak to the right personas?

4. REGULATORY AND COMPLIANCE SUMMARY
   - GDPR obligations for this business type (data collected, lawful basis, retention)
   - EU AI Act classification of the personalisation system (risk level + obligations)
   - Recommended compliance actions before launch

5. OPERATIONAL ROADMAP
   Phase 1 (Week 1-2): MVP launch checklist
   Phase 2 (Month 1): Growth and iteration priorities
   Phase 3 (Month 2-3): Scale and new vertical expansion

6. RISKS AND MITIGATIONS
   List the top 3 risks to this loyalty programme's success and how to address each.

Output format: structured markdown. Be direct, concise, and opinionated.
This document is the final deliverable of the LoyaltyOS agentic organisation."""


def manager_node(state: PipelineState) -> PipelineState:
    print("[MANAGER] Manager agent running...")

    research_brief = state.get("research_brief", "")
    design_spec = state.get("design_spec", "")
    prototype_plan = state.get("prototype_plan", "")
    marketing_copy = state.get("marketing_copy", "")

    user_message = f"""Here are all four pipeline outputs for your synthesis:

## RESEARCH BRIEF (Researcher Agent)
{research_brief}

## DESIGN SPECIFICATION (Designer Agent)
{design_spec}

## PROTOTYPE PLAN (Maker Agent)
{prototype_plan}

## MARKETING COPY (Communicator Agent)
{marketing_copy}

Produce your executive summary and operational plan now."""

    try:
        response = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=4096,
            system=MANAGER_SYSTEM_PROMPT,
            messages=[{"role": "user", "content": user_message}]
        )

        executive_summary = response.content[0].text

        os.makedirs("outputs", exist_ok=True)
        with open("outputs/05_executive_summary.md", "w", encoding="utf-8") as f:
            f.write(executive_summary)

        print("[DONE] Manager complete. Summary saved to outputs/05_executive_summary.md")
        return {**state, "executive_summary": executive_summary, "current_agent": "done"}

    except Exception as e:
        error_msg = f"Manager error: {str(e)}"
        print(f"[ERROR] {error_msg}")
        return {**state, "errors": state.get("errors", []) + [error_msg], "current_agent": "done"}
