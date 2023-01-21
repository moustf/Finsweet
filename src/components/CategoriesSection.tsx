import { FC, useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';

import BusinessIcon from '../assets/business.png';
import CyborgIcon from '../assets/cyborg.png';
import EconomyIcon from '../assets/economy.png';
import RocketIcon from '../assets/rocket.png';

export const CategoriesSection: FC<{ page: string }> = ({ page }) => {
  const [index, setIndex] = useState<number>(1);

  return (
    <Box
      sx={{
        width: '100%',
        height: '21rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transform: {
          xs: page === 'all-posts' ? 'translateY(40rem)' : 'translateY(105rem)',
          sm: page === 'all-posts' ? 'translateY(18rem)' : 'translateY(72rem)',
          md: page === 'all-posts' ? 'translateY(15rem)' : 'translateY(67rem)',
          lg: 'translateY(10rem)',
          xl: 'translateY(5rem)',
        },
        mb: '8rem',
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: '2.25rem',
          fontFamily: "'Sen', sans-serif",
          fontWeight: 700,
          letterSpacing: '-2px',
        }}
      >
        Choose A Category
      </Typography>
      <Box
        sx={{
          width: '100%',
          p: {
            xs: '2rem', sm: '2rem', md: '2rem', lg: '5rem', xl: '5rem',
          },
        }}
      >
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            xl={3}
          >
            <Box
              component="section"
              sx={{
                width: '100%',
                height: {
                  xs: '20rem', sm: '20rem', md: '16rem', lg: '16rem', xl: '16rem',
                },
                pl: '2rem',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'secondary.light',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1.2rem',
                bgcolor: index === 1 ? 'primary.main' : '',
                cursor: 'pointer',
              }}
              onClick={() => setIndex(1)}
            >
              <Box sx={{
                width: '3rem',
                height: '3rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'primary.light',
                borderRadius: '0.8rem',
                '& .category__image': {
                  width: '3rem',
                  height: '3rem',
                },
              }}
              >
                <img src={BusinessIcon} alt="business icon" className="category__image" />
              </Box>
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  fontFamily: "'Sen', sans-serif",
                  fontSize: '1.8rem',
                  fontWeight: 700,
                }}
              >
                Business
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  width: {
                    xs: '12rem', sm: '14.5rem', md: '14.5rem', lg: '14.5rem', xl: '14.5rem',
                  },
                  color: '#6D6E76',
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            xl={3}
          >
            <Box
              component="section"
              sx={{
                width: '100%',
                height: {
                  xs: '20rem', sm: '20rem', md: '16rem', lg: '16rem', xl: '16rem',
                },
                pl: '2rem',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'secondary.light',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1.2rem',
                bgcolor: index === 2 ? 'primary.main' : '',
                cursor: 'pointer',
              }}
              onClick={() => setIndex(2)}
            >
              <Box sx={{
                width: '3rem',
                height: '3rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'primary.light',
                borderRadius: '0.8rem',
                '& .category__image': {
                  width: '1.5rem',
                  height: '1.5rem',
                },
              }}
              >
                <img src={RocketIcon} alt="business icon" className="category__image" />
              </Box>
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  fontFamily: "'Sen', sans-serif",
                  fontSize: '1.8rem',
                  fontWeight: 700,
                }}
              >
                Startup
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  width: {
                    xs: '12rem', sm: '14.5rem', md: '14.5rem', lg: '14.5rem', xl: '14.5rem',
                  },
                  color: '#6D6E76',
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            xl={3}
          >
            <Box
              component="section"
              sx={{
                width: '100%',
                height: {
                  xs: '20rem', sm: '20rem', md: '16rem', lg: '16rem', xl: '16rem',
                },
                pl: '2rem',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'secondary.light',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1.2rem',
                bgcolor: index === 3 ? 'primary.main' : '',
                cursor: 'pointer',
              }}
              onClick={() => setIndex(3)}
            >
              <Box sx={{
                width: '3rem',
                height: '3rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'primary.light',
                borderRadius: '0.8rem',
                '& .category__image': {
                  width: '3rem',
                  height: '3rem',
                },
              }}
              >
                <img src={EconomyIcon} alt="business icon" className="category__image" />
              </Box>
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  fontFamily: "'Sen', sans-serif",
                  fontSize: '1.8rem',
                  fontWeight: 700,
                }}
              >
                Economy
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  width: {
                    xs: '12rem', sm: '14.5rem', md: '14.5rem', lg: '14.5rem', xl: '14.5rem',
                  },
                  color: '#6D6E76',
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            xl={3}
          >
            <Box
              component="section"
              sx={{
                width: '100%',
                height: {
                  xs: '20rem', sm: '20rem', md: '16rem', lg: '16rem', xl: '16rem',
                },
                pl: '2rem',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'secondary.light',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1.2rem',
                bgcolor: index === 4 ? 'primary.main' : '',
                cursor: 'pointer',
              }}
              onClick={() => setIndex(4)}
            >
              <Box sx={{
                cursor: 'pointer',
                width: '3rem',
                height: '3rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'primary.light',
                borderRadius: '0.8rem',
                '& .category__image': {
                  width: '1.5rem',
                  height: '1.5rem',
                },
              }}
              >
                <img src={CyborgIcon} alt="business icon" className="category__image" />
              </Box>
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  fontFamily: "'Sen', sans-serif",
                  fontSize: '1.8rem',
                  fontWeight: 700,
                }}
              >
                Technology
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  width: {
                    xs: '12rem', sm: '14.5rem', md: '14.5rem', lg: '14.5rem', xl: '14.5rem',
                  },
                  color: '#6D6E76',
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
