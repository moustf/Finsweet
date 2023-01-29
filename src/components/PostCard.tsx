import { FC } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router';

import { styles } from './styles';

export const PostCard: FC<{
  img: string,
  title: string,
  heading: string,
  text: string,
  page: string,
}> = ({
  img, title, heading, text, page,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        p: {
          xs: '1rem 0',
          sm: '1rem 0',
          md: '2rem 0',
          lg: '2rem 0',
          xl: '2rem 0',
        },
        cursor: 'pointer',
      }}
      onClick={() => navigate('/post')}
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
            sx={styles.postCardBox}
          >
            <Typography
              variant="body1"
              component="p"
              sx={styles.postCardP1}
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
                fontSize: page === 'blog'
                  ? {
                    xs: '1.2rem', sm: '1.3rem', md: '2rem', lg: '2rem', xl: '3rem',
                  }
                  : {
                    xs: '1.2rem', sm: '1.3rem', md: '2rem', lg: '2.3rem', xl: '2.3rem',
                  },
                ...styles.postCardH1,
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
                fontSize: page === 'blog'
                  ? {
                    xs: '0.9rem', sm: '0.9rem', md: '1rem', lg: '1.2rem', xl: '1.2rem',
                  }
                  : {
                    xs: '0.9rem', sm: '0.9rem', md: '1rem', lg: '1rem', xl: '1rem',
                  },
                ...styles.postCardP2,
              }}
            >
              {text}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
