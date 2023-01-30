import { Box } from '@mui/material';
import { FC, useEffect } from 'react';

import { Header } from '../components/Header';
import { InfoAndTitleSection } from '../components/singlePostPage/InfoAndTitleSection';
import { PostSection } from '../components/singlePostPage/PostSection';
import { MorePostsSection } from '../components/singlePostPage/MorePostsSection';
import { JoinOurTeamSection } from '../components/JoinOurTeamSection';
import { Footer } from '../components/Footer';

export const SinglePostPage: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box component="main">
      <Header />
      <InfoAndTitleSection />
      <PostSection />
      <MorePostsSection />
      <JoinOurTeamSection />
      <Footer />
    </Box>
  );
};
