import { useMemo } from "react";

import { getChainMetadata, getTokenMetadata } from "@avail-project/nexus-core";
import { Handle, type Node, type NodeProps, Position } from "@xyflow/react";
import { GripVerticalIcon, MapIcon } from "lucide-react";

import type { BridgeNodeData } from "@/types";

import { BaseNode } from "./base";

type BridgeNodeProps = Node<BridgeNodeData>;

export const BridgeNode = ({ data }: NodeProps<BridgeNodeProps>) => {
  const tokenMetadata = useMemo(() => {
    const metadata = getTokenMetadata(data.token);
    if (!metadata) throw new Error(`Token ${data.token} not found`);
    return metadata;
  }, [data.token]);

  const destinationChain = useMemo(() => {
    const metadata = getChainMetadata(data.chainId);
    if (!metadata) throw new Error(`Chain ${data.chainId} not found`);
    return metadata;
  }, [data.chainId]);

  const sourceMetadata = useMemo(() => {
    return (data.sourceChains ?? []).map((chainId) =>
      getChainMetadata(chainId),
    );
  }, [data.sourceChains]);

  return (
    <BaseNode className="flex w-full min-w-[24rem] flex-col gap-3 py-1 pb-4">
      <div className="flex flex-row items-center justify-between gap-1 p-1">
        <div className="flex flex-row items-center gap-1">
          <div className="drag-handle__label">
            <div className="drag-handle__custom">
              <GripVerticalIcon className="size-5 text-gray-300" />
            </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="flex size-6 items-center justify-center rounded-md bg-secondary text-white">
              <MapIcon className="size-4" />
            </div>
            <div className="font-semibold text-base text-gray-700">Bridge</div>
          </div>
        </div>
        <div className="flex flex-row items-center rounded-md bg-gray-100 px-2 py-0.5 font-semibold text-gray-500 text-xs">
          Action
        </div>
      </div>
      <div className="w-full border border-dashed" />
      <div className="flex flex-col gap-2 px-4">
        <div className="px-1 font-semibold text-xs">Parameters</div>
        <div className="flex flex-col gap-1.5">
          <div className="flex w-full flex-row items-center justify-between rounded-md bg-gray-100 px-3 py-1 text-sm">
            <div className="font-semibold">Token</div>
            <div className="flex flex-row items-center gap-1">
              {/** biome-ignore lint/performance/noImgElement: safe */}
              <img
                alt={tokenMetadata.name}
                className="size-4 rounded-full"
                src={tokenMetadata.icon}
              />
              <div className="font-bold">{tokenMetadata.name}</div>
            </div>
          </div>
          <div className="flex w-full flex-row items-center justify-between rounded-md bg-gray-100 px-3 py-1 text-sm">
            <div className="font-semibold">Amount</div>
            <div className="flex flex-row items-center gap-1">
              <div className="font-bold">{data.amount}</div>
            </div>
          </div>
          <div className="flex w-full flex-row items-start justify-between rounded-md bg-gray-100 px-3 py-1 text-sm">
            <div className="font-semibold">Source Chains</div>
            <div className="flex max-w-[10rem] flex-wrap justify-end gap-1">
              {sourceMetadata.map((sourceChain) => {
                return (
                  <div
                    className="flex w-fit flex-row items-center gap-1 rounded-md bg-gray-200 px-2 py-0.5"
                    key={sourceChain.id}
                  >
                    {/** biome-ignore lint/performance/noImgElement: safe */}
                    <img
                      alt={sourceChain.name}
                      className="size-4 rounded-full"
                      src={sourceChain.logo}
                    />
                    <div className="font-semibold">{sourceChain.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex w-full flex-row items-center justify-between rounded-md bg-gray-100 px-3 py-1 text-sm">
            <div className="font-semibold">Destination Chain</div>
            <div className="flex flex-row items-center gap-1 rounded-md bg-gray-200 px-2 py-0.5">
              {/** biome-ignore lint/performance/noImgElement: safe */}
              <img
                alt={destinationChain.name}
                className="size-4 rounded-full"
                src={destinationChain.logo}
              />
              <div className="font-semibold">{destinationChain.name}</div>
            </div>
          </div>
        </div>
      </div>
      <Handle position={Position.Top} type="target" />
      <Handle position={Position.Bottom} type="source" />
    </BaseNode>
  );
};
