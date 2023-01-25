import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { PostCard } from '../PostCard';
import AuthorPostPic1 from '../../assets/author-post-pic1.svg';
import AuthorPostPic2 from '../../assets/author-post-pic2.svg';

export const PostsSection: FC = () => (
  <Box
    component="section"
    sx={{
      width: '100%',
      height: {
        xs: '140vh', sm: '150vh', md: '225vh', lg: '120vh', xl: '130vh',
      },
      p: {
        xs: '4rem 3rem', sm: '5rem 3rem', md: '5rem 8rem', lg: '8rem 13rem', xl: '8rem 13rem',
      },
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
    }}
  >
    <Typography
      variant="h1"
      component="h2"
      sx={{
        fontFamily: "'Sen', sans-serif",
        fontSize: {
          xs: '2.25rem', sm: '2.25rem', md: '2.25rem', lg: '2.25rem', xl: '2.25rem',
        },
        fontWeight: 700,
        lineHeight: '48px',
        letterSpacing: '-2px',
        color: 'secondary.main',
      }}
    >
      My Posts
    </Typography>
    <PostCard
      img={AuthorPostPic1}
      title="BUSINESS"
      heading="Font sizes in UI design: The complete guide to follow"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      page="author"
    />
    <PostCard
      img={AuthorPostPic2}
      title="Economy"
      heading="How to build rapport with your web design clients"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      page="author"
    />
  </Box>
);
