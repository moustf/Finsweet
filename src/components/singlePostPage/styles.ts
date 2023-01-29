export const styles = {
  infoAndTitleMain: {
    width: '100%',
    height: {
      xs: '70vh', sm: '50vh', md: '60vh', lg: '45vh', xl: '45vh',
    },
    p: {
      xs: '0 2rem', sm: '0 2rem', md: '0 2rem', lg: 0, xl: 0,
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoAndTitleBox1: {
    width: '18rem',
    height: '4.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: '1.5rem',
  },
  infoAndTitleBox2: {
    width: '70%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  infoAndTitleFirstH4: {
    width: '15rem',
    fontWeight: 700,
    fontFamily: "'Sen', sans-serif",
  },
  infoAndTitleP: {
    lineHeight: '1.8rem',
    color: '#6D6E76',
    fontFamily: "'Inter', sans-serif",
  },
  infoAndTitleH1: {
    width: {
      xs: '100%', sm: '100%', md: '52rem', lg: '48rem', xl: '48rem',
    },
    fontWeight: 700,
    color: 'secondary.main',
    fontSize: '3rem',
    fontFamily: "'Sen', sans-serif",
    letterSpacing: '-2px',
    mb: '2.1rem',
  },
  infoAndTitleBox3: {
    width: '17%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoAndTitleSecondH4: {
    fontWeight: 700,
    fontSize: '1.5rem',
    fontFamily: "'Sen', sans-serif",
  },
  postSectionMain: {
    width: '100%',
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
  postSectionBox1: {
    width: {
      xs: '100%', sm: '100%', md: '100%', lg: '65%', xl: '50%',
    },
  },
  postSectionH4: {
    fontFamily: "'Sen', sans-serif",
    fontWeight: 700,
    fontSize: {
      xs: '0.9rem', sm: '1.2rem', md: '1.2rem', lg: '1.5rem', xl: '1.5rem',
    },
    color: 'secondary.main',
    opacity: '0.78',
  },
  postSectionHeading: {
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
  postSectionParagraph: {
    fontFamily: "'Inter', sans-serif",
    fontSize: {
      xs: '0.7rem', sm: '0.9rem', md: '1rem', lg: '1rem', xl: '1rem',
    },
    fontWeight: 400,
    color: '#6D6E76',
    mb: {
      xs: '1.5rem', sm: '1.5rem', md: '1.5rem', lg: '3rem', xl: '3rem',
    },
  },
  postCardMain: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1.5rem',
    '& .more-posts__post-pic': {
      width: '100%',
      objectFit: 'cover',
    },
  },
  postCardBox1: {
    width: '100%',
    height: '22px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.7rem',
    color: 'secondary.dark',
    fontFamily: "'Inter', sans-serif",
  },
  postCardDivider: {
    width: '2px', height: '1.1rem', bgcolor: 'primary.contrastText', fontSize: '1.1rem', borderRadius: '5px',
  },
  postCardH3: {
    width: {
      xs: '100%', sm: '100%', md: '100%', lg: '70%', xl: '70%',
    },
    fontWeight: 700,
    fontFamily: "'Sen', sans-serif",
    fontSize: {
      xs: '1rem', sm: '1rem', md: '1.2rem', lg: '1.8rem', xl: '1.8rem',
    },
    lineHeight: {
      xs: '1.5rem', sm: '1.5rem', md: '1.5rem', lg: '2.5rem', xl: '2.5rem',
    },
    color: 'secondary.main',
    letterSpacing: {
      xs: 0, sm: 0, md: 0, lg: '-2px', xl: '-2px',
    },
  },
  postCardP: {
    width: {
      xs: '100%', sm: '100%', md: '75%', lg: '75%', xl: '75%',
    },
    color: 'secondary.main',
    opacity: 0.7,
    fontSize: '1.2rem',
  },
  morePostsMain: {
    width: '100%',
    p: {
      xs: '0 2rem', sm: '0 2rem', md: '0 2rem', lg: '0 5rem', xl: '0 5rem',
    },
    mb: '5rem',
  },
  morePostsH2: {
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
      xs: '2rem', sm: '2rem', md: '2rem', lg: '4rem', xl: '4rem',
    },
  },
  morePostsDivider: {
    width: '100%',
    height: '1px',
    bgcolor: '#6D6E76',
    borderRadius: '3px',
    opacity: 0.3,
    mt: '4rem',
  },
};
