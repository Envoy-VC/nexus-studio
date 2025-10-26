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

export type TestnetChain = (typeof TESTNET_CHAINS)[number];

export type TransferNodeData = {
  token: SUPPORTED_TOKENS;
  amount: number | string;
  chainId: TestnetChain;
  recipient: `0x${string}`;
  sourceChains?: TestnetChain[];
};

export type BridgeNodeData = {
  token: SUPPORTED_TOKENS;
  amount: number | string;
  chainId: TestnetChain;
  sourceChains?: TestnetChain[];
};

export type NodeData = TerminalNodeData | TransferNodeData | BridgeNodeData;

export type NodeMetadata = {
  description: string;
  icon: typeof TerminalIcon;
  label: string;
  type: NodeType;
};
