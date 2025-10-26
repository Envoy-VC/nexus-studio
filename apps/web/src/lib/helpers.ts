import type { Edge, Node } from "@xyflow/react";
import { MapIcon, Rotate3DIcon, TerminalIcon } from "lucide-react";
import { parseEther } from "viem";

import type {
  NodeData,
  NodeMetadata,
  NodeType,
  NonTerminalNodeType,
} from "@/types";

export const truncateEthAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const nodes: Record<NonTerminalNodeType, NodeMetadata> = {
  bridge: {
    description: "Bridge Token from multiple Source Chains.",
    icon: MapIcon,
    label: "Bridge",
    type: "bridge",
  },
  execute: {
    description: "Execute a contract call on destination chain.",
    icon: TerminalIcon,
    label: "Execute Contract",
    type: "execute",
  },
  transfer: {
    description: "Transfer Token from multiple Source Chains.",
    icon: Rotate3DIcon,
    label: "Transfer",
    type: "transfer",
  },
};

export const getDefaultNodeData = (type: NodeType) => {
  if (type === "transfer") {
    return {
      amount: parseEther("0.1"),
      chainId: 11155111,
      recipient: "0xc0d86456F6f2930b892f3DAD007CDBE32c081FE6",
      sourceChains: [84532],
      token: "ETH",
    };
  }

  if (type === "bridge") {
    return {
      amount: 0.1,
      chainId: 11155111,
      sourceChains: [84532],
      token: "ETH",
    };
  }

  return {};
};

export const defaultNodes: Node<NodeData>[] = [
  {
    data: { type: "start" },
    deletable: false,
    dragHandle: ".drag-handle__custom",
    id: "terminal-start",
    position: { x: 0, y: 0 },
    selectable: false,
    type: "terminal",
  },
  {
    data: {
      amount: 0.1,
      chainId: 11155111,
      recipient: "0xc0d86456F6f2930b892f3DAD007CDBE32c081FE6",
      sourceChains: [84532],
      token: "ETH",
    },
    dragHandle: ".drag-handle__custom",
    id: "transfer",
    position: { x: 0, y: 100 },
    type: "transfer",
  },
  {
    data: { type: "end" },
    deletable: false,
    dragHandle: ".drag-handle__custom",
    id: "terminal-end",
    position: { x: 0, y: 500 },
    selectable: false,
    type: "terminal",
  },
];

export const defaultEdges: Edge[] = [
  { id: "start->transfer", source: "terminal-start", target: "transfer" },
  { id: "transfer->terminal-end", source: "transfer", target: "terminal-end" },
];
