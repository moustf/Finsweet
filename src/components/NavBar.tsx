import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';

export const NavBar: FC = () => (
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
      '& .header__nav-button': {
        textTransform: 'none',
        fontFamily: "'Sen', sans-serif",
      },
      '& .header__nav-button-text': {
        color: 'secondary.contrastText',
      },
      '& .header__nav-button-contained': {
        width: '11rem',
        height: '3.2rem',
        fontSize: {
          xs: '1.2rem', sm: '1.2rem', md: '1.2rem', lg: '1rem', xl: '1.2rem',
        },
        bgcolor: 'secondary.contrastText',
        color: 'secondary.main',
        borderRadius: 0,
        marginLeft: '1rem',
        fontWeight: 700,
      },
    }}
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
