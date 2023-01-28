/* eslint max-len: ["error", { "code": 170 }] */
import {
  Box, Divider, Typography, Button,
} from '@mui/material';
import { FC } from 'react';
import { v4 as uuid } from 'uuid';

import Post1 from '../../assets/post1.svg';
import Post2 from '../../assets/post2.svg';
import Post3 from '../../assets/post3.svg';
import Post4 from '../../assets/post4.svg';
import { PostCard } from '../PostCard';
import { styles } from './styles';

const cards = [
  {
    img: Post1,
    title: 'Startup',
    heading: 'Design tips for designers that cover everything you need',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    img: Post2,
    title: 'Business',
    heading: 'How to build rapport with your web design clients',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    img: Post3,
    title: 'Startup',
    heading: 'Logo design trends to avoid in 2022',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    img: Post4,
    title: 'Technology',
    heading: '8 Figma design systems you can download for free today',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    img: Post1,
    title: 'Economy',
    heading: 'Font sizes in UI design: The complete guide to follow',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
];

export const AllPostsSection: FC = () => (
  <Box
    sx={styles.allPostsMain}
  >
    <Typography
      variant="h1"
      component="h1"
      sx={styles.allPostsTitle}
    >
      All posts
    </Typography>
    <Divider flexItem sx={styles.allPostsDivider} />
    {
      cards.map(({
        img, title, heading, text,
      }) => (
        <PostCard
          page="blog"
          key={uuid()}
          img={img}
          title={title}
          heading={heading}
          text={text}
        />
      ))
    }
    <Box
      sx={styles.allPostsLowerNavBox}
    >
      <Button variant="text" sx={{ textTransform: 'none' }}>
        <Typography
          variant="h4"
          component="h4"
          sx={styles.allPostsLowerNavBoxPrev}
        >
          &lt; Prev
        </Typography>
      </Button>
      <Button variant="text" sx={{ textTransform: 'none' }}>
        <Typography
          variant="h3"
          component="h3"
          sx={styles.allPostsLowerNavBoxNext}
        >
          Next &gt;
        </Typography>
      </Button>
    </Box>
  </Box>
);
