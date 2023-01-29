import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';

import { styles } from './styles';

export const JoinOurTeamSection: FC = () => (
  <Box
    sx={styles.joinOurTeamMain}
  >
    <Typography
      variant="h2"
      component="h2"
      sx={styles.joinOurTeamH2}
    >
      Join our team to be a part of our story
    </Typography>
    <Typography
      variant="body1"
      component="p"
      sx={styles.joinOurTeamP}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
    </Typography>
    <Button
      variant="contained"
      sx={styles.joinOurTeamBtn}
    >
      Join Now
    </Button>
  </Box>
);
