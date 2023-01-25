import { Box } from '@mui/material';
import { FC } from 'react';
import { IntroductionSection } from '../components/authorProfile/IntroductioinSection';
import { PostsSection } from '../components/authorProfile/PostsSection';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const AuthorPage: FC = () => (
  <Box
    component="main"
  >
    <Header />
    <IntroductionSection />
    <PostsSection />
    <Footer page="author" />
  </Box>
);
