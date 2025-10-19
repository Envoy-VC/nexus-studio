"use client";

import { useEffect, useRef } from "react";

import type { EthereumProvider } from "@avail-project/nexus-core";
import { useAccount } from "wagmi";

import { nexus } from "@/lib/nexus";

export const useInitializeNexus = () => {
  const initialized = useRef(false);
  const { connector } = useAccount();

  useEffect(() => {
    const initialize = async () => {
      if (!connector) return;
      console.log("initializing nexus");
      if (nexus.isInitialized()) {
        initialized.current = true;
        return;
      }
      const provider = await connector?.getProvider();
      if (!provider) return;
      await nexus.initialize(provider as EthereumProvider);
      initialized.current = true;
    };

    initialize().catch(console.error);
  }, [connector]);
};
