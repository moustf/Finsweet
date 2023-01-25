import { FC } from 'react';
import { Box, Typography, Grid } from '@mui/material';

export const PostCard: FC<{
  img: string,
  title: string,
  heading: string,
  text: string,
  page: string,
}> = ({
  img, title, heading, text, page,
}) => (
  <Box
    sx={{
      p: {
        xs: '1rem 0', sm: '1rem 0', md: '2rem 0', lg: '2rem 0', xl: '2rem 0',
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
        sm={12}
        md={12}
        lg={4}
        xl={4}
        sx={{
          '& .post-image': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          },
        }}
      >
        <img src={img} alt="post thumbnail" className="post-image" />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={8}
        xl={8}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            p: {
              xs: 0, sm: 0, md: 0, lg: '2rem 0 2rem 2rem', xl: '2rem 0 2rem 1.5rem',
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Typography
            variant="body1"
            component="p"
            sx={{
              width: '70%',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#592EA9',
              letterSpacing: '3px',
              fontFamily: "'Inter', sans-serif",
              mb: {
                xs: '0.7rem', sm: '0.7rem', md: '0.9rem', lg: '2rem', xl: '1.5rem',
              },
              textTransform: 'uppercase',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              width: page === 'blog'
                ? {
                  xs: '100%', sm: '100%', md: '75%', lg: '75%', xl: '75%',
                }
                : {
                  xs: '100%', sm: '100%', md: '75%', lg: '80%', xl: '80%',
                },
              fontWeight: 700,
              color: 'secondary.main',
              fontSize: page === 'blog'
                ? {
                  xs: '1.2rem', sm: '1.3rem', md: '2rem', lg: '2rem', xl: '3rem',
                }
                : {
                  xs: '1.2rem', sm: '1.3rem', md: '2rem', lg: '2.3rem', xl: '2.3rem',
                },
              fontFamily: "'Sen', sans-serif",
              mb: {
                xs: '0.7rem', sm: '0.7rem', md: '0.9rem', lg: '2rem', xl: '2rem',
              },
            }}
          >
            {heading}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              width: page === 'blog'
                ? {
                  xs: '100%', sm: '100%', md: '60%', lg: '60%', xl: '80%',
                }
                : {
                  xs: '100%', sm: '100%', md: '60%', lg: '60%', xl: '80%',
                },
              color: '#6D6E76',
              fontSize: page === 'blog'
                ? {
                  xs: '0.9rem', sm: '0.9rem', md: '1rem', lg: '1.2rem', xl: '1.2rem',
                }
                : {
                  xs: '0.9rem', sm: '0.9rem', md: '1rem', lg: '1rem', xl: '1rem',
                },
              letterSpacing: {
                xs: 0, sm: 0, md: '1px', lg: '2px', xl: '2px',
              },
            }}
          >
            {text}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
);
