import { FC } from 'react';
import { Typography, Box } from '@mui/material';

export const MissionAndVision: FC<{ slang: string, title: string, text: string }> = ({
  slang, title, text,
}) => (
  <Box
    sx={{
      width: '100%',
      height: {
        xs: '18rem', sm: '18rem', md: '15rem', lg: '15rem', xl: '15rem',
      },
      pl: {
        xs: '1rem', sm: '2rem', md: '5rem', lg: '2rem', xl: '3rem',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Typography
      variant="caption"
      component="p"
      sx={{
        fontFamily: "'Inter', sans-serif",
        color: 'secondary.primary',
        fontWeight: 600,
        letterSpacing: '3px',
        mb: '1.5rem',
        textTransform: 'uppercase',
        fontSize: '1rem',
      }}
    >
      {slang}
    </Typography>
    <Typography
      variant="h3"
      component="h3"
      sx={{
        width: {
          xs: '100%', sm: '70%', md: '38rem', lg: '25rem', xl: '28rem',
        },
        fontSize: {
          xs: '1rem', sm: '1rem', md: '1.2rem', lg: '1.2rem', xl: '1.5rem',
        },
        fontWeight: 700,
        lineHeight: {
          xs: '25px', sm: '45px', md: '48px', lg: '40px', xl: '35px',
        },
        letterSpacing: '1.5px',
        mb: '1rem',
      }}
    >
      {title}
    </Typography>
    <Typography
      variant="body1"
      component="p"
      sx={{
        width: {
          xs: '100%', sm: '70%', md: '80%', lg: '80%', xl: '80%',
        },
        color: '#6D6E76',
        lineHeight: {
          xs: '28px', sm: '28px', md: '28px', lg: '30px', xl: '28px',
        },
        fontSize: {
          xs: '0.8rem', sm: '01rem', md: '1.2rem', lg: '1rem', xl: '1.2rem',
        },
        mb: '1rem',
      }}
    >
      {text}
    </Typography>
  </Box>
);
