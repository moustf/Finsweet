import { FC } from 'react';
import { Box } from '@mui/material';

import { Header } from '../components/Header';
import { FeaturedPostSection } from '../components/allPostsPage/FeaturedPostSection';

export const AllPostsPage: FC = () => (
  <Box
    component="main"
  >
    <Header />
    <FeaturedPostSection />
  </Box>
);
