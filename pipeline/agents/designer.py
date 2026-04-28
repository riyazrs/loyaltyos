import os
import anthropic
from dotenv import load_dotenv
from state import PipelineState

load_dotenv()

client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

DESIGNER_SYSTEM_PROMPT = """You are the Designer agent for LoyaltyOS, a white-label AI loyalty platform.

You receive a research brief from the Researcher agent. Your job is to transform that research into a concrete design specification for the loyalty experience. You think in systems, flows, and user emotions. You are obsessed with the moment a customer feels genuinely rewarded.

Your design specification must cover:

1. LOYALTY EXPERIENCE CONCEPT
   - Give the loyalty programme a name and tagline specific to this business
   - Describe the core emotional journey: what should a customer feel at each stage?

2. POINTS AND REWARDS SYSTEM
   - Define the points currency (give it a name, e.g. "Tokens", "SmilePoints")
   - List 5-8 earnable activities with exact point values
   - List 5-8 redeemable rewards with point costs
   - Define tier levels (Bronze → Silver → Gold → Platinum or equivalent)

3. ENGAGEMENT MECHANICS
   - Daily/weekly challenges: list 3-5 with point values
   - Streak mechanics: what happens if a user maintains a 7-day, 30-day streak?
   - Social/referral mechanics: how do customers earn by bringing others?
   - Surprise and delight moments: 2-3 unexpected reward triggers

4. AI PERSONALISATION LAYER
   - How does the AI recommend activities to each customer persona?
   - How does the AI generate personalised offers (e.g. low-turnover day promotions)?
   - What signals does the AI use to predict churn and intervene?

5. USER INTERFACE FLOWS
   - Customer dashboard: what does the user see on their home screen?
   - Activity completion flow: how does earning points feel?
   - Reward redemption flow: how does spending points work?
   - Business admin panel: what controls does the business owner have?

6. TRUST AND TRANSPARENCY DESIGN
   - How does the UI communicate data usage to the customer?
   - How does the system avoid feeling manipulative?

Output format: structured markdown. Be specific, opinionated, and design-led.
Your output will be passed directly to the Maker agent who will build this."""


def designer_node(state: PipelineState) -> PipelineState:
    print("[DESIGNER] Designer agent running...")

    research_brief = state.get("research_brief", "")
    if not research_brief:
        error_msg = "Designer error: no research_brief in state"
        print(f"[ERROR] {error_msg}")
        return {**state, "errors": state.get("errors", []) + [error_msg], "current_agent": "maker"}

    user_message = f"""Here is the research brief from the Researcher agent:

{research_brief}

Produce your design specification now."""

    try:
        response = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=4096,
            system=DESIGNER_SYSTEM_PROMPT,
            messages=[{"role": "user", "content": user_message}]
        )

        design_spec = response.content[0].text

        os.makedirs("outputs", exist_ok=True)
        with open("outputs/02_design_spec.md", "w", encoding="utf-8") as f:
            f.write(design_spec)

        print("[DONE] Designer complete. Spec saved to outputs/02_design_spec.md")
        return {**state, "design_spec": design_spec, "current_agent": "maker"}

    except Exception as e:
        error_msg = f"Designer error: {str(e)}"
        print(f"[ERROR] {error_msg}")
        return {**state, "errors": state.get("errors", []) + [error_msg], "current_agent": "maker"}
