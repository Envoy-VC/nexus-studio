import { Panel } from "@xyflow/react";

import { NodeUpdate } from "./node-updates";

export const NodeView = () => {
  return (
    <Panel
      className="!m-0 !pt-[8dvh] !px-4 !pb-[4dvh] pointer-events-none h-screen w-[20rem]"
      position="top-right"
    >
      <div className="!bg-secondary-foreground sm pointer-events-auto h-full rounded-2xl border p-4">
        <NodeUpdate />
      </div>
    </Panel>
  );
};
