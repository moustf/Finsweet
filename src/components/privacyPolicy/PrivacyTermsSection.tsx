import { FC } from 'react';
import { Box, Typography } from '@mui/material';

const paragraphs = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
  Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in
  tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus
  mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in
  hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis
  urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat blandit
  aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum suspendisse
  ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras semper
  auctor neque vitae tempus quam.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
  Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in
  tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus
  mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in
  hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis
  urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat blandit
  aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum suspendisse
  ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras
  semper auctor neque vitae tempus quam.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
  Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in
  tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus
  mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in
  hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis
  urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat blandit
  aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum suspendisse
  ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras
  semper auctor neque vitae tempus quam.`,
];

const Paragraph: FC<{ text: string }> = ({ text }) => (
  <Typography
    variant="body1"
    component="p"
    sx={{
      fontFamily: "'Inter', sans-serif",
      fontSize: {
        xs: '0.7rem', sm: '0.9rem', md: '1rem', lg: '1rem', xl: '1rem',
      },
      fontWeight: 400,
      color: '#6D6E76',
      mb: {
        xs: '1rem', sm: '1rem', md: '1.5rem', lg: '2rem', xl: '2rem',
      },
    }}
  >
    {text}
  </Typography>
);

const Title: FC<{ text: string }> = ({ text }) => (
  <Typography
    variant="h2"
    component="h2"
    sx={{
      width: '100%',
      fontWeight: 700,
      fontFamily: "'Sen', sans-serif",
      fontSize: {
        xs: '1.5rem', sm: '1.8rem', md: '2rem', lg: '2.3rem', xl: '2.3rem',
      },
      color: 'secondary.main',
      letterSpacing: {
        xs: 0, sm: 0, md: 0, lg: '-2px', xl: '-2px',
      },
      mb: {
        xs: '0.8rem', sm: '0.8rem', md: '1rem', lg: '1.2rem', xl: '1.2rem',
      },
    }}
  >
    {text}
  </Typography>
);

export const PrivacyTermsSection: FC = () => (
  <Box
    component="section"
    sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      m: '8rem 0',
    }}
  >
    <Box
      component="section"
      sx={{
        width: {
          xs: '100%', sm: '100%', md: '65%', lg: '60%', xl: '50%',
        },
        p: {
          xs: '0 2rem', sm: '0 2rem', md: '0 2rem', lg: '0 5rem', xl: '0 5rem',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4rem',
        '& .single-post__pic': {
          width: '100%',
          objectFit: 'contain',
        },
        mb: '5rem',
      }}
    >
      <Title text="Lorem ipsum dolor sit amet" />
      <Paragraph text={paragraphs[0]} />
      <Title text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
      <Paragraph text={paragraphs[1]} />
      <Paragraph text={paragraphs[2]} />
    </Box>
  </Box>
);
