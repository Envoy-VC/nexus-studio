import { useRef, useState } from "react";

import { useDraggable } from "@neodrag/react";
import type { XYPosition } from "@xyflow/react";

import type { NexusActionNode } from "@/lib/helpers";

interface DraggableNodeProps {
  node: NexusActionNode;
  onDrop: (nodeType: NexusActionNode["type"], position: XYPosition) => void;
}

export const DraggableNode = ({ node, onDrop }: DraggableNodeProps) => {
  // biome-ignore lint/style/noNonNullAssertion: safe
  const draggableRef = useRef<HTMLDivElement>(null!);
  const [position, setPosition] = useState<XYPosition>({ x: 0, y: 0 });

  useDraggable(draggableRef, {
    onDrag: ({ offsetX, offsetY }) => {
      // Calculate position relative to the viewport
      setPosition({
        x: offsetX,
        y: offsetY,
      });
    },
    onDragEnd: ({ event }) => {
      setPosition({ x: 0, y: 0 });
      onDrop(node.type, {
        x: event.clientX,
        y: event.clientY,
      });
    },
    position: position,
  });

  return (
    <div
      className="flex cursor-grab flex-row gap-2 rounded-lg bg-gray-100 p-2"
      ref={draggableRef}
    >
      <div className="flex max-h-10 min-h-10 min-w-10 max-w-10 items-center justify-center rounded-[8px] bg-secondary/10">
        <node.icon className="size-5 text-secondary" />
      </div>
      <div className="flex flex-col">
        <div className="font-bold">{node.label}</div>
        <div className="text-wrap font-medium text-2xs text-gray-600">
          {node.description}
        </div>
      </div>
    </div>
  );
};
