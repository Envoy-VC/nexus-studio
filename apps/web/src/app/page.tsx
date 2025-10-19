"use client";

import { Button } from "@nexus-studio/ui/components/button";
import { useConnect } from "wagmi";

import { nexus } from "@/lib/nexus";

const Home = () => {
  const { connectors, connectAsync } = useConnect();

  return (
    <div>
      <Button
        onClick={async () => {
          const injected = connectors.find((c) => c.type === "injected");
          if (injected) {
            await connectAsync({ connector: injected });
          }
        }}
        variant="secondary"
      >
        Connect Wallet
      </Button>
      <Button
        onClick={async () => {
          const res = await nexus.getUnifiedBalances();
          console.log(res);
        }}
        variant="secondary"
      >
        Get Balances
      </Button>
    </div>
  );
};

export default Home;
