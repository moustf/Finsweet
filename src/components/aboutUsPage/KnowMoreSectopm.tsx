import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';

import KnowMorePic from '../../assets/know-more-pic.svg';
import { styles } from './styles';

export const KnowMoreSection: FC = () => (
  <Box
    component="section"
    sx={styles.knowMoreMain}
  >
    <Grid
      container
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
        sx={styles.knowMoreFirstGrid}
      >
        <Box
          sx={styles.knowMoreTextBox}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={styles.knowMoreTextBoxH2}
          >
            Our team of creatives
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            sx={styles.knowMoreTextBoxH4}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={styles.knowMoreTextBoxP}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
        sx={styles.knowMoreSecondGrid}
      >
        <Box
          sx={{
            backgroundImage: `url(${KnowMorePic})`,
            ...styles.knowMoreImageBox,
          }}
        >
          <Box
            sx={styles.knowMoreShape}
          />
        </Box>
      </Grid>
    </Grid>
  </Box>
);
