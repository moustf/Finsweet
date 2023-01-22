import { FC, Dispatch, SetStateAction } from 'react';
import { Box, Typography } from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

export const AuthorBox: FC<{
  index: number,
  arrange: number,
  setIndex: Dispatch<SetStateAction<number>>,
  img: string,
  name: string,
}> = ({
  index,
  arrange,
  setIndex,
  img,
  name,
}) => (
  <Box
    sx={{
      width: '23rem',
      height: '24rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1.2rem',
      mb: '2rem',
      bgcolor: index === arrange ? 'primary.light' : 'secondary.light',
      cursor: 'pointer',
    }}
    onClick={() => setIndex(arrange)}
  >
    <img src={img} alt="author one" className="author author1" />
    <Typography
      variant="h1"
      component="h3"
      sx={{
        width: '10rem',
        fontFamily: "'Sen', sans-serif",
        fontWight: 700,
        fontSize: '1.75rem',
        letterSpacing: '-1px',
        textAlign: 'center',
      }}
    >
      {name}
    </Typography>
    <Typography
      variant="body2"
      component="p"
      sx={{
        width: '15rem',
        fontSize: '0.9rem',
        color: '#6D6E76',
        fontFamily: "'Inter', sans-serif",
        textAlign: 'center',
      }}
    >
      Content Writer @Company
    </Typography>
    <Box
      sx={{
        width: '100%',
        height: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        '& .author-socials': {
          width: '1rem',
          height: '1.1rem',
          color: 'secondary.main',
        },
      }}
    >
      <FacebookIcon className="author-socials" />
      <TwitterIcon className="author-socials" />
      <InstagramIcon className="author-socials" />
      <LinkedInIcon className="author-socials" />
    </Box>
  </Box>
);
