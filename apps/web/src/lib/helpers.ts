import { MapIcon, Rotate3DIcon, TerminalIcon } from "lucide-react";
import { parseEther } from "viem";

export const truncateEthAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const nodes = [
  {
    description: "Transfer Token from multiple Source Chains.",
    icon: Rotate3DIcon,
    label: "Transfer",
    type: "transfer",
  },
  {
    description: "Bridge Token from multiple Source Chains.",
    icon: MapIcon,
    label: "Bridge",
    type: "bridge",
  },
  {
    description: "Execute a contract call on destination chain.",
    icon: TerminalIcon,
    label: "Execute Contract",
    type: "execute",
  },
] as const;

export type NexusActionNode = (typeof nodes)[number];

export const getDefaultNodeData = (type: NexusActionNode["type"]) => {
  if (type === "transfer") {
    return {
      amount: parseEther("0.1"),
      chainId: 11155111,
      recipient: "0xc0d86456F6f2930b892f3DAD007CDBE32c081FE6",
      sourceChains: [84532],
      token: "ETH",
    };
  }

  return {};
};
