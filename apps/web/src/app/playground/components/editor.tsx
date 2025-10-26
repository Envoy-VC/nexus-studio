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
  getConnectedEdges,
  getIncomers,
  getOutgoers,
  type Node,
  type NodeChange,
  ReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { PlaygroundNavbar } from "./navbar";
import { NodeView } from "./node-view";
import { nodeTypes } from "./nodes";
import { NodesListView } from "./nodes-list";

const initialNodes: Node[] = [
  {
    data: { type: "start" },
    deletable: false,
    dragHandle: ".drag-handle__custom",
    id: "terminal-start",
    position: { x: 0, y: 0 },
    type: "terminal",
  },
  {
    data: {
      amount: 1_000_000_000_000,
      chainId: 11155111,
      recipient: "0xc0d86456F6f2930b892f3DAD007CDBE32c081FE6",
      sourceChains: [11155111, 84532],
      token: "ETH",
    },
    dragHandle: ".drag-handle__custom",
    id: "transfer",
    position: { x: 0, y: 100 },
    type: "transfer",
  },
  {
    data: { type: "end" },
    deletable: false,
    dragHandle: ".drag-handle__custom",
    id: "terminal-end",
    position: { x: 0, y: 500 },
    type: "terminal",
  },
];
const initialEdges = [
  { id: "start->transfer", source: "terminal-start", target: "transfer" },
  { id: "transfer->terminal-end", source: "transfer", target: "terminal-end" },
] as Edge[];

export const PlaygroundEditor = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback((changes: NodeChange<Node>[]) => {
    setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot));
  }, []);

  const onNodesDelete = useCallback(
    (deleted: Node[]) => {
      let remainingNodes = [...nodes];
      setEdges(
        deleted.reduce((acc, node) => {
          const incomers = getIncomers(node, remainingNodes, acc);
          const outgoers = getOutgoers(node, remainingNodes, acc);
          const connectedEdges = getConnectedEdges([node], acc);

          const remainingEdges = acc.filter(
            (edge) => !connectedEdges.includes(edge),
          );

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({
              id: `${source}->${target}`,
              source,
              target,
            })),
          );

          remainingNodes = remainingNodes.filter((rn) => rn.id !== node.id);

          return [...remainingEdges, ...createdEdges];
        }, edges),
      );
    },
    [nodes, edges],
  );

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
        onNodesDelete={onNodesDelete}
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
