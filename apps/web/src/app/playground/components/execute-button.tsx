/** biome-ignore-all lint/style/noNonNullAssertion: safe */

import { useState } from "react";

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

export const ExecuteButton = () => {
  const { nodes } = useReactFlowStore();
  const { transfer } = useNexus();

  const [open, setOpen] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [result, setResult] = useState<
    | {
        success: true;
        transactionHash: string;
        explorerUrl: string;
      }
    | undefined
  >();

  const onExecute = async () => {
    try {
      setIsExecuting(true);
      setResult(undefined);
      const params = buildTransactionParams(nodes);
      if (params.type === "transfer") {
        const res = await transfer(params.data);
        setResult(res);
        setOpen(true);
      }
    } catch (error: unknown) {
      console.error("Error: ", error);
    } finally {
      setIsExecuting(false);
      setResult(undefined);
    }
  };

  return (
    <>
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="pb-5">Execution Results</DialogTitle>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <div className="font-medium">Transaction Hash: </div>
                <div className="font-semibold">{result?.transactionHash}</div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="font-medium">Explorer URL: </div>
                <div className="font-semibold">
                  <a
                    href={result?.explorerUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {result?.transactionHash}
                  </a>
                </div>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Button
        disabled={isExecuting}
        onClick={onExecute}
        variant="secondary-ghost"
      >
        {isExecuting && <Loader2Icon className="size-4 animate-spin" />}
        {isExecuting ? "Executing..." : "Execute"}
      </Button>
    </>
  );
};
