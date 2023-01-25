import { Box, Typography } from '@mui/material';
import { FC } from 'react';

export const TagCircle: FC<{ id: number, text: string }> = ({ id, text }) => (
  <Box
    sx={{
      width: id % 2 !== 0 ? '60%' : '30%',
      height: {
        xs: '3rem', sm: '4rem', md: '5rem', lg: '3rem', xl: '3rem',
      },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '1.2rem',
      border: '1px solid #6D6E76',
      opacity: 0.7,
    }}
  >
    <Typography
      variant="body2"
      component="p"
      sx={{
        fontFamily: "'Sen', sans-serif",
        fontSize: {
          xs: '0.8rem', sm: '1rem', md: '1.2rem', lg: '0.9rem', xl: '0.9rem',
        },
        fontWeight: 700,
        lineHeight: '2rem',
        color: 'secondary.main',
      }}
    >
      {text}
    </Typography>
  </Box>
);
