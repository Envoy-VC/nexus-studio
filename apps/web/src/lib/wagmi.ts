import { getDefaultConfig } from "connectkit";
import { createConfig, http } from "wagmi";
import {
  arbitrumSepolia,
  baseSepolia,
  monadTestnet,
  optimismSepolia,
  polygonAmoy,
  sepolia,
} from "wagmi/chains";

import { env } from "@/env";

export const networks = [
  sepolia,
  baseSepolia,
  arbitrumSepolia,
  optimismSepolia,
  polygonAmoy,
  monadTestnet,
] as const;

const chainMetadata = {
  [sepolia.id]: {
    icon: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png",
    name: "Sepolia",
  },
  [baseSepolia.id]: {
    icon: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png",
    name: "Base Sepolia",
  },
};

export const wagmiConfig = createConfig(
  getDefaultConfig({
    appDescription:
      "Visualize and create Cross-chain Intents using Avail Nexus",
    appIcon: "https://nexus-studio.vercel.app/logo.png",
    appName: "Nexus Studio",
    appUrl: "https://nexus-studio.vercel.app",
    chains: networks,
    enableFamily: false,
    transports: {
      [sepolia.id]: http(),
      [monadTestnet.id]: http(),
      [baseSepolia.id]: http(),
      [arbitrumSepolia.id]: http(),
      [optimismSepolia.id]: http(),
      [polygonAmoy.id]: http(),
    },
    walletConnectProjectId: env.NEXT_PUBLIC_REOWN_PROJECT_ID,
  }),
);
