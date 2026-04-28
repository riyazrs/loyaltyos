from typing import TypedDict, Optional


class PipelineState(TypedDict):
    # Input
    business_name: str
    business_type: str
    business_description: str

    # Agent outputs
    research_brief: Optional[str]
    design_spec: Optional[str]
    prototype_plan: Optional[str]
    marketing_copy: Optional[str]
    executive_summary: Optional[str]

    # Metadata
    errors: list
    current_agent: str
