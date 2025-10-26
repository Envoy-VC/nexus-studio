"use client";

import { useCallback, useState } from "react";

import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  type Connection,
  Controls,
  type Edge,
  type EdgeChange,
  type Node,
  type NodeChange,
  ReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { PlaygroundNavbar } from "./navbar";
import { NodeView } from "./node-view";
import { nodeTypes } from "./nodes";
import { NodesListView } from "./nodes-list-view";

const initialNodes = [
  {
    ariaRole: "button",
    data: { type: "start" },
    dragHandle: ".drag-handle__custom",
    id: "terminal-start",
    position: { x: 0, y: 0 },
    type: "terminal",
  },
  { data: { label: "Node 1" }, id: "n1", position: { x: 0, y: 100 } },
  {
    data: { type: "end" },
    id: "terminal-end",
    position: { x: 0, y: 300 },
    type: "terminal",
  },
];
const initialEdges = [] as Edge[];

export const PlaygroundEditor = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback((changes: NodeChange<Node>[]) => {
    const removedNodes = changes.filter((change) => change.type === "remove");
    if (removedNodes.some((change) => change.id.startsWith("terminal"))) {
      alert("You can't remove terminal nodes");
      return;
    }
    setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot));
  }, []);
  const onEdgesChange = useCallback(
    (changes: EdgeChange<Edge>[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  return (
    <ReactFlowProvider>
      <ReactFlow
        edges={edges}
        fitView={true}
        nodes={nodes}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
      >
        <PlaygroundNavbar />
        <NodesListView />
        <NodeView />
        <Background />
        <Controls />
      </ReactFlow>
    </ReactFlowProvider>
  );
};
