import { FC } from 'react';
import {
  Box, Button, Grid, Typography,
} from '@mui/material';

import { styles } from './styles';

export const MottoSection: FC = () => (
  <Box
    sx={styles.mottoSectionMain}
  >
    <Box
      component="div"
      sx={styles.mottoSectionShape}
    />
    <Box
      component="section"
      sx={styles.mottoSectionGridBox}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
        >
          <Box
            sx={styles.mottoSectionAboutUsBox}
          >
            <Typography
              variant="body1"
              component="p"
              sx={styles.mottoSectionFirstP}
            >
              about us
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={styles.mottoSectionH2}
            >
              We are a community of content writers who share their learnings
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={styles.mottoSectionSecondP}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </Typography>
            <Button
              variant="text"
              sx={styles.mottoSectionReadMoreBtn}
              href="/about"
            >
              Read More &gt;
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
        >
          <Box
            sx={styles.mottoSectionMissionBox}
          >
            <Typography
              variant="body1"
              component="p"
              sx={styles.mottoSectionThirdP}
            >
              our mission
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              sx={styles.mottoSectionH3}
            >
              Creating valuable content for creatives all around the world
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={styles.mottoSectionForthP}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Box>
);
