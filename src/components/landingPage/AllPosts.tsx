import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { PostsAllPostsList } from './PostsAllPostsList';

export const AllPosts: FC = () => (
  <Box sx={{
    width: '100%',
    height: '100%',
    p: {
      xs: '0 1rem', sm: '0 1rem', md: '0 2rem', lg: '0 2rem', xl: '0 2rem',
    },
    transform: {
      xs: 'translateY(8rem)', sm: 'translateY(23rem)', md: 'none', lg: 'none', xl: 'none',
    },
  }}
  >
    <Box sx={{
      width: '100%',
      display: 'flex',
      flexDirection: {
        xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row',
      },
      justifyContent: 'space-between',
      alignItems: {
        xs: 'flex-start', ms: 'center', md: 'center', lg: 'center', xl: 'center',
      },
      mb: '2rem',
      gap: { xs: '1rem', sm: '1rem' },
    }}
    >
      <Typography
        variant="h3"
        component="h2"
        sx={{
          width: { xs: '100%', sm: '100%' },
          fontFamily: "'Sen', sans-serif",
          fontWeight: 700,
          letterSpacing: '-2px',
          fontSize: { lg: '2.5rem' },
        }}
      >
        Featured Post
      </Typography>
      <Button
        variant="text"
        href="/posts"
        sx={{
          width: { sm: '8rem' },
          color: '#592EA9',
          fontFamily: "'Inter', sans-serif",
          fontSize: '1rem',
          textTransform: 'none',
        }}
      >
        View All
      </Button>
    </Box>
    <PostsAllPostsList />
  </Box>
);
