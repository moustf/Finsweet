import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

import { styles } from './styles';

export const IntroductionSection: FC = () => (
  <Box
    component="section"
    sx={styles.introSectionMain}
  >
    <Box
      component="section"
      sx={styles.introSectionImageBox}
    >
      <img src="https://i.ibb.co/xg0dQ6d/author-pic.png" alt="author" className="author-pic" />
      <Box
        sx={styles.introSectionTextBox}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={styles.introSectionTextBoxH1}
        >
          Hey there, I&apos;m Andrew Jonhson and welcome to my Blog
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={styles.introSectionTextBoxP}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
          enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
          adipiscing at in tellus.
        </Typography>
        <Box
          sx={styles.introSectionIconsBox}
        >
          <FacebookIcon className="author-socials" />
          <TwitterIcon className="author-socials" />
          <InstagramIcon className="author-socials" />
          <LinkedInIcon className="author-socials" />
        </Box>
      </Box>
    </Box>
    <Box
      component="div"
      sx={styles.introSectionShape}
    />
  </Box>
);
