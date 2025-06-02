import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Fade,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '../data/siteContent';
import Logo from './common/Logo';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const menuItems = [
    { label: 'Home', path: '/', exact: true },
    { label: 'About Us', path: '/about' },
    { label: 'Administration Staff', path: '/staff' },
    { label: 'Careers', path: '/careers' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActiveRoute = (path, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const drawer = (
    <Box sx={{ width: 280, height: '100%' }}>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo variant="footer" color="primary.main" />
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ px: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
            <Button
              component={Link}
              to={item.path}
              fullWidth
              onClick={handleDrawerToggle}
              sx={{
                justifyContent: 'flex-start',
                py: 1.5,
                px: 2,
                borderRadius: 2,
                backgroundColor: isActiveRoute(item.path, item.exact) ? 'primary.light' : 'transparent',
                color: isActiveRoute(item.path, item.exact) ? 'white' : 'text.primary',
                fontWeight: isActiveRoute(item.path, item.exact) ? 600 : 400,
                '&:hover': {
                  backgroundColor: isActiveRoute(item.path, item.exact) ? 'primary.main' : 'primary.light',
                  color: 'white',
                },
              }}
            >
              {item.label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={scrolled ? 4 : 2}
        sx={{
          backgroundColor: scrolled ? 'primary.main' : 'primary.main',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Toolbar sx={{ px: { xs: 2, md: 3 } }}>
          <Box 
            component={Link} 
            to="/" 
            sx={{ 
              textDecoration: 'none', 
              color: 'inherit', 
              flexGrow: 1,
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <Logo variant="navbar" color="inherit" />
          </Box>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open navigation menu"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  color="inherit"
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    backgroundColor: isActiveRoute(item.path, item.exact) ? 'rgba(255,255,255,0.15)' : 'transparent',
                    fontWeight: isActiveRoute(item.path, item.exact) ? 600 : 400,
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.2)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: isActiveRoute(item.path, item.exact) ? '80%' : '0%',
                      height: 2,
                      backgroundColor: 'white',
                      transition: 'width 0.3s ease-in-out',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box',
            backgroundColor: 'background.paper',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 