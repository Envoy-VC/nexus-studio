"use client";

import { NexusLogo } from "@nexus-studio/ui/icons";
import { ConnectKitButton } from "connectkit";

export const Navbar = () => {
  return (
    <div className="flex h-[6dvh] flex-row items-center justify-between border-b bg-gray-50 px-4">
      <div className="flex flex-row items-center gap-2">
        <NexusLogo className="size-7" />
        <div className="font-semibold text-gray-700 text-xl">Nexus Studio</div>
      </div>
      <ConnectKitButton />
    </div>
  );
};
