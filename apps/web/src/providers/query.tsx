import type { PropsWithChildren } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export const QueryProvider = (props: PropsWithChildren) => {
  return (
    <QueryClientProvider client={client}>{props.children}</QueryClientProvider>
  );
};
