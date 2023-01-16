import { FC } from 'react';
import { Box, CssBaseline } from '@mui/material';

import { Header } from '../components/Header';
import { LandingSection } from '../components/landingPage/LandingSection';
import { PostsSection } from '../components/landingPage/PostsSection';

export const LandingPage: FC = () => (
  <Box
    component="main"
  >
    <CssBaseline />
    <Header />
    <LandingSection />
    <PostsSection />
  </Box>
);
