from langgraph.graph import StateGraph, END
from state import PipelineState
from agents.researcher import researcher_node
from agents.designer import designer_node
from agents.maker import maker_node
from agents.communicator import communicator_node
from agents.manager import manager_node


def build_pipeline():
    graph = StateGraph(PipelineState)

    graph.add_node("researcher", researcher_node)
    graph.add_node("designer", designer_node)
    graph.add_node("maker", maker_node)
    graph.add_node("communicator", communicator_node)
    graph.add_node("manager", manager_node)

    graph.set_entry_point("researcher")
    graph.add_edge("researcher", "designer")
    graph.add_edge("designer", "maker")
    graph.add_edge("maker", "communicator")
    graph.add_edge("communicator", "manager")
    graph.add_edge("manager", END)

    return graph.compile()
