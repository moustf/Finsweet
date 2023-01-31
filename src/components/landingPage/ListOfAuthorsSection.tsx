import { Box, Typography } from '@mui/material';
import { FC, useState } from 'react';

import { AuthorBox } from '../AuthorBox';
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
          img="https://i.ibb.co/5MCDDwD/author1.png"
          name="Floyd Miles"
        />
        <AuthorBox
          index={index}
          arrange={2}
          setIndex={setIndex}
          img="https://i.ibb.co/pKWCbCH/author2.png"
          name="Dianne Russell"
        />
        <AuthorBox
          index={index}
          arrange={3}
          setIndex={setIndex}
          img="https://i.ibb.co/hZV0Vf0/author3.png"
          name="Jenny Wilson"
        />
        <AuthorBox
          index={index}
          arrange={4}
          setIndex={setIndex}
          img="https://i.ibb.co/TbN5WWY/author4.png"
          name="Leslie Alexander"
        />
      </Box>
    </Box>
  );
};
