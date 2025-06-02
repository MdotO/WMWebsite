import React from 'react';
import {
  Box,
  Typography,
  Divider,
} from '@mui/material';

const SectionHeader = ({
  title,
  subtitle,
  description,
  align = 'center',
  variant = 'default',
}) => {
  const variants = {
    default: {
      titleVariant: 'h2',
      subtitleVariant: 'h5',
      spacing: 2,
    },
    large: {
      titleVariant: 'h1',
      subtitleVariant: 'h4',
      spacing: 3,
    },
    small: {
      titleVariant: 'h3',
      subtitleVariant: 'h6',
      spacing: 1.5,
    },
  };

  const config = variants[variant];

  return (
    <Box 
      sx={{ 
        textAlign: align,
        mb: config.spacing * 2,
        maxWidth: align === 'center' ? '800px' : 'none',
        mx: align === 'center' ? 'auto' : 0,
      }}
    >
      {/* Main Title */}
      <Typography 
        variant={config.titleVariant}
        component="h2"
        gutterBottom
        sx={{
          fontWeight: 600,
          mb: subtitle || description ? 1 : config.spacing,
        }}
      >
        {title}
      </Typography>

      {/* Subtitle */}
      {subtitle && (
        <Typography
          variant={config.subtitleVariant}
          color="text.secondary"
          gutterBottom
          sx={{
            fontWeight: 400,
            mb: description ? 1 : config.spacing,
          }}
        >
          {subtitle}
        </Typography>
      )}

      {/* Description */}
      {description && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            lineHeight: 1.6,
            mb: config.spacing,
          }}
        >
          {description}
        </Typography>
      )}

      {/* Decorative Divider */}
      {align === 'center' && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Divider 
            sx={{ 
              width: 60,
              height: 3,
              backgroundColor: 'primary.main',
              borderRadius: 2,
            }} 
          />
        </Box>
      )}
    </Box>
  );
};

export default SectionHeader; 