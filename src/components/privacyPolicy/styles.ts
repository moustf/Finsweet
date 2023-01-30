export const styles = {
  headingSectionMain: {
    width: '100%',
    height: {
      xs: '30vh', sm: '30vh', md: '40vh', lg: '35vh', xl: '35vh',
    },
    p: {
      xs: '2rem', sm: '2rem', md: '3rem', lg: 0, xl: 0,
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5rem',
    bgcolor: '#F4F0F8',
  },
  headingSectionH1: {
    fontWeight: 700,
    fontSize: {
      xs: '1.8rem', sm: '2rem', md: '3rem', lg: '3rem', xl: '3rem',
    },
    lineHeight: {
      xs: '3rem', sm: '4rem', md: '4rem', lg: '4rem', xl: '4rem',
    },
    textAlign: 'center',
    color: 'secondary.main',
    letterSpacing: '-2px',
    fontFamily: "'Sen', sans-serif",
  },
  headingSectionP: {
    width: {
      xs: '90%', sm: '70%', md: '60%', lg: '40%', xl: '30%',
    },
    fontWeight: 400,
    fontSize: {
      xs: '0.9rem', sm: '1rem', md: '1rem', lg: '1rem', xl: '1rem',
    },
    lineHeight: {
      xs: '1.5rem', sm: '1.8rem', md: '1.8rem', lg: '1.8rem', xl: '1.8rem',
    },
    textAlign: 'center',
    color: '#6D6E76',
    fontFamily: "'Inter', sans-serif",
    mb: {
      xs: '1rem', sm: '2rem', md: '2rem', lg: '2rem', xl: '2rem',
    },
  },
  privacySectionMain: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    m: '8rem 0',
  },
  privacySectionSectionInner: {
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
  },
  privacySectionParagraph: {
    fontFamily: "'Inter', sans-serif",
    fontSize: {
      xs: '0.7rem', sm: '0.9rem', md: '1rem', lg: '1rem', xl: '1rem',
    },
    fontWeight: 400,
    color: '#6D6E76',
    mb: {
      xs: '1rem', sm: '1rem', md: '1.5rem', lg: '2rem', xl: '2rem',
    },
  },
  privacySectionTitle: {
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
  },
};
