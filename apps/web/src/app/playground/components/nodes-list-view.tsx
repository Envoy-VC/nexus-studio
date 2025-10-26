import { Panel } from "@xyflow/react";

export const NodesListView = () => {
  return (
    <Panel
      className="!m-0 !pt-[8dvh] !px-4 !pb-[4dvh] pointer-events-none h-screen w-[18rem]"
      position="top-left"
    >
      <div className="!bg-secondary-foreground sm pointer-events-auto h-full rounded-2xl border p-4">
        all nodes here
      </div>
    </Panel>
  );
};
