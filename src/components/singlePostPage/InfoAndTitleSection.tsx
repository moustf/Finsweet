import { Box, Typography } from '@mui/material';
import { FC } from 'react';

import ProfilePicture from '../../assets/profile-pic.svg';
import RocketIcon from '../../assets/rocket.png';

export const InfoAndTitleSection: FC = () => (
  <Box
    component="section"
    sx={{
      width: '100%',
      height: {
        xs: '70vh', sm: '50vh', md: '60vh', lg: '45vh', xl: '45vh',
      },
      p: {
        xs: '0 2rem', sm: '0 2rem', md: '0 2rem', lg: 0, xl: 0,
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Box>
      <Box
        sx={{
          width: '18rem',
          height: '4.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '1.5rem',
        }}
      >
        <img src={ProfilePicture} alt="profile" className="profile-pic" />
        <Box
          sx={{
            width: '70%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Typography
            variant="h6"
            component="h4"
            sx={{
              width: '15rem',
              fontWeight: 700,
              fontFamily: "'Sen', sans-serif",
            }}
          >
            Jonathan Vallem
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              lineHeight: '1.8rem',
              color: '#6D6E76',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            New york, USA
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          width: {
            xs: '100%', sm: '100%', md: '52rem', lg: '48rem', xl: '48rem',
          },
          fontWeight: 700,
          color: 'secondary.main',
          fontSize: '3rem',
          fontFamily: "'Sen', sans-serif",
          letterSpacing: '-2px',
          mb: '2.1rem',
        }}
      >
        Step-by-step guide to choosing great font pairs
      </Typography>
      <Box
        sx={{
          width: '17%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <img src={RocketIcon} alt="rocket icon" className="single-post__rocket-icon" />
        <Typography
          variant="h4"
          component="h4"
          sx={{
            fontWeight: 700,
            fontSize: '1.5rem',
            fontFamily: "'Sen', sans-serif",
          }}
        >
          Startup
        </Typography>
      </Box>
    </Box>
  </Box>
);
