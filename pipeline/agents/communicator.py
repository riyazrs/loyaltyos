import os
import anthropic
from dotenv import load_dotenv
from state import PipelineState

load_dotenv()

client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

COMMUNICATOR_SYSTEM_PROMPT = """You are the Communicator agent for LoyaltyOS, a white-label AI loyalty platform.

You receive the prototype plan from the Maker agent. Your job is to create all the marketing and customer-facing communication needed to launch this loyalty programme. You are a sharp, human-sounding copywriter who believes loyalty is earned, not manufactured.

Produce the following:

1. PLATFORM POSITIONING
   - One-line value proposition for LoyaltyOS (selling to businesses)
   - Tagline for the specific business's loyalty programme
   - 3 key messages for each customer persona identified by the Researcher

2. ONBOARDING SEQUENCE
   Write 3 customer-facing messages:
   a) Welcome message (shown on first app open)
   b) First reward earned notification
   c) 7-day streak congratulation message

   Each must feel human, not robotic. No corporate speak.

3. OFFER COPY TEMPLATES
   Write 3 ready-to-use promotional offers for the business:
   - Low-turnover day promotion (e.g. Tuesday night deal)
   - Tier upgrade celebration offer
   - Win-back offer for a customer who hasn't engaged in 14 days

   Each offer needs: headline, body copy, CTA, urgency hook.

4. BUSINESS SALES PITCH
   Write the pitch LoyaltyOS would use to sell to this type of business:
   - The problem (1 paragraph)
   - The solution (1 paragraph)
   - Social proof placeholder (1 paragraph)
   - Call to action

5. TRUST AND ETHICS MESSAGING
   Write the privacy notice copy that appears in the app:
   - What data is collected and why (plain English, not legalese)
   - How customers can delete their data
   - How AI personalisation works (transparent, not creepy)

Output format: structured markdown with clearly labelled copy blocks.
Write in a warm, confident, human voice. Avoid buzzwords."""


def communicator_node(state: PipelineState) -> PipelineState:
    print("[COMMUNICATOR] Communicator agent running...")

    prototype_plan = state.get("prototype_plan", "")
    if not prototype_plan:
        error_msg = "Communicator error: no prototype_plan in state"
        print(f"[ERROR] {error_msg}")
        return {**state, "errors": state.get("errors", []) + [error_msg], "current_agent": "manager"}

    research_brief = state.get("research_brief", "")

    user_message = f"""Here is the research brief from the Researcher agent (contains the 3 customer personas you must target):

{research_brief}

Here is the prototype plan from the Maker agent (the system you are writing copy for):

{prototype_plan}

Produce your marketing copy and communications now. Every piece of copy must speak directly to one of the three personas the Researcher defined. Name the persona each piece targets."""

    try:
        response = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=8192,
            system=COMMUNICATOR_SYSTEM_PROMPT,
            messages=[{"role": "user", "content": user_message}]
        )

        marketing_copy = response.content[0].text

        os.makedirs("outputs", exist_ok=True)
        with open("outputs/04_marketing_copy.md", "w", encoding="utf-8") as f:
            f.write(marketing_copy)

        print("[DONE] Communicator complete. Copy saved to outputs/04_marketing_copy.md")
        return {**state, "marketing_copy": marketing_copy, "current_agent": "manager"}

    except Exception as e:
        error_msg = f"Communicator error: {str(e)}"
        print(f"[ERROR] {error_msg}")
        return {**state, "errors": state.get("errors", []) + [error_msg], "current_agent": "manager"}
