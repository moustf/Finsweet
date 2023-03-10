export const styles = {
  allPostsMain: {
    width: '100%',
    p: {
      xs: '0 1rem', sm: '0 2rem', md: '0 2rem', lg: '0 5rem', xl: '0 5rem',
    },
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    mb: '8rem',
  },
  allPostsTitle: {
    fontFamily: "'Sen', sans-serif",
    fontSize: '3rem',
    fontWeight: 700,
    lineHeight: '4rem',
    letterSpacing: '-2px',
  },
  allPostsDivider: { width: '100%', height: '1px', bgcolor: '#6D6E76' },
  allPostsLowerNavBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  allPostsLowerNavBoxPrev: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#6D6E76',
    fontFamily: "'Sen', sans-serif",
    textAlign: 'center',
  },
  allPostsLowerNavBoxNext: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: 'secondary.main',
    fontFamily: "'Sen', sans-serif",
    textAlign: 'center',
    letterSpacing: '-1px',
  },
  featuredPostMain: {
    width: '100%',
    height: {
      xs: '140vh', sm: '85vh', md: '100vh', lg: '85vh', xl: '90vh',
    },
    p: {
      xs: '5rem 2rem', sm: '5rem 2rem', md: '5rem 5rem', lg: '0 5rem', xl: '0 5rem',
    },
    bgcolor: '#F4F0F8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    mb: '8rem',
  },
  featuredPostFirstP: {
    width: '12rem',
    fontSize: '1.1rem',
    fontWeight: 500,
    color: 'secondary.main',
    letterSpacing: '3px',
    fontFamily: "'Inter', sans-serif",
    mb: '2rem',
    textTransform: 'uppercase',
  },
  featuredPostTitle: {
    width: {
      xs: '100%', sm: '100%', md: '75%', lg: '75%', xl: '75%',
    },
    fontWeight: 700,
    color: 'secondary.main',
    fontSize: '3rem',
    fontFamily: "'Sen', sans-serif",
    lineHeight: '4rem',
    mb: '2rem',
  },
  featuredPostByWhoBox: {
    width: '18.5rem',
    height: '28px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: '1rem',
    color: 'secondary.dark',
    fontFamily: "'Sen', sans-serif",
  },
  featuredPostSecondP: {
    width: {
      xs: '100%', sm: '100%', md: '60%', lg: '60%', xl: '60%',
    },
    mb: '3rem',
    color: '#6D6E76',
    fontSize: '1.2rem',
  },
  featuredPostReadMoreBtn: {
    width: '15rem',
    height: '4rem',
    fontSize: '1.2rem',
    fontWeight: 700,
    fontFamily: "'Inter', sans-serif",
  },
  featuredPostImageGrid: {
    '& .featured-post-pic': {
      width: '100%',
      height: '25rem',
      objectFit: 'cover',
      boxShadow: '0px 0px 2px 0px rgba(255, 255, 255, 0.25)',
      borderRadius: '5px',
    },
  },
};
