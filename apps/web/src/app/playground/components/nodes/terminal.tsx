import { Handle, type Node, type NodeProps, Position } from "@xyflow/react";
import { CircleOffIcon, GripVerticalIcon, PlayIcon } from "lucide-react";

import { BaseNode } from "./base";

type TerminalNodeProps = Node<{ type: "start" | "end" }, "type">;

export const TerminalNode = ({ data }: NodeProps<TerminalNodeProps>) => {
  const nodeType = data.type === "start" ? "Start Node" : "End Node";
  const Icon = data.type === "start" ? PlayIcon : CircleOffIcon;
  const handleType = data.type === "start" ? "source" : "target";
  const handlePosition = data.type === "start" ? Position.Bottom : Position.Top;

  return (
    <BaseNode className="flex w-full min-w-[18rem] flex-row items-center justify-between gap-1 p-1">
      <div className="flex flex-row items-center gap-1">
        <div className="drag-handle__label">
          <div className="drag-handle__custom">
            <GripVerticalIcon className="size-4 text-gray-300" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="flex size-4.5 items-center justify-center rounded-md bg-black text-white">
            <Icon className="size-3" />
          </div>
          <div className="font-semibold text-gray-700 text-sm">{nodeType}</div>
        </div>
      </div>
      <div className="flex flex-row items-center rounded-md bg-gray-100 px-2 py-0.5 font-semibold text-2xs text-gray-500">
        Terminal
      </div>
      <Handle position={handlePosition} type={handleType} />
    </BaseNode>
  );
};
