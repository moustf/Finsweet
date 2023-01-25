import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

import AuthorPic from '../../assets/author-pic.svg';

export const IntroductionSection: FC = () => (
  <Box
    component="section"
    sx={{
      width: '100%',
      height: {
        xs: '95vh', sm: '75vh', md: '60vh', lg: '70vh', xl: '60vh',
      },
      p: {
        xs: '2rem', sm: '2rem', md: '2rem', lg: 0, xl: 0,
      },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      bgcolor: '#F4F0F8',
    }}
  >
    <Box
      component="section"
      sx={{
        width: {
          xs: '100%', sm: '100%', md: '70%', lg: '70%', xl: '50%',
        },
        display: 'flex',
        flexDirection: {
          xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row',
        },
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
      }}
    >
      <img src={AuthorPic} alt="author" className="author-pic" />
      <Box
        sx={{
          width: '75%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontFamily: "'Sen', sans-serif",
            width: '100%',
            fontSize: {
              xs: '1.5rem', sm: '2rem', md: '2rem', lg: '2.5rem', xl: '3rem',
            },
            fontWeight: 700,
            lineHeight: {
              xs: '2rem', sm: '2rem', md: '4rem', lg: '4rem', xl: '4rem',
            },
            color: 'secondary.main',
            letterSpacing: {
              xs: 0, sm: 0, md: '-2px', lg: '-2px', xl: '-2px',
            },
            textAlign: {
              xs: 'center', sm: 'center', md: 'left', lg: 'left', xl: 'left',
            },
          }}
        >
          Hey there, I&apos;m Andrew Jonhson and welcome to my Blog
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontFamily: "'Inter', sans-serif",
            width: '100%',
            fontSize: {
              xs: '0.9rem', sm: '1rem', md: '0.9rem', lg: '1rem', xl: '1rem',
            },
            fontWeight: 400,
            lineHeight: '1.5rem',
            color: '#6D6E76',
            textAlign: {
              xs: 'center', sm: 'center', md: 'left', lg: 'left', xl: 'left',
            },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
          enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
          adipiscing at in tellus.
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: '1rem',
            display: 'flex',
            justifyContent: {
              xs: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start', xl: 'flex-start',
            },
            alignItems: 'center',
            gap: '1rem',
            '& .author-socials': {
              width: '1rem',
              height: '1.1rem',
              color: 'secondary.main',
            },
          }}
        >
          <FacebookIcon className="author-socials" />
          <TwitterIcon className="author-socials" />
          <InstagramIcon className="author-socials" />
          <LinkedInIcon className="author-socials" />
        </Box>
      </Box>
    </Box>
    <Box
      component="div"
      sx={{
        width: {
          xs: '20rem', sm: '40rem', md: '60rem', lg: '80rem', xl: '100rem',
        },
        height: {
          xs: '1rem', sm: '1rem', md: '1rem', lg: '1.5rem', xl: '1.5rem',
        },
        background: 'linear-gradient(90deg,  transparent 0%, transparent 25%, #FFD050 25%, #FFD050 75%, #592EA9 75%,  #592EA9 100%)',
        position: 'absolute',
        bottom: 0,
        left: {
          xs: 0, sm: 0, md: '-7rem', lg: '-8rem', xl: 0,
        },
      }}
    />
  </Box>
);
