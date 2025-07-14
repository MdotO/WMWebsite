
import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, IconButton, Stack } from '@mui/material';
import { ArrowForwardIos, ArrowBackIos,  ArrowDownwardRounded, ArrowBack, ArrowForward } from '@mui/icons-material';
import { FeatureBanner, SectionHeader } from '../components/common';
import { imageAssets } from '../data/imageAssets';

const processSteps = [
  {
    id: '1',
    title: 'Influent',
    description: 'Raw wastewater entering the plant for treatment.',
    image: imageAssets.placeholders.card,
  },
  {
    id: '2',
    title: 'Preliminary Treatment',
    description: 'Removes large debris and grit from the influent.',
    image: imageAssets.placeholders.card,
  },
  {
    id: '3',
    title: 'Primary',
    description: 'Settling tanks allow solids to settle and oils to float.',
    image: imageAssets.placeholders.card,
  },
  {
    id: '4',
    title: 'Secondary',
    description: 'Further biological treatment and clarification.',
    image: imageAssets.placeholders.card,
    sideProcesses: [
      {
        title: 'Excess Water Holding',
        description: 'Temporary storage for excess inflow.',
        image: imageAssets.placeholders.card,
      },
      {
        title: 'Sludge Wasting',
        description: 'Thickens sludge before further processing.',
        image: imageAssets.placeholders.card,
      },
    ],
  },
  {
    id: '5',
    title: 'Tertiary',
    description: 'Advanced treatment for nutrient removal and polishing.',
    image: imageAssets.placeholders.card,
  },
  {
    id: '6',
    title: 'Final (UV) / Effluent',
    description: 'Disinfection (UV) and release of treated water.',
    image: imageAssets.placeholders.card,
  },
];

// Replace ArrowSVG with a styled ArrowDownward icon
const ArrowSVG = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', my: 0 }}>
    <Box sx={{ backgroundColor: 'white', borderRadius: '50%', p: 1 }}>
      <ArrowDownwardRounded sx={{ fontSize: 80, color: 'primary.main', strokeWidth: 2, stroke: '#1976d2', filter: 'drop-shadow(0 2px 6px #1976d2aa)' }} />
    </Box>
  </Box>
);

const StepCard = ({ step, isSide, onPrevSide, onNextSide, sideIndex, totalSides }) => (
  <Card
    sx={{
      minWidth: 300,
      maxWidth: 1000,
      mx: 'auto',
      my: 4,
      borderRadius: 3,
      boxShadow: 6,
      background: 'white', // Always white background
      border: '2px solid #90caf9', // Always blue border
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'stretch',
      overflow: 'hidden',
      position: 'relative',
    }}
  >
    {/* Image on the left */}
    <Box
      sx={{
        flex: { xs: '0 0 auto', md: '0 0 40%' },
        width: { xs: '100%', md: '40%' },
        minHeight: 220,
        background: 'linear-gradient(135deg, #1976d2 60%, #42a5f5 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Box
        component="img"
        src={step.image}
        alt={step.title}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </Box>
    {/* Content on the right */}
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 3, md: 5 },
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Subprocess arrows (left/right) */}
      {typeof sideIndex === 'number' && totalSides > 1 && (
        <>
          <IconButton
            onClick={onPrevSide}
            disabled={sideIndex === 0}
            color="primary"
            sx={{
              position: 'absolute',
              left: 20,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              background: 'transparent', // Remove blue background
              boxShadow: 2,
              '&:hover': { background: '#bbdefb' },
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            onClick={onNextSide}
            disabled={sideIndex === totalSides - 1}
            color="primary"
            sx={{
              position: 'absolute',
              right: 20,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              background: 'transparent', // Remove blue background
              boxShadow: 2,
              '&:hover': { background: '#bbdefb' },
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <ArrowForward />
          </IconButton>
        </>
      )}
      <Typography variant="h4" sx={{ fontWeight: 700, color: '#1976d2', mb: 2 }}>
        {step.title}
      </Typography>
      <Typography variant="body1" sx={{ color: '#546e7a', fontSize: 18, maxWidth: 500 }}>
        {step.description}
      </Typography>
      {/* Subprocess arrows for mobile (below content) */}
      {typeof sideIndex === 'number' && totalSides > 1 && (
        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', gap: 2, mt: 2 }}>
          <IconButton onClick={onPrevSide} disabled={sideIndex === 0} color="primary" sx={{ background: 'transparent' }}>
            <ArrowBack />
          </IconButton>
          <Typography variant="caption" sx={{ color: '#1976d2' }}>{`${sideIndex + 1} / ${totalSides}`}</Typography>
          <IconButton onClick={onNextSide} disabled={sideIndex === totalSides - 1} color="primary" sx={{ background: 'transparent' }}>
            <ArrowForward />
          </IconButton>
        </Box>
      )}
    </Box>
  </Card>
);

const OperationsFlowPage = () => {
  const [sideProcessIndex, setSideProcessIndex] = useState({});

  const handlePrevSide = (stepId) => {
    setSideProcessIndex((prev) => ({
      ...prev,
      [stepId]: Math.max(0, (prev[stepId] || 0) - 1),
    }));
  };
  const handleNextSide = (stepId, total) => {
    setSideProcessIndex((prev) => ({
      ...prev,
      [stepId]: Math.min(total - 1, (prev[stepId] || 0) + 1),
    }));
  };

  return (
    <Box sx={{ minHeight: '100vh', background: `url(${imageAssets.backgrounds.waterPattern}) center/cover no-repeat` }}>
      <FeatureBanner
        title="Operations Flow"
        subtitle="Step-by-step Process of John P. Williams Plant"
        description="Scroll down to follow the main process. For steps with side processes, use the arrows to view additional subprocesses."
        backgroundImage={imageAssets.backgrounds.waterPattern}
      />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <SectionHeader
          title="Plant Operations Flow"
          subtitle="Scroll to follow the process"
        />
        <Stack spacing={0} alignItems="center">
          {processSteps.map((step, idx) => {
            const hasSide = Array.isArray(step.sideProcesses) && step.sideProcesses.length > 0;
            const sideIdx = sideProcessIndex[step.id] || 0;
            return (
              <Box key={step.id} sx={{ width: '100%', position: 'relative' }}>
                {hasSide && sideIdx > 0 ? (
                  <StepCard
                    step={step.sideProcesses[sideIdx - 1]}
                    isSide
                    onPrevSide={() => handlePrevSide(step.id)}
                    onNextSide={() => handleNextSide(step.id, step.sideProcesses.length + 1)}
                    sideIndex={sideIdx}
                    totalSides={step.sideProcesses.length + 1}
                  />
                ) : (
                  <StepCard
                    step={step}
                    isSide={false}
                    onPrevSide={() => handlePrevSide(step.id)}
                    onNextSide={() => handleNextSide(step.id, step.sideProcesses ? step.sideProcesses.length + 1 : 1)}
                    sideIndex={hasSide ? sideIdx : undefined}
                    totalSides={hasSide ? step.sideProcesses.length + 1 : 1}
                  />
                )}
                {idx < processSteps.length - 1 && <ArrowSVG />}
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
};

export default OperationsFlowPage; 