import { FC } from 'react';
import { Box } from '@mui/material';
import { Header } from '../components/Header';
import { CategorySection } from '../components/blogPage/CategorySection';

export const BlogPage: FC = () => (
  <Box
    component="main"
  >
    <Header />
    <CategorySection />
  </Box>
);
