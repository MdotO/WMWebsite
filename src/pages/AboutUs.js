import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  CheckCircle,
  Nature,
  Engineering,
  Science,
  Groups,
  Biotech,
} from '@mui/icons-material';
import { siteContent } from '../data/siteContent';
import { 
  FeatureBanner, 
  SectionHeader, 
  ContactForm,
  OptimizedImage 
} from '../components/common';
import { imageAssets } from '../data/imageAssets';

const AboutUs = () => {
  const { aboutUs, company } = siteContent;

  const values = [
    {
      icon: <Nature sx={{ fontSize: 40 }} />,
      title: "Sustainability in Action",
      description: "We prioritize environmentally responsible practices — from phosphorus capture and ammonia reduction to solar-powered sludge treatment — ensuring long-term ecological balance."
    },
    {
      icon: <Biotech sx={{ fontSize: 40 }} />,
      title: "Biology-Led Innovation",
      description: "Our work revolves around understanding the living ecosystem within our tanks. From nutrient-hungry microbes to sludge age control, biology shapes every decision we make."
    },
    {
      icon: <Science sx={{ fontSize: 40 }} />,
      title: "Knowledge and Adaptability",
      description: "We respond to data, trends, and microscopic cues — adjusting operations daily to match the plant’s biological and hydraulic behavior."
    },
    {
      icon: <Groups sx={{ fontSize: 40 }} />,
      title: "Community-Focused Integrity",
      description: "With public service at the core, we maintain transparency, consistency, and accountability in every gallon treated — because we serve people, not just process water."
    },
  ];

  const achievements = [
    "ISO 14001 Environmental Management Certification",
    "EPA Excellence in Environmental Stewardship Award",
    "Leading provider of municipal water treatment solutions",
    "Zero environmental violations in company history",
    "Partnerships with top environmental research institutions"
  ];

  return (
    <Box>
      {/* Hero Section */}
      <FeatureBanner
        title={aboutUs.title}
        subtitle="Excellence in Water Management Since 1970"
        description="Discover our commitment to innovation, sustainability, and environmental protection."
        backgroundImage={aboutUs.backgroundImage}
        primaryAction={{
          text: "Get In Touch",
          onClick: () => window.scrollTo({ 
            top: document.getElementById('contact')?.offsetTop - 100, 
            behavior: 'smooth' 
          }),
        }}
        secondaryAction={{
          text: "Meet Our Team",
          onClick: () => window.location.href = '/staff',
        }}
      />

      {/* Company Story Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <SectionHeader
              title="Our Story"
              subtitle="Building a Sustainable Future"
              description={aboutUs.description}
              align="left"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <OptimizedImage
              src={imageAssets.backgrounds.laboratory}
              alt="John P. Williams Plant Laboratory"
              sx={{
                borderRadius: 3,
                boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Mission and Vision Section */}
      <Box sx={{ backgroundColor: 'background.default', py: 10 }}>
        <Container maxWidth="lg">
          <SectionHeader
            title="Mission & Vision"
            subtitle="Guiding Principles That Drive Our Success"
          />
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', p: 2 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
                    Our Mission
                  </Typography>
                  <Typography variant="h6" sx={{ lineHeight: 1.6, fontStyle: 'italic' }}>
                    {aboutUs.mission}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', p: 2 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" gutterBottom color="secondary" sx={{ fontWeight: 600 }}>
                    Our Vision
                  </Typography>
                  <Typography variant="h6" sx={{ lineHeight: 1.6, fontStyle: 'italic' }}>
                    {aboutUs.vision}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Core Values Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <SectionHeader
          title="Our Core Values"
          subtitle="The principles that guide everything we do"
        />
        
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'primary.light',
                    borderRadius: '50%',
                    p: 2,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: 80,
                    height: 80,
                  }}
                >
                  {value.icon}
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Achievements Section */}
      <Box sx={{ backgroundColor: 'white', color: 'white', py: 10 }}>
        <Container maxWidth="lg">
          <SectionHeader
            title="Our Achievements"
            subtitle="Recognition and Certifications"
            align="center"
          />
          
          <Grid container spacing={3}>
            {achievements.map((achievement, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CheckCircle sx={{ color: 'secondary.light', fontSize: 24 }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {achievement}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxWidth="lg" sx={{ py: 10 }} id="contact">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <SectionHeader
              title="Contact Information"
              subtitle="Get in touch with our team"
              align="left"
            />
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                Address
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                {company.contact.address}
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                Phone
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                {company.contact.phone}
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                Email
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {company.contact.email}
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <ContactForm
              title="Send us a Message"
              onSubmit={(data) => {
                console.log('Contact form submitted:', data);
                // Here you would typically send the data to your backend
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs; 