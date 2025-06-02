import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
} from '@mui/material';
import {
  Work,
  LocationOn,
  Schedule,
  CheckCircle,
  Email,
} from '@mui/icons-material';

const JobCard = ({
  title,
  department,
  location,
  type,
  description,
  requirements = [],
  applicationEmail,
}) => {
  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent sx={{ p: 3, flexGrow: 1 }}>
        {/* Job Header */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            <Chip
              icon={<Work />}
              label={department}
              color="primary"
              variant="outlined"
              size="small"
            />
            <Chip
              icon={<LocationOn />}
              label={location}
              color="secondary"
              variant="outlined"
              size="small"
            />
            <Chip
              icon={<Schedule />}
              label={type}
              color="default"
              variant="outlined"
              size="small"
            />
          </Box>
        </Box>

        {/* Job Description */}
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ mb: 3, lineHeight: 1.6 }}
        >
          {description}
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Requirements */}
        {requirements.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Requirements
            </Typography>
            <List dense>
              {requirements.map((requirement, index) => (
                <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircle color="primary" sx={{ fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={requirement}
                    primaryTypographyProps={{
                      variant: 'body2',
                      color: 'text.secondary'
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        )}

        {/* Apply Button */}
        <Box sx={{ mt: 'auto', pt: 2 }}>
          <Button
            variant="contained"
            fullWidth
            startIcon={<Email />}
            href={`mailto:${applicationEmail || 'careers@aquaflowsolutions.com'}?subject=Application for ${title}`}
            sx={{
              py: 1.5,
              borderRadius: 2,
              '&:hover': {
                transform: 'translateY(-1px)',
                boxShadow: '0 6px 20px rgba(25, 118, 210, 0.3)',
              },
            }}
          >
            Apply Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard; 