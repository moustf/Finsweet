import { Box, Typography } from '@mui/material';
import { FC } from 'react';

import { styles } from './styles';

export const InfoAndTitleSection: FC = () => (
  <Box
    component="section"
    sx={styles.infoAndTitleMain}
  >
    <Box>
      <Box
        sx={styles.infoAndTitleBox1}
      >
        <img src="https://i.ibb.co/C5BxwYW/all-posts-featured-pic.png" alt="profile" className="profile-pic" />
        <Box
          sx={styles.infoAndTitleBox2}
        >
          <Typography
            variant="h6"
            component="h4"
            sx={styles.infoAndTitleFirstH4}
          >
            Jonathan Vallem
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={styles.infoAndTitleP}
          >
            New york, USA
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="h1"
        component="h1"
        sx={styles.infoAndTitleH1}
      >
        Step-by-step guide to choosing great font pairs
      </Typography>
      <Box
        sx={styles.infoAndTitleBox3}
      >
        <img src="https://i.ibb.co/C9np4rh/rocket.png" alt="rocket icon" className="single-post__rocket-icon" />
        <Typography
          variant="h4"
          component="h4"
          sx={styles.infoAndTitleSecondH4}
        >
          Startup
        </Typography>
      </Box>
    </Box>
  </Box>
);
