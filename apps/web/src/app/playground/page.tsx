"use client";

import { useCallback, useState } from "react";

import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  type Connection,
  type Edge,
  type EdgeChange,
  type Node,
  type NodeChange,
  ReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const initialNodes = [
  { data: { label: "Node 1" }, id: "n1", position: { x: 0, y: 0 } },
  { data: { label: "Node 2" }, id: "n2", position: { x: 0, y: 100 } },
];
const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }];

const PlaygroundPage = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange<Node>[]) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
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
    <div style={{ height: "100vh", width: "100vw" }}>
      <ReactFlow
        edges={edges}
        fitView={true}
        nodes={nodes}
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
      />
    </div>
  );
};

export default PlaygroundPage;
