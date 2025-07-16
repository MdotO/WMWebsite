import React, { useState } from 'react';
import { Box, Skeleton } from '@mui/material';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  placeholder,
  sx = {},
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Fallback placeholder image
  const placeholderSrc = placeholder || `https://via.placeholder.com/${width || 400}x${height || 300}/1976d2/ffffff?text=JohnP.WilliamsPlant`;

  return (
    <Box
      sx={{
        position: 'relative',
        width: width || '100%',
        height: height || 'auto',
        ...sx,
      }}
    >
      {isLoading && (
        <Skeleton
          variant="rectangular"
          width={width || '100%'}
          height={height || 300}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
      )}
      
      <Box
        component="img"
        src={hasError ? placeholderSrc : src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '4',
          objectFit: 'cover',
          border: '4px solid #1976d2',
          boxShadow: 3,
          animation: 'pulse 2s infinite',
          '@keyframes pulse': {
            '0%': { boxShadow: '0 0 0 0 rgba(25,118,210, 0.4)' },
            '70%': { boxShadow: '0 0 0 15px rgba(25,118,210, 0)' },
            '100%': { boxShadow: '0 0 0 0 rgba(25,118,210, 0)' },
            }
            }}
          //width: width || 140,
          //height: height || 140,
          //opacity: isLoading ? 0 : 1,
          //transition: 'opacity 0.3s ease-in-out',
        //}}
        {...props}
      />
    </Box>
  );
};

export default OptimizedImage; 