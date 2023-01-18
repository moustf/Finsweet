import { FC } from 'react';
import {
  Box, Grid, Typography, Button,
} from '@mui/material';

import OurStoryImage from '../../assets/our-story-section.svg';

export const OurStoriesSection: FC = () => (
  <Box
    sx={{
      width: '100%',
      height: '70vh',
      p: {
        xs: '1rem', sm: '5rem', md: '5rem', lg: '5rem', xl: '5rem',
      },
      transform: {
        xs: 'translateY(135rem)',
        sm: 'translateY(68rem)',
        md: 'translateY(60rem)',
        lg: 'none',
        xl: 'none',
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
        lg={8}
        xl={8}
      >
        <img
          src={OurStoryImage}
          alt="our story"
          style={{
            width: '100%',
            height: '90%',
            objectFit: 'cover',
            boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, .2)',
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={4}
        xl={4}
      >
        <Box
          sx={{
            width: {
              xs: '90%', sm: '80%', md: '80%', lg: '90%', xl: '60rem',
            },
            height: {
              xs: '45vh', sm: '50vh', md: '45vh', lg: '45vh', xl: '38rem',
            },
            pl: {
              xs: '1rem', sm: '2rem', md: '5rem', lg: '5rem', xl: '5rem',
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            bgcolor: 'secondary.contrastText',
            transform: {
              xs: 'translate(5%, -12%)',
              sm: 'translate(15%, -15%)',
              md: 'translate(12%, -25%)',
              lg: 'translate(-60%, 20%)',
              xl: 'translate(-45%, 29.5%)',
            },
            borderBottom: {
              xs: '1px solid rgba(0, 0, 0, .2)',
              sm: '1px solid rgba(0, 0, 0, .2)',
              md: '1px solid rgba(0, 0, 0, .2)',
              lg: 'none',
              xl: 'none',
            },
          }}
        >
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontFamily: "'Inter', sans-serif",
              color: 'secondary.primary',
              fontWeight: 600,
              letterSpacing: '3px',
              fontSize: '1.2rem',
              mb: '1.5rem',
              textTransform: 'uppercase',
            }}
          >
            Why we started
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              width: {
                xs: '63.8%', sm: '66.9%', md: '30rem', lg: '24.4rem', xl: '34.15rem',
              },
              fontSize: {
                xs: '1rem', sm: '1.5rem', md: '2rem', lg: '2rem', xl: '2.8rem',
              },
              fontWeight: 700,
              lineHeight: {
                xs: '25px', sm: '45px', md: '55px', lg: '40px', xl: '55px',
              },
              mb: '1rem',
              fontFamily: "'Sen', sans-serif",
            }}
          >
            It started out as a simple idea and evolved into our passion
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              width: {
                xs: '100%', sm: '90%', md: '35rem', lg: '27rem', xl: '35rem',
              },
              color: '#6D6E76',
              fontSize: {
                xs: '0.8rem', sm: '1rem', md: '1rem', lg: '1rem', xl: '1rem',
              },
              lineHeight: {
                xs: '20px', sm: '28px', md: '28px', lg: '25px', xl: '28px',
              },
              mb: '2rem',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: {
                xs: '14rem', sm: '17rem', md: '20rem', lg: '20rem', xl: '20rem',
              },
              height: {
                xs: '3.5rem', sm: '3.5rem', md: '3.5rem', lg: '4rem', xl: '4rem',
              },
              justifyContent: 'center',
              color: 'secondary.main',
              bgcolor: 'primary.main',
              borderRadius: 0,
              boxShadow: 'none',
              fontWeight: 700,
              fontSize: {
                xs: '0.9rem', sm: '1rem', md: '1rem', lg: '1rem', xl: '1rem',
              },
              fontFamily: "'Sen', sans-serif",
            }}
          >
            Discover our story &gt;
          </Button>
        </Box>
      </Grid>
    </Grid>
  </Box>
);
