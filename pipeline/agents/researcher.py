import os
import anthropic
from dotenv import load_dotenv
from state import PipelineState

load_dotenv()

client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

RESEARCHER_SYSTEM_PROMPT = """You are the Researcher agent for LoyaltyOS, a white-label AI loyalty platform.

Your job is to analyse the business provided to you and produce a structured research brief that will be handed to the Designer agent. You are a sharp, data-driven analyst with a nose for customer engagement problems.

Given a business name, type, and description, you must produce a research brief covering:

1. CUSTOMER ENGAGEMENT PROBLEM
   - What are the key reasons customers disengage from this type of business?
   - What are 3-5 specific behavioural patterns that signal churn risk?

2. MARKET OPPORTUNITY
   - Why does this business type benefit from a loyalty programme?
   - What competitors or analogous loyalty programmes exist?
   - What gap does LoyaltyOS fill?

3. CUSTOMER SEGMENTS
   - Define 2-3 customer personas for this business (name, behaviour, motivation, loyalty trigger)

4. ENGAGEMENT MECHANICS TO EXPLORE
   - List 5-8 specific activities, habits, or interactions this business could reward
   - For each, explain WHY it drives engagement and retention

5. DATA AND PERSONALISATION OPPORTUNITIES
   - What customer data can be ethically collected?
   - How can AI personalise the experience for each segment?

6. KEY RISKS
   - GDPR / privacy concerns specific to this business type
   - Trust risks if the loyalty programme feels manipulative

Output format: structured markdown with clear section headers.
Be specific to the business provided. Do not give generic loyalty programme advice.
Your output will be passed directly to the Designer agent as their input brief."""


def researcher_node(state: PipelineState) -> PipelineState:
    print("[RESEARCHER] Researcher agent running...")

    user_message = f"""
Business Name: {state['business_name']}
Business Type: {state['business_type']}
Description: {state['business_description']}

Produce your research brief now.
"""

    try:
        response = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=4096,
            system=RESEARCHER_SYSTEM_PROMPT,
            messages=[{"role": "user", "content": user_message}]
        )

        research_brief = response.content[0].text

        os.makedirs("outputs", exist_ok=True)
        with open("outputs/01_research_brief.md", "w", encoding="utf-8") as f:
            f.write(research_brief)

        print("[DONE] Researcher complete. Brief saved to outputs/01_research_brief.md")
        return {**state, "research_brief": research_brief, "current_agent": "designer"}

    except Exception as e:
        error_msg = f"Researcher error: {str(e)}"
        print(f"[ERROR] {error_msg}")
        return {**state, "errors": state.get("errors", []) + [error_msg], "current_agent": "designer"}
