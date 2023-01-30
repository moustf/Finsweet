import { FC } from 'react';
import { Typography, Box } from '@mui/material';

import { styles } from './styles';

export const MissionAndVision: FC<{ slang: string, title: string, text: string }> = ({
  slang, title, text,
}) => (
  <Box
    sx={styles.missionAndVisionMain}
  >
    <Typography
      variant="caption"
      component="p"
      sx={styles.missionAndVisionSlang}
    >
      {slang}
    </Typography>
    <Typography
      variant="h3"
      component="h3"
      sx={styles.missionAndVisionTitle}
    >
      {title}
    </Typography>
    <Typography
      variant="body1"
      component="p"
      sx={styles.missionAndVisionText}
    >
      {text}
    </Typography>
  </Box>
);
