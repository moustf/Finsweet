import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';

import { styles } from './styles';

export const NavBar: FC = () => (
  <Box
    sx={styles.navbarMain}
  >
    <Button variant="text" href="#home" className="header__nav-button header__nav-button-text">
      <Typography variant="body1" component="p">Home</Typography>
    </Button>
    <Button variant="text" href="#blog" className="header__nav-button header__nav-button-text">
      <Typography variant="body1" component="p">Body</Typography>
    </Button>
    <Button variant="text" href="#about" className="header__nav-button header__nav-button-text">
      <Typography variant="body1" component="p">About Us</Typography>
    </Button>
    <Button variant="text" href="#contact" className="header__nav-button header__nav-button-text">
      <Typography variant="body1" component="p">Contact Us</Typography>
    </Button>
    <Button variant="contained" href="#footer" className="header__nav-button header__nav-button-contained">
      Subscribe
    </Button>
  </Box>
);
