import {
  Box, Grid, Typography, Divider, Avatar,
} from '@mui/material';
import { FC } from 'react';
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';

import { styles } from './styles';

export const TestimonialsSection: FC = () => (
  <Box
    sx={styles.testimonialsMain}
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
        sx={styles.testimonialsFirstGrid}
      >
        <Box
          sx={styles.testimonialsTextBox}
        >
          <Typography
            variant="body1"
            component="p"
            sx={styles.testimonialsFirstP}
          >
            Testimonials
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            sx={styles.testimonialsH3}
          >
            What people say about our blog
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={styles.testimonialsSecondP}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={styles.testimonialsDivider}
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
          sx={styles.testimonialsTestimonialCard}
        >
          <Typography
            variant="h5"
            component="h4"
            sx={styles.testimonialsFirstH4}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Box
            sx={styles.testimonialsPersonalCard}
          >
            <Box
              sx={styles.testimonialsPersonalCardInner}
            >
              <img src="https://i.ibb.co/XZ5Hdrz/profile-pic.png" alt="profile" className="profile-pic" />
              <Box
                sx={styles.testimonialsPersonalInfo}
              >
                <Typography
                  variant="h6"
                  component="h4"
                  sx={styles.testimonialsSecondH4}
                >
                  Jonathan Vallem
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={styles.testimonialsSecondP}
                >
                  New york, USA
                </Typography>
              </Box>
            </Box>
            <Box
              sx={styles.testimonialsArrowsBox}
            >
              <Avatar
                sx={styles.testimonialsArrowsBoxFirstAvatar}
              >
                <ArrowBackIcon sx={{ color: 'secondary.main' }} />
              </Avatar>
              <Avatar
                sx={styles.testimonialsArrowsBoxSecondAvatar}
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
