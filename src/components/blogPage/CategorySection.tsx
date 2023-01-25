import { Box, Typography } from '@mui/material';
import { FC } from 'react';

export const CategorySection: FC = () => (
  <Box
    component="section"
    sx={{
      width: '100%',
      height: {
        xs: '55vh', sm: '45vh', md: '45vh', lg: '45vh', xl: '45vh',
      },
      p: {
        xs: '2rem', sm: '2rem', md: '3rem', lg: 0, xl: 0,
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem',
      bgcolor: '#F4F0F8',
    }}
  >
    <Typography
      variant="h1"
      component="h1"
      sx={{
        fontWeight: 700,
        fontSize: {
          xs: '2rem', sm: '3rem', md: '3.5rem', lg: '3.5rem', xl: '3.5rem',
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
      Business
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
          xs: '1.1rem', sm: '1.2rem', md: '1.2rem', lg: '1.2rem', xl: '1.2rem',
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
    </Typography>
    <Typography
      variant="subtitle2"
      component="p"
      sx={{
        width: {
          xs: '60%', sm: '35%', md: '30%', lg: '20%', xl: '20%',
        },
        fontWeight: 500,
        fontSize: {
          xs: '1.1rem', sm: '1.2rem', md: '1.2rem', lg: '1.2rem', xl: '1.2rem',
        },
        lineHeight: {
          xs: '1.2rem', sm: '1.2rem', md: '1.2rem', lg: '1.2rem', xl: '1.2rem',
        },
        textAlign: 'center',
        color: 'secondary.main',
        letterSpacing: '3px',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      Blog &gt; Business
    </Typography>
  </Box>
);
