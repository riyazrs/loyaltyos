import sys
import argparse
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
    parser = argparse.ArgumentParser(description="LoyaltyOS Pipeline")
    parser.add_argument("business_key", nargs="?", default=None,
                        help="Demo business key: gaming_pub | dental_clinic")
    parser.add_argument("--name", help="Business name")
    parser.add_argument("--type", dest="btype", help="Business type")
    parser.add_argument("--description", help="Business description")
    parser.add_argument("--slug", help="URL slug for the app", default="")
    parser.add_argument("--email", help="Contact email", default="")
    args = parser.parse_args()

    # Custom business via --name / --type / --description flags
    if args.name and args.btype and args.description:
        business = {
            "business_name": args.name,
            "business_type": args.btype,
            "business_description": args.description,
        }
    elif args.business_key:
        business = DEMO_BUSINESSES.get(args.business_key, DEMO_BUSINESSES["gaming_pub"])
    else:
        business = DEMO_BUSINESSES["gaming_pub"]

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

    return final_state


if __name__ == "__main__":
    main()
