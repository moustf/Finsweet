import { Box, Typography } from '@mui/material';
import { FC, useState } from 'react';

import { AuthorBox } from '../AuthorBox';
import Author1 from '../../assets/author1.svg';
import Author2 from '../../assets/author2.svg';
import Author3 from '../../assets/author3.svg';
import Author4 from '../../assets/author4.svg';
import { styles } from './styles';

export const ListOfAuthorsSection: FC = () => {
  const [index, setIndex] = useState(1);

  return (
    <Box
      sx={styles.listOfAuthorsMain}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={styles.listOfAuthorsH2}
      >
        List of Authors
      </Typography>
      <Box sx={styles.listOfAuthorsBoxesContainer}>
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
