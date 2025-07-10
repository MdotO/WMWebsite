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

const AdminTeam = () => {
  const { departments } = siteContent;
  const navigate = useNavigate();
  const adminDept = departments.admin;

  return (
    <Box>
      {/* Hero Section */}
      <FeatureBanner
        title={adminDept.name}
        subtitle="Strategic Leadership and Corporate Governance"
        description="Meet our administration team that provides operational leadership and ensures smooth coordination, compliance, and support across all departments at the plant."
        backgroundImage={imageAssets.backgrounds.office}
        primaryAction={{
          text: "Back to Departments",
          onClick: () => navigate('/staff'),
        }}
        secondaryAction={{
          text: "Contact Admin Team",
          onClick: () => window.location.href = '/about#contact',
        }}
      />

      {/* Department Head Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <SectionHeader
          title="Department Leadership"
          subtitle="Meet our Administration Team Head"
        />
        
        <DepartmentHeadCard
          name={adminDept.head.name}
          title={adminDept.head.title}
          image={adminDept.head.image}
          message={adminDept.head.message}
          email={adminDept.head.email}
        />
      </Container>

      {/* Team Members Section */}
      <Box sx={{ backgroundColor: 'background.default', py: 10 }}>
        <Container maxWidth="lg">
          <SectionHeader
            title="Administration Team"
            subtitle="Strategic leaders driving organizational excellence"
            description="Our administration team ensures smooth operations, financial stability, and strategic growth while maintaining our commitment to environmental responsibility."
          />
          
          <Grid container spacing={4}>
            {adminDept.staff.map((member) => (
              <Grid item xs={12} md={6} key={member.id}>
                <StaffCard
                  name={member.name}
                  title={member.title}
                  image={member.image}
                  message={member.message}
                  email={member.email}
                  department={adminDept.name}
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
              title="Administration Excellence"
              subtitle="Strategic Leadership in Action"
              align="left"
            />
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
              Our administration team provides the strategic foundation that enables John P. Williams Plant 
              to achieve its mission of environmental excellence. We focus on sustainable growth, and operational efficiency.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              From scheduling and procurement to compliance and coordination, our administration professionals ensure that every operation runs smoothly—supporting environmental goals, plant efficiency, and community service.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4, backgroundColor: 'primary.main', color: 'white', borderRadius: 3 }}>
              <Typography variant="h3_white" gutterBottom sx={{ fontWeight: 600 }}>
                Key Responsibilities
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <Typography component="li" sx={{ mb: 1, color: 'white' }}>
                  Strategic planning and corporate governance
                </Typography>
                <Typography component="li" sx={{ mb: 1, color: 'white' }}>
                  Financial management and resource allocation
                </Typography>
                <Typography component="li" sx={{ mb: 1, color: 'white' }}>
                  Compliance and regulatory oversight
                </Typography>
                <Typography component="li" sx={{ mb: 1, color: 'white' }}>
                  Organizational development and culture
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

export default AdminTeam; 