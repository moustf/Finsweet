import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { styles } from './styles';

export const CategorySection: FC = () => (
  <Box
    component="section"
    sx={styles.categorySectionMain}
  >
    <Typography
      variant="h1"
      component="h1"
      sx={styles.categorySectionH1}
    >
      Business
    </Typography>
    <Typography
      variant="body1"
      component="p"
      sx={styles.categorySectionP}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
    </Typography>
    <Typography
      variant="subtitle2"
      component="p"
      sx={styles.categorySectionSubtitle}
    >
      Blog &gt; Business
    </Typography>
  </Box>
);
