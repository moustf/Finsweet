export const styles = {
  categoryCardMain: {
    width: '100%',
    height: {
      xs: '10rem', sm: '10rem', md: '10rem', lg: '8rem', xl: '8rem',
    },
    pl: '2rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'secondary.light',
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    cursor: 'pointer',
    '& .category__image': {
      width: {
        xs: '3rem', sm: '4rem', md: '5rem', lg: '5rem', xl: '5rem',
      },
      height: {
        xs: '3rem', sm: '4rem', md: '5rem', lg: '5rem', xl: '5rem',
      },
    },
  },
  categoryCardH3: {
    fontFamily: "'Sen', sans-serif",
    fontSize: {
      xs: '1.5rem', sm: '1.8rem', md: '2rem', lg: '2rem', xl: '2rem',
    },
    fontWeight: 700,
    letterSpacing: '-1px',
    lineHeight: '2rem',
  },
  categorySectionMain: {
    width: '100%',
    height: {
      xs: '55vh', sm: '45vh', md: '45vh', lg: '45vh', xl: '45vh',
    },
    p: {
      xs: '2rem', sm: '2rem', md: '3rem', lg: 0, xl: 0,
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    bgcolor: '#F4F0F8',
  },
  categorySectionH1: {
    fontWeight: 700,
    fontSize: {
      xs: '2rem', sm: '3rem', md: '3.5rem', lg: '3.5rem', xl: '3.5rem',
    },
    lineHeight: {
      xs: '3rem', sm: '4rem', md: '4rem', lg: '4rem', xl: '4rem',
    },
    textAlign: 'center',
    color: 'secondary.main',
    letterSpacing: '-2px',
    fontFamily: "'Sen', sans-serif",
  },
  categorySectionP: {
    width: {
      xs: '90%', sm: '70%', md: '60%', lg: '40%', xl: '30%',
    },
    fontWeight: 400,
    fontSize: {
      xs: '1.1rem', sm: '1.2rem', md: '1.2rem', lg: '1.2rem', xl: '1.2rem',
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
  categorySectionSubtitle: {
    width: {
      xs: '60%', sm: '35%', md: '30%', lg: '20%', xl: '20%',
    },
    fontWeight: 500,
    fontSize: {
      xs: '1.1rem', sm: '1.2rem', md: '1.2rem', lg: '1.2rem', xl: '1.2rem',
    },
    lineHeight: {
      xs: '1.2rem', sm: '1.2rem', md: '1.2rem', lg: '1.2rem', xl: '1.2rem',
    },
    textAlign: 'center',
    color: 'secondary.main',
    letterSpacing: '3px',
    fontFamily: "'Inter', sans-serif",
  },
  mainSectionsMain: {
    width: '100%',
    p: {
      xs: '5rem 2rem', sm: '5rem 2rem', md: '8rem 3rem', lg: '8rem 5rem', xl: '8rem 5rem',
    },
  },
  mainSectionsCardsBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5rem',
  },
  mainSectionsCategoriesBox: {
    width: {
      xs: '100%', sm: '100%', md: '100%', lg: '100%', xl: '70%',
    },
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  mainSectionsCategoriesBoxH2: {
    fontFamily: "'Sen', sans-serif",
    fontSize: {
      xs: '2.25rem', sm: '2.25rem', md: '2.25rem', lg: '2.25rem', xl: '2.25rem',
    },
    fontWeight: 700,
    lineHeight: '48px',
    letterSpacing: '-2px',
    color: 'secondary.main',
  },
  mainSectionsCategoriesCards: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  mainSectionsTagsBox: {
    fontFamily: "'Sen', sans-serif",
    fontSize: {
      xs: '2.25rem', sm: '2.25rem', md: '2.25rem', lg: '2.25rem', xl: '2.25rem',
    },
    fontWeight: 700,
    lineHeight: '48px',
    letterSpacing: '-2px',
    color: 'secondary.main',
  },
  mainSectionsTagsCards: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  tagCircleMain: {
    height: {
      xs: '3rem', sm: '4rem', md: '5rem', lg: '3rem', xl: '3rem',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '1.2rem',
    border: '1px solid #6D6E76',
    opacity: 0.7,
  },
  tagsCircleP: {
    fontFamily: "'Sen', sans-serif",
    fontSize: {
      xs: '0.8rem', sm: '1rem', md: '1.2rem', lg: '0.9rem', xl: '0.9rem',
    },
    fontWeight: 700,
    lineHeight: '2rem',
    color: 'secondary.main',
  },
};
