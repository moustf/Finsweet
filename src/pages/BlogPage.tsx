import { FC } from 'react';
import { Box } from '@mui/material';

import { Header } from '../components/Header';
import { CategorySection } from '../components/blogPage/CategorySection';
import { MainSections } from '../components/blogPage/MainSections';
import { Footer } from '../components/Footer';

export const BlogPage: FC = () => (
  <Box
    component="main"
  >
    <Header />
    <CategorySection />
    <MainSections />
    <Footer />
  </Box>
);
