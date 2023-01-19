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
    <Box>
      <Typography
        variant="h2"
        component="h2"
      >
        Subscribe to our news letter to get latest updates and news
      </Typography>
      <Box>
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          placeholder="Enter Your Email"
          value={email}
          onChange={onEmailChange}
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
            mb: '5rem',
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};
