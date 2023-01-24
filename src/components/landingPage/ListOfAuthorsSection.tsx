import { Box, Typography } from '@mui/material';
import { FC, useState } from 'react';

import { AuthorBox } from '../AuthorBox';
import Author1 from '../../assets/author1.svg';
import Author2 from '../../assets/author2.svg';
import Author3 from '../../assets/author3.svg';
import Author4 from '../../assets/author4.svg';

export const ListOfAuthorsSection: FC = () => {
  const [index, setIndex] = useState(1);

  return (
    <Box
      sx={{
        width: '100%',
        height: '30rem',
        p: '5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transform: {
          xs: 'translateY(140rem)',
          sm: 'translateY(89rem)',
          md: 'translateY(95rem)',
          lg: 'translateY(-2rem)',
          xl: 'translateY(10rem)',
        },
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          width: '14.4rem',
          fontFamily: "'Sen', sans-serif",
          fontWeight: 700,
          fontSize: '2.25rem',
          letterSpacing: '-2px',
          mb: '3rem',
        }}
      >
        List of Authors
      </Typography>
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: {
          xs: 'center', sm: 'center', md: 'center', lg: 'center', xl: 'space-between',
        },
        gap: {
          xs: 0, sm: 0, md: '5rem', lg: '5rem', xl: 0,
        },
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <AuthorBox
          index={index}
          arrange={1}
          setIndex={setIndex}
          img={Author1}
          name="Floyd Miles"
        />
        <AuthorBox
          index={index}
          arrange={2}
          setIndex={setIndex}
          img={Author2}
          name="Dianne Russell"
        />
        <AuthorBox
          index={index}
          arrange={3}
          setIndex={setIndex}
          img={Author3}
          name="Jenny Wilson"
        />
        <AuthorBox
          index={index}
          arrange={4}
          setIndex={setIndex}
          img={Author4}
          name="Leslie Alexander"
        />
      </Box>
    </Box>
  );
};