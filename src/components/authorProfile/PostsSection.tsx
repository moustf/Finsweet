import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { PostCard } from '../PostCard';
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
      img="https://i.ibb.co/zh1Sw0q/author-post-pic1.png"
      title="BUSINESS"
      heading="Font sizes in UI design: The complete guide to follow"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      page="author"
    />
    <PostCard
      img="https://i.ibb.co/y6jqDxM/author-post-pic2.png"
      title="Economy"
      heading="How to build rapport with your web design clients"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      page="author"
    />
  </Box>
);
