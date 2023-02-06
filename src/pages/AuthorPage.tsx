import { Box } from '@mui/material';
import { FC, useEffect } from 'react';
import { IntroductionSection } from '../components/authorProfile/IntroductioinSection';
import { PostsSection } from '../components/authorProfile/PostsSection';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const AuthorPage: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      component="main"
    >
      <Header />
      <IntroductionSection />
      <PostsSection />
      <Footer />
    </Box>
  );
};

export default AuthorPage;
