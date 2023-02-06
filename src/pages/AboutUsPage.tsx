import { FC } from 'react';
import { Box, CssBaseline } from '@mui/material';

import { Header } from '../components/Header';
import { OverviewSection } from '../components/aboutUsPage/OverviewSection';
import { KnowMoreSection } from '../components/aboutUsPage/KnowMoreSectopm';
import { WhyWeStartedSection } from '../components/aboutUsPage/WhyWeStartedSection';
import { ListOfAuthorsSection } from '../components/aboutUsPage/ListOfAuthorsSection';
import { JoinOurTeamSection } from '../components/JoinOurTeamSection';
import { Footer } from '../components/Footer';

const AboutPage: FC = () => (
  <Box component="section">
    <CssBaseline />
    <Header />
    <OverviewSection />
    <KnowMoreSection />
    <WhyWeStartedSection />
    <ListOfAuthorsSection />
    <JoinOurTeamSection />
    <Footer />
  </Box>
);

export default AboutPage;
