import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import { Water, Nature, Engineering, ArrowForward, Public } from '@mui/icons-material';
import { siteContent } from '../data/siteContent';
import { 
  FeatureBanner, 
  ServiceCard, 
  SectionHeader,
  OptimizedImage 
} from '../components/common';

const Home = () => {
  const { home, company } = siteContent;

  const services = [
    {
      title: "Water Treatment",
      description: "Advanced integrated water treatment systems combining mechanical systems with biological processes to achieve efficient, sustainable purification that meets stringent environmental standards.",
      icon: <Water sx={{ fontSize: 32 }} />,
      iconColor: 'primary.main',
    },
    {
      title: "Environmental Compliance",
      description: "Ensuring all water treatment operations systematically meet, verify, and exceed rigorous environmental compliance standards while achieving measurable sustainability performance benchmarks.",
      icon: <Nature sx={{ fontSize: 32 }} />,
      iconColor: 'primary.main',
    },
    {
      title: "Public Safeguard",
      description: "Ensuring uninterrupted wastewater treatment to protect the city of Portage's public health, residential sanitation, and environmental compliance through reliable 24/7 operations.",
      icon: <Public sx={{ fontSize: 32 }} />,
      iconColor: 'primary.main',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <FeatureBanner
        title={home.hero.title}
        description={home.hero.subtitle}
        backgroundImage={home.hero.backgroundImage}
        primaryAction={{
          text: "Explore Our Solutions",
          onClick: () => window.scrollTo({ 
            top: document.getElementById('services')?.offsetTop - 100, 
            behavior: 'smooth' 
          }),
        }}
        secondaryAction={{
          text: "Contact Us Today",
          onClick: () => window.location.href = '/about#contact',
        }}
      />

      {/* Services Overview Section */}
      <Container maxWidth="lg" sx={{ py: 10 }} id="services">
        <SectionHeader
          title="Our Expertise"
          subtitle="Comprehensive waste water management solutions"
          description="At the John P. Williams Plant, we blend biological insight with mechanical precision to protect our community’s water. Every process — from sludge handling to nutrient removal — is driven by a commitment to sustainability, public health, and operational excellence."
        />
        
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                iconColor={service.iconColor}
                featured={service.featured}
                onAction={() => {
                  // Navigate to about page for more details
                  window.location.href = '/about';
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Statistics Section */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} textAlign="center">
            <Grid item xs={12} md={3}>
              <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                30+
              </Typography>
              <Typography variant="h6">
                Years of Excellence
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                4M+
              </Typography>
              <Typography variant="h6">
                Gallons Treated Daily
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                100%
              </Typography>
              <Typography variant="h6">
                Compliance rate
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                95.7% Score
              </Typography>
              <Typography variant="h6">
                IWEA Lab Excellence Award 2025
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CEO Message Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <SectionHeader
          title="Leadership Message"
          subtitle="A word from our Mayor"
        />
        
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', lg: 'row' }, 
            alignItems: 'center', 
            gap: 6,
            backgroundColor: 'background.paper',
            borderRadius: 3,
            p: { xs: 4, md: 6 },
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          }}
        >
          <Box sx={{ flex: { lg: '0 0 300px' } }}>
            <OptimizedImage
              src={home.ceoMessage.image}
              alt={home.ceoMessage.name}
              width={300}
              height={300}
              sx={{
                borderRadius: '50%',
                border: '6px solid',
                borderColor: 'primary.main',
              }}
            />
          </Box>
          
          <Box sx={{ flex: 1, textAlign: { xs: 'center', lg: 'left' } }}>
            <Typography 
              variant="h4"
              gutterBottom 
              sx={{ fontWeight: 600, color: 'primary.main' }}
            >
              {home.ceoMessage.name}
            </Typography>
            <Typography 
              variant="subtitle1" 
              color="text.secondary" 
              gutterBottom
              sx={{ fontWeight: 500, mb: 3 }}
            >
              {home.ceoMessage.title}
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                fontStyle: 'italic',
                lineHeight: 1.6,
                color: 'text.primary',
                position: 'relative',
              }}
            >
              {home.ceoMessage.message}
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Call to Action Section */}
      <Box sx={{ backgroundColor: 'background.default', py: 10 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
            Ready to Elevate Your City's Water Treatment?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Here, we serve the community with trusted, sustainable, and expertly engineered and bilogocally focussed wastewater solutions — helping protect public health and the environment every single day.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              href="/about"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(25,118,210,0.3)',
                },
              }}
            >
              Learn More About Us
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/careers"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Join Our Team
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 