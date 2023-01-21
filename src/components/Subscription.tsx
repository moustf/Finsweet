import { FC, useState, ChangeEvent } from 'react';
import {
  Box, Typography, TextField, Button,
} from '@mui/material';

export const Subscription: FC = () => {
  const [email, setEmail] = useState<string>('');

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '16rem',
        display: 'flex',
        flexDirection: {
          xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row',
        },
        justifyContent: {
          xs: 'center', sm: 'center', md: 'center', lg: 'center', xl: 'space-between',
        },
        gap: {
          xs: '1rem', sm: '1rem', md: '1rem', lg: '3rem', xl: 0,
        },
        alignItems: 'center',
        bgcolor: '#2E3040',
        p: {
          xs: '0 2rem', sm: '0 2rem', md: '0 2rem', lg: '0 6rem', xl: '0 5rem',
        },
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          width: {
            xs: '20rem', sm: '30rem', md: '45rem', lg: '45rem', xl: '45rem',
          },
          fontFamily: "'Sen', sans-serif",
          fontWeight: 700,
          fontSize: {
            xs: '1.8rem', sm: '1.8rem', md: '2rem', lg: '3rem', xl: '3rem',
          },
          lineHeight: '3rem',
          letterSpacing: '-3px',
          color: 'secondary.contrastText',
          textAlign: {
            xs: 'center', sm: 'center', md: 'center', lg: 'center', xl: 'left',
          },
        }}
      >
        Subscribe to our news letter to get latest updates and news
      </Typography>
      <Box
        sx={{
          width: {
            xs: '100%', sm: '80%', md: '70%', lg: '60%', xl: '40%',
          },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          placeholder="Enter Your Email"
          value={email}
          onChange={onEmailChange}
          sx={{
            width: '22rem',
            height: '3.5rem',
            fontFamily: "'Inter', sans-serif",
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid',
              borderColor: 'secondary.dark',
            },
            '& ::placeholder': {
              color: 'secondary.dark',
              fontFamily: 'inherit',
              fontWeight: 700,
            },
            '& label': {
              color: 'secondary.dark',
              fontFamily: 'inherit',
              fontWeight: 700,
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            width: '11rem',
            height: '3.5rem',
            borderRadius: 0,
            fontWeight: 700,
            boxShadow: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'primary.main',
            color: 'secondary.main',
            textTransform: 'none',
            fontSize: '1.2rem',
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};
