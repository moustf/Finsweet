import { FC } from 'react';
import { Box, Typography, Divider } from '@mui/material';

export const SingleContactCard: FC<{
  title: string, body1: string, endText: string, body2?: string,
}> = ({
  title, body1, body2, endText,
}) => (
  <Box
    component="section"
    sx={{
      width: {
        xs: '35rem', sm: '35rem', md: '70%', lg: '22rem', xl: '22rem',
      },
      height: {
        xs: '50%', sm: '50%', md: '55%', lg: '100%', xl: '100%',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: {
        xs: 'center', sm: 'center', md: 'center', lg: 'flex-start', xl: 'flex-start',
      },
      gap: '2rem',
    }}
  >
    <Typography
      variant="body1"
      component="p"
      sx={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.9rem',
        fontWeight: 400,
        lineHeight: '1.3rem',
        color: 'secondary.contrastText',
        opacity: 0.6,
      }}
    >
      {title}
    </Typography>
    <Divider
      flexItem
      orientation="horizontal"
      sx={{
        width: '100%',
        height: '2px',
        bgcolor: 'secondary.contrastText',
        opacity: 0.1,
      }}
    />
    <Typography
      variant="h5"
      component="h5"
      sx={{
        fontFamily: "'Sen', sans-serif",
        fontSize: {
          xs: '1.2rem', sm: '1.2rem', md: '1.5rem', lg: '2rem', xl: '2rem',
        },
        fontWeight: 700,
        lineHeight: {
          xs: '2rem', sm: '2rem', md: '1.2rem', lg: '1.3rem', xl: '1.3rem',
        },
        color: 'secondary.contrastText',
      }}
    >
      {body1}
    </Typography>
    {
      body2 && (
        <Typography
          variant="h5"
          component="h5"
          sx={{
            fontFamily: "'Sen', sans-serif",
            fontSize: {
              xs: '1.2rem', sm: '1.2rem', md: '1.5rem', lg: '2rem', xl: '2rem',
            },
            fontWeight: 700,
            lineHeight: {
              xs: '2rem', sm: '2rem', md: '1.2rem', lg: '1.3rem', xl: '1.3rem',
            },
            color: 'secondary.contrastText',
          }}
        >
          {body2}
        </Typography>
      )
    }
    <Typography
      variant="body1"
      component="p"
      sx={{
        fontFamily: "'Inter', sans-serif",
        fontSize: {
          xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem', xl: '1.1rem',
        },
        fontWeight: 400,
        lineHeight: {
          xs: '1.2rem', sm: '1.2rem', md: '1.8rem', lg: '2rem', xl: '2rem',
        },
        color: 'secondary.contrastText',
        opacity: 0.6,
      }}
    >
      {endText}
    </Typography>
  </Box>
);

SingleContactCard.defaultProps = {
  body2: '',
};
