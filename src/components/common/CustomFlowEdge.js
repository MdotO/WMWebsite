import React from 'react';
import { getBezierPath, EdgeLabelRenderer, BaseEdge } from 'reactflow';
import { Button } from '@mui/material';
import { ArrowForward, ArrowBack, ArrowDownward, ArrowUpward } from '@mui/icons-material';

const getArrowIcon = (sourceY, targetY, sourceX, targetX) => {
  const dx = Math.abs(targetX - sourceX);
  const dy = Math.abs(targetY - sourceY);

  if (dy > dx/2) {
    return targetY > sourceY ? <ArrowDownward /> : <ArrowUpward />;
  }
  return targetX > sourceX ? <ArrowForward /> : <ArrowBack />;
};

const CustomFlowEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
  data,
}) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const onEdgeClick = (evt) => {
    evt.stopPropagation();
    if (data && data.onClick) {
      data.onClick(id);
    }
  };

  return (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} style={{ stroke: '#1976d2', strokeWidth: 3 }} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: 'all',
          }}
          className="nodrag nopan"
        >
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={onEdgeClick}
            sx={{
              borderRadius: '50%',
              width: 40,
              height: 40,
              minWidth: 40,
              p: 0,
              boxShadow: 3,
            }}
          >
            {getArrowIcon(sourceY, targetY, sourceX, targetX)}
          </Button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomFlowEdge; 