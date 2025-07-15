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
        subtitle="Meet our Lab Team Head"
        description="Our Laboratory Services team leads quality assurance and environmental monitoring through rigorous testing data analysis and compliance verification ensuring all treated water meets strict safety and performance standards."
        backgroundImage={imageAssets.backgrounds.laboratory}
        primaryAction={{
          text: "Back to Departments",
          onClick: () => navigate('/staff'),
        }}
        secondaryAction={{
          text: "Contact our Lab Team",
          onClick: () => window.location.href = '/about#contact',
        }}
      />

      {/* Department Head Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <SectionHeader
          title="Department Leadership"
          subtitle="Meet our Lab Supervisor"
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
            title="Lab Team"
            subtitle="Science professionals ensuring water quality through precision and analysis"
            description="Our lab team performs rigorous testing analyzes key water parameters and delivers critical data to support safe sustainable and compliant water treatment operations."
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
              title="Laboratory Excellence"
              subtitle="Precision in Water Quality Analysis"
              align="left"
            />
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
              Our Laboratory Services team ensures the integrity of every treatment process through rigorous testing, data validation, and compliance monitoring. From nutrient profiling to microbiological analysis, we provide the scientific backbone of our plant’s performance.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              Through continuous sampling, standardized protocols, and advanced instrumentation, our lab professionals deliver accurate, timely insights that guide operational decisions and safeguard public and environmental health.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4, backgroundColor: 'secondary.main', color: 'white', borderRadius: 3 }}>
              <Typography variant="h3_white" gutterBottom sx={{ fontWeight: 600 }}>
                Laboratory Focus Areas
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <Typography component="li" sx={{ mb: 1, color: 'white' }}>
                  Real-time Water Quality Monitoring
                </Typography>
                <Typography component="li" sx={{ mb: 1, color: 'white' }}>
                  Data-Driven Process Optimization
                </Typography>
                <Typography component="li" sx={{ mb: 1, color: 'white' }}>
                  Advanced Instrumentation & Methods
                </Typography>
                <Typography component="li" sx={{ mb: 1, color: 'white' }}>
                  Sampling & Regulatory Compliance
                </Typography>
                <Typography component="li" sx={{ mb: 1, color: 'white' }}>
                  Research & Method Development
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