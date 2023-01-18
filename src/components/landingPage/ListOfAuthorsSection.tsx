import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

import Author1 from '../../assets/author1.svg';
import Author2 from '../../assets/author2.svg';
import Author3 from '../../assets/author3.svg';
import Author4 from '../../assets/author4.svg';

export const ListOfAuthorsSection: FC = () => (
  <Box
    sx={{
      width: '100%',
      height: '30rem',
      p: '5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transform: {
        xs: 'translateY(125rem)',
        sm: 'translateY(80rem)',
        md: 'translateY(78rem)',
        lg: 'translateY(-5rem)',
        xl: 'translateY(10rem)',
      },
      mb: '18rem',
    }}
  >
    <Typography
      variant="h2"
      component="h2"
      sx={{
        width: '14.4rem',
        fontFamily: "'Sen', sans-serif",
        fontWeight: 700,
        fontSize: '2.25rem',
        letterSpacing: '-2px',
        mb: '3rem',
      }}
    >
      List of Authors
    </Typography>
    <Box sx={{
      width: '100%',
      display: 'flex',
      justifyContent: {
        xs: 'center', sm: 'center', md: 'center', lg: 'center', xl: 'space-between',
      },
      gap: {
        xs: 0, sm: 0, md: '5rem', lg: '5rem', xl: 0,
      },
      alignItems: 'center',
      flexWrap: 'wrap',
    }}
    >
      <Box
        sx={{
          width: '23rem',
          height: '24rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.2rem',
          bgcolor: 'secondary.light',
          mb: '2rem',
        }}
      >
        <img src={Author1} alt="author one" className="author author1" />
        <Typography
          variant="h1"
          component="h3"
          sx={{
            width: '10rem',
            fontFamily: "'Sen', sans-serif",
            fontWight: 700,
            fontSize: '1.75rem',
            letterSpacing: '-1px',
            textAlign: 'center',
          }}
        >
          Floyd Miles
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{
            width: '15rem',
            fontSize: '0.9rem',
            color: '#6D6E76',
            fontFamily: "'Inter', sans-serif",
            textAlign: 'center',
          }}
        >
          Content Writer @Company
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: '1rem',
            display: 'flex',
            justifyContent: 'center',
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
      <Box
        sx={{
          width: '23rem',
          height: '24rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.2rem',
          bgcolor: 'primary.light',
          mb: '2rem',
        }}
      >
        <img src={Author2} alt="author one" className="author author1" />
        <Typography
          variant="h1"
          component="h3"
          sx={{
            width: '12rem',
            fontFamily: "'Sen', sans-serif",
            fontWight: 700,
            fontSize: '1.75rem',
            letterSpacing: '-1px',
            textAlign: 'center',
          }}
        >
          Dianne Russell
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{
            width: '15rem',
            fontSize: '0.9rem',
            color: '#6D6E76',
            fontFamily: "'Inter', sans-serif",
            textAlign: 'center',
          }}
        >
          Content Writer @Company
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: '1rem',
            display: 'flex',
            justifyContent: 'center',
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
      <Box
        sx={{
          width: '23rem',
          height: '24rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.2rem',
          bgcolor: 'secondary.light',
          mb: '2rem',
        }}
      >
        <img src={Author3} alt="author one" className="author author1" />
        <Typography
          variant="h1"
          component="h3"
          sx={{
            width: '10rem',
            fontFamily: "'Sen', sans-serif",
            fontWight: 700,
            fontSize: '1.75rem',
            letterSpacing: '-1px',
            textAlign: 'center',
          }}
        >
          Jenny Wilson
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{
            width: '15rem',
            fontSize: '0.9rem',
            color: '#6D6E76',
            fontFamily: "'Inter', sans-serif",
            textAlign: 'center',
          }}
        >
          Content Writer @Company
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: '1rem',
            display: 'flex',
            justifyContent: 'center',
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
      <Box
        sx={{
          width: '23rem',
          height: '24rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.2rem',
          bgcolor: 'secondary.light',
          mb: '2rem',
        }}
      >
        <img src={Author4} alt="author one" className="author author1" />
        <Typography
          variant="h1"
          component="h3"
          sx={{
            width: '13rem',
            fontFamily: "'Sen', sans-serif",
            fontWight: 700,
            fontSize: '1.75rem',
            letterSpacing: '-1px',
            textAlign: 'center',
          }}
        >
          Leslie Alexander
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{
            width: '15rem',
            fontSize: '0.9rem',
            color: '#6D6E76',
            fontFamily: "'Inter', sans-serif",
            textAlign: 'center',
          }}
        >
          Content Writer @Company
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: '1rem',
            display: 'flex',
            justifyContent: 'center',
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
  </Box>
);
