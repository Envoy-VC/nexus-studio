/** biome-ignore-all lint/style/noNonNullAssertion: safe */

import { useState } from "react";

import type { SimulationResult } from "@avail-project/nexus-core";
import { Button } from "@nexus-studio/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@nexus-studio/ui/components/dialog";
import { Loader2Icon } from "lucide-react";

import { useNexus } from "@/hooks";
import { buildTransactionParams } from "@/lib/helpers";
import { useReactFlowStore } from "@/lib/stores";

export const SimulateIntentButton = () => {
  const { nodes } = useReactFlowStore();
  const { simulateTransfer } = useNexus();

  const [open, setOpen] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [result, setSimulatedResult] = useState<SimulationResult | undefined>();

  const onSimulate = async () => {
    try {
      setIsSimulating(true);
      setSimulatedResult(undefined);
      const params = buildTransactionParams(nodes);
      if (params.type === "transfer") {
        const res = await simulateTransfer(params.data);
        setSimulatedResult(res);
        console.log(res);
        setOpen(true);
      }
    } catch (error: unknown) {
      console.error("Error: ", error);
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <>
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="pb-5">Simulation Results</DialogTitle>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <div className="font-medium">Total Fees: </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="font-semibold">
                    {result?.intent.fees.total}
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    {/** biome-ignore lint/performance/noImgElement: safe */}
                    <img
                      alt={result?.token.name}
                      className="size-4"
                      src={result?.token.logo}
                    />
                    <div>{result?.token.symbol}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-2">
                <div className="font-bold text-base">Sources</div>
                <div className="flex flex-col gap-1">
                  {result?.intent.sources.map((source, index) => (
                    <div
                      className="flex flex-row items-center justify-between gap-2"
                      key={`source-${index.toString()}`}
                    >
                      <div className="flex flex-row items-center gap-1">
                        {/** biome-ignore lint/performance/noImgElement: safe */}
                        <img
                          alt={source.chainName}
                          className="size-4 rounded-full"
                          src={source.chainLogo}
                        />
                        <div>{source.chainName}</div>
                      </div>
                      <div className="font-semibold">{source.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Button
        disabled={isSimulating}
        onClick={onSimulate}
        variant="secondary-ghost"
      >
        {isSimulating && <Loader2Icon className="size-4 animate-spin" />}
        {isSimulating ? "Simulating..." : "Simulate"}
      </Button>
    </>
  );
};
