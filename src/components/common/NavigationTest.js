import React from 'react';
import { Box, Typography, Alert } from '@mui/material';
import { useLocation } from 'react-router-dom';

const NavigationTest = () => {
  const location = useLocation();
  
  return (
    <Box sx={{ p: 2 }}>
      <Alert severity="info" sx={{ mb: 2 }}>
        Navigation Test Component - Current Path: {location.pathname}
      </Alert>
      <Typography variant="body2">
        This component helps verify navigation is working correctly across all devices.
      </Typography>
    </Box>
  );
};

export default NavigationTest; 