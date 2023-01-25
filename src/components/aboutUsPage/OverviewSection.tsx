/* eslint max-len: ["error", { "code": 280 }] */
import { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { StatsSection } from './StatsSection';
import { MissionAndVision } from './MissionAndVision';

export const OverviewSection: FC = () => (
  <Box
    component="section"
    sx={{
      width: '100%',
      p: {
        xs: '3rem 2rem', sm: '3rem 2rem', md: '3rem 2rem', lg: '5rem', xl: '5rem',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
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
        sx={{
          display: 'flex',
          justifyContent: {
            xs: 'center', sm: 'center', md: 'center', lg: 'flex-end', xl: 'flex-end',
          },
        }}
      >
        <Box
          sx={{
            width: {
              xs: '90%', sm: '80%', md: '70%', lg: '70%', xl: '70%',
            },
            height: {
              xs: '100%', sm: '100%', md: '18rem', lg: '22.5rem', xl: '24rem',
            },
            p: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            bgcolor: 'secondary.contrastText',
            boxShadow: '0px 0px 1px 0px rgba(0, 0, 0, 0.1)',
            zIndex: 5,
          }}
        >
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontFamily: "'Inter', sans-serif",
              color: 'secondary.primary',
              fontWeight: 600,
              letterSpacing: '3px',
              fontSize: '1.2rem',
              mb: '1.5rem',
              textTransform: 'uppercase',
            }}
          >
            about us
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              width: {
                xs: '100%', sm: '70%', md: '42rem', lg: '90%', xl: '90%',
              },
              fontSize: {
                xs: '1rem', sm: '1.8rem', md: '1.5rem', lg: '2rem', xl: '2.8rem',
              },
              fontWeight: 700,
              lineHeight: {
                xs: '25px', sm: '45px', md: '55px', lg: '40px', xl: '55px',
              },
            }}
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
          sx={{
            width: {
              xs: '100%', sm: '70%', md: '35rem', lg: '30rem', xl: '35rem',
            },
            height: '18rem',
            display: {
              xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex',
            },
            alignItems: 'center',
            color: '#6D6E76',
            fontSize: {
              xs: '0.8rem', sm: '01rem', md: '1.2rem', lg: '1rem', xl: '1.2rem',
            },
            lineHeight: {
              xs: '28px', sm: '28px', md: '28px', lg: '25px', xl: '28px',
            },
            mb: '1rem',
          }}
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
      sx={{
        width: '100%',
        bgcolor: '#F4F0F8',
        p: {
          xs: '3rem 2rem', sm: '3rem 2rem', md: '5rem 2rem', lg: '7rem 6rem', xl: '7rem 6rem',
        },
        transform: {
          xs: 'translateY(-8rem)',
          sm: 'translateY(-8rem)',
          md: 'translateY(-8rem)',
          lg: 'translateY(-6rem)',
          xl: 'translateY(-6rem)',
        },
        alignSelf: 'center',
      }}
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
