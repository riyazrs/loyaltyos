"""
Reads the pipeline outputs and asks Claude to generate a BusinessConfig JSON
object that can be dropped straight into the Next.js app.
Run after run.py: python generate_config.py --slug <slug>
"""
import os
import sys
import json
import argparse
import anthropic
from dotenv import load_dotenv

load_dotenv()
client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

SYSTEM_PROMPT = """You are a configuration generator for LoyaltyOS, a white-label AI loyalty platform.

You will receive a loyalty programme design specification. Your job is to produce a single valid JSON object
matching the BusinessConfig TypeScript interface exactly. No prose, no markdown, no code fences — pure JSON only.

The interface is:
{
  "id": string,               // URL slug, lowercase, no spaces
  "name": string,             // Business display name
  "type": string,             // Business type key
  "tagline": string,          // Short punchy tagline
  "currency": {
    "name": string,           // Points currency name (e.g. "Tokens", "SmilePoints", "Beans")
    "symbol": string          // Short symbol (2-4 chars, no emoji)
  },
  "primaryColor": string,     // Hex colour — main brand colour
  "accentColor": string,      // Hex colour — highlight/reward colour
  "activities": [             // 5-7 earnable activities
    { "id": string, "name": string, "points": number }
  ],
  "rewards": [                // 4-6 redeemable rewards
    { "id": string, "name": string, "cost": number }
  ],
  "tiers": [                  // 4 tiers, ascending minPoints
    { "name": string, "minPoints": number, "color": string }
  ],
  "aiPersonalisationEnabled": true
}

Rules:
- id must be the slug passed to you (lowercase, alphanumeric only)
- Choose colours that feel right for the business type
- Activity point values: low-effort = 5-15, medium = 20-50, high = 75-150
- Reward costs: should feel achievable — first reward accessible within 2-3 sessions
- Tier names must be thematic to the business (not just Bronze/Silver/Gold)
- Output ONLY the JSON object, nothing else."""


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--slug", required=True, help="URL slug for the business")
    parser.add_argument("--name", default="", help="Business name")
    parser.add_argument("--type", dest="btype", default="", help="Business type")
    args = parser.parse_args()

    # Read design spec
    design_spec_path = "outputs/02_design_spec.md"
    if not os.path.exists(design_spec_path):
        print(f"[ERROR] {design_spec_path} not found. Run run.py first.")
        sys.exit(1)

    with open(design_spec_path, "r", encoding="utf-8") as f:
        design_spec = f.read()

    print(f"[CONFIG] Generating BusinessConfig for slug: {args.slug}")

    user_message = f"""Business name: {args.name}
Business type: {args.btype}
URL slug: {args.slug}

Design specification:
{design_spec}

Generate the BusinessConfig JSON now."""

    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=2000,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": user_message}]
    )

    raw = response.content[0].text.strip()

    # Strip any accidental code fences
    if raw.startswith("```"):
        raw = raw.split("```")[1]
        if raw.startswith("json"):
            raw = raw[4:]
    raw = raw.strip()

    # Validate JSON
    try:
        config = json.loads(raw)
        config["id"] = args.slug  # Force correct id
        config["aiPersonalisationEnabled"] = True
    except json.JSONDecodeError as e:
        print(f"[ERROR] Claude returned invalid JSON: {e}")
        print(raw)
        sys.exit(1)

    os.makedirs("outputs", exist_ok=True)
    out_path = "outputs/business_config.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(config, f, indent=2)

    print(f"[DONE] BusinessConfig saved to {out_path}")
    print(json.dumps(config, indent=2))


if __name__ == "__main__":
    main()
