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
  const placeholderSrc = placeholder || `https://via.placeholder.com/${width || 400}x${height || 300}/1976d2/ffffff?text=AquaFlow`;

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
          objectFit: 'cover',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
          ...sx,
        }}
        {...props}
      />
    </Box>
  );
};

export default OptimizedImage; 