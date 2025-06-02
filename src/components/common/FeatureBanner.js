import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
} from '@mui/material';

const FeatureBanner = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  backgroundColor = 'primary.main',
  textColor = 'white',
  overlay = true,
  height = 'auto',
}) => {
  return (
    <Box
      sx={{
        backgroundColor: backgroundImage ? 'transparent' : backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        py: { xs: 8, md: 12 },
        minHeight: height,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Overlay */}
      {overlay && backgroundImage && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(25, 118, 210, 0.7)',
            zIndex: 1,
          }}
        />
      )}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8} lg={6}>
            <Box sx={{ color: textColor }}>
              {/* Subtitle */}
              {subtitle && (
                <Typography
                  variant="overline"
                  sx={{
                    display: 'block',
                    mb: 1,
                    fontSize: '1rem',
                    fontWeight: 600,
                    letterSpacing: 1,
                    opacity: 0.9,
                  }}
                >
                  {subtitle}
                </Typography>
              )}

              {/* Title */}
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                {title}
              </Typography>

              {/* Description */}
              {description && (
                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    lineHeight: 1.5,
                    maxWidth: '600px',
                  }}
                >
                  {description}
                </Typography>
              )}

              {/* Action Buttons */}
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {primaryAction && (
                  <Button
                    variant="contained"
                    size="large"
                    onClick={primaryAction.onClick}
                    sx={{
                      backgroundColor: 'white',
                      color: 'primary.main',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                      },
                    }}
                  >
                    {primaryAction.text}
                  </Button>
                )}

                {secondaryAction && (
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={secondaryAction.onClick}
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        borderColor: 'white',
                      },
                    }}
                  >
                    {secondaryAction.text}
                  </Button>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureBanner; 