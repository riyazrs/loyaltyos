"""
collect_outputs.py — LoyaltyOS Pipeline Output Collector

Reads all agent output files from /outputs and bundles them into a single
formatted report: pipeline_report.md

Usage:
    python collect_outputs.py
    python collect_outputs.py --slug pixelpub   (adds slug to header)
    python collect_outputs.py --preview         (prints summary to console only)
"""

import os
import argparse
from datetime import datetime

AGENTS = [
    ("01_research_brief.md",   "Researcher",   "Identify the opportunity — deep analysis and pattern recognition"),
    ("02_design_spec.md",      "Designer",     "Create the solution — creative problem-solving and design thinking"),
    ("03_prototype_plan.md",   "Maker",        "Build the product — technical craftsmanship and rapid prototyping"),
    ("04_marketing_copy.md",   "Communicator", "Get the customers — persuasion and storytelling"),
    ("05_executive_summary.md","Manager",      "Run the business — leadership and orchestration"),
]

SEPARATOR = "\n\n---\n\n"


def read_file(path):
    if not os.path.exists(path):
        return None
    with open(path, "r", encoding="utf-8") as f:
        return f.read().strip()


def word_count(text):
    return len(text.split()) if text else 0


def collect(outputs_dir="outputs", slug="", preview=False):
    print("\n[COLLECT] LoyaltyOS Pipeline Output Collector")
    print("=" * 60)

    sections = []
    found = 0
    missing = []

    for filename, agent_name, agent_role in AGENTS:
        path = os.path.join(outputs_dir, filename)
        content = read_file(path)

        if content:
            found += 1
            wc = word_count(content)
            status = f"✓  {agent_name:15s}  {wc:>5} words   {filename}"
            print(status)
            sections.append((agent_name, agent_role, filename, content, wc))
        else:
            missing.append(agent_name)
            print(f"✗  {agent_name:15s}  NOT FOUND   {filename}")

    print("=" * 60)

    # Check for customer report (bonus output from Manager)
    customer_report_path = os.path.join(outputs_dir, "06_customer_report.md")
    customer_report = read_file(customer_report_path)
    if customer_report:
        print(f"✓  Customer Governance Report found ({word_count(customer_report)} words)")

    total_words = sum(s[4] for s in sections)
    print(f"\n   {found}/5 agents completed — {total_words:,} total words across pipeline")

    if missing:
        print(f"   Missing: {', '.join(missing)}")

    if preview or not sections:
        print("\n[INFO] Preview mode — no file written.\n")
        return

    # Build the combined report
    run_date = datetime.now().strftime("%d %B %Y, %H:%M")
    slug_line = f"**Business slug:** `{slug}`  \n" if slug else ""

    header = f"""# LoyaltyOS — Full Pipeline Report

{slug_line}**Generated:** {run_date}
**Agents completed:** {found}/5
**Total words:** {total_words:,}

This document contains the raw output of every agent in the LoyaltyOS pipeline,
in handoff order. Each agent received the previous agent's output as its input.

| # | Agent | Role | Words |
|---|-------|------|-------|
"""

    for i, (agent_name, agent_role, filename, content, wc) in enumerate(sections, 1):
        header += f"| {i} | **{agent_name}** | {agent_role.split('—')[0].strip()} | {wc:,} |\n"

    header += "\n---\n"

    body_parts = [header]

    for i, (agent_name, agent_role, filename, content, wc) in enumerate(sections, 1):
        section = f"""
## Agent {i}: {agent_name}

**Role:** {agent_role}
**Output file:** `{filename}`
**Word count:** {wc:,}

{content}
"""
        body_parts.append(section)

    if customer_report:
        body_parts.append(f"""
---

## Customer Governance Report

*Produced by the Manager agent as a standalone customer-facing document.*

{customer_report}
""")

    full_report = SEPARATOR.join(body_parts)

    out_path = os.path.join(outputs_dir, "pipeline_report.md")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(full_report)

    print(f"\n[DONE] Full pipeline report saved to: {out_path}")
    print(f"       Open this file for the complete handoff evidence.\n")


def main():
    parser = argparse.ArgumentParser(description="Collect LoyaltyOS pipeline outputs into one report")
    parser.add_argument("--slug", default="", help="Business slug (added to report header)")
    parser.add_argument("--preview", action="store_true", help="Print summary only, don't write file")
    parser.add_argument("--dir", default="outputs", help="Path to outputs directory (default: outputs)")
    args = parser.parse_args()

    collect(outputs_dir=args.dir, slug=args.slug, preview=args.preview)


if __name__ == "__main__":
    main()
