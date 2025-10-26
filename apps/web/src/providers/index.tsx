import type { PropsWithChildren } from "react";

import { QueryProvider } from "./query";
import { Web3Provider } from "./web3";

export const ProviderTree = (props: PropsWithChildren) => {
  return (
    <QueryProvider>
      <Web3Provider>{props.children}</Web3Provider>
    </QueryProvider>
  );
};
