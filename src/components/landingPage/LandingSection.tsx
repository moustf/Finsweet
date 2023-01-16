import {
  Box, Button, Divider, Typography,
} from '@mui/material';
import { FC } from 'react';

import LandingCover from '../../assets/LandingCover.png';

export const LandingSection: FC = () => (
  <Box
    component="section"
    sx={{
      width: '100%',
      height: {
        xs: '91.5vh', sm: '80vh', md: '91.6vh', lg: '91.6vh', xl: '91.6vh',
      },
      p: {
        xs: '5rem 2rem', sm: '5rem 2rem', md: '0 5rem', lg: '0 5rem', xl: '0 5rem',
      },
      backgroundImage: `url(${LandingCover})`,
      backgroundAttachment: 'fixed',
      backgroundPosition: { xs: 'center' },
      backgroundSize: 'cover',
      objectFit: 'cover',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      mb: '8rem',
    }}
  >
    <Typography
      variant="body1"
      component="p"
      sx={{
        fontSize: '1.2rem',
        fontWeight: 500,
        color: 'secondary.contrastText',
        letterSpacing: '3px',
        fontFamily: "'Inter', sans-serif",
        mb: '2rem',
      }}
    >
      POSTED ON
      {' '}
      <strong>STARTUP</strong>
    </Typography>
    <Typography
      variant="h1"
      component="h1"
      sx={{
        width: {
          xs: '100%', sm: '100%', md: '52rem', lg: '52rem', xl: '52rem',
        },
        color: 'secondary.contrastText',
        fontSize: '3.5rem',
        fontFamily: "'Sen', sans-serif",
        mb: '2rem',
      }}
    >
      Step-by-step guide to choosing great font pairs
    </Typography>
    <Box
      sx={{
        width: '18.5rem',
        height: '28px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: '1rem',
        color: 'secondary.contrastText',
        fontFamily: "'Sen', sans-serif",
      }}
    >
      <Typography
        variant="body1"
        component="p"
        sx={{ fontSize: '1.2rem' }}
      >
        By
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{ color: 'primary.main', fontSize: '1.2rem' }}
      >
        James West
      </Typography>
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
      sx={{
        width: {
          xs: '100%', sm: '100%', md: '42rem', lg: '42rem', xl: '42rem',
        },
        mb: '3rem',
        color: 'secondary.contrastText',
        fontSize: '1.2rem',
      }}
    >
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident.
    </Typography>
    <Button
      variant="contained"
      sx={{
        width: '15rem',
        height: '4rem',
        fontSize: '1.2rem',
        fontWeight: 700,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      Read More &gt;
    </Button>
  </Box>
);
