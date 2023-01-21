import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';

export const JoinOurTeamSection: FC<{ page: string }> = ({ page }) => (
  <Box
    sx={{
      width: '100%',
      height: '20rem',
      p: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem',
      textAlign: 'center',
      transform: {
        xs: page === 'all-posts'
          ? 'translateY(74rem)'
          : page === 'single-post'
            ? 'translateY(3rem)'
            : 'translateY(225rem)',
        sm: page === 'all-posts'
          ? 'translateY(28rem)'
          : page === 'single-post'
            ? 'translateY(0rem)'
            : 'translateY(165rem)',
        md: page === 'all-posts'
          ? 'translateY(22rem)'
          : page === 'single-post'
            ? 'translateY(2rem)'
            : 'translateY(133rem)',
        lg: 'translateY(8rem)',
        xl: 'translateY(3rem)',
      },
    }}
  >
    <Typography
      variant="h2"
      component="h2"
      sx={{
        width: {
          xs: '100%', sm: '100%', md: '100%', lg: '25.8rem', xl: '25.8rem',
        },
        fontFamily: "'Sen', sans-serif",
        fontWeight: 700,
        fontSize: '2.25rem',
        lineHeight: '3rem',
        letterSpacing: '-1px',
        color: 'secondary.main',
      }}
    >
      Join our team to be a part of our story
    </Typography>
    <Typography
      variant="body1"
      component="p"
      sx={{
        width: {
          xs: '90%', sm: '25.7rem', md: '25.7rem', lg: '25.7rem', xl: '25.7rem',
        },
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.9rem',
        lineHeight: '1.75rem',
        color: '#6D6E76',
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
    </Typography>
    <Button
      variant="contained"
      sx={{
        width: '11rem',
        height: '3.5rem',
        borderRadius: 0,
        fontWeight: 700,
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'primary.main',
        color: 'secondary.main',
        mb: '5rem',
      }}
    >
      Join Now
    </Button>
  </Box>
);
