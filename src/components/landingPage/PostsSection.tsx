import { FC } from 'react';
import { Box, Grid } from '@mui/material';

import { FeaturedPost } from './FeaturedPost';
import { AllPosts } from './AllPosts';

export const PostsSection: FC = () => (
  <Box
    sx={{
      width: '100%',
      height: {
        xs: '230vh', sm: '215vh', md: '190vh', lg: '100vh', xl: '100vh',
      },
      p: {
        xs: '0 1rem', sm: '0 1rem', md: '0 5rem', lg: '0 5rem', xl: '0 5rem',
      },
      mb: '8rem',
    }}
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
