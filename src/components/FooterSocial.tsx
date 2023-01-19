import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

export const FooterSocial: FC = () => (
  <Box
    sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <Typography
      variant="body1"
      component="p"
      sx={{
        fontFamily: "'Inter', sans-serif",
        width: {
          xs: '18rem', sm: '18rem', md: '23rem', lg: '23rem', xl: '23rem',
        },
        fontSize: {
          xs: '0.7rem', sm: '0.7rem', md: '0.9rem', lg: '0.9rem', xl: '0.9rem',
        },
        color: 'secondary.contrastText',
      }}
    >
      Finstreet 118 2561 Fintown
      <br />
      Hello@finsweet.com  020 7993 2905
    </Typography>
    <Box
      sx={{
        width: '10%',
        height: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: {
          xs: '0.5rem', sm: '0.5rem', md: '1rem', lg: '1rem', xl: '1rem',
        },
        '& .author-socials': {
          width: {
            xs: '1.2rem', sm: '1.2rem', md: '1.5rem', lg: '1.5rem', xl: '1.5rem',
          },
          height: '1.6rem',
          color: '#6D6E76',
        },
      }}
    >
      <FacebookIcon className="author-socials" />
      <TwitterIcon className="author-socials" />
      <InstagramIcon className="author-socials" />
      <LinkedInIcon className="author-socials" />
    </Box>
  </Box>
);
