"use client";

import { ConnectKitButton } from "connectkit";

export const Navbar = () => {
  return (
    <div className="flex h-[6dvh] flex-row items-center justify-between bg-gray-50 px-4">
      <div>Nexus Studio</div>
      <ConnectKitButton />
    </div>
  );
};
