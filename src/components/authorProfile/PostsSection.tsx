import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { PostCard } from '../PostCard';
import AuthorPostPic1 from '../../assets/author-post-pic1.svg';
import AuthorPostPic2 from '../../assets/author-post-pic2.svg';
import { styles } from './styles';

export const PostsSection: FC = () => (
  <Box
    component="section"
    sx={styles.postSectionMain}
  >
    <Typography
      variant="h1"
      component="h2"
      sx={styles.postSectionH2}
    >
      My Posts
    </Typography>
    <PostCard
      img={AuthorPostPic1}
      title="BUSINESS"
      heading="Font sizes in UI design: The complete guide to follow"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      page="author"
    />
    <PostCard
      img={AuthorPostPic2}
      title="Economy"
      heading="How to build rapport with your web design clients"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      page="author"
    />
  </Box>
);
