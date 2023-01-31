import { FC } from 'react';
import {
  Box, Card, Typography, Button, Divider,
} from '@mui/material';

import { styles } from './styles';

export const FeaturedPost: FC = () => (
  <Box
    sx={styles.featuredPostMain}
  >
    <Typography
      variant="h3"
      component="h2"
      sx={styles.featuredPostH2}
    >
      Featured Post
    </Typography>
    <Card
      sx={styles.featuredPostCard}
    >
      <img
        src="https://i.ibb.co/bRk7JNm/featured-post-image.png"
        alt="featured post"
        className="postImage"
      />
      <Box
        sx={styles.featuredPostMadeByWho}
      >
        <Typography
          variant="body1"
          component="p"
          sx={{ fontSize: '1.1rem' }}
        >
          By
        </Typography>
        <Button
          variant="text"
          sx={{ textTransform: 'none' }}
          href="/author"
        >
          <Typography
            variant="body1"
            component="p"
            sx={{ color: '#592EA9', fontSize: '1.1rem' }}
          >
            James West
          </Typography>
        </Button>
        <Divider
          orientation="vertical"
          flexItem
          sx={styles.featuredPostDivider}
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
        variant="body1"
        component="p"
        sx={styles.featuredPostFirstP}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={styles.featuredPostSecondP}
      >
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident.
      </Typography>
      <Button
        variant="contained"
        sx={styles.featuredPostBtn}
        href="/post"
      >
        Read More &gt;
      </Button>
    </Card>
  </Box>
);
