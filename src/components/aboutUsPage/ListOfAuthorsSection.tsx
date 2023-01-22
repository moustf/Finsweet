import { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';

import { AuthorBox } from '../AuthorBox';
import Author1 from '../../assets/author1.svg';
import Author2 from '../../assets/author2.svg';
import Author3 from '../../assets/author3.svg';
import Author4 from '../../assets/author4.svg';
import Author5 from '../../assets/author5.svg';
import Author6 from '../../assets/author6.svg';
import Author7 from '../../assets/author7.svg';
import Author8 from '../../assets/author8.svg';

export const ListOfAuthorsSection: FC = () => {
  const [index, setIndex] = useState<number>(1);
  let arrange = 0;

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
          xs: 'translateY(-12rem)',
          sm: 'translateY(-15rem)',
          md: 'translateY(-15rem)',
          lg: 'translateY(-2rem)',
          xl: 'translateY(-2rem)',
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
          xs: 'center', sm: 'center', md: 'center', lg: 'center', xl: 'center',
        },
        gap: {
          xs: 0, sm: 0, md: '5rem', lg: '5rem', xl: '5rem',
        },
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <AuthorBox
          index={index}
          arrange={++arrange}
          setIndex={setIndex}
          img={Author1}
          name="Floyd Miles"
        />
        <AuthorBox
          index={index}
          arrange={++arrange}
          setIndex={setIndex}
          img={Author2}
          name="Dianne Russell"
        />
        <AuthorBox
          index={index}
          arrange={++arrange}
          setIndex={setIndex}
          img={Author3}
          name="Jenny Wilson"
        />
        <AuthorBox
          index={index}
          arrange={++arrange}
          setIndex={setIndex}
          img={Author4}
          name="Leslie Alexander"
        />
        <AuthorBox
          index={index}
          arrange={++arrange}
          setIndex={setIndex}
          img={Author5}
          name="Guy Hawkins"
        />
        <AuthorBox
          index={index}
          arrange={++arrange}
          setIndex={setIndex}
          img={Author6}
          name="Eleanor Pena"
        />
        <AuthorBox
          index={index}
          arrange={++arrange}
          setIndex={setIndex}
          img={Author7}
          name="Robert Fox"
        />
        <AuthorBox
          index={index}
          arrange={++arrange}
          setIndex={setIndex}
          img={Author8}
          name="Jacob Jones"
        />
      </Box>
    </Box>
  );
};
