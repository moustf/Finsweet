import { FC } from 'react';
import { CircularProgress, Box } from '@mui/material';

export const Spinner: FC = () => (
  <Box
    sx={{
      width: '100%',
      height: '30vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <CircularProgress
      sx={{
        width: '5rem',
      }}
    />
  </Box>
);
