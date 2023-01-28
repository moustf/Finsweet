import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';

import Logo from '../assets/Logo.png';
import { Subscription } from './Subscription';
import { FooterSocial } from './FooterSocial';

export const Footer: FC<{ page: string }> = ({ page }) => (
  <Box
    sx={{
      width: '100%',
      height: '35rem',
      p: {
        xs: '3.75rem 2rem', sm: '3.75rem 2rem', md: '3.75rem 2rem', lg: '3.75rem 5rem', xl: '3.75rem 5rem',
      },
      bgcolor: 'secondary.main',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      transform: {
        xs: page === 'all-posts'
          ? 'translateY(78rem)'
          : page === 'single-post'
            ? 'translateY(5rem)'
            : page === 'about'
              ? 'translateY(188rem)'
              : page === 'category'
                ? 'translateY(5rem)'
                : page === 'author'
                  ? 'none'
                  : page === 'contact'
                    ? 'none'
                    : page === 'privacy'
                      ? 'none'
                      : 'translateY(228rem)',
        sm: page === 'all-posts'
          ? 'translateY(32rem)'
          : page === 'single-post'
            ? 'translateY(2rem)'
            : page === 'about'
              ? 'translateY(180rem)'
              : page === 'category'
                ? 'translateY(8rem)'
                : page === 'author'
                  ? 'none'
                  : page === 'contact'
                    ? 'none'
                    : page === 'privacy'
                      ? 'none'
                      : 'translateY(166rem)',
        md: page === 'all-posts'
          ? 'translateY(25rem)'
          : page === 'single-post'
            ? 'translateY(3rem)'
            : page === 'about'
              ? 'translateY(93rem)'
              : page === 'category'
                ? 'translateY(10rem)'
                : page === 'author'
                  ? 'none'
                  : page === 'contact'
                    ? 'none'
                    : page === 'privacy'
                      ? 'none'
                      : 'translateY(135rem)',
        lg: page === 'about' ? 'translateY(75rem)' : 'translateY(8rem)',
        xl: page === 'about' ? 'translateY(45rem)' : 'translateY(5rem)',
      },
    }}
  >
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: {
          xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row',
        },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: {
          xs: '2rem', sm: '2rem', md: '2rem', lg: '0rem', xl: '0rem',
        },
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
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'warp',
          gap: {
            xs: '.5rem', sm: '3rem', md: '1rem', lg: '1.5rem', xl: '1.5rem',
          },
          '& .footer__nav-button': {
            width: '20%',
            textTransform: 'none',
            fontFamily: "'Sen', sans-serif",
            color: 'secondary.contrastText',
            '& .footer__text': {
              fontSize: {
                xs: '0.7rem', sm: '0.7rem', md: '1rem', lg: '1rem', xl: '1rem',
              },
            },
          },
          color: 'secondary.main',
          borderRadius: 0,
          marginLeft: '1rem',
          fontWeight: 700,
        }}
      >
        <Button variant="text" href="#home" className="footer__nav-button">
          <Typography variant="body1" component="p" className="footer__text">Home</Typography>
        </Button>
        <Button variant="text" href="#blog" className="footer__nav-button">
          <Typography variant="body1" component="p" className="footer__text">Body</Typography>
        </Button>
        <Button variant="text" href="#about" className="footer__nav-button">
          <Typography variant="body1" component="p" className="footer__text">About Us</Typography>
        </Button>
        <Button variant="text" href="#contact" className="footer__nav-button">
          <Typography variant="body1" component="p" className="footer__text">Contact Us</Typography>
        </Button>
        <Button variant="text" href="/privacy" className="footer__nav-button">
          <Typography variant="body1" component="p" className="footer__text">Privacy Policy</Typography>
        </Button>
      </Box>
    </Box>
    <Subscription />
    <FooterSocial />
  </Box>
);
