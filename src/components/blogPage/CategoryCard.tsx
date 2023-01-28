import { Dispatch, FC, SetStateAction } from 'react';
import { Box, Typography } from '@mui/material';

import { styles } from './styles';

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
      bgcolor: index === arrange ? 'primary.main' : '',
      ...styles.categoryCardMain,
    }}
    onClick={() => setIndex(arrange)}
  >
    <img src={img} alt="business icon" className="category__image" />
    <Typography
      variant="h3"
      component="h3"
      sx={styles.categoryCardH3}
    >
      {title}
    </Typography>
  </Box>
);
