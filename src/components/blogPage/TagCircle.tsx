import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { styles } from './styles';

export const TagCircle: FC<{ id: number, text: string }> = ({ id, text }) => (
  <Box
    sx={{
      width: id % 2 !== 0 ? '60%' : '30%',
      ...styles.tagCircleMain,
    }}
  >
    <Typography
      variant="body2"
      component="p"
      sx={styles.tagsCircleP}
    >
      {text}
    </Typography>
  </Box>
);
