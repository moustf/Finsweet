export const styles = {
  introSectionMain: {
    width: '100%',
    height: {
      xs: '95vh', sm: '75vh', md: '60vh', lg: '70vh', xl: '60vh',
    },
    p: {
      xs: '2rem', sm: '2rem', md: '2rem', lg: 0, xl: 0,
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bgcolor: '#F4F0F8',
  },
  introSectionImageBox: {
    width: {
      xs: '100%', sm: '100%', md: '70%', lg: '70%', xl: '50%',
    },
    display: 'flex',
    flexDirection: {
      xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row',
    },
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
  },
  introSectionTextBox: {
    width: '75%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  introSectionTextBoxH1: {
    fontFamily: "'Sen', sans-serif",
    width: '100%',
    fontSize: {
      xs: '1.5rem', sm: '2rem', md: '2rem', lg: '2.5rem', xl: '3rem',
    },
    fontWeight: 700,
    lineHeight: {
      xs: '2rem', sm: '2rem', md: '4rem', lg: '4rem', xl: '4rem',
    },
    color: 'secondary.main',
    letterSpacing: {
      xs: 0, sm: 0, md: '-2px', lg: '-2px', xl: '-2px',
    },
    textAlign: {
      xs: 'center', sm: 'center', md: 'left', lg: 'left', xl: 'left',
    },
  },
  introSectionTextBoxP: {
    fontFamily: "'Inter', sans-serif",
    width: '100%',
    fontSize: {
      xs: '0.9rem', sm: '1rem', md: '0.9rem', lg: '1rem', xl: '1rem',
    },
    fontWeight: 400,
    lineHeight: '1.5rem',
    color: '#6D6E76',
    textAlign: {
      xs: 'center', sm: 'center', md: 'left', lg: 'left', xl: 'left',
    },
  },
  introSectionIconsBox: {
    width: '100%',
    height: '1rem',
    display: 'flex',
    justifyContent: {
      xs: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start', xl: 'flex-start',
    },
    alignItems: 'center',
    gap: '1rem',
    '& .author-socials': {
      width: '1rem',
      height: '1.1rem',
      color: 'secondary.main',
    },
  },
  introSectionShape: {
    width: {
      xs: '20rem', sm: '40rem', md: '60rem', lg: '80rem', xl: '100rem',
    },
    height: {
      xs: '1rem', sm: '1rem', md: '1rem', lg: '1.5rem', xl: '1.5rem',
    },
    background: 'linear-gradient(90deg,  transparent 0%, transparent 25%, #FFD050 25%, #FFD050 75%, #592EA9 75%,  #592EA9 100%)',
    position: 'absolute',
    bottom: 0,
    left: {
      xs: 0, sm: 0, md: '-7rem', lg: '-8rem', xl: 0,
    },
  },
  postSectionMain: {
    width: '100%',
    height: {
      xs: '140vh', sm: '150vh', md: '225vh', lg: '120vh', xl: '130vh',
    },
    p: {
      xs: '4rem 3rem', sm: '5rem 3rem', md: '5rem 8rem', lg: '8rem 13rem', xl: '8rem 13rem',
    },
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
  },
  postSectionH2: {
    fontFamily: "'Sen', sans-serif",
    fontSize: {
      xs: '2.25rem', sm: '2.25rem', md: '2.25rem', lg: '2.25rem', xl: '2.25rem',
    },
    fontWeight: 700,
    lineHeight: '48px',
    letterSpacing: '-2px',
    color: 'secondary.main',
  },
};
