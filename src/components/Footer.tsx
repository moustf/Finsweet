import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';

import { Subscription } from './Subscription';
import { FooterSocial } from './FooterSocial';
import { styles } from './styles';

export const Footer: FC = () => (
  <Box
    sx={styles.footerMain}
    id="footer"
  >
    <Box
      sx={styles.footerBox1}
    >
      <img
        style={{
          width: '8.75rem',
          height: '1.8rem',
        }}
        src="https://i.ibb.co/NsGvbwR/Logo.png"
        alt="logo"
      />
      <Box
        sx={styles.footerBox2}
      >
        <Button variant="text" href="/" className="footer__nav-button">
          <Typography variant="body1" component="p" className="footer__text">Home</Typography>
        </Button>
        <Button variant="text" href="/blog" className="footer__nav-button">
          <Typography variant="body1" component="p" className="footer__text">Blog</Typography>
        </Button>
        <Button variant="text" href="/about" className="footer__nav-button">
          <Typography variant="body1" component="p" className="footer__text">About Us</Typography>
        </Button>
        <Button variant="text" href="/contact" className="footer__nav-button">
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
