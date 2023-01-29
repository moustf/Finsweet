import { FC, useState, ChangeEvent } from 'react';
import {
  Box, Typography, TextField, Button,
} from '@mui/material';

import { styles } from './styles';

export const Subscription: FC = () => {
  const [email, setEmail] = useState<string>('');

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  return (
    <Box
      sx={styles.subscriptionMain}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={styles.subscriptionH2}
      >
        Subscribe to our news letter to get latest updates and news
      </Typography>
      <Box
        sx={styles.subscriptionBox1}
      >
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          placeholder="Enter Your Email"
          value={email}
          onChange={onEmailChange}
          sx={styles.subscriptionTextField}
        />
        <Button
          variant="contained"
          sx={styles.subscriptionBtn}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};
