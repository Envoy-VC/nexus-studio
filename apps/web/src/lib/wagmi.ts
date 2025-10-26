import { getDefaultConfig } from "connectkit";
import { createConfig, http } from "wagmi";
import { type Chain, sepolia } from "wagmi/chains";

import { env } from "@/env";

export const networks = [sepolia] as [Chain, ...Chain[]];

export const wagmiConfig = createConfig(
  getDefaultConfig({
    appDescription: "Your App Description",
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
    appName: "Your App Name",
    appUrl: "https://family.co", // your app's url
    chains: networks,
    enableFamily: false,
    transports: {
      [sepolia.id]: http(),
    },
    walletConnectProjectId: env.NEXT_PUBLIC_REOWN_PROJECT_ID,
  }),
);
