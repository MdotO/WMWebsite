import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import { Business, Science, Engineering, Gavel } from '@mui/icons-material';
import { siteContent } from '../data/siteContent';
import { 
  FeatureBanner, 
  SectionHeader, 
  StaffCard 
} from '../components/common';
import { imageAssets } from '../data/imageAssets';

const Staff = () => {
  const { staff } = siteContent;

  const departments = [
    {
      name: "Technology",
      icon: <Science sx={{ fontSize: 32 }} />,
      color: "primary.main",
      count: staff.filter(member => member.department === "Technology").length,
    },
    {
      name: "Operations", 
      icon: <Business sx={{ fontSize: 32 }} />,
      color: "secondary.main",
      count: staff.filter(member => member.department === "Operations").length,
    },
    {
      name: "Research",
      icon: <Engineering sx={{ fontSize: 32 }} />,
      color: "success.main", 
      count: staff.filter(member => member.department === "Research").length,
    },
    {
      name: "Compliance",
      icon: <Gavel sx={{ fontSize: 32 }} />,
      color: "warning.main",
      count: staff.filter(member => member.department === "Compliance").length,
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <FeatureBanner
        title="Our Leadership Team"
        subtitle="Meet the Experts Behind AquaFlow Solutions" 
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
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <SectionHeader
          title="Our Departments"
          subtitle="Specialized expertise across key areas"
        />
        
        <Grid container spacing={3}>
          {departments.map((dept, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                sx={{ 
                  textAlign: 'center',
                  p: 3,
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: dept.color,
                    borderRadius: '50%',
                    width: 80,
                    height: 80,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    color: 'white',
                  }}
                >
                  {dept.icon}
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {dept.name}
                </Typography>
                <Chip 
                  label={`${dept.count} Team Member${dept.count !== 1 ? 's' : ''}`}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Staff Grid Section */}
      <Box sx={{ backgroundColor: 'background.default', py: 10 }}>
        <Container maxWidth="lg">
          <SectionHeader
            title="Meet Our Team"
            subtitle="The professionals driving our success"
            description="Our diverse team of experts combines technical excellence with environmental stewardship to deliver innovative water management solutions."
          />
          
          <Grid container spacing={4}>
            {staff.map((member) => (
              <Grid item xs={12} md={6} lg={6} key={member.id}>
                <StaffCard
                  name={member.name}
                  title={member.title}
                  image={member.image}
                  message={member.message}
                  email={member.email}
                  department={member.department}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

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
              At AquaFlow Solutions, we believe that great leadership comes from empowering our team members 
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
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                25+
              </Typography>
              <Typography variant="h6" gutterBottom>
                Years Combined Experience
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Our leadership team averages over 15 years of experience in environmental engineering, 
                water treatment, and sustainable technology development.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ backgroundColor: 'secondary.main', color: 'white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
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
                4
              </Typography>
            </Card>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Staff; 