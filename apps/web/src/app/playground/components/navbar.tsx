"use client";

import { NexusLogo } from "@nexus-studio/ui/icons";
import { Panel } from "@xyflow/react";
import { ConnectKitButton } from "connectkit";

export const PlaygroundNavbar = () => {
  return (
    <Panel className="!m-0 !w-full p-4" position="top-left">
      <div className="relative flex w-full flex-row items-center justify-between rounded-xl border bg-secondary-foreground px-3 py-2.5">
        <NexusLogo className="size-9" />
        <div className="absolute right-1/2 translate-x-1/2">
          <div className="font-semibold text-gray-700 text-label">
            Nexus Studio
          </div>
        </div>
        <ConnectKitButton />
      </div>
    </Panel>
  );
};
