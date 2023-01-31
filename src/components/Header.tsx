import { FC } from 'react';
import { AppBar, CssBaseline } from '@mui/material';

import { NavBar } from './NavBar';
import { styles } from './styles';

export const Header: FC = () => (
  <AppBar
    component="header"
    sx={styles.headerAppBar}
  >
    <CssBaseline />
    <img
      style={{
        width: '8.75rem',
        height: '1.8rem',
      }}
      src="https://i.ibb.co/NsGvbwR/Logo.png"
      alt="logo"
    />
    <NavBar />
  </AppBar>
);
