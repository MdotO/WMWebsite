import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Close as CloseIcon,
  Business,
  Engineering,
  ExpandMore,
  Science,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import Logo from './common/Logo';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [staffMenuAnchor, setStaffMenuAnchor] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const menuItems = [
    { label: 'Home', path: '/', exact: true },
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Operations Flow', path: '/operations-flow' },
  ];

  const staffSubItems = [
    { label: 'Overview', path: '/staff', icon: <Business /> },
    { label: 'Admin Team', path: '/staff/admin', icon: <Business /> },
    { label: 'Laboratory Team', path: '/staff/laboratory', icon: <Science /> },
    { label: 'Operations Team', path: '/staff/operations', icon: <Engineering /> },
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

  const handleStaffMenuOpen = (event) => {
    setStaffMenuAnchor(event.currentTarget);
  };

  const handleStaffMenuClose = () => {
    setStaffMenuAnchor(null);
  };

  const isActiveRoute = (path, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const isStaffRoute = () => {
    return location.pathname.startsWith('/staff');
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
        
        {/* Staff menu in mobile drawer */}
        <ListItem disablePadding sx={{ mb: 1 }}>
          <Button
            fullWidth
            onClick={handleDrawerToggle}
            sx={{
              justifyContent: 'flex-start',
              py: 1.5,
              px: 2,
              borderRadius: 2,
              backgroundColor: isStaffRoute() ? 'primary.light' : 'transparent',
              color: isStaffRoute() ? 'white' : 'text.primary',
              fontWeight: isStaffRoute() ? 600 : 400,
              '&:hover': {
                backgroundColor: isStaffRoute() ? 'primary.main' : 'primary.light',
                color: 'white',
              },
            }}
            component={Link}
            to="/staff"
          >
            Overview
          </Button>
        </ListItem>
        
        {/* Staff sub-items in mobile */}
        {isStaffRoute() && staffSubItems.slice(1).map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 1, pl: 4 }}>
            <Button
              component={Link}
              to={item.path}
              fullWidth
              onClick={handleDrawerToggle}
              sx={{
                justifyContent: 'flex-start',
                py: 1,
                px: 2,
                borderRadius: 2,
                backgroundColor: location.pathname === item.path ? 'primary.light' : 'transparent',
                color: location.pathname === item.path ? 'white' : 'text.primary',
                fontWeight: location.pathname === item.path ? 600 : 400,
                fontSize: '0.9rem',
                '&:hover': {
                  backgroundColor: location.pathname === item.path ? 'primary.main' : 'primary.light',
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
              
              {/* Staff dropdown menu */}
              <Button
                color="inherit"
                onClick={handleStaffMenuOpen}
                endIcon={<ExpandMore />}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  backgroundColor: isStaffRoute() ? 'rgba(255,255,255,0.15)' : 'transparent',
                  fontWeight: isStaffRoute() ? 600 : 400,
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
                    width: isStaffRoute() ? '80%' : '0%',
                    height: 2,
                    backgroundColor: 'white',
                    transition: 'width 0.3s ease-in-out',
                  },
                }}
              >
                Staff
              </Button>
              
              <Menu
                anchorEl={staffMenuAnchor}
                open={Boolean(staffMenuAnchor)}
                onClose={handleStaffMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                sx={{
                  '& .MuiPaper-root': {
                    backgroundColor: 'background.paper',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                    borderRadius: 2,
                    mt: 1,
                  },
                }}
              >
                {staffSubItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    component={Link}
                    to={item.path}
                    onClick={handleStaffMenuClose}
                    sx={{
                      py: 1.5,
                      px: 2,
                      minWidth: 200,
                      backgroundColor: location.pathname === item.path ? 'primary.light' : 'transparent',
                      color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                      fontWeight: location.pathname === item.path ? 600 : 400,
                      '&:hover': {
                        backgroundColor: location.pathname === item.path ? 'primary.light' : 'action.hover',
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      {item.icon}
                    </ListItemIcon>
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
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