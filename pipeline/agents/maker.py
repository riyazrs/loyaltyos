import os
import anthropic
from dotenv import load_dotenv
from state import PipelineState

load_dotenv()

client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

MAKER_SYSTEM_PROMPT = """You are the Maker agent for LoyaltyOS, a white-label AI loyalty platform.

You receive a design specification from the Designer agent. Your job is to produce a complete technical build plan for the Next.js loyalty platform, including component specifications, API design, data models, and the Claude AI integration architecture.

Your prototype plan must cover:

1. COMPONENT INVENTORY
   For each UI component needed, specify:
   - Component name and file path
   - Props interface (TypeScript)
   - Core behaviour and state
   - Which design spec section it implements

2. DATA MODELS
   Define TypeScript interfaces for:
   - Customer (id, name, tier, points, streaks, activityHistory)
   - Business (id, name, type, config, activities, rewards)
   - Activity (id, name, pointValue, category, completedAt)
   - Reward (id, name, pointCost, category, redeemedAt)
   - Offer (id, title, description, validUntil, targetSegment)

3. BUSINESS CONFIG SYSTEM
   Define the white-label config structure that makes the platform work for any business:
   - How does switching from PixelPub to DentalPlus change the UI?
   - What fields does each business config require?
   - Show the full config object for both demo businesses

4. CLAUDE AI INTEGRATION
   Design the two API routes that power personalisation:

   a) POST /api/personalise
      - Input: customer profile + business config
      - Output: 3 personalised activity suggestions with reasons
      - System prompt to use for this endpoint

   b) POST /api/offers
      - Input: business config + current date/time + low-turnover flag
      - Output: 2 dynamic offers for this moment
      - System prompt to use for this endpoint

5. MINI-GAME SPEC (for gaming pub vertical)
   - Describe the simple browser-based mini-game
   - How does it connect to the points system?
   - What tech implements it (canvas, CSS animation, etc.)?

6. DEPLOYMENT CHECKLIST
   - Environment variables needed
   - Vercel configuration
   - Build commands

Output format: structured markdown with TypeScript code blocks where relevant.
This document will be used as the direct build specification by the development team."""


def maker_node(state: PipelineState) -> PipelineState:
    print("[MAKER] Maker agent running...")

    design_spec = state.get("design_spec", "")
    if not design_spec:
        error_msg = "Maker error: no design_spec in state"
        print(f"[ERROR] {error_msg}")
        return {**state, "errors": state.get("errors", []) + [error_msg], "current_agent": "communicator"}

    user_message = f"""Here is the design specification from the Designer agent:

{design_spec}

Produce your technical prototype plan now."""

    try:
        response = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=4096,
            system=MAKER_SYSTEM_PROMPT,
            messages=[{"role": "user", "content": user_message}]
        )

        prototype_plan = response.content[0].text

        os.makedirs("outputs", exist_ok=True)
        with open("outputs/03_prototype_plan.md", "w", encoding="utf-8") as f:
            f.write(prototype_plan)

        print("[DONE] Maker complete. Plan saved to outputs/03_prototype_plan.md")
        return {**state, "prototype_plan": prototype_plan, "current_agent": "communicator"}

    except Exception as e:
        error_msg = f"Maker error: {str(e)}"
        print(f"[ERROR] {error_msg}")
        return {**state, "errors": state.get("errors", []) + [error_msg], "current_agent": "communicator"}
