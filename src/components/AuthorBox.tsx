import {
  memo, FC, Dispatch, SetStateAction,
} from 'react';
import { Box, Typography } from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

import { styles } from './styles';

export const AuthorBox: FC<{
  index: number,
  arrange: number,
  setIndex: Dispatch<SetStateAction<number>>,
  img: string,
  name: string,
}> = memo(({
  index,
  arrange,
  setIndex,
  img,
  name,
}) => (
  <Box
    sx={{
      bgcolor: index === arrange ? 'primary.light' : 'secondary.light',
      ...styles.authorBoxMain,
    }}
    onClick={() => setIndex(arrange)}
  >
    <img src={img} alt="author one" className="author author1" />
    <Typography
      variant="h3"
      component="h3"
      sx={styles.authorBoxH3}
    >
      {name}
    </Typography>
    <Typography
      variant="body2"
      component="p"
      sx={styles.authorBoxP}
    >
      Content Writer @Company
    </Typography>
    <Box
      sx={styles.authorBoxInnerBox}
    >
      <FacebookIcon className="author-socials" />
      <TwitterIcon className="author-socials" />
      <InstagramIcon className="author-socials" />
      <LinkedInIcon className="author-socials" />
    </Box>
  </Box>
));
