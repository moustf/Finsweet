import { Box, Typography } from '@mui/material';
import { FC } from 'react';

export const FeaturedInSection: FC = () => (
  <Box
    sx={{
      width: '100%',
      p: {
        xs: '0 1rem', sm: '0 1rem', md: '0 5rem', lg: '0 5rem', xl: '0 5rem',
      },
      display: 'flex',
      flexDirection: 'row',
      justifyContent: {
        xs: 'center',
        sm: 'center',
        md: 'center',
        lg: 'space-between',
        xl: 'space-between',
      },
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '2rem',
      '& .featured-logo': {
        width: '8.5rem',
        height: '2rem',
      },
      mb: '8rem',
    }}
  >
    <Box
      sx={{
        width: '10rem',
        height: '3.25rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Typography
        variant="body2"
        component="p"
        sx={{
          fontSize: '0.8rem',
          lineHeight: '1.1rem',
          fontFamily: "'Inter', sans-serif",
          color: '#6D6E76',
        }}
      >
        We are
      </Typography>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontSize: '1.5rem',
          fontWeight: 700,
          lineHeight: '2rem',
          fontFamily: "'Sen', sans-serif",
          color: '#6D6E76',
        }}
      >
        Featured in
      </Typography>
    </Box>
    <img src="https://i.ibb.co/M8P4tPP/logo1.png" alt="logo1" className="featured-logo" />
    <img src="https://i.ibb.co/jMSDLdm/logo2.png" alt="logo2" className="featured-logo" />
    <img src="https://i.ibb.co/ZxkCpXS/logo3.png" alt="logo3" className="featured-logo" />
    <img src="https://i.ibb.co/Z8Hfgkt/logo4.png" alt="logo4" className="featured-logo" />
    <img src="https://i.ibb.co/6y8T2jW/logo5.png" alt="logo5" className="featured-logo" />
  </Box>
);
