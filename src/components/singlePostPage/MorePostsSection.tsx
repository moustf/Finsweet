import {
  Box, Grid, Typography, Divider,
} from '@mui/material';
import { FC } from 'react';

import Post1 from '../../assets/post1.svg';
import Post2 from '../../assets/post2.svg';
import Post3 from '../../assets/post3.svg';

const PostCard: FC<{ img: string }> = ({ img }) => (
  <Box
    component="section"
    sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '1.5rem',
      '& .more-posts__post-pic': {
        width: '100%',
        objectFit: 'cover',
      },
    }}
  >
    <img src={img} alt="post" className="more-posts__post-pic" />
    <Box
      sx={{
        width: '100%',
        height: '22px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.7rem',
        color: 'secondary.dark',
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
        John Doe
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
      variant="h3"
      component="h3"
      sx={{
        width: {
          xs: '100%', sm: '100%', md: '100%', lg: '70%', xl: '70%',
        },
        fontWeight: 700,
        fontFamily: "'Sen', sans-serif",
        fontSize: {
          xs: '1rem', sm: '1rem', md: '1.2rem', lg: '1.8rem', xl: '1.8rem',
        },
        lineHeight: {
          xs: '1.5rem', sm: '1.5rem', md: '1.5rem', lg: '2.5rem', xl: '2.5rem',
        },
        color: 'secondary.main',
        letterSpacing: {
          xs: 0, sm: 0, md: 0, lg: '-2px', xl: '-2px',
        },
      }}
    >
      A UX Case Study Creating a Studious Environment for Students:
    </Typography>
    <Typography
      variant="body1"
      component="p"
      sx={{
        width: {
          xs: '100%', sm: '100%', md: '75%', lg: '75%', xl: '75%',
        },
        color: 'secondary.main',
        opacity: 0.7,
        fontSize: '1.2rem',
      }}
    >
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident.
    </Typography>
  </Box>
);

export const MorePostsSection: FC = () => (
  <Box
    sx={{
      width: '100%',
      p: {
        xs: '0 2rem', sm: '0 2rem', md: '0 2rem', lg: '0 5rem', xl: '0 5rem',
      },
      mb: '5rem',
    }}
  >
    <Typography
      variant="h2"
      component="h2"
      sx={{
        fontWeight: 700,
        fontFamily: "'Sen', sans-serif",
        fontSize: {
          xs: '1.5rem', sm: '1.8rem', md: '2rem', lg: '2.3rem', xl: '2.3rem',
        },
        color: 'secondary.main',
        letterSpacing: {
          xs: 0, sm: 0, md: 0, lg: '-2px', xl: '-2px',
        },
        mb: {
          xs: '2rem', sm: '2rem', md: '2rem', lg: '4rem', xl: '4rem',
        },
      }}
    >
      What to read next
    </Typography>
    <Box>
      <Grid
        container
        spacing={5}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
        >
          <PostCard img={Post1} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
        >
          <PostCard img={Post2} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
        >
          <PostCard img={Post3} />
        </Grid>
      </Grid>
    </Box>
    <Divider
      flexItem
      sx={{
        width: '100%',
        height: '1px',
        bgcolor: '#6D6E76',
        borderRadius: '3px',
        opacity: 0.3,
        mt: '4rem',
      }}
    />
  </Box>
);
