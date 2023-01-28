import { FC } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { styles } from './styles';

export const SingleContactCard: FC<{
  title: string, body1: string, endText: string, body2?: string,
}> = ({
  title, body1, body2, endText,
}) => (
  <Box
    component="section"
    sx={styles.singleContactCardMain}
  >
    <Typography
      variant="body1"
      component="p"
      sx={styles.singleContactCardFirstP}
    >
      {title}
    </Typography>
    <Divider
      flexItem
      orientation="horizontal"
      sx={styles.singleContactCardDivider}
    />
    <Typography
      variant="h5"
      component="h5"
      sx={styles.singleContactCardFirstH5}
    >
      {body1}
    </Typography>
    {
      body2 && (
        <Typography
          variant="h5"
          component="h5"
          sx={styles.singleContactCardSecondH5}
        >
          {body2}
        </Typography>
      )
    }
    <Typography
      variant="body1"
      component="p"
      sx={styles.singleContactCardSecondP}
    >
      {endText}
    </Typography>
  </Box>
);

SingleContactCard.defaultProps = {
  body2: '',
};
