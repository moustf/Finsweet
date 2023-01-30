import { FC } from 'react';
import { Box } from '@mui/material';

import { SingleContactCard } from './SingleContractCard';
import { styles } from './styles';

export const ContactsCard: FC = () => (
  <Box
    component="section"
    sx={styles.contactsCardMain}
  >
    <Box
      component="section"
      sx={styles.contactsCardsBox}
    >
      <SingleContactCard
        title="Working hours"
        body1="Monday To Friday"
        body2="9:00 AM to 8:00 PM"
        endText="Our Support Team is available 24/7"
      />
      <SingleContactCard
        title="Contact Us"
        body1="020 7993 2905"
        endText="hello@finsweet.com"
      />
    </Box>
  </Box>
);
