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
      '& .MuiButtonBase-root': {
        textTransform: 'none',
        fontFamily: "'Sen', sans-serif",
      },
      '& .MuiButtonBase-root.MuiButton-text': {
        color: 'secondary.contrastText',
      },
      '& .MuiButtonBase-root.MuiButton-contained ': {
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
    <Button variant="text" href="#home">
      <Typography variant="body1" component="p">Home</Typography>
    </Button>
    <Button variant="text" href="#blog">
      <Typography variant="body1" component="p">Body</Typography>
    </Button>
    <Button variant="text" href="#about">
      <Typography variant="body1" component="p">About Us</Typography>
    </Button>
    <Button variant="text" href="#contact">
      <Typography variant="body1" component="p">Contact Us</Typography>
    </Button>
    <Button variant="contained" href="#footer">
      Subscribe
    </Button>
  </Box>
);
