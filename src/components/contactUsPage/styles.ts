export const styles = {
  contactsCardMain: {
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
  },
  contactsCardsBox: {
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
  },
  contactsFormMainBox: {
    width: '100%',
    height: {
      xs: '70vh', sm: '60vh', md: '70vh', lg: '70vh', xl: '80vh',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '2rem',
    p: {
      xs: '0 1rem', sm: '0 2rem', md: '0 3rem', lg: 0, xl: 0,
    },
  },
  contactsFormContainer: {
    width: {
      xs: '100%', sm: '100%', md: '50rem', lg: '70rem', xl: '70rem',
    },
    height: '90%',
    display: 'flex',
    justifyContent: {
      xs: 'center', sm: 'center', md: 'center', lg: 'space-between', xl: 'space-between',
    },
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    p: {
      xs: '2rem 1rem', sm: '2rem 2rem', md: '3rem 2rem', lg: '3rem 4rem', xl: '3rem 4rem',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: 'secondary.main',
    },
    '& .MuiInputBase-root.select.Mui-focused fieldset': {
      borderColor: 'secondary.main',
      '& legend span': {
        color: 'secondary.main',
        opacity: 1,
        transform: 'translateY(-6px)',
      },
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: 'secondary.main',
      },
      '& .Mui-focused fieldset': {
        borderColor: 'secondary.main',
      },
    },
    '& .message-box': {
      border: '1px solid rgba(109, 110, 118, 0.45)',
      '&:focus': {
        border: '1px solid black !important',
      },
    },
  },
  contactsForm: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  contactsFormSelect: {
    padding: '2rem',
    width: '100%',
    height: '10rem',
    backgroundColor: '#fff',
    border: '1px solid rgb(109 110 118 / 45%)',
    outline: 'none',
    borderRadius: '0.3rem',
  },
  contactFormSubmit: {
    width: '100%',
    height: '4rem',
    boxShadow: 'none',
    fontFamily: "'Sen', sans-serif",
    fontWeight: 700,
    fontSize: '1.2rem',
  },
  headingSectionMain: {
    width: '100%',
    height: {
      xs: '35vh', sm: '28vh', md: '40vh', lg: '45vh', xl: '45vh',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
  },
  headingSectionH3: {
    fontFamily: "'Sen', sans-serif",
    fontSize: {
      xs: '1rem', sm: '1rem', md: '1rem', lg: '1rem', xl: '1rem',
    },
    fontWeight: 900,
    lineHeight: '1.3rem',
    letterSpacing: '3px',
    textAlign: 'center',
    color: 'secondary.main',
    textTransform: 'uppercase',
  },
  headingSectionH1: {
    fontFamily: "'Sen', sans-serif",
    fontSize: {
      xs: '1.5rem', sm: '1.8rem', md: '2.5rem', lg: '3rem', xl: '3rem',
    },
    fontWeight: 700,
    lineHeight: {
      xs: '2rem', sm: '2rem', md: '2.5rem', lg: '4rem', xl: '4rem',
    },
    letterSpacing: '-1px',
    textAlign: 'center',
    color: 'secondary.main',
  },
  headingSectionP: {
    width: {
      xs: '95%', sm: '90%', md: '40rem', lg: '55rem', xl: '55rem',
    },
    fontFamily: "'Inter', sans-serif",
    fontSize: {
      xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem', xl: '1.1rem',
    },
    fontWeight: 400,
    lineHeight: {
      xs: '1.2rem', sm: '1.2rem', md: '1.8rem', lg: '2rem', xl: '2rem',
    },
    textAlign: 'center',
    color: '#6D6E76',
  },
  singleContactCardMain: {
    width: {
      xs: '35rem', sm: '35rem', md: '70%', lg: '22rem', xl: '22rem',
    },
    height: {
      xs: '50%', sm: '50%', md: '55%', lg: '100%', xl: '100%',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: {
      xs: 'center', sm: 'center', md: 'center', lg: 'flex-start', xl: 'flex-start',
    },
    gap: '2rem',
  },
  singleContactCardFirstP: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 400,
    lineHeight: '1.3rem',
    color: 'secondary.contrastText',
    opacity: 0.6,
  },
  singleContactCardDivider: {
    width: '100%',
    height: '2px',
    bgcolor: 'secondary.contrastText',
    opacity: 0.1,
  },
  singleContactCardFirstH5: {
    fontFamily: "'Sen', sans-serif",
    fontSize: {
      xs: '1.2rem', sm: '1.2rem', md: '1.5rem', lg: '2rem', xl: '2rem',
    },
    fontWeight: 700,
    lineHeight: {
      xs: '2rem', sm: '2rem', md: '1.2rem', lg: '1.3rem', xl: '1.3rem',
    },
    color: 'secondary.contrastText',
  },
  singleContactCardSecondH5: {
    fontFamily: "'Sen', sans-serif",
    fontSize: {
      xs: '1.2rem', sm: '1.2rem', md: '1.5rem', lg: '2rem', xl: '2rem',
    },
    fontWeight: 700,
    lineHeight: {
      xs: '2rem', sm: '2rem', md: '1.2rem', lg: '1.3rem', xl: '1.3rem',
    },
    color: 'secondary.contrastText',
  },
  singleContactCardSecondP: {
    fontFamily: "'Inter', sans-serif",
    fontSize: {
      xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem', xl: '1.1rem',
    },
    fontWeight: 400,
    lineHeight: {
      xs: '1.2rem', sm: '1.2rem', md: '1.8rem', lg: '2rem', xl: '2rem',
    },
    color: 'secondary.contrastText',
    opacity: 0.6,
  },
};
