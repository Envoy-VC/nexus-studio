import type { Node, NodeProps } from "@xyflow/react";

type TerminalNodeProps = Node<{ type: "start" | "end" }, "type">;

export const TerminalNode = ({ data }: NodeProps<TerminalNodeProps>) => {
  return <div>{data.type} Node</div>;
};
