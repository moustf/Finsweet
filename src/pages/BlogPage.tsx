import { FC, useEffect } from 'react';
import { Box } from '@mui/material';

import { Header } from '../components/Header';
import { CategorySection } from '../components/blogPage/CategorySection';
import { MainSections } from '../components/blogPage/MainSections';
import { Footer } from '../components/Footer';

const BlogPage: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      component="main"
    >
      <Header />
      <CategorySection />
      <MainSections />
      <Footer />
    </Box>
  );
};

export default BlogPage;
