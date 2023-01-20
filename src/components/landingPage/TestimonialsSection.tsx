import {
  Box, Grid, Typography, Divider, Avatar,
} from '@mui/material';
import { FC } from 'react';
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';

import ProfilePicture from '../../assets/profile-pic.svg';

export const TestimonialsSection: FC = () => (
  <Box
    sx={{
      width: '100%',
      height: '30rem',
      p: {
        xs: '1rem', sm: '5rem', md: '5rem', lg: '5rem', xl: '5rem',
      },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transform: {
        xs: 'translateY(240rem)',
        sm: 'translateY(182rem)',
        md: 'translateY(148rem)',
        lg: 'translateY(34rem)',
        xl: 'translateY(20rem)',
      },
      mb: '30rem',
    }}
  >
    <Grid
      container
      sx={{
        bgcolor: 'primary.light',
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={5}
        xl={5}
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row',
          },
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: {
              xs: '35vh', sm: '35vh', md: '37vh', lg: '45vh', xl: '60vh',
            },
            pl: {
              xs: '3rem', sm: '6rem', md: '5rem', lg: '2rem', xl: '5rem',
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            pb: {
              xs: '1rem',
              sm: '1rem',
              md: '3rem',
              lg: '3rem',
              xl: 0,
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
            Testimonials
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              width: {
                xs: '100%', sm: '70%', md: '25rem', lg: '22rem', xl: '21.5rem',
              },
              fontSize: {
                xs: '1rem', sm: '1.6rem', md: '1.5rem', lg: '2rem', xl: '2.25rem',
              },
              fontWeight: 700,
              lineHeight: {
                xs: '25px', sm: '45px', md: '48px', lg: '40px', xl: '48px',
              },
              mb: '1rem',
              fontFamily: "'Sen', sans-serif",
            }}
          >
            What people say about our blog
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              width: {
                xs: '100%', sm: '70%', md: '35rem', lg: '28rem', xl: '24rem',
              },
              color: '#6D6E76',
              lineHeight: {
                xs: '28px', sm: '28px', md: '28px', lg: '30px', xl: '28px',
              },
              fontSize: {
                xs: '0.8rem', sm: '01rem', md: '1.2rem', lg: '1rem', xl: '1.2rem',
              },
              mb: '1rem',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            height: '70%',
            width: '2px',
            alignSelf: 'center',
            bgcolor: '#6D6E76',
            opacity: '0.3',
            borderRadius: '3px',
            display: {
              xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block',
            },
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={7}
        xl={7}
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: {
              xs: '26rem',
              sm: '23rem',
              md: '25rem',
              lg: '100%',
              xl: '90%',
            },
            p: {
              xs: '1rem 3rem 3rem',
              sm: '1rem 6rem 5rem',
              md: '1rem 6rem 5rem',
              lg: '5rem 6rem',
              xl: '5rem 6rem',
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="h5"
            component="h4"
            sx={{
              width: {
                xs: '100%', sm: '28rem', md: '28rem', lg: '28rem', xl: '28rem',
              },
              height: '8rem',
              fontWeight: 700,
              lineHeight: '40px',
              fontSize: {
                xs: '1rem', sm: '1.4rem', md: '1.5rem', lg: '1.4rem', xl: '1.5rem',
              },
              fontFamily: "'Sen', sans-serif",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: {
                xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row',
              },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            <Box
              sx={{
                width: '18rem',
                height: '4.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <img src={ProfilePicture} alt="profile" className="profile-pic" />
              <Box
                sx={{
                  width: '70%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}
              >
                <Typography
                  variant="h6"
                  component="h4"
                  sx={{
                    width: '15rem',
                    fontWeight: 700,
                    fontFamily: "'Sen', sans-serif",
                  }}
                >
                  Jonathan Vallem
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    lineHeight: '1.8rem',
                    color: '#6D6E76',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  New york, USA
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: {
                  xs: '90%', sm: '30%', md: '20%', lg: '30%', xl: '20%',
                },
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  width: '3rem',
                  height: '3rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: 'secondary.contrastText',
                }}
              >
                <ArrowBackIcon sx={{ color: 'secondary.main' }} />
              </Avatar>
              <Avatar
                sx={{
                  width: '4rem',
                  height: '4rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: 'secondary.main',
                }}
              >
                <ArrowForwardIcon sx={{ color: 'secondary.contrastText' }} />
              </Avatar>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Box>
);
