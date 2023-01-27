import { FC } from 'react';
import { Box } from '@mui/material';

import { SingleContactCard } from './SingleContractCard';

export const ContactsCard: FC = () => (
  <Box
    component="section"
    sx={{
      width: '100%',
      height: {
        xs: '90vh', sm: '72vh', md: '80vh', lg: '50vh', xl: '50vh',
      },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '2rem',
      p: {
        xs: '0 1rem', sm: '0 2rem', md: '0 3rem', lg: 0, xl: 0,
      },
    }}
  >
    <Box
      component="section"
      sx={{
        width: {
          xs: '100%', sm: '100%', md: '50rem', lg: '60rem', xl: '60rem',
        },
        height: '80%',
        display: 'flex',
        justifyContent: {
          xs: 'center', sm: 'center', md: 'center', lg: 'space-between', xl: 'space-between',
        },
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        bgcolor: '#592EA9',
        p: '3rem 4rem',
      }}
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
