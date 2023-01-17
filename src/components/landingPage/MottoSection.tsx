import { FC } from 'react';
import {
  Box, Button, Grid, Typography,
} from '@mui/material';

export const MottoSection: FC = () => (
  <Box
    sx={{
      width: '100%',
      height: {
        xs: '100vh', sm: '100vh', md: '100vh', lg: '60vh', xl: '60vh',
      },
      padding: {
        xs: '1rem', sm: '1rem', mb: '5rem', lg: '5rem', xl: '5rem',
      },
      mb: '10rem',
      transform: {
        xs: 'translateY(82rem)', sm: 'translateY(68rem)', md: 'translateY(55rem)', lg: 'translateY(-3rem)', xl: 'none',
      },
    }}
  >
    <Box
      component="div"
      sx={{
        width: '100%',
        height: '1.5rem',
        background: 'linear-gradient(90deg,  transparent 0%, transparent 25%, #FFD050 25%, #FFD050 75%, #592EA9 75%,  #592EA9 100%)',
      }}
    />
    <Box
      component="section"
      sx={{
        width: '100%',
        height: {
          xs: '85vh', sm: '80vh', md: '90vh', lg: '60vh', xl: '60vh',
        },
        bgcolor: '#F4F0F8',
        pt: {
          xs: '3rem', sm: '3rem', md: '3rem', lg: '3rem', xl: 0,
        },
      }}
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
            sx={{
              width: '100%',
              height: {
                xs: '42vh', sm: '40vh', md: '45vh', lg: '45vh', xl: '60vh',
              },
              pl: {
                xs: '1rem', sm: '2rem', md: '5rem', lg: '5rem', xl: '5rem',
              },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
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
                  xs: '100%', sm: '70%', md: '42rem', lg: '30rem', xl: '42rem',
                },
                fontSize: {
                  xs: '1rem', sm: '1.8rem', md: '1.5rem', lg: '2rem', xl: '2.8rem',
                },
                fontWeight: 700,
                lineHeight: {
                  xs: '25px', sm: '45px', md: '55px', lg: '40px', xl: '55px',
                },
                mb: '1rem',
              }}
            >
              We are a community of content writers who share their learnings
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                width: {
                  xs: '100%', sm: '70%', md: '35rem', lg: '30rem', xl: '35rem',
                },
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </Typography>
            <Button
              variant="text"
              sx={{
                width: 'fit-content',
                justifyContent: 'flex-start',
                color: '#592EA9',
                fontWeight: 700,
                fontSize: {
                  xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1rem', xl: '1.2rem',
                },
              }}
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
            sx={{
              width: '100%',
              height: {
                xs: '42vh', sm: '40vh', md: '45vh', lg: '45vh', xl: '60vh',
              },
              pl: {
                xs: '1rem', sm: '2rem', md: '5rem', lg: '2rem', xl: '3rem',
              },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              pb: {
                xs: '3rem', sm: '3rem', md: '3rem', lg: '3rem', xl: 0,
              },
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
                mb: '1.5rem',
                textTransform: 'uppercase',
                fontSize: '1.2rem',
              }}
            >
              our mission
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                width: {
                  xs: '100%', sm: '70%', md: '38rem', lg: '30rem', xl: '38rem',
                },
                fontSize: {
                  xs: '1rem', sm: '1.6rem', md: '1.5rem', lg: '2rem', xl: '2.5rem',
                },
                fontWeight: 700,
                lineHeight: {
                  xs: '25px', sm: '45px', md: '48px', lg: '40px', xl: '48px',
                },
                mb: '1rem',
              }}
            >
              Creating valuable content for creatives all around the world
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                width: {
                  xs: '100%', sm: '70%', md: '35rem', lg: '28rem', xl: '40rem',
                },
                color: '#6D6E76',
                lineHeight: {
                  xs: '28px', sm: '28px', md: '28px', lg: '30px', xl: '28px',
                },
                fontSize: {
                  xs: '0.8rem', sm: '01rem', md: '1.2rem', lg: '1rem', xl: '1.2rem',
                },
                mb: '1rem',
              }}
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
