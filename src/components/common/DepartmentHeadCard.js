import React from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  IconButton,
  Chip,
} from '@mui/material';
import { Email, LinkedIn } from '@mui/icons-material';

const DepartmentHeadCard = ({ 
  name, 
  title, 
  image, 
  message, 
  email, 
  department,
  linkedIn 
}) => {
  const initials = name ? name.split(' ').map(n => n[0]).join('') : '';

  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Avatar
          src={image}
          sx={{
            width: 150,           // fixed width
            height: 250,          // fixed height
            borderRadius: 2,      // ✅ makes it a rounded rectangle
            fontSize: '2rem',
            backgroundColor: 'primary.main',
            border: '4px solid white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          {initials}
        </Avatar>
      </Box>

      {/* Content Section */}
      <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        {/* Name and Title */}
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
          {name}
        </Typography>
        <Typography 
          variant="h4" 
          color="primary" 
          gutterBottom
          sx={{ fontWeight: 500 }}
        >
          {title}
        </Typography>

        {/* Department Chip */}
        {department && (
          <Chip 
            label={department}
            size="small"
            sx={{ 
              mb: 2,
              backgroundColor: 'secondary.light',
              color: 'white',
            }}
          />
        )}

        {/* Personal Message */}
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ 
            fontStyle: 'italic',
            lineHeight: 1.6,
            mb: 3,
          }}
        >
          "{message}"
        </Typography>

        {/* Contact Actions */}
        {email && (
          <IconButton
            href={`mailto:${email}`}
            color="primary"
            sx={{
              backgroundColor: 'primary.light',
              color: 'white',
              '&:hover': {
                backgroundColor: 'primary.main',
                transform: 'scale(1.1)',
              },
            }}
          >
            <Email />
          </IconButton>
        )}
        
        {linkedIn && (
          <IconButton
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            sx={{
              backgroundColor: 'secondary.light',
              color: 'white',
              '&:hover': {
                backgroundColor: 'secondary.main',
                transform: 'scale(1.1)',
              },
            }}
          >
            <LinkedIn />
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
};

export default DepartmentHeadCard;