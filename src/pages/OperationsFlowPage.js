
import React, { useCallback, useEffect } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
  useReactFlow,
  MarkerType,
  ReactFlowProvider,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Box, Typography, Paper, Button } from '@mui/material';

import CustomFlowNode from '../components/common/CustomFlowNode';
import CustomFlowEdge from '../components/common/CustomFlowEdge';
import { imageAssets } from '../data/imageAssets';
import PrimaryClarifier from '../assets/images/operationsflow/Primary_Clarifier.jpg';
import SecondaryClarifier from '../assets/images/operationsflow/Secondary_Clarifier.jpg';
import SecondaryClarifier2 from '../assets/images/operationsflow/Secondary_Clarifier_2.jpg';
import TertiaryAndUVTreatment from '../assets/images/operationsflow/Tertiary_and_UV_treatment.jpg';
import TertiaryAndUVTreatment2 from '../assets/images/operationsflow/Tertiary_and_UV_treatment_2.jpg';
import Digestor from '../assets/images/operationsflow/Digestor.jpg';
import OxidationDitch from '../assets/images/operationsflow/Oxidation_ditch.jpg';

const initialNodes = [
  { id: '1', position: { x: 400, y: 0 }, data: { label: 'Raw Influent', description: 'Wastewater enters the plant.', image: imageAssets.placeholders.card }, type: 'custom' },
  { id: '2', position: { x: 400, y: 200 }, data: { label: 'Preliminary', description: 'Removal of large debris.', image: imageAssets.placeholders.card }, type: 'custom' },
  { id: '3', position: { x: 400, y: 400 }, data: { label: 'Primary', description: 'Settling of solids.', image:PrimaryClarifier  }, type: 'custom' },
  { id: '4', position: { x: 400, y: 600 }, data: { label: 'Oxidation Ditch', description: 'Biological treatment.', image: OxidationDitch }, type: 'custom' },
  { id: '5', position: { x: 0, y: 725 }, data: { label: 'Secondary', description: 'Further clarification.', image: SecondaryClarifier }, type: 'custom' },
  { id: '6', position: { x: 400, y: 800 }, data: { label: 'Secondary Clarifiers', description: 'Separates activated sludge.', image: SecondaryClarifier2}, type: 'custom' },
  { id: '7', position: { x: 850, y: 600 }, data: { label: 'RAS/WAS Station', description: 'Return/Waste Activated Sludge.', image: imageAssets.placeholders.card }, type: 'custom' },
  { id: '8', position: { x: 400, y: 1000 }, data: { label: 'Tertiary', description: 'Advanced nutrient removal.', image: TertiaryAndUVTreatment }, type: 'custom' },
  { id: '9', position: { x: 400, y: 1200 }, data: { label: 'Final (UV)', description: 'Disinfection with UV light.', image: TertiaryAndUVTreatment2 }, type: 'custom' },
  { id: '10', position: { x: 400, y: 1400 }, data: { label: 'Final Effluent', description: 'Treated water is discharged.', image: imageAssets.placeholders.card }, type: 'custom' },
  { id: '11', position: { x: 1000, y: 800 }, data: { label: 'Gravity Belt Thickener', description: 'Thickens sludge.', image: imageAssets.placeholders.card }, type: 'custom' },
  { id: '12', position: { x: 850, y: 1000 }, data: { label: 'Digestor', description: 'Sludge stabilization.', image: Digestor}, type: 'custom' },
  { id: '13', position: { x: 850, y: 1200 }, data: { label: 'Belt Press', description: 'Dewatering of sludge.', image: imageAssets.placeholders.card }, type: 'custom' },
  { id: '14', position: { x: 850, y: 1400 }, data: { label: 'Land Application', description: 'Biosolids processing.', image: imageAssets.placeholders.card }, type: 'custom' },
].map(node => ({ ...node, sourcePosition: 'bottom', targetPosition: 'top' }));

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', type: 'custom', animated: true, sourceHandle: 'bottom-source', targetHandle: 'top-target' },
    { id: 'e2-3', source: '2', target: '3', type: 'custom', animated: true, sourceHandle: 'bottom-source', targetHandle: 'top-target' },
    { id: 'e3-4', source: '3', target: '4', type: 'custom', animated: true, sourceHandle: 'bottom-source', targetHandle: 'top-target' },
    { id: 'e4-5', source: '4', target: '5', type: 'custom', animated: true, sourceHandle: 'left-source', targetHandle: 'right-target' },
    { id: 'e4-6', source: '4', target: '6', type: 'custom', animated: true, sourceHandle: 'bottom-source', targetHandle: 'top-target' },
    { id: 'e6-5', source: '6', target: '5', type: 'custom', animated: true, sourceHandle: 'left-source', targetHandle: 'right-target' },
    { id: 'e6-7', source: '6', target: '7', type: 'custom', animated: true, sourceHandle: 'right-source', targetHandle: 'bottom-target' },
    { id: 'e6-8', source: '6', target: '8', type: 'custom', animated: true, sourceHandle: 'bottom-source', targetHandle: 'top-target' },
    { id: 'e7-4', source: '7', target: '4', type: 'custom', animated: true, sourceHandle: 'left-source', targetHandle: 'right-target' },
    { id: 'e7-11', source: '7', target: '11', type: 'custom', animated: true, sourceHandle: 'bottom-source', targetHandle: 'top-target' },
    { id: 'e8-9', source: '8', target: '9', type: 'custom', animated: true, sourceHandle: 'bottom-source', targetHandle: 'top-target' },
    { id: 'e9-10', source: '9', target: '10', type: 'custom', animated: true, sourceHandle: 'bottom-source', targetHandle: 'top-target' },
    { id: 'e11-12', source: '11', target: '12', type: 'custom', animated: true, sourceHandle: 'bottom-source', targetHandle: 'top-target' },
    { id: 'e12-13', source: '12', target: '13', type: 'custom', animated: true, sourceHandle: 'bottom-source', targetHandle: 'top-target' },
    { id: 'e13-14', source: '13', target: '14', type: 'custom', animated: true, sourceHandle: 'bottom-source', targetHandle: 'top-target' },
].map(edge => ({ ...edge, markerEnd: { type: MarkerType.ArrowClosed, color: '#1976d2' } }));

