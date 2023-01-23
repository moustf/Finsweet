import { Dispatch, FC, SetStateAction } from 'react';
import { Box, Typography } from '@mui/material';

export const CategoryCard: FC<{
  index: number,
  arrange: number,
  setIndex: Dispatch<SetStateAction<number>>,
  img: string,
  title: string,
}> = ({
  index, arrange, setIndex, img, title,
}) => (
  <Box
    component="section"
    sx={{
      width: '100%',
      height: {
        xs: '10rem', sm: '10rem', md: '10rem', lg: '8rem', xl: '8rem',
      },
      pl: '2rem',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'secondary.light',
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      bgcolor: index === arrange ? 'primary.main' : '',
      cursor: 'pointer',
      '& .category__image': {
        width: {
          xs: '3rem', sm: '4rem', md: '5rem', lg: '5rem', xl: '5rem',
        },
        height: {
          xs: '3rem', sm: '4rem', md: '5rem', lg: '5rem', xl: '5rem',
        },
      },
    }}
    onClick={() => setIndex(arrange)}
  >
    <img src={img} alt="business icon" className="category__image" />
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontFamily: "'Sen', sans-serif",
        fontSize: {
          xs: '1.5rem', sm: '1.8rem', md: '2rem', lg: '2rem', xl: '2rem',
        },
        fontWeight: 700,
        letterSpacing: '-1px',
        lineHeight: '2rem',
      }}
    >
      {title}
    </Typography>
  </Box>
);
