"use client";

import { type PropsWithChildren, useState } from "react";

import { type State, WagmiProvider } from "wagmi";

import { getWagmiConfig } from "@/lib/wagmi";

interface Web3ProviderProps {
  initialState?: State;
}

export const Web3Provider = (props: PropsWithChildren<Web3ProviderProps>) => {
  const [wagmiConfig] = useState(() => getWagmiConfig());

  return (
    <WagmiProvider config={wagmiConfig} initialState={props.initialState}>
      {props.children}
    </WagmiProvider>
  );
};
