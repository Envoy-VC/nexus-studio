"use client";

import { type PropsWithChildren, useState } from "react";

import { WagmiProvider } from "wagmi";

import { getWagmiConfig } from "@/lib/wagmi";

export const Web3Provider = (props: PropsWithChildren) => {
  const [wagmiConfig] = useState(() => getWagmiConfig());

  return <WagmiProvider config={wagmiConfig}>{props.children}</WagmiProvider>;
};
