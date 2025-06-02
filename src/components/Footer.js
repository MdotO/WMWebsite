import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  Twitter,
  Facebook,
  ArrowUpward,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { siteContent } from '../data/siteContent';
import Logo from './common/Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
        position: 'relative',
      }}
    >
      {/* Scroll to Top Button */}
      <IconButton
        onClick={scrollToTop}
        sx={{
          position: 'absolute',
          top: -25,
          right: 50,
          backgroundColor: 'secondary.main',
          color: 'white',
          '&:hover': {
            backgroundColor: 'secondary.dark',
            transform: 'translateY(-2px)',
          },
        }}
      >
        <ArrowUpward />
      </IconButton>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Logo variant="footer" color="inherit" />
            <Typography variant="body2" sx={{ mt: 2, mb: 3, opacity: 0.9 }}>
              {siteContent.company.tagline}
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6, opacity: 0.8 }}>
              Leading the industry in sustainable water waste management solutions since 2015.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                color="inherit" 
                size="small"
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton 
                color="inherit" 
                size="small"
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton 
                color="inherit" 
                size="small"
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Facebook />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Email sx={{ mr: 2, fontSize: 20, opacity: 0.8 }} />
              <Link 
                href={`mailto:${siteContent.company.contact.email}`} 
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'secondary.light',
                    textDecoration: 'underline',
                  },
                }}
              >
                {siteContent.company.contact.email}
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Phone sx={{ mr: 2, fontSize: 20, opacity: 0.8 }} />
              <Typography variant="body2">
                {siteContent.company.contact.phone}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <LocationOn sx={{ mr: 2, fontSize: 20, opacity: 0.8, mt: 0.5 }} />
              <Typography variant="body2">
                {siteContent.company.contact.address}
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link 
                component={RouterLink}
                to="/about" 
                color="inherit" 
                sx={{ 
                  textDecoration: 'none',
                  py: 0.5,
                  '&:hover': {
                    color: 'secondary.light',
                    paddingLeft: 1,
                    transition: 'all 0.2s ease-in-out',
                  },
                }}
              >
                About Us
              </Link>
              <Link 
                component={RouterLink}
                to="/staff" 
                color="inherit" 
                sx={{ 
                  textDecoration: 'none',
                  py: 0.5,
                  '&:hover': {
                    color: 'secondary.light',
                    paddingLeft: 1,
                    transition: 'all 0.2s ease-in-out',
                  },
                }}
              >
                Our Team
              </Link>
              <Link 
                component={RouterLink}
                to="/careers" 
                color="inherit" 
                sx={{ 
                  textDecoration: 'none',
                  py: 0.5,
                  '&:hover': {
                    color: 'secondary.light',
                    paddingLeft: 1,
                    transition: 'all 0.2s ease-in-out',
                  },
                }}
              >
                Careers
              </Link>
              <Link 
                href="/about#contact" 
                color="inherit" 
                sx={{ 
                  textDecoration: 'none',
                  py: 0.5,
                  '&:hover': {
                    color: 'secondary.light',
                    paddingLeft: 1,
                    transition: 'all 0.2s ease-in-out',
                  },
                }}
              >
                Contact Us
              </Link>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.2)' }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2025 {siteContent.company.name}. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.6, mt: 1 }}>
            Built with React & Material-UI | Designed for Environmental Excellence
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 