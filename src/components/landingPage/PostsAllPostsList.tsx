import { FC, useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';

import { v4 as uuid } from 'uuid';

const data = new Array(4).fill({
  by: 'By',
  author: 'James West',
  date: 'May 23, 2022',
  text: '8 Figma design systems that you can download for free today.',
});

export const PostsAllPostsList: FC = () => {
  const [currPost, setCurrPost] = useState(1);

  return (
    <Box sx={{
      width: '100%',
      height: '90%',
      pl: {
        md: '2rem', lg: '2rem', xl: '2rem',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& #active': {
        bgcolor: 'primary.light',
        boxShadow: '0px 0px 1px 0px rgba(0, 0, 0, .2)',
      },
    }}
    >
      {
        data.map((post, i) => (
          <Box
            sx={{
              width: '100%',
              height: {
                xs: '15rem', sm: '15rem', md: '11.5rem', lg: '11.5rem', xl: '11.5rem',
              },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              pl: {
                xs: '1rem', sm: '1rem', md: '2rem', lg: '2rem', xl: '2rem',
              },
              cursor: 'pointer',
            }}
            onClick={() => setCurrPost(i + 1)}
            key={uuid()}
            id={i + 1 === currPost ? 'active' : ''}
          >
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
                sx={{
                  width: '2px', height: '1.1rem', bgcolor: 'primary.contrastText', fontSize: '1.1rem', borderRadius: '5px',
                }}
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
              sx={{
                width: '80%',
                mb: '1rem',
                color: 'primary.contrastText',
                fontSize: {
                  xs: '1.5rem', sm: '1.5rem', md: '1.5rem', lg: '1.2rem', xl: '1.5rem',
                },
                fontWeight: 700,
                fontFamily: "'Sen', sans-serif",
              }}
            >
              {post.text}
            </Typography>
          </Box>
        ))
      }
    </Box>
  );
};
