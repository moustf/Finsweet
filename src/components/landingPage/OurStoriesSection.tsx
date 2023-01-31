import { FC } from 'react';
import {
  Box, Grid, Typography, Button,
} from '@mui/material';

import { styles } from './styles';

export const OurStoriesSection: FC = () => (
  <Box
    sx={styles.ourStoriesMain}
  >
    <Grid
      container
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={8}
        xl={8}
      >
        <img
          src="https://i.ibb.co/D4bLJD0/ourt-story-section.png"
          alt="our story"
          style={{
            width: '100%',
            height: '90%',
            objectFit: 'cover',
            boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, .2)',
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={4}
        xl={4}
      >
        <Box
          sx={styles.ourStoriesTextBox}
        >
          <Typography
            variant="body1"
            component="p"
            sx={styles.ourStoriesFirstP}
          >
            Why we started
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={styles.ourStoriesH2}
          >
            It started out as a simple idea and evolved into our passion
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={styles.ourStoriesSecondP}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </Typography>
          <Button
            variant="contained"
            sx={styles.ourStoriesButton}
            href="/about"
          >
            Discover our story &gt;
          </Button>
        </Box>
      </Grid>
    </Grid>
  </Box>
);
