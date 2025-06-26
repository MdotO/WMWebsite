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

const OperationsTeam = () => {
  const { departments } = siteContent;
  const navigate = useNavigate();
  const operationsDept = departments.operations;

  return (
    <Box>
      {/* Hero Section */}
      <FeatureBanner
        title={operationsDept.name}
        subtitle="Field Operations and Project Management"
        description="Meet our operations team that manages field operations, project execution, and client relationships."
        backgroundImage={imageAssets.backgrounds.waterPattern}
        primaryAction={{
          text: "Back to Departments",
          onClick: () => navigate('/staff'),
        }}
        secondaryAction={{
          text: "Contact Operations Team",
          onClick: () => window.location.href = '/about#contact',
        }}
      />

      {/* Department Head Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <SectionHeader
          title="Department Leadership"
          subtitle="Meet our Operations Team Head"
        />
        
        <DepartmentHeadCard
          name={operationsDept.head.name}
          title={operationsDept.head.title}
          image={operationsDept.head.image}
          message={operationsDept.head.message}
          email={operationsDept.head.email}
        />
      </Container>

      {/* Team Members Section */}
      <Box sx={{ backgroundColor: 'background.default', py: 10 }}>
        <Container maxWidth="lg">
          <SectionHeader
            title="Operations Team"
            subtitle="Field experts ensuring operational excellence"
            description="Our operations team is responsible for executing projects on the ground, managing client relationships, and ensuring all field activities meet our high standards."
          />
          
          <Grid container spacing={4}>
            {operationsDept.staff.map((member) => (
              <Grid item xs={12} md={6} lg={4} key={member.id}>
                <StaffCard
                  name={member.name}
                  title={member.title}
                  image={member.image}
                  message={member.message}
                  email={member.email}
                  department={operationsDept.name}
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
              title="Operational Excellence"
              subtitle="Delivering Results on the Ground"
              align="left"
            />
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
              Our operations team is the backbone of John P. Williams Plant, translating our strategic 
              vision into tangible results. We manage complex water infrastructure projects, 
              coordinate with multiple stakeholders, and ensure every project meets our quality standards.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              From project planning to field execution, our operations professionals work tirelessly 
              to deliver solutions that protect our environment while meeting the needs of our 
              communities and clients.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4, backgroundColor: 'success.main', color: 'white', borderRadius: 3 }}>
              <Typography variant="h3_white" gutterBottom sx={{ fontWeight: 600 }}>
                Operational Focus Areas
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <Typography component="li" sx={{ mb: 1, color: 'white' }}>
                  Project management and execution
                </Typography>
                <Typography component="li" sx={{ mb: 1, color: 'white' }}>
                  Field operations and safety
                </Typography>
                <Typography component="li" sx={{ mb: 1, color: 'white' }}>
                  Quality assurance and control
                </Typography>
                <Typography component="li" sx={{ mb: 1, color: 'white' }}>
                  Client relationship management
                </Typography>
                <Typography component="li" sx={{ mb: 1, color: 'white' }}>
                  Regulatory compliance and reporting
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

export default OperationsTeam; 