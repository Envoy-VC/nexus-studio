import type { Edge, Node } from "@xyflow/react";
import { create } from "zustand";

import type { NodeData } from "@/types";

import { defaultEdges, defaultNodes } from "../helpers";

type ReactFlowStoreState = {
  nodes: Node<NodeData>[];
  edges: Edge[];
};

type ReactFlowStoreActions = {
  setNodes: (nodes: Node<NodeData>[]) => void;
  setEdges: (edges: Edge[]) => void;
};

type ReactFlowStore = ReactFlowStoreState & ReactFlowStoreActions;

export const useReactFlowStore = create<ReactFlowStore>((set) => ({
  edges: defaultEdges,
  nodes: defaultNodes,
  setEdges: (edges: Edge[]) => set({ edges }),
  setNodes: (nodes: Node<NodeData>[]) => set({ nodes }),
}));
