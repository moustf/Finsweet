import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { v4 as uuid } from 'uuid';

import PostPic from '../../assets/post-section-pic.png';
import { styles } from './styles';

const Heading: FC = () => (
  <Typography
    variant="h2"
    component="h2"
    sx={styles.postSectionHeading}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
  </Typography>
);

const Paragraph: FC = () => (
  <Typography
    variant="body1"
    component="p"
    sx={styles.postSectionParagraph}
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
    sx={styles.postSectionMain}
  >
    <img src={PostPic} alt="post" className="single-post__pic" />
    <Box
      sx={styles.postSectionBox1}
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
                sx={styles.postSectionH4}
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
