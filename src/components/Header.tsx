import { FC } from 'react';
import { AppBar, CssBaseline } from '@mui/material';

import Logo from '../assets/Logo.png';
import { NavBar } from './NavBar';

export const Header: FC = () => (
  <AppBar
    component="header"
    sx={{
      width: '100%',
      height: {
        xs: '38vh', sm: '20vh', md: '10vh', lg: '5rem', xl: '5rem',
      },
      padding: {
        xs: '1rem 0', sm: '2rem 0', md: '0 5rem', lg: '0 5rem', xl: '0 5rem',
      },
      display: 'flex',
      flexDirection: {
        xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row',
      },
      justifyContent: {
        xs: 'center', sm: 'center', md: 'space-between', lg: 'space-between', xl: 'space-between',
      },
      gap: {
        xs: '1.8rem', sm: '1.8rem', md: '1.8rem', lg: 0, xl: 0,
      },
      alignItems: 'center',
      bgcolor: 'secondary.main',
    }}
  >
    <CssBaseline />
    <img
      style={{
        width: '8.75rem',
        height: '1.8rem',
      }}
      src={Logo}
      alt="logo"
    />
    <NavBar />
  </AppBar>
);
