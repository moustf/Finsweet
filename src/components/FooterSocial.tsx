import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

import { styles } from './styles';

export const FooterSocial: FC = () => (
  <Box
    sx={styles.footerSocialMain}
  >
    <Typography
      variant="body1"
      component="p"
      sx={styles.footerSocialP}
    >
      Finstreet 118 2561 Fintown
      <br />
      Hello@finsweet.com  020 7993 2905
    </Typography>
    <Box sx={styles.footerSocialBox}>
      <FacebookIcon className="author-socials" />
      <TwitterIcon className="author-socials" />
      <InstagramIcon className="author-socials" />
      <LinkedInIcon className="author-socials" />
    </Box>
  </Box>
);
