import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Staff from './pages/Staff';
import AdminTeam from './pages/AdminTeam';
import Laboratoryservices from './pages/Laboratoryservices';
import OperationsTeam from './pages/OperationsTeam';
import Careers from './pages/Careers';
import OperationsFlowPage from './pages/OperationsFlowPage';
import NotFound from './pages/NotFound';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            minHeight: '100vh',
            backgroundColor: 'background.default',
          }}
        >
          <Navbar />
          <Box 
            component="main" 
            sx={{ 
              flexGrow: 1,
              pt: 0, // Remove default padding since pages handle their own spacing
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/staff/admin" element={<AdminTeam />} />
              <Route path="/staff/laboratory" element={<Laboratoryservices />} />
              <Route path="/staff/operations" element={<OperationsTeam />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/operations-flow" element={<OperationsFlowPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App; 