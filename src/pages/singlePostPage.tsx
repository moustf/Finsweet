import { Box } from '@mui/material';
import { FC } from 'react';

import { Header } from '../components/Header';
import { InfoAndTitleSection } from '../components/singlePostPage/InfoAndTitleSection';
import { PostSection } from '../components/singlePostPage/PostSection';
import { MorePostsSection } from '../components/singlePostPage/MorePostsSection';
import { JoinOurTeamSection } from '../components/JoinOurTeamSection';
import { Footer } from '../components/Footer';

export const SinglePostPage: FC = () => (
  <Box component="main">
    <Header />
    <InfoAndTitleSection />
    <PostSection />
    <MorePostsSection />
    <JoinOurTeamSection page="single-post" />
    <Footer page="single-post" />
  </Box>
);
