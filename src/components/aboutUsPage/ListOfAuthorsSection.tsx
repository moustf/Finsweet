import { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';

import { AuthorBox } from '../AuthorBox';
import { styles } from './styles';

export const ListOfAuthorsSection: FC = () => {
  const [index, setIndex] = useState<number>(1);
  let arrange = 0;

  return (
    <Box
      sx={styles.listOfAuthorsMain}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={styles.listOfAuthorsTitle}
      >
        List of Authors
      </Typography>
      <Box sx={styles.listOfAuthorsTextBox}>
        <AuthorBox
          index={index}
          arrange={++arrange}
          setIndex={setIndex}
          img="https://i.ibb.co/5MCDDwD/author1.png"
          name="Floyd Miles"
        />
        <AuthorBox
          index={index}
          arrange={++arrange}
          setIndex={setIndex}
          img="https://i.ibb.co/pKWCbCH/author2.png"
          name="Dianne Russell"
        />
        <AuthorBox
          index={index}
          arrange={++arrange}
          setIndex={setIndex}
          img="https://i.ibb.co/hZV0Vf0/author3.png"
          name="Jenny Wilson"
        />
        <AuthorBox
          index={index}
          arrange={++arrange}
          setIndex={setIndex}
          img="https://i.ibb.co/TbN5WWY/author4.png"
          name="Leslie Alexander"
        />
        <AuthorBox
          index={index}
          arrange={++arrange}
          setIndex={setIndex}
          img="https://i.ibb.co/NycSzZJ/author5.png"
          name="Guy Hawkins"
        />
        <AuthorBox
          index={index}
          arrange={++arrange}
          setIndex={setIndex}
          img="https://i.ibb.co/BjLpnNz/author6.png"
          name="Eleanor Pena"
        />
        <AuthorBox
          index={index}
          arrange={++arrange}
          setIndex={setIndex}
          img="https://i.ibb.co/3kYsm0C/author7.png"
          name="Robert Fox"
        />
        <AuthorBox
          index={index}
          arrange={++arrange}
          setIndex={setIndex}
          img="https://i.ibb.co/dQbVCMH/author8.png"
          name="Jacob Jones"
        />
      </Box>
    </Box>
  );
};
