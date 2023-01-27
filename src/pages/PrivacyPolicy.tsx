import { Box } from '@mui/material';
import { FC } from 'react';
import { Header } from '../components/Header';
import { HeadingSection } from '../components/privacyPolicy/HeadingSection';
import { PrivacyTermsSection } from '../components/privacyPolicy/PrivacyTermsSection';
import { Footer } from '../components/Footer';

export const PrivacyPolicyPage: FC = () => (
  <Box
    component="main"
  >
    <Header />
    <HeadingSection />
    <PrivacyTermsSection />
    <Footer page="privacy" />
  </Box>
);
