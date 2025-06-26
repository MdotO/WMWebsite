import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
} from '@mui/material';
import { Business, Computer, Engineering, ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { siteContent } from '../data/siteContent';
import { 
  FeatureBanner, 
  SectionHeader
} from '../components/common';
import { imageAssets } from '../data/imageAssets';

const Staff = () => {
  const { departments } = siteContent;
  const navigate = useNavigate();

  const departmentData = [
    {
      key: 'admin',
      name: departments.admin.name,
      description: departments.admin.description,
      icon: <Business sx={{ fontSize: 32 }} />,
      color: "primary.main",
      count: departments.admin.staff.length,
    },
    {
      key: 'it',
      name: departments.it.name,
      description: departments.it.description,
      icon: <Computer sx={{ fontSize: 32 }} />,
      color: "secondary.main",
      count: departments.it.staff.length,
    },
    {
      key: 'operations',
      name: departments.operations.name,
      description: departments.operations.description,
      icon: <Engineering sx={{ fontSize: 32 }} />,
      color: "success.main",
      count: departments.operations.staff.length,
    },
  ];

  const handleDepartmentClick = (departmentKey) => {
    navigate(`/staff/${departmentKey}`);
  };

  return (
    <Box>
      {/* Hero Section */}
      <FeatureBanner
        title="Our Leadership Team"
        subtitle="Meet the Experts Behind John P. Williams Plant" 
        description="Our experienced team of professionals brings together decades of expertise in water management, environmental science, and sustainable technology."
        backgroundImage={imageAssets.hero.staff}
        primaryAction={{
          text: "Join Our Team",
          onClick: () => window.location.href = '/careers',
        }}
        secondaryAction={{
          text: "Contact Leadership",
          onClick: () => window.location.href = '/about#contact',
        }}
      />

      {/* Department Overview */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <SectionHeader
          title="Our Departments"
          subtitle="Specialized expertise across key areas"
          description="Click on any department to meet the team members and learn about their roles and expertise."
        />
        
        <Grid container spacing={4}>
          {departmentData.map((dept, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  textAlign: 'center',
                  p: 4,
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 32px rgba(0,0,0,0.2)',
                  },
                }}
                onClick={() => handleDepartmentClick(dept.key)}
              >
                <Box
                  sx={{
                    backgroundColor: dept.color,
                    borderRadius: '50%',
                    width: 100,
                    height: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                    color: 'white',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  {dept.icon}
                </Box>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                  {dept.name}
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  {dept.description}
                </Typography>
                <Chip 
                  label={`${dept.count} Team Member${dept.count !== 1 ? 's' : ''}`}
                  size="medium"
                  color="primary"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                {/* <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{
                    mt: 2,
                    '&:hover': {
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  Meet the Team
                </Button> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Leadership Philosophy Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <SectionHeader
              title="Our Leadership Philosophy"
              subtitle="Empowering Excellence Through Collaboration"
              align="left"
            />
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
              At John P. Williams Plant, we believe that great leadership comes from empowering our team members 
              to innovate, collaborate, and excel in their respective fields. Our flat organizational structure 
              encourages open communication and rapid decision-making.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              Each member of our leadership team brings unique expertise and perspective, creating a 
              well-rounded approach to tackling the complex challenges in water waste management. 
              Together, we foster a culture of continuous learning and environmental responsibility.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                p: 4,
                backgroundColor: 'primary.main',
                color: 'white',
                textAlign: 'center',
              }}
            >
              <Typography variant="h3_white" gutterBottom sx={{ fontWeight: 700 }}>
              40+
              </Typography>
              <Typography variant="h6" gutterBottom>
                Years Combined Experience
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Our team brings decades of practical experience in environmental engineering, water and wastewater treatment, sludge handling, and developing sustainable, real-world solutions for modern utilities.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ backgroundColor: 'secondary.main', color: 'white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3_white" gutterBottom sx={{ fontWeight: 600 }}>
            Want to Join Our Team?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            We're always looking for talented professionals who share our passion for environmental stewardship and innovation.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Card sx={{ p: 2, minWidth: 200 }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Current Openings
              </Typography>
              <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }}>
                1
              </Typography>
            </Card>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Staff; 