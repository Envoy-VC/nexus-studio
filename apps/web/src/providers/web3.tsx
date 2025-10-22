"use client";

import type { PropsWithChildren } from "react";

import { ConnectKitProvider } from "connectkit";
import { WagmiProvider } from "wagmi";

import { wagmiConfig } from "@/lib/wagmi";

export const Web3Provider = (props: PropsWithChildren) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <ConnectKitProvider
        customTheme={{
          "--ck-body-action-color": "#999999",
          "--ck-body-background": "#ffffff",
          "--ck-body-background-secondary": "#f6f7f9",
          "--ck-body-background-secondary-hover-background": "#e0e4eb",
          "--ck-body-background-secondary-hover-outline": "#4282FF",
          "--ck-body-background-tertiary": "#F3F4F7",
          "--ck-body-background-transparent": "rgba(255,255,255,0)",
          "--ck-body-color": "#1e293b",
          "--ck-body-color-danger": "#e11d48",
          "--ck-body-color-muted": "#999999",
          "--ck-body-color-muted-hover": "#999999",
          "--ck-body-color-valid": "#22c55e",
          "--ck-body-disclaimer-background": "#f6f7f9",
          "--ck-body-disclaimer-color": "#AAAAAB",
          "--ck-body-disclaimer-link-color": "#838485",
          "--ck-body-disclaimer-link-hover-color": "#000000",
          "--ck-body-divider": "#f7f6f8",
          "--ck-border-radius": "32px",
          "--ck-connectbutton-active-background": "#ff0046",
          "--ck-connectbutton-active-box-shadow": "0 0 0 0 #ffffff",
          "--ck-connectbutton-active-color": "#fff",
          "--ck-connectbutton-background": "#ff0073",
          "--ck-connectbutton-background-secondary": "#FFFFFF",
          "--ck-connectbutton-balance-active-background": "#F0F2F5",
          "--ck-connectbutton-balance-active-box-shadow":
            "inset 0 0 0 1px #EAECF1",
          "--ck-connectbutton-balance-background": "#fff",
          "--ck-connectbutton-balance-box-shadow": "inset 0 0 0 1px #F6F7F9",
          "--ck-connectbutton-balance-color": "#373737",
          "--ck-connectbutton-balance-hover-background": "#F6F7F9",
          "--ck-connectbutton-balance-hover-box-shadow":
            "inset 0 0 0 1px #F0F2F5",
          "--ck-connectbutton-border-radius": "999999px",
          "--ck-connectbutton-box-shadow": "0 0 0 0 #ffffff",
          "--ck-connectbutton-color": "#fff",
          "--ck-connectbutton-font-size": "14px",
          "--ck-connectbutton-hover-background": "#ff0073",
          "--ck-connectbutton-hover-box-shadow": "0 0 0 0 #ffffff",
          "--ck-connectbutton-hover-color": "#fff",
          "--ck-copytoclipboard-stroke": "#CCCCCC",
          "--ck-dropdown-button-background": "#fff",
          "--ck-dropdown-button-box-shadow":
            "0 0 0 1px rgba(0,0,0,0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)",
          "--ck-dropdown-button-color": "#999999",
          "--ck-dropdown-button-hover-background": "#F5F7F9",
          "--ck-dropdown-button-hover-color": "#8B8B8B",
          "--ck-focus-color": "#1A88F8",
          "--ck-font-family": "Plus Jakarta Sans",
          "--ck-font-weight": "400",
          "--ck-modal-box-shadow": "0px 2px 4px 0px #00000005",
          "--ck-modal-heading-font-weight": "500",
          "--ck-overlay-backdrop-filter": "blur(2px)",
          "--ck-overlay-background": "#00000008",
          "--ck-primary-button-active-background": "#f1f5f9",
          "--ck-primary-button-active-box-shadow": "0 0 0 0 #ffffff",
          "--ck-primary-button-active-color": "#373737",
          "--ck-primary-button-background": "#f8fafc",
          "--ck-primary-button-border-radius": "16px",
          "--ck-primary-button-box-shadow": "0 0 0 0 #ffffff",
          "--ck-primary-button-color": "#1e293b",
          "--ck-primary-button-font-weight": "600",
          "--ck-primary-button-hover-background": "#f1f5f9",
          "--ck-primary-button-hover-box-shadow": "0 0 0 0 #ffffff",
          "--ck-primary-button-hover-color": "#0f172a",
          "--ck-qr-background": "#ffffff",
          "--ck-qr-border-color": "#f7f6f8",
          "--ck-qr-border-radius": "16px",
          "--ck-qr-dot-color": "#000000",
          "--ck-recent-badge-background": "#F6F7F9",
          "--ck-recent-badge-border-radius": "32px",
          "--ck-recent-badge-color": "#777",
          "--ck-secondary-button-active-background": "#dfe4ec",
          "--ck-secondary-button-active-box-shadow": "0 0 0 0 #ffffff",
          "--ck-secondary-button-active-color": "#373737",
          "--ck-secondary-button-background": "#F6F7F9",
          "--ck-secondary-button-border-radius": "16px",
          "--ck-secondary-button-box-shadow": "0 0 0 0 #ffffff",
          "--ck-secondary-button-color": "#373737",
          "--ck-secondary-button-font-weight": "500",
          "--ck-secondary-button-hover-background": "#dfe4ec",
          "--ck-secondary-button-hover-box-shadow": "0 0 0 0 #ffffff",
          "--ck-secondary-button-hover-color": "#373737",
          "--ck-siwe-border": "#F0F0F0",
          "--ck-spinner-color": "#1A88F8",
          "--ck-tertiary-button-active-background": "#F6F7F9",
          "--ck-tertiary-button-active-box-shadow": "0 0 0 0 #ffffff",
          "--ck-tertiary-button-active-color": "#373737",
          "--ck-tertiary-button-background": "#F6F7F9",
          "--ck-tertiary-button-border-radius": "16px",
          "--ck-tertiary-button-box-shadow": "0 0 0 0 #ffffff",
          "--ck-tertiary-button-color": "#373737",
          "--ck-tertiary-button-font-weight": "500",
          "--ck-tertiary-button-hover-background": "#F6F7F9",
          "--ck-tertiary-button-hover-box-shadow": "0 0 0 0 #ffffff",
          "--ck-tertiary-button-hover-color": "#373737",
          "--ck-tooltip-background": "#ffffff",
          "--ck-tooltip-background-secondary": "#ffffff",
          "--ck-tooltip-color": "#999999",
          "--ck-tooltip-shadow": "0px 2px 10px 0 #00000014",
        }}
        mode="light"
        options={{
          embedGoogleFonts: true,
        }}
      >
        {props.children}
      </ConnectKitProvider>
    </WagmiProvider>
  );
};
