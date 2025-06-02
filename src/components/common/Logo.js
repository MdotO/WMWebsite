import React from 'react';
import { Box, Typography } from '@mui/material';
import { Water } from '@mui/icons-material';
import { siteContent } from '../../data/siteContent';

const Logo = ({ variant = 'navbar', color = 'inherit' }) => {
  const sizes = {
    navbar: { icon: 28, text: 'h6' },
    footer: { icon: 24, text: 'h6' },
    large: { icon: 48, text: 'h4' },
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Water 
        sx={{ 
          fontSize: sizes[variant].icon,
          color: color 
        }} 
      />
      <Typography 
        variant={sizes[variant].text} 
        component="div" 
        sx={{ 
          color: color,
          fontWeight: 600,
          display: { xs: variant === 'navbar' ? 'none' : 'block', sm: 'block' }
        }}
      >
        {siteContent.company.name}
      </Typography>
    </Box>
  );
};

export default Logo; 