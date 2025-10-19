import type { PropsWithChildren } from "react";

import type { State } from "wagmi";

import { QueryProvider } from "./query";
import { Web3Provider } from "./web3";

interface ProviderTreeProps {
  initialState?: State;
}

export const ProviderTree = (props: PropsWithChildren<ProviderTreeProps>) => {
  return (
    <Web3Provider>
      <QueryProvider>{props.children}</QueryProvider>
    </Web3Provider>
  );
};
