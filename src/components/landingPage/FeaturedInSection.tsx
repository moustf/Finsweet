import { Box, Typography } from '@mui/material';
import { FC } from 'react';

import Logo1 from '../../assets/Logo1.svg';
import Logo2 from '../../assets/Logo2.svg';
import Logo3 from '../../assets/Logo3.svg';
import Logo4 from '../../assets/Logo4.svg';
import Logo5 from '../../assets/Logo5.svg';

export const FeaturedInSection: FC = () => (
  <Box
    sx={{
      width: '100%',
      p: '5rem',
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
      transform: {
        xs: 'translateY(208rem)',
        sm: 'translateY(165rem)',
        md: 'translateY(115rem)',
        lg: 'translateY(32rem)',
        xl: 'translateY(18rem)',
      },
      '& .featured-logo': {
        width: '8.5rem',
        height: '2rem',
      },
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
    <img src={Logo1} alt="logo1" className="featured-logo" />
    <img src={Logo2} alt="logo2" className="featured-logo" />
    <img src={Logo3} alt="logo3" className="featured-logo" />
    <img src={Logo4} alt="logo4" className="featured-logo" />
    <img src={Logo5} alt="logo5" className="featured-logo" />
  </Box>
);
