import Image from "next/image";
import Link from "next/link";

import { Button } from "@nexus-studio/ui/components/button";
import { ArrowRight } from "lucide-react";

import { Navbar, PatternWrapper } from "@/components";

const Home = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="relative h-[94dvh]">
        <PatternWrapper>
          <div className="relative h-screen overflow-hidden">
            <div className="mx-auto my-[8dvh] flex max-w-screen-xl flex-col items-center justify-center gap-8 px-4">
              <div className="w-fit rounded-full bg-secondary/10 px-4 py-1 font-medium text-base text-secondary">
                Powered by Avail Nexus
              </div>
              <div className="text-center font-semibold text-6xl md:text-7xl">
                Build Cross-Chain Flows
                <br />
                Visually with Nexus
              </div>
              <div className="max-w-3xl text-center text-description">
                Design, simulate, and execute cross-chain transactions with an
                intuitive drag-and-drop interface. Nexus Studio turns complex
                interoperability across Avail-powered rollups into simple,
                visual flows.
              </div>
              <Button asChild={true} variant="secondary">
                <Link className="flex items-center gap-2" href="/playground">
                  Get Started
                  <span className="sr-only">Opens in new tab</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="mx-auto w-fit rounded-xl bg-secondary/10 p-2">
              <Image
                alt="Nexus Studio"
                className="rounded-lg"
                height={500}
                src="/hero-light.jpeg"
                width={1000}
              />
            </div>
          </div>
        </PatternWrapper>
      </div>
    </div>
  );
};

export default Home;
