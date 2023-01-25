import { FC } from 'react';
import { Box } from '@mui/material';

import { Header } from '../components/Header';
import { HeadingSection } from '../components/contactUsPage/HeadingSection';

export const ContactUsPage: FC = () => (
  <Box
    component="main"
  >
    <Header />
    <HeadingSection />
  </Box>
);
