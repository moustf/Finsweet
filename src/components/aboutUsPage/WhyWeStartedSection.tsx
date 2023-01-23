import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';

import WhyWeStartedPic from '../../assets/why-we-started-pic.svg';

export const WhyWeStartedSection: FC = () => (
  <Box
    component="section"
    sx={{
      width: '100%',
      p: {
        xs: '2rem', sm: '2rem', md: '2rem 3rem', lg: '3rem 5rem', xl: '3rem 5rem',
      },
      transform: {
        xs: 'translateY(-8rem)',
        sm: 'translateY(-10rem)',
        md: 'translateY(-10rem)',
        lg: 'translateY(-6rem)',
        xl: 'translateY(-5rem)',
      },
    }}
  >
    <Grid
      container
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: {
            xs: 'center', sm: 'center', md: 'center', lg: 'flex-start', xl: 'flex-start',
          },
        }}
      >
        <Box
          sx={{
            width: '90%',
            height: '32rem',
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'relative',
            backgroundImage: `url(${WhyWeStartedPic})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Box
            sx={{
              width: {
                xs: '5rem', sm: '6rem', md: '7rem', lg: '7rem', xl: '7rem',
              },
              height: {
                xs: '5rem', sm: '6rem', md: '7rem', lg: '7rem', xl: '7rem',
              },
              bgcolor: '#592EA9',
              position: 'absolute',
              bottom: {
                xs: '-2.5rem', sm: '-3rem', md: '-3.5rem', lg: '-3.5rem', xl: '-3.5rem',
              },
              left: '25%',
              borderRadius: '50%',
            }}
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: {
              xs: '80%', sm: '80%', md: '70%', lg: '100%', xl: '100%',
            },
            pl: {
              xs: 0, sm: 0, md: 0, lg: '5rem', xl: '5rem',
            },
            height: '32rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            mt: {
              xs: '5rem', sm: 0, md: 0, lg: 0, xl: 0,
            },
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: {
                xs: '1.5rem', sm: '1.5rem', md: '2rem', lg: '2.5rem', xl: '2.5rem',
              },
              fontWeight: 700,
              fontFamily: "'Sen', sans-serif",
              letterSpacing: '-2px',
              color: 'secondary.main',
              lineHeight: '3rem',
              mb: '2rem',
            }}
          >
            Why we started this Blog
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              width: {
                xs: '90%', sm: '90%', md: '90%', lg: '35rem', xl: '40rem',
              },
              fontSize: {
                xs: '1.2rem', sm: '1.2rem', md: '1.2rem', lg: '1.7rem', xl: '1.7rem',
              },
              fontWeight: 700,
              fontFamily: "'Sen', sans-serif",
              color: 'secondary.main',
              lineHeight: '1.8rem',
              letterSpacing: '0.8px',
              mb: '2rem',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              width: {
                xs: '90%', sm: '90%', md: '90%', lg: '35rem', xl: '40rem',
              },
              fontSize: {
                xs: '0.8rem', sm: '0.8rem', md: '1rem', lg: '1.1rem', xl: '1.1rem',
              },
              fontWeight: 400,
              fontFamily: "'Inter', sans-serif",
              color: 'secondary.main',
              lineHeight: '1.5rem',
              mb: '2rem',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
);
