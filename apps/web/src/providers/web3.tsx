"use client";

import type { PropsWithChildren } from "react";

import { ConnectKitProvider } from "connectkit";
import { WagmiProvider } from "wagmi";

import { wagmiConfig } from "@/lib/wagmi";

export const Web3Provider = (props: PropsWithChildren) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <ConnectKitProvider theme="soft">{props.children}</ConnectKitProvider>
    </WagmiProvider>
  );
};
