import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { v4 as uuid } from 'uuid';

import PostPic from '../../assets/post-section-pic.png';

const Heading: FC = () => (
  <Typography
    variant="h2"
    component="h2"
    sx={{
      width: '100%',
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
        xs: '0.8rem', sm: '0.8rem', md: '1rem', lg: '1.2rem', xl: '1.2rem',
      },
    }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
  </Typography>
);

const Paragraph: FC = () => (
  <Typography
    variant="body1"
    component="p"
    sx={{
      fontFamily: "'Inter', sans-serif",
      fontSize: {
        xs: '0.7rem', sm: '0.9rem', md: '1rem', lg: '1rem', xl: '1rem',
      },
      fontWeight: 400,
      color: '#6D6E76',
      mb: {
        xs: '1.5rem', sm: '1.5rem', md: '1.5rem', lg: '3rem', xl: '3rem',
      },
    }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing
    at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo.
    Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
  </Typography>
);

export const PostSection: FC = () => (
  <Box
    component="section"
    sx={{
      width: '100%',
      p: {
        xs: '0 2rem', sm: '0 2rem', md: '0 2rem', lg: '0 5rem', xl: '0 5rem',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '4rem',
      '& .single-post__pic': {
        width: '100%',
        objectFit: 'contain',
      },
      mb: '5rem',
    }}
  >
    <img src={PostPic} alt="post" className="single-post__pic" />
    <Box
      sx={{
        width: {
          xs: '100%', sm: '100%', md: '100%', lg: '65%', xl: '50%',
        },
      }}
    >
      <Heading />
      <Paragraph />
      <Heading />
      <Paragraph />
      <Paragraph />
      <ul style={{ paddingLeft: '1rem' }}>
        {
          [
            'Lorem ipsum dolor sit amet',
            'Non blandit massa enim nec scelerisque',
            'Neque egestas congue quisque egestas',
          ].map((text) => (
            <li key={uuid()}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontFamily: "'Sen', sans-serif",
                  fontWeight: 700,
                  fontSize: {
                    xs: '0.9rem', sm: '1.2rem', md: '1.2rem', lg: '1.5rem', xl: '1.5rem',
                  },
                  color: 'secondary.main',
                  opacity: '0.78',
                }}
              >
                {text}
              </Typography>
            </li>
          ))
          }
      </ul>
      <Paragraph />
      <Heading />
      <Paragraph />
    </Box>
  </Box>
);
