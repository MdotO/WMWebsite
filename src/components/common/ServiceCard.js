import React from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Button,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const ServiceCard = ({
  title,
  description,
  icon,
  iconColor = 'primary.main',
  actionText = 'Learn More',
  onAction,
  featured = false,
}) => {
  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        p: 2,
        border: featured ? '2px solid' : 'none',
        borderColor: featured ? 'primary.main' : 'transparent',
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
        },
      }}
    >
      {featured && (
        <Box
          sx={{
            position: 'absolute',
            top: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'primary.main',
            color: 'white',
            px: 2,
            py: 0.5,
            borderRadius: 2,
            fontSize: '0.875rem',
            fontWeight: 600,
          }}
        >
          Featured
        </Box>
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        {/* Icon */}
        <Avatar
          sx={{
            backgroundColor: iconColor,
            mx: 'auto',
            mb: 3,
            width: 80,
            height: 80,
          }}
        >
          {icon}
        </Avatar>

        {/* Title */}
        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{ fontWeight: 600, mb: 2 }}
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ 
            lineHeight: 1.6,
            mb: 3,
          }}
        >
          {description}
        </Typography>

        {/* Action Button */}
        {actionText && (
          <Button
            variant="outlined"
            endIcon={<ArrowForward />}
            onClick={onAction}
            sx={{
              mt: 'auto',
              borderRadius: 2,
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'white',
                transform: 'scale(1.05)',
              },
            }}
          >
            {actionText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard; 