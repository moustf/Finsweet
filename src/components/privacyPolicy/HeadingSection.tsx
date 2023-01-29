import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { styles } from './styles';

export const HeadingSection: FC = () => (
  <Box
    component="section"
    sx={styles.headingSectionMain}
  >
    <Typography
      variant="h1"
      component="h1"
      sx={styles.headingSectionH1}
    >
      Privacy Policy
    </Typography>
    <Typography
      variant="body1"
      component="p"
      sx={styles.headingSectionP}
    >
      Last Updated  on 27th January 2022
    </Typography>
  </Box>
);
