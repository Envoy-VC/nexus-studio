import { useCallback } from "react";

import { Panel, useReactFlow, type XYPosition } from "@xyflow/react";

import { getDefaultNodeData, nodes } from "@/lib/helpers";
import type { NonTerminalNodeType } from "@/types";

import { DraggableNode } from "./draggable-node";

export const NodesListView = () => {
  const { setNodes, screenToFlowPosition } = useReactFlow();

  const handleNodeDrop = useCallback(
    (nodeType: NonTerminalNodeType, screenPosition: XYPosition) => {
      const flow = document.querySelector(".react-flow");
      const flowRect = flow?.getBoundingClientRect();
      const isInFlow =
        flowRect &&
        screenPosition.x >= flowRect.left &&
        screenPosition.x <= flowRect.right &&
        screenPosition.y >= flowRect.top &&
        screenPosition.y <= flowRect.bottom;

      // Create a new node and add it to the flow
      if (isInFlow) {
        const position = screenToFlowPosition(screenPosition);

        const newNode = {
          data: getDefaultNodeData(nodeType),
          id: crypto.randomUUID(),
          position,
          type: nodeType,
        };

        setNodes((nds) => nds.concat(newNode));
      }
    },
    [setNodes, screenToFlowPosition],
  );

  return (
    <Panel
      className="!m-0 !pt-[8dvh] !px-4 !pb-[4dvh] pointer-events-none h-screen w-[18rem]"
      position="top-left"
    >
      <div className="!bg-secondary-foreground sm pointer-events-auto flex h-full flex-col gap-4 rounded-2xl border p-3">
        <div className="px-2 pt-2 font-bold text-xl">Nodes Library</div>
        <div className="flex flex-col gap-2">
          {Object.values(nodes).map((node) => {
            return (
              <DraggableNode
                key={node.type}
                node={node}
                onDrop={handleNodeDrop}
              />
            );
          })}
        </div>
      </div>
    </Panel>
  );
};
