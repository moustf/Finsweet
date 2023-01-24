import { Box } from '@mui/material';
import { FC } from 'react';
import { IntroductionSection } from '../components/authorProfile/IntroductioinSection';
import { Header } from '../components/Header';

export const AuthorPage: FC = () => (
  <Box
    component="main"
  >
    <Header />
    <IntroductionSection />
  </Box>
);
