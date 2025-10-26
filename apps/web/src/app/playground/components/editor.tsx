"use client";

import { useCallback } from "react";

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

import { useReactFlowStore } from "@/lib/stores";
import type { NodeData } from "@/types";

import { PlaygroundNavbar } from "./navbar";
import { NodeView } from "./node-view";
import { nodeTypes } from "./nodes";
import { NodesListView } from "./nodes-list";

export const PlaygroundEditor = () => {
  const { nodes, edges, setEdges, setNodes, setSelectedNodeId } =
    useReactFlowStore();

  const onNodesChange = useCallback(
    (changes: NodeChange<Node<NodeData>>[]) => {
      const nodesSnapshot = nodes;
      const newNodes = applyNodeChanges(changes, nodesSnapshot);
      const selectedNode = newNodes.find((node) => node.selected);
      if (selectedNode) {
        setSelectedNodeId(selectedNode.id);
      }
      setNodes(newNodes);
    },
    [nodes, setNodes, setSelectedNodeId],
  );

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
    [nodes, edges, setEdges],
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange<Edge>[]) => {
      const edgesSnapshot = edges;
      const newEdges = applyEdgeChanges(changes, edgesSnapshot);
      setEdges(newEdges);
    },
    [edges, setEdges],
  );

  const onConnect = useCallback(
    (params: Connection) => setEdges(addEdge(params, edges)),
    [edges, setEdges],
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
