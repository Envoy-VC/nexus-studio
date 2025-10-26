import type {
  EthereumProvider,
  TransferParams,
} from "@avail-project/nexus-core";
import { useAccount } from "wagmi";

import { nexus } from "@/lib/nexus";

export const useNexus = () => {
  const { connector } = useAccount();

  const enforceInitialized = async () => {
    const isInitialized = nexus.isInitialized();
    if (!isInitialized) {
      const provider = await connector?.getProvider();
      if (!provider) throw new Error("Please connect your wallet");
      await nexus.initialize(provider as EthereumProvider);
    }
  };

  const simulateTransfer = async (params: TransferParams) => {
    await enforceInitialized();
    const simulateResult = await nexus.simulateTransfer(params);
    return simulateResult;
  };
  const transfer = async (params: TransferParams) => {
    await enforceInitialized();
    const res = await nexus.transfer(params);
    if (!res.success) {
      throw new Error(res.error);
    }
    return res;
  };

  return { simulateTransfer, transfer };
};
