import { FC } from 'react';

import { Box, Typography } from '@mui/material';
import { styles } from './styles';

export const HeadingSection: FC = () => (
  <Box
    component="section"
    sx={styles.headingSectionMain}
  >
    <Typography
      variant="h3"
      component="h3"
      sx={styles.headingSectionH3}
    >
      Contact us
    </Typography>
    <Typography
      variant="h1"
      component="h1"
      sx={styles.headingSectionH1}
    >
      Let&apos;s Start a Conversation
    </Typography>
    <Typography
      variant="body1"
      component="p"
      sx={styles.headingSectionP}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
    </Typography>
  </Box>
);
