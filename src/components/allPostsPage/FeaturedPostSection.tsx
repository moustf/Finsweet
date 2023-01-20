import { FC } from 'react';
import {
  Box, Typography, Button, Divider, Grid,
} from '@mui/material';

import FeaturedPostPicture from '../../assets/all-posts-featured-picture.svg';

export const FeaturedPostSection: FC = () => (
  <Box
    component="section"
    sx={{
      width: '100%',
      height: {
        xs: '140vh', sm: '85vh', md: '100vh', lg: '85vh', xl: '90vh',
      },
      p: {
        xs: '5rem 2rem', sm: '5rem 2rem', md: '5rem 5rem', lg: '0 5rem', xl: '0 5rem',
      },
      bgcolor: '#F4F0F8',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      mb: '8rem',
    }}
  >
    <Grid
      container
      spacing={3}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={8}
        xl={8}
      >
        <Typography
          variant="body1"
          component="p"
          sx={{
            width: '12rem',
            fontSize: '1.1rem',
            fontWeight: 500,
            color: 'secondary.main',
            letterSpacing: '3px',
            fontFamily: "'Inter', sans-serif",
            mb: '2rem',
            textTransform: 'uppercase',
          }}
        >
          Featured Post
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            width: {
              xs: '100%', sm: '100%', md: '75%', lg: '75%', xl: '75%',
            },
            fontWeight: 700,
            color: 'secondary.main',
            fontSize: '3rem',
            fontFamily: "'Sen', sans-serif",
            lineHeight: '4rem',
            mb: '2rem',
          }}
        >
          Step-by-step guide to choosing great font pairs
        </Typography>
        <Box
          sx={{
            width: '18.5rem',
            height: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: '1rem',
            color: 'secondary.dark',
            fontFamily: "'Sen', sans-serif",
          }}
        >
          <Typography
            variant="body1"
            component="p"
            sx={{ fontSize: '1.2rem' }}
          >
            By
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ color: '#592EA9', fontSize: '1.2rem' }}
          >
            John Doe
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ bgcolor: 'secondary.main', fontSize: '1.2rem' }}
          />
          <Typography
            variant="body1"
            component="p"
            sx={{ fontSize: '1.2rem' }}
          >
            May 23, 2022
          </Typography>
        </Box>
        <Typography
          variant="body1"
          component="p"
          sx={{
            width: {
              xs: '100%', sm: '100%', md: '60%', lg: '60%', xl: '60%',
            },
            mb: '3rem',
            color: '#6D6E76',
            fontSize: '1.2rem',
          }}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: '15rem',
            height: '4rem',
            fontSize: '1.2rem',
            fontWeight: 700,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Read More &gt;
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={4}
        xl={4}
        sx={{
          '& .featured-post-pic': {
            width: '100%',
            height: '25rem',
            objectFit: 'cover',
            boxShadow: '0px 0px 2px 0px rgba(255, 255, 255, 0.25)',
            borderRadius: '5px',
          },
        }}
      >
        <img
          src={FeaturedPostPicture}
          alt="featured post"
          className="featured-post-pic"
        />
      </Grid>
    </Grid>
  </Box>
);
