import {
  Box, Button, Divider, Typography,
} from '@mui/material';
import { FC } from 'react';

import LandingCover from '../../assets/LandingCover.png';
import { styles } from './styles';

export const LandingSection: FC = () => (
  <Box
    component="section"
    sx={{
      ...styles.landingSectionMain,
      backgroundImage: `url(${LandingCover})`,
    }}
  >
    <Typography
      variant="body1"
      component="p"
      sx={styles.landingSectionFirstP}
    >
      POSTED ON
      {' '}
      <strong>STARTUP</strong>
    </Typography>
    <Typography
      variant="h1"
      component="h1"
      sx={styles.landingSectionH1}
    >
      Step-by-step guide to choosing great font pairs
    </Typography>
    <Box
      sx={styles.landingSectionByWhoBox}
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
        sx={{ textTransform: 'none' }}
        href="/author"
      >
        <Typography
          variant="body1"
          component="p"
          sx={{ color: 'primary.main', fontSize: '1.2rem' }}
        >
          James West
        </Typography>
      </Button>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ bgcolor: 'secondary.contrastText', fontSize: '1.2rem' }}
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
      sx={styles.landingPageSecondP}
    >
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident.
    </Typography>
    <Button
      variant="contained"
      sx={styles.landingSectionBtn}
      href="/post"
    >
      Read More &gt;
    </Button>
  </Box>
);
