import {
  CHAIN_METADATA,
  TESTNET_CHAINS,
  TOKEN_METADATA,
} from "@avail-project/nexus-core";
import { Input } from "@nexus-studio/ui/components/input";
import { MultiSelect } from "@nexus-studio/ui/components/multi-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@nexus-studio/ui/components/select";
import type { Node } from "@xyflow/react";

import { useReactFlowStore } from "@/lib/stores";
import type { NodeMetadata, TransferNodeData } from "@/types";

interface Props {
  node: Node<TransferNodeData>;
  metadata: NodeMetadata;
}

export const TransferNodeUpdate = ({ node }: Props) => {
  const { updateNodeData } = useReactFlowStore();
  return (
    <div className="flex flex-col gap-2">
      <div className="px-2 font-bold text-lg">Transfer Details</div>
      <div className="flex flex-col gap-1">
        <div className="px-2 font-semibold text-gray-600 text-sm">Token</div>
        <Select
          defaultValue={node.data.token}
          onValueChange={(value) => updateNodeData(node.id, "token", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a token" />
          </SelectTrigger>
          <SelectContent>
            {["ETH", "USDC", "USDT"].map((token) => {
              const metadata = TOKEN_METADATA[token];
              return (
                <SelectItem
                  className="flex flex-row items-center gap-2"
                  key={token}
                  value={token}
                >
                  {/** biome-ignore lint/performance/noImgElement: safe */}
                  <img
                    alt={metadata?.name}
                    className="h-4 w-4 rounded-full"
                    src={metadata?.icon}
                  />
                  {metadata?.name}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-1">
        <div className="px-2 font-semibold text-gray-600 text-sm">Amount</div>
        <Input
          defaultValue={node.data.amount}
          onChange={(e) => {
            const amount = parseFloat(e.target.value);
            if (Number.isNaN(amount)) return;
            updateNodeData(node.id, "amount", amount);
          }}
          type="number"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="px-2 font-semibold text-gray-600 text-sm">
          Recipient Address
        </div>
        <Input
          defaultValue={node.data.recipient}
          onChange={(e) => updateNodeData(node.id, "recipient", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="px-2 font-semibold text-gray-600 text-sm">
          Source Chains
        </div>
        <MultiSelect
          onValueChange={(values) => {
            const vals = values.map((val) => Number(val));
            updateNodeData(node.id, "sourceChains", vals);
          }}
          options={TESTNET_CHAINS.map((chain) => {
            // biome-ignore lint/style/noNonNullAssertion: safe
            const metadata = CHAIN_METADATA[chain]!;

            return {
              icon: ({ className }) => (
                // biome-ignore lint/performance/noImgElement: safe
                <img
                  alt={metadata.name}
                  className={className}
                  src={metadata.logo}
                />
              ),
              label: metadata.name,
              value: chain.toString(),
            };
          })}
          placeholder="Select Source Chains"
          value={node.data.sourceChains?.map((chain) => chain.toString()) ?? []}
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="px-2 font-semibold text-gray-600 text-sm">
          Destination Chain
        </div>
        <Select
          defaultValue={node.data.chainId.toString()}
          onValueChange={(value) => {
            const chainId = Number(value);
            updateNodeData(node.id, "chainId", chainId);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Destination Chain" />
          </SelectTrigger>
          <SelectContent>
            {TESTNET_CHAINS.map((chain) => {
              const metadata = CHAIN_METADATA[chain];
              return (
                <SelectItem
                  className="flex flex-row items-center gap-2"
                  key={chain.toString()}
                  value={chain.toString()}
                >
                  {/** biome-ignore lint/performance/noImgElement: safe */}
                  <img
                    alt={metadata?.name}
                    className="h-4 w-4 rounded-full"
                    src={metadata?.logo}
                  />
                  {metadata?.name}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
