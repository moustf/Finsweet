import { FC } from 'react';
import { Box, Typography } from '@mui/material';

export const HeadingSection: FC = () => (
  <Box
    component="section"
    sx={{
      width: '100%',
      height: {
        xs: '30vh', sm: '30vh', md: '40vh', lg: '35vh', xl: '35vh',
      },
      p: {
        xs: '2rem', sm: '2rem', md: '3rem', lg: 0, xl: 0,
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1.5rem',
      bgcolor: '#F4F0F8',
    }}
  >
    <Typography
      variant="h1"
      component="h1"
      sx={{
        fontWeight: 700,
        fontSize: {
          xs: '1.8rem', sm: '2rem', md: '3rem', lg: '3rem', xl: '3rem',
        },
        lineHeight: {
          xs: '3rem', sm: '4rem', md: '4rem', lg: '4rem', xl: '4rem',
        },
        textAlign: 'center',
        color: 'secondary.main',
        letterSpacing: '-2px',
        fontFamily: "'Sen', sans-serif",
      }}
    >
      Privacy Policy
    </Typography>
    <Typography
      variant="body1"
      component="p"
      sx={{
        width: {
          xs: '90%', sm: '70%', md: '60%', lg: '40%', xl: '30%',
        },
        fontWeight: 400,
        fontSize: {
          xs: '0.9rem', sm: '1rem', md: '1rem', lg: '1rem', xl: '1rem',
        },
        lineHeight: {
          xs: '1.5rem', sm: '1.8rem', md: '1.8rem', lg: '1.8rem', xl: '1.8rem',
        },
        textAlign: 'center',
        color: '#6D6E76',
        fontFamily: "'Inter', sans-serif",
        mb: {
          xs: '1rem', sm: '2rem', md: '2rem', lg: '2rem', xl: '2rem',
        },
      }}
    >
      Last Updated  on 27th January 2022
    </Typography>
  </Box>
);
