import { Box } from '@mui/material';
import { FC } from 'react';

import { Header } from '../components/Header';
import { InfoAndTitleSection } from '../components/singlePostPage/InfoAndTitleSection';
import { PostSection } from '../components/singlePostPage/PostSection';

export const SinglePostPage: FC = () => (
  <Box component="main">
    <Header />
    <InfoAndTitleSection />
    <PostSection />
  </Box>
);
