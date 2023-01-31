import { Box, Typography } from '@mui/material';
import { FC } from 'react';

import { styles } from './styles';

const StatsBox: FC<{ number: string, text: string }> = ({ number, text }) => (
  <Box
    sx={styles.statsBoxMain}
  >
    <Typography
      variant="h3"
      component="h3"
      sx={styles.statsBoxNumber}
    >
      {number}
    </Typography>
    <Typography
      variant="body1"
      component="p"
      sx={styles.statsBoxText}
    >
      {text}
    </Typography>
  </Box>
);

export const StatsSection: FC = () => (
  <Box
    component="section"
    sx={{
      backgroundImage: 'url(https://i.ibb.co/SsVdN3g/stats-pic-wide.png)',
      ...styles.statsSectionMain,
    }}
  >
    <Box
      sx={styles.statsSectionInnerBox}
    >
      <StatsBox number="12+" text="Blogs Published" />
      <StatsBox number="18K+" text="Views on Finsweet" />
      <StatsBox number="30K+" text="Total active users" />
    </Box>
    <Box
      sx={styles.statsSectionShape}
    />
  </Box>
);
