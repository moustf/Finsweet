import { Box, Typography } from '@mui/material';
import { FC } from 'react';

import StatsPic from '../../assets/stats-pic.png';

const StatsBox: FC<{ number: string, text: string }> = ({ number, text }) => (
  <Box
    sx={{
      width: 'calc(100% / 3)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    }}
  >
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontFamily: "'Sen', sans-serif",
        fontWeight: 700,
        fontSize: {
          xs: '1.5rem', sm: '2rem', md: '2rem', lg: '3.5rem', xl: '3.5rem',
        },
        lineHeight: '4rem',
        letterSpacing: '-2px',
        color: 'secondary.main',
      }}
    >
      {number}
    </Typography>
    <Typography
      variant="body1"
      component="p"
      sx={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: {
          xs: '0.7rem', xm: '0.7rem', md: '0.8rem', lg: '1.1rem', xl: '1.1rem',
        },
        color: 'secondary.main',
      }}
    >
      {text}
    </Typography>
  </Box>
);

export const StatsSection: FC = () => (
  <Box
    component="section"
    sx={{
      width: '100%',
      height: '35rem',
      pl: {
        xs: '1rem', sm: '2rem', md: '2rem', lg: '5rem', xl: '5rem',
      },
      backgroundImage: `url(${StatsPic})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      transform: {
        xs: 'translateY(-8rem)',
        sm: 'translateY(-8rem)',
        md: 'translateY(-8rem)',
        lg: 'translateY(-6rem)',
        xl: 'translateY(-6rem)',
      },
    }}
  >
    <Box
      sx={{
        width: {
          xs: '80%', sm: '60%', md: '50%', lg: '38%', xl: '42%',
        },
        bgcolor: 'primary.main',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        p: {
          xs: '1rem 2rem', sm: '1rem 2rem', md: '1.5rem 2rem', lg: '2.5rem 4rem', xl: '2.5rem 4rem',
        },
      }}
    >
      <StatsBox number="12+" text="Blogs Published" />
      <StatsBox number="18K+" text="Views on Finsweet" />
      <StatsBox number="30K+" text="Total active users" />
    </Box>
    <Box
      sx={{
        width: {
          xs: '90%', sm: '90%', md: '90%', lg: '70%', xl: '70%',
        },
        height: '1.7rem',
        background: 'linear-gradient(90deg,  #592EA9 0%, #592EA9 35%, #FFD050 35%, #FFD050 100%)',
      }}
    />
  </Box>
);
