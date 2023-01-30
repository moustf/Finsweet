export const styles = {
  authorBoxMain: {
    width: '23rem',
    height: '24rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.2rem',
    mb: '2rem',
    cursor: 'pointer',
  },
  authorBoxH3: {
    width: '12rem',
    fontFamily: "'Sen', sans-serif",
    fontWight: 700,
    fontSize: '1.6rem',
    letterSpacing: '-1px',
    textAlign: 'center',
    color: 'secondary.main',
  },
  authorBoxP: {
    width: '15rem',
    fontSize: '0.9rem',
    color: '#6D6E76',
    fontFamily: "'Inter', sans-serif",
    textAlign: 'center',
  },
  authorBoxInnerBox: {
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
  },
  categoriesSectionMain: {
    width: '100%',
    height: {
      xs: '165vh', sm: '65vh', md: '68vh', lg: '48vh', xl: '48vh',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    mb: '8rem',
  },
  categoriesSectionH2: {
    fontSize: '2.25rem',
    fontFamily: "'Sen', sans-serif",
    fontWeight: 700,
    letterSpacing: '-2px',
  },
  categoreisSectionBox1: {
    width: '100%',
    p: {
      xs: '2rem', sm: '2rem', md: '2rem', lg: '5rem', xl: '5rem',
    },
  },
  categoriesSectionBox2: {
    width: '100%',
    height: {
      xs: '20rem', sm: '20rem', md: '16rem', lg: '16rem', xl: '16rem',
    },
    pl: '2rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'secondary.light',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1.2rem',
    cursor: 'pointer',
  },
  categoriesSectionBox3: {
    width: '3rem',
    height: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'primary.light',
    borderRadius: '0.8rem',
    '& .category__image': {
      width: '3rem',
      height: '3rem',
    },
  },
  categoriesSectionFirstH3: {
    fontFamily: "'Sen', sans-serif",
    fontSize: '1.8rem',
    fontWeight: 700,
  },
  categoriesSectionP1: {
    width: {
      xs: '12rem', sm: '14.5rem', md: '14.5rem', lg: '14.5rem', xl: '14.5rem',
    },
    color: '#6D6E76',
  },
  categoriesSectionBox4: {
    width: '100%',
    height: {
      xs: '20rem', sm: '20rem', md: '16rem', lg: '16rem', xl: '16rem',
    },
    pl: '2rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'secondary.light',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1.2rem',
    cursor: 'pointer',
  },
  categoriesSectionBox5: {
    width: '3rem',
    height: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'primary.light',
    borderRadius: '0.8rem',
    '& .category__image': {
      width: '1.5rem',
      height: '1.5rem',
    },
  },
  categoriesSectionSecondH3: {
    fontFamily: "'Sen', sans-serif",
    fontSize: '1.8rem',
    fontWeight: 700,
  },
  categoriesSectionP2: {
    width: {
      xs: '12rem', sm: '14.5rem', md: '14.5rem', lg: '14.5rem', xl: '14.5rem',
    },
    color: '#6D6E76',
  },
  categoriesSectionBox6: {
    width: '100%',
    height: {
      xs: '20rem', sm: '20rem', md: '16rem', lg: '16rem', xl: '16rem',
    },
    pl: '2rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'secondary.light',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1.2rem',
    cursor: 'pointer',
  },
  categoriesSectionBox7: {
    width: '3rem',
    height: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'primary.light',
    borderRadius: '0.8rem',
    '& .category__image': {
      width: '3rem',
      height: '3rem',
    },
  },
  categoriesSectionThirdH3: {
    fontFamily: "'Sen', sans-serif",
    fontSize: '1.8rem',
    fontWeight: 700,
  },
  categoriesSectionP3: {
    width: {
      xs: '12rem', sm: '14.5rem', md: '14.5rem', lg: '14.5rem', xl: '14.5rem',
    },
    color: '#6D6E76',
  },
  categoriesSectionBox8: {
    width: '100%',
    height: {
      xs: '20rem', sm: '20rem', md: '16rem', lg: '16rem', xl: '16rem',
    },
    pl: '2rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'secondary.light',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1.2rem',
    cursor: 'pointer',
  },
  categoriesSectionBox9: {
    cursor: 'pointer',
    width: '3rem',
    height: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'primary.light',
    borderRadius: '0.8rem',
    '& .category__image': {
      width: '1.5rem',
      height: '1.5rem',
    },
  },
  categoriesSectionForthH3: {
    fontFamily: "'Sen', sans-serif",
    fontSize: '1.8rem',
    fontWeight: 700,
  },
  categoriesSectionP4: {
    width: {
      xs: '12rem', sm: '14.5rem', md: '14.5rem', lg: '14.5rem', xl: '14.5rem',
    },
    color: '#6D6E76',
  },
  footerMain: {
    width: '100%',
    height: {
      xs: '65vh', sm: '50vh', md: '65vh', lg: '60vh', xl: '55vh',
    },
    p: {
      xs: '3.75rem 2rem', sm: '3.75rem 2rem', md: '3.75rem 2rem', lg: '3.75rem 5rem', xl: '3.75rem 5rem',
    },
    bgcolor: 'secondary.main',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerBox1: {
    width: '100%',
    display: 'flex',
    flexDirection: {
      xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row',
    },
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: {
      xs: '2rem', sm: '2rem', md: '2rem', lg: '0rem', xl: '0rem',
    },
  },
  footerBox2: {
    width: {
      xs: '100%', sm: '100%', md: '60%', lg: '50%', xl: '40%',
    },
    height: {
      xs: '70%', sm: '70%', md: '70%', lg: '100%', xl: '100%',
    },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'warp',
    gap: {
      xs: '.5rem', sm: '3rem', md: '1rem', lg: '1.5rem', xl: '1.5rem',
    },
    '& .footer__nav-button': {
      width: '20%',
      textTransform: 'none',
      fontFamily: "'Sen', sans-serif",
      color: 'secondary.contrastText',
      '& .footer__text': {
        fontSize: {
          xs: '0.7rem', sm: '0.7rem', md: '1rem', lg: '1rem', xl: '1rem',
        },
      },
    },
    color: 'secondary.main',
    borderRadius: 0,
    marginLeft: '1rem',
    fontWeight: 700,
  },
  footerSocialMain: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerSocialP: {
    fontFamily: "'Inter', sans-serif",
    width: {
      xs: '18rem', sm: '18rem', md: '23rem', lg: '23rem', xl: '23rem',
    },
    fontSize: {
      xs: '0.7rem', sm: '0.7rem', md: '0.9rem', lg: '0.9rem', xl: '0.9rem',
    },
    color: 'secondary.contrastText',
  },
  footerSocialBox: {
    width: '10%',
    height: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: {
      xs: '0.5rem', sm: '0.5rem', md: '1rem', lg: '1rem', xl: '1rem',
    },
    '& .author-socials': {
      width: {
        xs: '1rem', sm: '1.2rem', md: '1.5rem', lg: '1.5rem', xl: '1.5rem',
      },
      height: '1.6rem',
      color: '#6D6E76',
    },
  },
  headerAppBar: {
    position: 'static',
    width: '100%',
    height: {
      xs: '38vh', sm: '20vh', md: '10vh', lg: '5rem', xl: '5rem',
    },
    padding: {
      xs: '1rem 0', sm: '2rem 0', md: '0 5rem', lg: '0 5rem', xl: '0 5rem',
    },
    display: 'flex',
    flexDirection: {
      xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row',
    },
    justifyContent: {
      xs: 'center', sm: 'center', md: 'space-between', lg: 'space-between', xl: 'space-between',
    },
    gap: {
      xs: '1.8rem', sm: '1.8rem', md: '1.8rem', lg: 0, xl: 0,
    },
    alignItems: 'center',
    bgcolor: 'secondary.main',
  },
  joinOurTeamMain: {
    width: '100%',
    height: {
      xs: '45vh', sm: '35vh', md: '35vh', lg: '40vh', xl: '40vh',
    },
    p: {
      xs: '1rem', sm: '1rem', mb: '0 5rem', lg: '0 5rem', xl: '0 5rem',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    textAlign: 'center',
    mb: '8rem',
  },
  joinOurTeamH2: {
    width: {
      xs: '100%', sm: '100%', md: '100%', lg: '25.8rem', xl: '25.8rem',
    },
    fontFamily: "'Sen', sans-serif",
    fontWeight: 700,
    fontSize: '2.25rem',
    lineHeight: '3rem',
    letterSpacing: '-1px',
    color: 'secondary.main',
  },
  joinOurTeamP: {
    width: {
      xs: '90%', sm: '25.7rem', md: '25.7rem', lg: '25.7rem', xl: '25.7rem',
    },
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.9rem',
    lineHeight: '1.75rem',
    color: '#6D6E76',
  },
  joinOurTeamBtn: {
    width: '11rem',
    height: '3.5rem',
    borderRadius: 0,
    fontWeight: 700,
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'primary.main',
    color: 'secondary.main',
    mb: '5rem',
  },
  navbarMain: {
    width: {
      xs: '100%', sm: '100%', md: '60%', lg: '50%', xl: '40%',
    },
    height: {
      xs: '70%', sm: '70%', md: '70%', lg: '100%', xl: '100%',
    },
    display: 'flex',
    flexDirection: {
      xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row',
    },
    justifyContent: 'center',
    alignItems: 'center',
    gap: {
      xs: '.5rem', sm: '3rem', md: '1rem', lg: '1.5rem', xl: '1.5rem',
    },
    '& .header__nav-button': {
      textTransform: 'none',
      fontFamily: "'Sen', sans-serif",
    },
    '& .header__nav-button-text': {
      color: 'secondary.contrastText',
    },
    '& .header__nav-button-contained': {
      width: '11rem',
      height: '3.2rem',
      fontSize: {
        xs: '1.2rem', sm: '1.2rem', md: '1.2rem', lg: '1rem', xl: '1.2rem',
      },
      bgcolor: 'secondary.contrastText',
      color: 'secondary.main',
      borderRadius: 0,
      marginLeft: '1rem',
      fontWeight: 700,
    },
  },
  postCardBox: {
    width: '100%',
    height: '100%',
    p: {
      xs: 0, sm: 0, md: 0, lg: '2rem 0 2rem 2rem', xl: '2rem 0 2rem 1.5rem',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  postCardP1: {
    width: '70%',
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#592EA9',
    letterSpacing: '3px',
    fontFamily: "'Inter', sans-serif",
    mb: {
      xs: '0.7rem', sm: '0.7rem', md: '0.9rem', lg: '2rem', xl: '1.5rem',
    },
    textTransform: 'uppercase',
  },
  postCardH1: {
    fontWeight: 700,
    color: 'secondary.main',
    fontFamily: "'Sen', sans-serif",
    mb: {
      xs: '0.7rem', sm: '0.7rem', md: '0.9rem', lg: '2rem', xl: '2rem',
    },
  },
  postCardP2: {
    color: '#6D6E76',
    letterSpacing: {
      xs: 0, sm: 0, md: '1px', lg: '2px', xl: '2px',
    },
  },
  subscriptionMain: {
    width: '100%',
    height: '16rem',
    display: 'flex',
    flexDirection: {
      xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row',
    },
    justifyContent: {
      xs: 'center', sm: 'center', md: 'center', lg: 'center', xl: 'space-between',
    },
    gap: {
      xs: '1rem', sm: '1rem', md: '1rem', lg: '3rem', xl: 0,
    },
    alignItems: 'center',
    bgcolor: '#2E3040',
    p: {
      xs: '0 2rem', sm: '0 2rem', md: '0 2rem', lg: '0 6rem', xl: '0 5rem',
    },
  },
  subscriptionH2: {
    width: {
      xs: '20rem', sm: '30rem', md: '45rem', lg: '45rem', xl: '45rem',
    },
    fontFamily: "'Sen', sans-serif",
    fontWeight: 700,
    fontSize: {
      xs: '1.8rem', sm: '1.8rem', md: '2rem', lg: '3rem', xl: '3rem',
    },
    lineHeight: '3rem',
    letterSpacing: '-3px',
    color: 'secondary.contrastText',
    textAlign: {
      xs: 'center', sm: 'center', md: 'center', lg: 'center', xl: 'left',
    },
  },
  subscriptionBox1: {
    width: {
      xs: '100%', sm: '80%', md: '70%', lg: '60%', xl: '40%',
    },
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subscriptionTextField: {
    width: '22rem',
    height: '3.5rem',
    fontFamily: "'Inter', sans-serif",
    '& .MuiOutlinedInput-notchedOutline': {
      border: '1px solid',
      borderColor: 'secondary.dark',
    },
    '& ::placeholder': {
      color: 'secondary.dark',
      fontFamily: 'inherit',
      fontWeight: 700,
    },
    '& label': {
      color: 'secondary.dark',
      fontFamily: 'inherit',
      fontWeight: 700,
    },
  },
  subscriptionBtn: {
    width: '11rem',
    height: '3.5rem',
    borderRadius: 0,
    fontWeight: 700,
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'primary.main',
    color: 'secondary.main',
    textTransform: 'none',
    fontSize: '1.2rem',
  },
};