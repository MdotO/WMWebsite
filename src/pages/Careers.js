import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
} from '@mui/material';
import {
  Work,
  LocationOn,
  School,
  LocalHospital,
  DirectionsCar,
  Restaurant,
  FilterList,
  TrendingUp,
  Security,
} from '@mui/icons-material';
import { siteContent } from '../data/siteContent';
import { 
  FeatureBanner, 
  SectionHeader, 
  JobCard 
} from '../components/common';
import { imageAssets } from '../data/imageAssets';

const Careers = () => {
  const { careers } = siteContent;
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Engineering', 'Operations', 'Compliance', 'Laboratory Services'];
  
  const benefits = [
    {
      icon: <LocalHospital color="primary" />,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision insurance plus wellness programs"
    },
    {
      icon: <School color="primary" />,
      title: "Professional Development", 
      description: "Continuing education reimbursement and training programs"
    },
    {
      icon: <DirectionsCar color="primary" />,
      title: "Flexible Work",
      description: "Supportive scheduling that fits your life — with shift options and a team that values work-life balance"
    },
    {
      icon: <TrendingUp color="primary" />,
      title: "Growth Opportunities",
      description: "Clear career advancement paths and leadership development"
    },
    {
      icon: <Security color="primary" />,
      title: "Financial Security",
      description: "Competitive salary, 401(k) matching, and performance bonuses"
    },
  ];

  const filteredJobs = selectedDepartment === 'All' 
    ? careers 
    : careers.filter(job => job.department === selectedDepartment);

  const handleTabChange = (event, newValue) => {
    setSelectedDepartment(departments[newValue]);
  };

  return (
    <Box>
      {/* Hero Section */}
      <FeatureBanner
        title="Join Our Mission"
        subtitle="Building the Future of Water Management"
        description="Join a team of passionate professionals committed to environmental stewardship and innovative water solutions."
        backgroundImage={imageAssets.hero.careers}
        primaryAction={{
          text: "View Open Positions",
          onClick: () => window.scrollTo({ 
            top: document.getElementById('positions')?.offsetTop - 100, 
            behavior: 'smooth' 
          }),
        }}
        secondaryAction={{
          text: "Learn About Benefits",
          onClick: () => window.scrollTo({ 
            top: document.getElementById('benefits')?.offsetTop - 100, 
            behavior: 'smooth' 
          }),
        }}
      />

      {/* Why Work With Us Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <SectionHeader
          title="Why John P. Williams Plant?"
          subtitle="More than just a job - it's a mission"
        />
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card 
              sx={{ 
                p: 3, 
                textAlign: 'center', 
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
                Make an Impact
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Work on projects that directly contribute to environmental protection and sustainable water management for communities worldwide.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card 
              sx={{ 
                p: 3, 
                textAlign: 'center', 
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
                Innovation-Driven
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Be part of cutting-edge research and development in water treatment technologies and sustainable engineering solutions.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card 
              sx={{ 
                p: 3, 
                textAlign: 'center', 
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
                Growth Opportunities
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Advance your career with mentorship programs, professional development, and opportunities to lead groundbreaking projects.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Benefits Section */}
      <Box sx={{ backgroundColor: 'background.default', py: 10 }} id="benefits">
        <Container maxWidth="lg">
          <SectionHeader
            title="Employee Benefits"
            subtitle="We invest in our team's success and well-being"
          />
          
          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card 
                  sx={{ 
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: 'primary.light',
                      borderRadius: '50%',
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 60,
                      height: 60,
                      mb: 2,
                    }}
                  >
                    {benefit.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Open Positions Section */}
      <Container maxWidth="lg" sx={{ py: 10 }} id="positions">
        <SectionHeader
          title="Open Positions"
          subtitle="Find your next opportunity"
          description="We're always looking for talented individuals who share our passion for environmental stewardship and innovation."
        />

        {/* Department Filter Tabs */}
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
          <Tabs
            value={departments.indexOf(selectedDepartment)}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '1rem',
              },
            }}
          >
            {departments.map((dept, index) => (
              <Tab key={index} label={dept} />
            ))}
          </Tabs>
        </Box>

        {/* Job Listings */}
        <Grid container spacing={4}>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Grid item xs={12} lg={6} key={job.id}>
                <JobCard
                  title={job.title}
                  department={job.department}
                  location={job.location}
                  type={job.type}
                  description={job.description}
                  requirements={job.requirements}
                  applicationEmail="careers@jpwilliams.com"
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Card sx={{ p: 6, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  No positions available in {selectedDepartment}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Check back soon or explore other departments for opportunities.
                </Typography>
              </Card>
            </Grid>
          )}
        </Grid>

        {/* General Application CTA */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Card sx={{ p: 4, backgroundColor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Don't See the Right Position?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9, color: 'white' }}>
              We're always interested in connecting with talented professionals. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="mailto:careers@jpwilliams.com?subject=General Application"
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.9)',
                },
              }}
            >
              Submit General Application
            </Button>
          </Card>
        </Box>
      </Container>

      {/* Company Culture Section */}
      <Box sx={{ backgroundColor: 'secondary.main', color: 'white', py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 600, color: 'black' }}>
                Our Culture
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                At John P. Williams Plant, we foster an environment of collaboration, innovation, and environmental responsibility.
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <Work sx={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Collaborative Environment"
                    primaryTypographyProps={{ sx: { color: 'black' } }}
                    secondary="Work with diverse teams on challenging projects"
                    secondaryTypographyProps={{ sx: { color: 'rgba(255,255,255,0.7)' } }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <School sx={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Continuous Learning"
                    primaryTypographyProps={{ sx: { color: 'black' } }}
                    secondary="Ongoing training and development opportunities"
                    secondaryTypographyProps={{ sx: { color: 'rgba(255,255,255,0.7)' } }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <LocationOn sx={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Work-Life Balance"
                    primaryTypographyProps={{ sx: { color: 'black' } }}
                    secondary="Flexible schedules and remote work options"
                    secondaryTypographyProps={{ sx: { color: 'rgba(255,255,255,0.7)' } }}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Card sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h4" color="primary" sx={{ fontWeight: 700, mb: 1 }}>
                      4.8/5
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Employee Satisfaction
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h4" color="primary" sx={{ fontWeight: 700, mb: 1 }}>
                      95%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Retention Rate
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h4" color="primary" sx={{ fontWeight: 700, mb: 1 }}>
                      50+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Training Hours/Year
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h4" color="primary" sx={{ fontWeight: 700, mb: 1 }}>
                      15
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Avg. Tenure (Years)
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Careers; 