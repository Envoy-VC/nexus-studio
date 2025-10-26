"use client";

import { useMemo } from "react";

import { type Node, useReactFlow } from "@xyflow/react";

import { useReactFlowStore } from "@/lib/stores";
import type { NodeData } from "@/types";

export const NodeUpdate = () => {
  "use no cache";
  const { getNode } = useReactFlow();
  const { selectedNodeId } = useReactFlowStore();

  const node = useMemo(() => {
    console.log("run useMemo");
    if (!selectedNodeId) return null;
    const node = getNode(selectedNodeId) ?? null;
    return node as Node<NodeData> | null;
  }, [selectedNodeId, getNode]);

  return (
    <div>
      {selectedNodeId}
      {JSON.stringify(node, null, 2)}
    </div>
  );
};
