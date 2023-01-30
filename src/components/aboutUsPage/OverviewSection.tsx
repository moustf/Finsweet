/* eslint max-len: ["error", { "code": 280 }] */
import { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { StatsSection } from './StatsSection';
import { MissionAndVision } from './MissionAndVision';
import { styles } from './styles';

export const OverviewSection: FC = () => (
  <Box
    component="section"
    sx={styles.overviewMain}
  >
    <Grid
      container
      spacing={5}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
        sx={styles.overviewFirstGrid}
      >
        <Box
          sx={styles.overviewAboutUsMain}
        >
          <Typography
            variant="body1"
            component="p"
            sx={styles.overviewAboutUsP}
          >
            about us
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={styles.overviewAboutUsH2}
          >
            We are a community of content writers who share their learnings
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
      >
        <Typography
          variant="body1"
          component="p"
          sx={styles.overviewAboutUsText}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <StatsSection />
      </Grid>
    </Grid>
    <Box
      sx={styles.overviewStatsBoxMain}
    >
      <Grid
        container
        sx={{
          gap: {
            xs: '2rem', sm: '2.5rem', md: '3rem', lg: 0, xl: 0,
          },
        }}
      >
        {
            [
              {
                slang: 'our mission',
                title: 'Creating valuable content for creatives all around the world',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.',
              },
              {
                slang: 'our vision',
                title: 'A platform that empowers individuals to improve',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.',
              },
            ].map(({ slang, text, title }) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                key={slang}
              >
                <MissionAndVision
                  slang={slang}
                  title={title}
                  text={text}
                />
              </Grid>
            ))
          }
      </Grid>
    </Box>
  </Box>
);
