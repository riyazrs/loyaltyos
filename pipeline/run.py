import sys
from pipeline import build_pipeline

DEMO_BUSINESSES = {
    "gaming_pub": {
        "business_name": "PixelPub",
        "business_type": "gaming_pub",
        "business_description": "A pub with arcade machines, retro gaming consoles, and regular gaming tournaments. Revenue dips Tuesday-Thursday. Core customers are 22-35 year old gamers and casual visitors."
    },
    "dental_clinic": {
        "business_name": "DentalPlus",
        "business_type": "dental_clinic",
        "business_description": "A modern dental clinic focused on preventive care. Struggles with patient no-shows and low adherence to daily oral hygiene habits between appointments."
    }
}


def main():
    business_key = sys.argv[1] if len(sys.argv) > 1 else "gaming_pub"
    business = DEMO_BUSINESSES.get(business_key, DEMO_BUSINESSES["gaming_pub"])

    pipeline = build_pipeline()

    initial_state = {
        **business,
        "research_brief": None,
        "design_spec": None,
        "prototype_plan": None,
        "marketing_copy": None,
        "executive_summary": None,
        "errors": [],
        "current_agent": "researcher"
    }

    print(f"\n[START] LoyaltyOS Pipeline starting for: {business['business_name']}\n")
    final_state = pipeline.invoke(initial_state)

    if final_state.get("errors"):
        print(f"\n[WARNING] Pipeline completed with errors:")
        for err in final_state["errors"]:
            print(f"   - {err}")
    else:
        print(f"\n[COMPLETE] Pipeline complete. All outputs saved to /outputs\n")


if __name__ == "__main__":
    main()
