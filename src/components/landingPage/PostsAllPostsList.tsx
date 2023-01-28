import { FC, useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { v4 as uuid } from 'uuid';

import { styles } from './styles';

const data = new Array(4).fill({
  by: 'By',
  author: 'James West',
  date: 'May 23, 2022',
  text: '8 Figma design systems that you can download for free today.',
});

export const PostsAllPostsList: FC = () => {
  const [currPost, setCurrPost] = useState(1);

  return (
    <Box sx={styles.postsAllPostsMain}>
      {
        data.map((post, i) => (
          <Box
            sx={styles.postsAllPostsPostBox}
            onClick={() => setCurrPost(i + 1)}
            key={uuid()}
            id={i + 1 === currPost ? 'active' : ''}
          >
            <Box
              sx={styles.postsAllPostsPostBoxInner}
            >
              <Typography
                variant="body1"
                component="p"
                sx={{ fontSize: '1.1rem' }}
              >
                {post.by}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{ color: '#592EA9', fontSize: '1.1rem' }}
              >
                {post.author}
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={styles.featuredPostDivider}
              />
              <Typography
                variant="body1"
                component="p"
                sx={{ fontSize: '1.1rem' }}
              >
                {post.date}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              component="p"
              sx={styles.postsAllPostsP}
            >
              {post.text}
            </Typography>
          </Box>
        ))
      }
    </Box>
  );
};
