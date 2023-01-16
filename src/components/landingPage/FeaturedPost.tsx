import { FC } from 'react';
import {
  Box, Card, Typography, Button, Divider,
} from '@mui/material';

import FeaturedPostImage from '../../assets/featured-post-image.png';

export const FeaturedPost: FC = () => (
  <Box
    sx={{
      width: '100%',
      height: {
        xs: '100vh', sm: '65vh', md: '90vh', lg: '90vh', xl: '90vh',
      },
      mb: { xs: '5rem' },
    }}
  >
    <Typography
      variant="h3"
      component="h2"
      sx={{
        width: '100%',
        fontFamily: "'Sen', sans-serif",
        fontWeight: 700,
        letterSpacing: '-2px',
        mb: '2rem',
      }}
    >
      Featured Post
    </Typography>
    <Card
      sx={{
        width: '100%',
        p: {
          xs: '1rem', sm: '2rem 1rem', md: '2rem', lg: '2rem', xl: '2rem',
        },
        borderRadius: 0,
        boxShadow: 'none',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'secondary.light',
        '& .postImage': {
          width: '100%',
          height: '25rem',
          boxShadow: '0px 0px 1px 0px rgba(0, 0, 0, .2)',
          marginBottom: '2rem',
        },
      }}
    >
      <img
        src={FeaturedPostImage}
        alt="featured post"
        className="postImage"
      />
      <Box
        sx={{
          width: '18rem',
          height: '22px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '1rem',
          color: 'primary.contrastText',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <Typography
          variant="body1"
          component="p"
          sx={{ fontSize: '1.1rem' }}
        >
          By
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ color: '#592EA9', fontSize: '1.1rem' }}
        >
          James West
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            width: '2px', height: '1.1rem', bgcolor: 'primary.contrastText', fontSize: '1.1rem', borderRadius: '5px',
          }}
        />
        <Typography
          variant="body1"
          component="p"
          sx={{ fontSize: '1.1rem' }}
        >
          May 23, 2022
        </Typography>
      </Box>
      <Typography
        variant="body1"
        component="p"
        sx={{
          width: {
            xs: '100%', sm: '100%', md: '42rem', lg: '32rem', xl: '48rem',
          },
          mb: '1rem',
          color: 'primary.contrastText',
          fontSize: '1.8rem',
          fontWeight: 700,
          fontFamily: "'Sen', sans-serif",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{
          width: {
            xs: '100%', sm: '100%', md: '42rem', lg: '42rem', xl: '42rem',
          },
          mb: '3rem',
          color: '#6D6E76',
          fontSize: '1.2rem',
        }}
      >
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident.
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
    </Card>
  </Box>
);
