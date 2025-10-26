"use client";

import { useMemo } from "react";

import { type Node, useReactFlow } from "@xyflow/react";

import { nodes } from "@/lib/helpers";
import { useReactFlowStore } from "@/lib/stores";
import type { NodeData, NonTerminalNodeType, TransferNodeData } from "@/types";

import { TransferNodeUpdate } from "./transfer";

export const NodeUpdate = () => {
  "use no cache";
  const { getNode } = useReactFlow();
  const { selectedNodeId } = useReactFlowStore();

  const node = useMemo(() => {
    console.log("run useMemo");
    if (!selectedNodeId) return null;
    const node = getNode(selectedNodeId) as Node<NodeData> | undefined;
    if (!node) return null;
    const metadata = nodes[node.type as NonTerminalNodeType];
    return {
      metadata,
      node,
    };
  }, [selectedNodeId, getNode]);

  if (!node)
    return (
      <div className="p-4">
        <div className="text-center font-semibold text-gray-600">
          No node selected
        </div>
      </div>
    );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-2">
        <div className="flex max-h-12 min-h-12 min-w-12 max-w-12 items-center justify-center rounded-lg bg-secondary/10">
          <node.metadata.icon className="size-6 text-secondary" />
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-lg">{node.metadata.label}</div>
          <div className="text-wrap font-medium text-2xs text-gray-600">
            {node.metadata.description}
          </div>
        </div>
      </div>
      {node.node.type === "transfer" && (
        <TransferNodeUpdate
          metadata={node.metadata}
          node={node.node as Node<TransferNodeData>}
        />
      )}
    </div>
  );
};
