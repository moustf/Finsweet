import { FC } from 'react';

import { Box, Typography } from '@mui/material';

export const HeadingSection: FC = () => (
  <Box
    component="section"
    sx={{
      width: '100%',
      height: {
        xs: '35vh', sm: '28vh', md: '40vh', lg: '45vh', xl: '45vh',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem',
    }}
  >
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontFamily: "'Sen', sans-serif",
        fontSize: {
          xs: '1rem', sm: '1rem', md: '1rem', lg: '1rem', xl: '1rem',
        },
        fontWeight: 900,
        lineHeight: '1.3rem',
        letterSpacing: '3px',
        textAlign: 'center',
        color: 'secondary.main',
        textTransform: 'uppercase',
      }}
    >
      Contact us
    </Typography>
    <Typography
      variant="h1"
      component="h1"
      sx={{
        fontFamily: "'Sen', sans-serif",
        fontSize: {
          xs: '1.5rem', sm: '1.8rem', md: '2.5rem', lg: '3rem', xl: '3rem',
        },
        fontWeight: 700,
        lineHeight: {
          xs: '2rem', sm: '2rem', md: '2.5rem', lg: '4rem', xl: '4rem',
        },
        letterSpacing: '-1px',
        textAlign: 'center',
        color: 'secondary.main',
      }}
    >
      Let&apos;s Start a Conversation
    </Typography>
    <Typography
      variant="body1"
      component="p"
      sx={{
        width: {
          xs: '95%', sm: '90%', md: '40rem', lg: '55rem', xl: '55rem',
        },
        fontFamily: "'Inter', sans-serif",
        fontSize: {
          xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem', xl: '1.1rem',
        },
        fontWeight: 400,
        lineHeight: {
          xs: '1.2rem', sm: '1.2rem', md: '1.8rem', lg: '2rem', xl: '2rem',
        },
        textAlign: 'center',
        color: '#6D6E76',
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
    </Typography>
  </Box>
);
