import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { siteContent } from '../data/siteContent';
import { 
  FeatureBanner, 
  SectionHeader, 
  StaffCard,
  DepartmentHeadCard
} from '../components/common';
import { imageAssets } from '../data/imageAssets';

const ITTeam = () => {
  const { departments } = siteContent;
  const navigate = useNavigate();
  const itDept = departments.it;

  return (
    <Box>
      {/* Hero Section */}
      <FeatureBanner
        title={itDept.name}
        subtitle="Digital Innovation and System Infrastructure"
        description="Meet our IT team that drives digital transformation and technological innovation across all aspects of our water management solutions."
        backgroundImage={imageAssets.backgrounds.laboratory}
        primaryAction={{
          text: "Back to Departments",
          onClick: () => navigate('/staff'),
        }}
        secondaryAction={{
          text: "Contact IT Team",
          onClick: () => window.location.href = '/about#contact',
        }}
      />

      {/* Department Head Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <SectionHeader
          title="Department Leadership"
          subtitle="Meet our IT Team Head"
        />
        
        <DepartmentHeadCard
          name={itDept.head.name}
          title={itDept.head.title}
          image={itDept.head.image}
          message={itDept.head.message}
          email={itDept.head.email}
        />
      </Container>

      {/* Team Members Section */}
      <Box sx={{ backgroundColor: 'background.default', py: 10 }}>
        <Container maxWidth="lg">
          <SectionHeader
            title="IT Team"
            subtitle="Technology experts driving digital innovation"
            description="Our IT team develops cutting-edge software solutions, manages data infrastructure, and creates intelligent systems that optimize water treatment processes."
          />
          
          <Grid container spacing={4}>
            {itDept.staff.map((member) => (
              <Grid item xs={12} md={6} lg={4} key={member.id}>
                <StaffCard
                  name={member.name}
                  title={member.title}
                  image={member.image}
                  message={member.message}
                  email={member.email}
                  department={itDept.name}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Department Overview */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <SectionHeader
              title="Technology Excellence"
              subtitle="Innovation in Water Management"
              align="left"
            />
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
              Our IT team is at the forefront of digital transformation in water management. 
              We develop intelligent systems that provide real-time monitoring, predictive analytics, 
              and automated control for water treatment processes.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              From software development to data science, our technology professionals create 
              solutions that enhance efficiency, improve decision-making, and ensure the highest 
              standards of water quality and environmental compliance.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4, backgroundColor: 'secondary.main', color: 'white', borderRadius: 3 }}>
              <Typography variant="h3_white" gutterBottom sx={{ fontWeight: 600 }}>
                Technology Focus Areas
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <Typography component="li" sx={{ mb: 1, color: 'white' }}>
                  Real-time monitoring and control systems
                </Typography>
                <Typography component="li" sx={{ mb: 1, color: 'white' }}>
                  Data analytics and predictive maintenance
                </Typography>
                <Typography component="li" sx={{ mb: 1, color: 'white' }}>
                  IoT and sensor integration
                </Typography>
                <Typography component="li" sx={{ mb: 1, color: 'white' }}>
                  Cloud infrastructure and security
                </Typography>
                <Typography component="li" sx={{ mb: 1, color: 'white' }}>
                  Mobile applications and user interfaces
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Navigation Back */}
      <Box sx={{ backgroundColor: 'secondary.main', color: 'white', py: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            startIcon={<ArrowBack />}
            onClick={() => navigate('/staff')}
            sx={{
              backgroundColor: 'white',
              color: 'secondary.main',
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.9)',
              },
            }}
          >
            Back to All Departments
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default ITTeam; 