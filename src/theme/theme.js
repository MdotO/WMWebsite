import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Classic blue
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0288d1', // Complementary blue
      light: '#03dac6',
      dark: '#00695c',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f7fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#546e7a',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#ffffff',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#1976d2',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#1976d2',
    },
    h3_white: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#ffffff',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#2c3e50',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#2c3e50',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: 12,
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          transition: 'all 0.2s ease-in-out',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          transition: 'transform 0.3s ease-in-out',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          transition: 'box-shadow 0.2s ease-in-out',
        },
      },
    },
  },
});

export default theme; 