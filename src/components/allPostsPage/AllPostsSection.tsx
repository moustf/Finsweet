/* eslint max-len: ["error", { "code": 170 }] */
import {
  Box, Divider, Typography, Button,
} from '@mui/material';
import { FC } from 'react';
import { v4 as uuid } from 'uuid';

import { PostCard } from '../PostCard';
import { styles } from './styles';

const cards = [
  {
    img: 'https://i.ibb.co/y5ZBNpd/post1.png',
    title: 'Startup',
    heading: 'Design tips for designers that cover everything you need',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    img: 'https://i.ibb.co/fGp4SBc/post2.png',
    title: 'Business',
    heading: 'How to build rapport with your web design clients',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    img: 'https://i.ibb.co/QJQ33pH/post3.png',
    title: 'Startup',
    heading: 'Logo design trends to avoid in 2022',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    img: 'https://i.ibb.co/yYZ1Q5Q/post4.png',
    title: 'Technology',
    heading: '8 Figma design systems you can download for free today',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    img: 'https://i.ibb.co/y5ZBNpd/post1.png',
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
