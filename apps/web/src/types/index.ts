import type {
  SUPPORTED_TOKENS,
  TESTNET_CHAINS,
} from "@avail-project/nexus-core";
import type { TerminalIcon } from "lucide-react";

export type NodeType = "terminal" | "execute" | "transfer" | "bridge";
export type NonTerminalNodeType = "execute" | "transfer" | "bridge";

export type TerminalNodeData = {
  type: "start" | "end";
};

export type TransferNodeData = {
  token: SUPPORTED_TOKENS;
  amount: number | string;
  chainId: (typeof TESTNET_CHAINS)[number];
  recipient: `0x${string}`;
  sourceChains?: (typeof TESTNET_CHAINS)[number][];
};

export type NodeData = TerminalNodeData | TransferNodeData;

export type NodeMetadata = {
  description: string;
  icon: typeof TerminalIcon;
  label: string;
  type: NodeType;
};
