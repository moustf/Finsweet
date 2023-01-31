import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';

import { styles } from './styles';

export const WhyWeStartedSection: FC = () => (
  <Box
    component="section"
    sx={styles.whyWeStartedSection}
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
        sx={styles.whyWeStartedFirstGrid}
      >
        <Box
          sx={{
            backgroundImage: 'url(https://i.ibb.co/3Wbq1W0/why-we-started-pic.png)',
            ...styles.whyWeStartedImageBox,
          }}
        >
          <Box
            sx={styles.whyWeStartedShape}
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
        sx={styles.whyWeStartedSecondGrid}
      >
        <Box
          sx={styles.whyWeStartedTextBox}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={styles.whyWeStartedTextBoxH2}
          >
            Why we started this Blog
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            sx={styles.whyWeStartedTextBoxH4}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={styles.whyWeStartedTextBoxP}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
);
