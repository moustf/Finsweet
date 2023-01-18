import { FC } from 'react';
import { Box, CssBaseline } from '@mui/material';

import { Header } from '../components/Header';
import { LandingSection } from '../components/landingPage/LandingSection';
import { PostsSection } from '../components/landingPage/PostsSection';
import { MottoSection } from '../components/landingPage/MottoSection';
import { CategoriesSection } from '../components/landingPage/CategoriesSection';
import { OurStoriesSection } from '../components/landingPage/OurStoriesSection';

export const LandingPage: FC = () => (
  <Box
    component="main"
  >
    <CssBaseline />
    <Header />
    <LandingSection />
    <PostsSection />
    <MottoSection />
    <CategoriesSection />
    <OurStoriesSection />
  </Box>
);
