import { FC } from 'react';
import { Box, CssBaseline } from '@mui/material';

import { Header } from '../components/Header';
import { LandingSection } from '../components/landingPage/LandingSection';
import { PostsSection } from '../components/landingPage/PostsSection';
import { MottoSection } from '../components/landingPage/MottoSection';
import { CategoriesSection } from '../components/CategoriesSection';
import { OurStoriesSection } from '../components/landingPage/OurStoriesSection';
import { ListOfAuthorsSection } from '../components/ListOfAuthorsSection';
import { FeaturedInSection } from '../components/landingPage/FeaturedInSection';
import { TestimonialsSection } from '../components/landingPage/TestimonialsSection';
import { JoinOurTeamSection } from '../components/JoinOurTeamSection';
import { Footer } from '../components/Footer';

export const LandingPage: FC = () => (
  <Box
    component="main"
  >
    <CssBaseline />
    <Header />
    <LandingSection />
    <PostsSection />
    <MottoSection />
    <CategoriesSection page="landing" />
    <OurStoriesSection />
    <ListOfAuthorsSection />
    <FeaturedInSection />
    <TestimonialsSection />
    <JoinOurTeamSection page="landing" />
    <Footer page="landing" />
  </Box>
);
