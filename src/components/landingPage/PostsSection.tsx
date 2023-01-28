import { FC } from 'react';
import { Box, Grid } from '@mui/material';

import { FeaturedPost } from './FeaturedPost';
import { AllPosts } from './AllPosts';
import { styles } from './styles';

export const PostsSection: FC = () => (
  <Box
    sx={styles.postSectionMain}
  >
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={7}
        xl={7}
      >
        <FeaturedPost />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={5}
        xl={5}
      >
        <AllPosts />
      </Grid>
    </Grid>
  </Box>
);
