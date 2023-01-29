import {
  Box, Grid, Typography, Divider,
} from '@mui/material';
import { FC } from 'react';

import Post1 from '../../assets/post1.svg';
import Post2 from '../../assets/post2.svg';
import Post3 from '../../assets/post3.svg';
import { styles } from './styles';

const PostCard: FC<{ img: string }> = ({ img }) => (
  <Box
    component="section"
    sx={styles.postCardMain}
  >
    <img src={img} alt="post" className="more-posts__post-pic" />
    <Box
      sx={styles.postCardBox1}
    >
      <Typography
        variant="body1"
        component="p"
        sx={{ fontSize: '1.1rem' }}
      >
        By
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{ color: '#592EA9', fontSize: '1.1rem' }}
      >
        John Doe
      </Typography>
      <Divider
        orientation="vertical"
        flexItem
        sx={styles.postCardDivider}
      />
      <Typography
        variant="body1"
        component="p"
        sx={{ fontSize: '1.1rem' }}
      >
        May 23, 2022
      </Typography>
    </Box>
    <Typography
      variant="h3"
      component="h3"
      sx={styles.postCardDivider}
    >
      A UX Case Study Creating a Studious Environment for Students:
    </Typography>
    <Typography
      variant="body1"
      component="p"
      sx={styles.postCardP}
    >
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident.
    </Typography>
  </Box>
);

export const MorePostsSection: FC = () => (
  <Box
    sx={styles.morePostsMain}
  >
    <Typography
      variant="h2"
      component="h2"
      sx={styles.morePostsH2}
    >
      What to read next
    </Typography>
    <Box>
      <Grid
        container
        spacing={5}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
        >
          <PostCard img={Post1} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
        >
          <PostCard img={Post2} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
        >
          <PostCard img={Post3} />
        </Grid>
      </Grid>
    </Box>
    <Divider
      flexItem
      sx={styles.morePostsDivider}
    />
  </Box>
);
