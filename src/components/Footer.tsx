import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';

import Logo from '../assets/Logo.png';

export const Footer: FC = () => (
  <Box
    sx={{
      width: '100%',
      height: '35rem',
      p: '3.75rem 5rem',
      bgcolor: 'secondary.main',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
      }}
    >
      <img
        style={{
          width: '8.75rem',
          height: '1.8rem',
        }}
        src={Logo}
        alt="logo"
      />
      <Box
        sx={{
          width: {
            xs: '100%', sm: '100%', md: '60%', lg: '50%', xl: '40%',
          },
          height: {
            xs: '70%', sm: '70%', md: '70%', lg: '100%', xl: '100%',
          },
          display: 'flex',
          flexDirection: {
            xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row',
          },
          justifyContent: 'center',
          alignItems: 'center',
          gap: {
            xs: '.5rem', sm: '3rem', md: '1rem', lg: '1.5rem', xl: '1.5rem',
          },
          '& .footer__nav-button': {
            textTransform: 'none',
            fontFamily: "'Sen', sans-serif",
            color: 'secondary.contrastText',
          },
          color: 'secondary.main',
          borderRadius: 0,
          marginLeft: '1rem',
          fontWeight: 700,
        }}
      >
        <Button variant="text" href="#home" className="footer__nav-button">
          <Typography variant="body1" component="p">Home</Typography>
        </Button>
        <Button variant="text" href="#blog" className="footer__nav-button">
          <Typography variant="body1" component="p">Body</Typography>
        </Button>
        <Button variant="text" href="#about" className="footer__nav-button">
          <Typography variant="body1" component="p">About Us</Typography>
        </Button>
        <Button variant="text" href="#contact" className="footer__nav-button">
          <Typography variant="body1" component="p">Contact Us</Typography>
        </Button>
        <Button variant="text" href="/privacy" className="footer__nav-button">
          <Typography variant="body1" component="p">Privacy Policy</Typography>
        </Button>
      </Box>
    </Box>
  </Box>
);