const nodeTypes = {
  custom: CustomFlowNode,
};

const showDevTools = true;

const FlowProvider = ({ children }) => (
  <ReactFlowProvider>
    {children}
  </ReactFlowProvider>
);

const OperationsFlowPage = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { setCenter } = useReactFlow();

  // useEffect(() => {
  //   const topNode = initialNodes.find((node) => node.id === '1');
  //   if (topNode) {
  //     const nodeWidth = 320;
  //     const nodeHeight = 140;
  //     setCenter(topNode.position.x + nodeWidth / 2, topNode.position.y + nodeHeight / 2, { zoom: 1, duration: 0 });
  //   }
  // }, [setCenter]);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const onEdgeClick = (edgeId) => {
    const edge = edges.find(e => e.id === edgeId);
    if (!edge) return;

    const targetNode = nodes.find(node => node.id === edge.target);
    if (targetNode) {
      const x = targetNode.position.x + (targetNode.width / 2);
      const y = targetNode.position.y + (targetNode.height / 2);
      setCenter(x, y, { zoom: 1, duration: 800 });
    }
  };

  const onNodeClick = useCallback(
    (event, node) => {
      setCenter(node.position.x + node.width / 2, node.position.y + node.height / 2, {
        zoom: 1.2,
        duration: 500,
      });
    },
    [setCenter]
  );
  
  const onSavePositions = () => {
    const nodePositions = nodes.map(({ id, position }) => ({
      id,
      position: { x: Math.round(position.x), y: Math.round(position.y) },
    }));
    console.log('const updatedNodePositions = ' + JSON.stringify(nodePositions, null, 2) + ';');
    alert('Node positions have been logged to the console.');
  };

  const edgeTypes = {
    custom: CustomFlowEdge
  };

  const edgesWithData = edges.map(edge => ({
    ...edge,
    data: { ...edge.data, onClick: onEdgeClick },
  }));

  return (
    <Box sx={{ height: '90vh', width: '100%', position: 'relative' }}>
      <ReactFlow
        nodes={nodes}
        edges={edgesWithData}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodesDraggable={showDevTools}
        zoom={1}
        fitViewOptions={{ padding: 0.1 }}
        minZoom={0.7}
        maxZoom={1.5}
        translateExtent={[[-200, -200], [1300, 1800]]}
        attributionPosition="bottom-left"
        proOptions={{ hideAttribution: true }}
      >
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
      <Paper
        elevation={4}
        sx={{
          position: 'absolute',
          top: 20,
          left: 20,
          p: 2,
          borderRadius: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          maxWidth: 350,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>
          Operations Flow
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Explore the plant's treatment process. Click the arrows to navigate between steps, and use your mouse to pan and zoom.
        </Typography>
      </Paper>
      {showDevTools && (
        <Button
          variant="contained"
          onClick={onSavePositions}
          sx={{
            position: 'absolute',
            bottom: 30,
            right: 20,
            zIndex: 10,
          }}
        >
          Log Node Positions
        </Button>
      )}
    </Box>
  );
};

const OperationsFlowPageWrapper = () => (
  <FlowProvider>
    <OperationsFlowPage />
  </FlowProvider>
);

export default OperationsFlowPageWrapper; 