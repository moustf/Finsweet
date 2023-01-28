import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';

import { PostsAllPostsList } from './PostsAllPostsList';
import { styles } from './styles';

export const AllPosts: FC = () => (
  <Box sx={styles.allPostsMain}>
    <Box sx={styles.allPostsTextBox}>
      <Typography
        variant="h3"
        component="h2"
        sx={styles.allPostsH2}
      >
        All Posts
      </Typography>
      <Button
        variant="text"
        href="/posts"
        sx={styles.allPostsBtn}
      >
        View All
      </Button>
    </Box>
    <PostsAllPostsList />
  </Box>
);
