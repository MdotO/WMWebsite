import React from 'react';
import { Handle, Position } from 'reactflow';
import { Card, Box, Typography, Avatar } from '@mui/material';

const handleStyle = { background: '#555', width: 8, height: 8, zIndex: 10 };

const CustomFlowNode = ({ data, selected }) => (
  <Card
    sx={{
      width: 320,
      height: 140,
      borderRadius: 4,
      boxShadow: selected ? '0 0 20px #1976d2' : '0 4px 12px rgba(0,0,0,0.1)',
      border: `3px solid ${selected ? '#1976d2' : '#90caf9'}`,
      background: selected ? 'linear-gradient(135deg, #e3f2fd 0%, #fff 70%)' : '#fff',
      transition: 'all 0.3s ease',
      display: 'flex',
      overflow: 'hidden',
      position: 'relative',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        border: `3px solid ${selected ? '#1976d2' : '#1565c0'}`,
      },
    }}
    tabIndex={0}
  >
    <Box
      sx={{
        flex: '0 0 120px',
        background: 'linear-gradient(135deg, #1976d2 60%, #42a5f5 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${data.image})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#fff',
          border: '2px solid #42a5f5',
          borderRadius: '4px',
        }}
      />
    </Box>
    <Box sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography variant="h6" sx={{ fontWeight: 700, color: '#1976d2', mb: 0.5 }}>
        {data.label}
      </Typography>
      <Typography variant="body2" sx={{ color: '#546e7a', fontSize: '0.875rem' }}>
        {data.description}
      </Typography>
    </Box>
    <Handle type="target" position={Position.Top} id="top-target" style={{ ...handleStyle, left: '35%' }} />
    <Handle type="source" position={Position.Top} id="top-source" style={{ ...handleStyle, left: '65%' }} />
    <Handle type="target" position={Position.Bottom} id="bottom-target" style={{ ...handleStyle, left: '35%' }} />
    <Handle type="source" position={Position.Bottom} id="bottom-source" style={{ ...handleStyle, left: '65%' }} />
    <Handle type="target" position={Position.Left} id="left-target" style={{ ...handleStyle, top: '35%' }} />
    <Handle type="source" position={Position.Left} id="left-source" style={{ ...handleStyle, top: '65%' }} />
    <Handle type="target" position={Position.Right} id="right-target" style={{ ...handleStyle, top: '35%' }} />
    <Handle type="source" position={Position.Right} id="right-source" style={{ ...handleStyle, top: '65%' }} />
  </Card>
);

export default CustomFlowNode;