"use client";

import type { PropsWithChildren } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useInitializeNexus } from "@/hooks/use-initialize-nexus";

const client = new QueryClient();

export const QueryProvider = (props: PropsWithChildren) => {
  useInitializeNexus();
  return (
    <QueryClientProvider client={client}>{props.children}</QueryClientProvider>
  );
};
