import { FC } from 'react';
import { Box } from '@mui/material';

import { Header } from '../components/Header';
import { FeaturedPostSection } from '../components/allPostsPage/FeaturedPostSection';
import { AllPostsSection } from '../components/allPostsPage/AllPostsSection';

export const AllPostsPage: FC = () => (
  <Box
    component="main"
  >
    <Header />
    <FeaturedPostSection />
    <AllPostsSection />
  </Box>
);
