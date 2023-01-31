import { FC } from 'react';
import {
  Box, Typography, Button, Divider, Grid,
} from '@mui/material';

import { styles } from './styles';

export const FeaturedPostSection: FC = () => (
  <Box
    component="section"
    sx={styles.featuredPostMain}
  >
    <Grid
      container
      spacing={3}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={8}
        xl={8}
      >
        <Typography
          variant="body1"
          component="p"
          sx={styles.featuredPostFirstP}
        >
          Featured Post
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          sx={styles.featuredPostTitle}
        >
          Step-by-step guide to choosing great font pairs
        </Typography>
        <Box
          sx={styles.featuredPostByWhoBox}
        >
          <Typography
            variant="body1"
            component="p"
            sx={{ fontSize: '1.2rem' }}
          >
            By
          </Typography>
          <Button
            variant="text"
            href="/author"
            sx={{ textTransform: 'none' }}
          >
            <Typography
              variant="body1"
              component="p"
              sx={{ color: '#592EA9', fontSize: '1.2rem' }}
            >
              John Doe
            </Typography>
          </Button>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ bgcolor: 'secondary.main', fontSize: '1.2rem' }}
          />
          <Typography
            variant="body1"
            component="p"
            sx={{ fontSize: '1.2rem' }}
          >
            May 23, 2022
          </Typography>
        </Box>
        <Typography
          variant="body1"
          component="p"
          sx={styles.featuredPostSecondP}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </Typography>
        <Button
          variant="contained"
          sx={styles.featuredPostReadMoreBtn}
          href="/post"
        >
          Read More &gt;
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={4}
        xl={4}
        sx={styles.featuredPostImageGrid}
      >
        <img
          src="https://i.ibb.co/C5BxwYW/all-posts-featured-pic.png"
          alt="featured post"
          className="featured-post-pic"
        />
      </Grid>
    </Grid>
  </Box>
);
