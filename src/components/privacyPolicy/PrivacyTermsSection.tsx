import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { styles } from './styles';

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
    sx={styles.privacySectionParagraph}
  >
    {text}
  </Typography>
);

const Title: FC<{ text: string }> = ({ text }) => (
  <Typography
    variant="h2"
    component="h2"
    sx={styles.privacySectionTitle}
  >
    {text}
  </Typography>
);

export const PrivacyTermsSection: FC = () => (
  <Box
    component="section"
    sx={styles.privacySectionMain}
  >
    <Box
      component="section"
      sx={styles.privacySectionSectionInner}
    >
      <Title text="Lorem ipsum dolor sit amet" />
      <Paragraph text={paragraphs[0]} />
      <Title text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
      <Paragraph text={paragraphs[1]} />
      <Paragraph text={paragraphs[2]} />
    </Box>
  </Box>
);
