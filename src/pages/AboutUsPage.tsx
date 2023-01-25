import { FC } from 'react';
import { Box, CssBaseline } from '@mui/material';

import { Header } from '../components/Header';
import { OverviewSection } from '../components/aboutUsPage/OverviewSection';

export const AboutPage: FC = () => (
  <Box component="section">
    <CssBaseline />
    <Header />
    <OverviewSection />
  </Box>
);
