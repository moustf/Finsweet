export const styles = {
  landingSectionMain: {
    width: '100%',
    height: {
      xs: '91.5vh', sm: '80vh', md: '91.6vh', lg: '91.6vh', xl: '91.6vh',
    },
    p: {
      xs: '5rem 2rem', sm: '5rem 2rem', md: '0 5rem', lg: '0 5rem', xl: '0 5rem',
    },
    backgroundAttachment: 'fixed',
    backgroundPosition: { xs: 'center' },
    backgroundSize: 'cover',
    objectFit: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    mb: '8rem',
  },
  landingSectionFirstP: {
    fontSize: '1.2rem',
    fontWeight: 500,
    color: 'secondary.contrastText',
    letterSpacing: '3px',
    fontFamily: "'Inter', sans-serif",
    mb: '2rem',
  },
  landingSectionH1: {
    width: {
      xs: '100%', sm: '100%', md: '52rem', lg: '52rem', xl: '52rem',
    },
    color: 'secondary.contrastText',
    fontSize: '3.5rem',
    fontFamily: "'Sen', sans-serif",
    mb: '2rem',
  },
  landingSectionByWhoBox: {
    width: '18.5rem',
    height: '28px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: '1rem',
    color: 'secondary.contrastText',
    fontFamily: "'Sen', sans-serif",
  },
  landingPageSecondP: {
    width: {
      xs: '100%', sm: '100%', md: '42rem', lg: '42rem', xl: '42rem',
    },
    mb: '3rem',
    color: 'secondary.contrastText',
    fontSize: '1.2rem',
  },
  landingSectionBtn: {
    width: '15rem',
    height: '4rem',
    fontSize: '1.2rem',
    fontWeight: 700,
    fontFamily: "'Inter', sans-serif",
  },
  postSectionMain: {
    width: '100%',
    height: {
      xs: '230vh', sm: '215vh', md: '190vh', lg: '100vh', xl: '100vh',
    },
    p: {
      xs: '0 1rem', sm: '0 1rem', md: '0 5rem', lg: '0 5rem', xl: '0 5rem',
    },
    mb: '8rem',
  },
  featuredPostMain: {
    width: '100%',
    height: {
      xs: '107vh', sm: '102vh', md: '90vh', lg: '90vh', xl: '90vh',
    },
    mb: { xs: '5rem' },
  },
  featuredPostH2: {
    width: '100%',
    fontFamily: "'Sen', sans-serif",
    fontWeight: 700,
    letterSpacing: '-2px',
    mb: '2rem',
  },
  featuredPostCard: {
    width: '100%',
    p: {
      xs: '1rem', sm: '2rem 1rem', md: '2rem', lg: '2rem', xl: '2rem',
    },
    borderRadius: 0,
    boxShadow: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'secondary.light',
    '& .postImage': {
      width: '100%',
      height: '25rem',
      boxShadow: '0px 0px 1px 0px rgba(0, 0, 0, .2)',
      marginBottom: '2rem',
    },
  },
  featuredPostMadeByWho: {
    width: '18rem',
    height: '22px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: '1rem',
    color: 'primary.contrastText',
    fontFamily: "'Inter', sans-serif",
  },
  featuredPostDivider: {
    width: '2px', height: '1.1rem', bgcolor: 'primary.contrastText', fontSize: '1.1rem', borderRadius: '5px',
  },
  featuredPostFirstP: {
    width: {
      xs: '100%', sm: '100%', md: '42rem', lg: '32rem', xl: '48rem',
    },
    mb: '1rem',
    color: 'primary.contrastText',
    fontSize: '1.8rem',
    fontWeight: 700,
    fontFamily: "'Sen', sans-serif",
  },
  featuredPostSecondP: {
    width: {
      xs: '100%', sm: '100%', md: '42rem', lg: '42rem', xl: '42rem',
    },
    mb: '3rem',
    color: '#6D6E76',
    fontSize: '1.2rem',
  },
  featuredPostBtn: {
    width: '15rem',
    height: '4rem',
    fontSize: '1.2rem',
    fontWeight: 700,
    fontFamily: "'Inter', sans-serif",
  },
  allPostsMain: {
    width: '100%',
    height: '100%',
    p: {
      xs: '0 1rem', sm: '0 1rem', md: '0 2rem', lg: '0 2rem', xl: '0 2rem',
    },
  },
  allPostsTextBox: {
    width: '100%',
    display: 'flex',
    flexDirection: {
      xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row',
    },
    justifyContent: 'space-between',
    alignItems: {
      xs: 'flex-start', ms: 'center', md: 'center', lg: 'center', xl: 'center',
    },
    mb: '2rem',
    gap: { xs: '1rem', sm: '1rem' },
  },
  allPostsH2: {
    width: { xs: '100%', sm: '100%' },
    fontFamily: "'Sen', sans-serif",
    fontWeight: 700,
    letterSpacing: '-2px',
    fontSize: { lg: '2.5rem' },
  },
  allPostsBtn: {
    width: { sm: '8rem' },
    color: '#592EA9',
    fontFamily: "'Inter', sans-serif",
    fontSize: '1rem',
    textTransform: 'none',
  },
  listOfAuthorsMain: {
    width: '100%',
    height: {
      xs: '208vh', sm: '82vh', md: '110vh', lg: '105vh', xl: '53vh',
    },
    p: {
      xs: '1rem', sm: '1rem', mb: '0 5rem', lg: '0 5rem', xl: '0 5rem',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mb: '8rem',
  },
  listOfAuthorsH2: {
    width: '14.4rem',
    fontFamily: "'Sen', sans-serif",
    fontWeight: 700,
    fontSize: '2.25rem',
    letterSpacing: '-2px',
    mb: '3rem',
  },
  listOfAuthorsBoxesContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: {
      xs: 'center', sm: 'center', md: 'center', lg: 'center', xl: 'space-between',
    },
    gap: {
      xs: 0, sm: '2rem', md: '5rem', lg: '5rem', xl: 0,
    },
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  mottoSectionMain: {
    width: '100%',
    height: {
      xs: '90vh', sm: '85vh', md: '95vh', lg: '62vh', xl: '80vh',
    },
    p: {
      xs: '1rem', sm: '1rem', mb: '0 5rem', lg: '0 5rem', xl: '0 5rem',
    },
    mb: '8rem',
    boxSizing: 'border-box',
  },
  mottoSectionShape: {
    width: '100%',
    height: '1.5rem',
    background: 'linear-gradient(90deg,  transparent 0%, transparent 25%, #FFD050 25%, #FFD050 75%, #592EA9 75%,  #592EA9 100%)',
  },
  mottoSectionGridBox: {
    width: '100%',
    height: {
      xs: '85vh', sm: '80vh', md: '90vh', lg: '60vh', xl: '60vh',
    },
    bgcolor: '#F4F0F8',
    pt: {
      xs: '3rem', sm: '3rem', md: '3rem', lg: '3rem', xl: 0,
    },
  },
  mottoSectionAboutUsBox: {
    width: '100%',
    height: {
      xs: '42vh', sm: '40vh', md: '45vh', lg: '45vh', xl: '60vh',
    },
    pl: {
      xs: '1rem', sm: '2rem', md: '5rem', lg: '5rem', xl: '5rem',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  mottoSectionFirstP: {
    fontFamily: "'Inter', sans-serif",
    color: 'secondary.primary',
    fontWeight: 600,
    letterSpacing: '3px',
    fontSize: '1.2rem',
    mb: '1.5rem',
    textTransform: 'uppercase',
  },
  mottoSectionH2: {
    width: {
      xs: '100%', sm: '70%', md: '42rem', lg: '30rem', xl: '42rem',
    },
    fontSize: {
      xs: '1rem', sm: '1.8rem', md: '1.5rem', lg: '2rem', xl: '2.8rem',
    },
    fontWeight: 700,
    lineHeight: {
      xs: '25px', sm: '45px', md: '55px', lg: '40px', xl: '55px',
    },
    mb: '1rem',
  },
  mottoSectionSecondP: {
    width: {
      xs: '100%', sm: '70%', md: '35rem', lg: '30rem', xl: '35rem',
    },
    color: '#6D6E76',
    fontSize: {
      xs: '0.8rem', sm: '01rem', md: '1.2rem', lg: '1rem', xl: '1.2rem',
    },
    lineHeight: {
      xs: '28px', sm: '28px', md: '28px', lg: '25px', xl: '28px',
    },
    mb: '1rem',
  },
  mottoSectionReadMoreBtn: {
    width: 'fit-content',
    justifyContent: 'flex-start',
    color: '#592EA9',
    fontWeight: 700,
    fontSize: {
      xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1rem', xl: '1.2rem',
    },
  },
  mottoSectionMissionBox: {
    width: '100%',
    height: {
      xs: '42vh', sm: '40vh', md: '45vh', lg: '45vh', xl: '60vh',
    },
    pl: {
      xs: '1rem', sm: '2rem', md: '5rem', lg: '2rem', xl: '3rem',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    pb: {
      xs: '3rem', sm: '3rem', md: '3rem', lg: '3rem', xl: 0,
    },
  },
  mottoSectionThirdP: {
    fontFamily: "'Inter', sans-serif",
    color: 'secondary.primary',
    fontWeight: 600,
    letterSpacing: '3px',
    mb: '1.5rem',
    textTransform: 'uppercase',
    fontSize: '1.2rem',
  },
  mottoSectionH3: {
    width: {
      xs: '100%', sm: '70%', md: '38rem', lg: '30rem', xl: '38rem',
    },
    fontSize: {
      xs: '1rem', sm: '1.6rem', md: '1.5rem', lg: '2rem', xl: '2.5rem',
    },
    fontWeight: 700,
    lineHeight: {
      xs: '25px', sm: '45px', md: '48px', lg: '40px', xl: '48px',
    },
    mb: '1rem',
  },
  mottoSectionForthP: {
    width: {
      xs: '100%', sm: '70%', md: '35rem', lg: '28rem', xl: '40rem',
    },
    color: '#6D6E76',
    lineHeight: {
      xs: '28px', sm: '28px', md: '28px', lg: '30px', xl: '28px',
    },
    fontSize: {
      xs: '0.8rem', sm: '01rem', md: '1.2rem', lg: '1rem', xl: '1.2rem',
    },
    mb: '1rem',
  },
  ourStoriesMain: {
    width: '100%',
    height: {
      xs: '83vh', sm: '95vh', md: '115vh', lg: '65vh', xl: '78vh',
    },
    p: {
      xs: '0 1rem', sm: '0 5rem', md: '0 5rem', lg: '0 5rem', xl: '0 5rem',
    },
    mb: '8rem',
  },
  ourStoriesTextBox: {
    width: {
      xs: '90%', sm: '80%', md: '80%', lg: '120%', xl: '60rem',
    },
    height: {
      xs: '45vh', sm: '50vh', md: '45vh', lg: '45vh', xl: '38rem',
    },
    pl: {
      xs: '1rem', sm: '2rem', md: '5rem', lg: '5rem', xl: '5rem',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    bgcolor: 'secondary.contrastText',
    transform: {
      xs: 'translate(5%, -12%)',
      sm: 'translate(15%, -15%)',
      md: 'translate(12%, -25%)',
      lg: 'translate(-40%, 35%)',
      xl: 'translate(-45%, 29.5%)',
    },
    borderBottom: {
      xs: '1px solid rgba(0, 0, 0, .2)',
      sm: '1px solid rgba(0, 0, 0, .2)',
      md: '1px solid rgba(0, 0, 0, .2)',
      lg: 'none',
      xl: 'none',
    },
  },
  ourStoriesFirstP: {
    fontFamily: "'Inter', sans-serif",
    color: 'secondary.primary',
    fontWeight: 600,
    letterSpacing: '3px',
    fontSize: '1.2rem',
    mb: '1.5rem',
    textTransform: 'uppercase',
  },
  ourStoriesH2: {
    width: {
      xs: '63.8%', sm: '66.9%', md: '30rem', lg: '24.4rem', xl: '34.15rem',
    },
    fontSize: {
      xs: '1rem', sm: '1.5rem', md: '2rem', lg: '2rem', xl: '2.8rem',
    },
    fontWeight: 700,
    lineHeight: {
      xs: '25px', sm: '45px', md: '55px', lg: '40px', xl: '55px',
    },
    mb: '1rem',
    fontFamily: "'Sen', sans-serif",
  },
  ourStoriesSecondP: {
    width: {
      xs: '100%', sm: '90%', md: '35rem', lg: '27rem', xl: '35rem',
    },
    color: '#6D6E76',
    fontSize: {
      xs: '0.8rem', sm: '1rem', md: '1rem', lg: '1rem', xl: '1rem',
    },
    lineHeight: {
      xs: '20px', sm: '28px', md: '28px', lg: '25px', xl: '28px',
    },
    mb: '2rem',
    fontFamily: "'Inter', sans-serif",
  },
  ourStoriesButton: {
    width: {
      xs: '14rem', sm: '17rem', md: '20rem', lg: '20rem', xl: '20rem',
    },
    height: {
      xs: '3.5rem', sm: '3.5rem', md: '3.5rem', lg: '4rem', xl: '4rem',
    },
    justifyContent: 'center',
    color: 'secondary.main',
    bgcolor: 'primary.main',
    borderRadius: 0,
    boxShadow: 'none',
    fontWeight: 700,
    fontSize: {
      xs: '0.9rem', sm: '1rem', md: '1rem', lg: '1rem', xl: '1rem',
    },
    fontFamily: "'Sen', sans-serif",
  },
  postsAllPostsMain: {
    width: '100%',
    height: '90%',
    pl: {
      md: '2rem', lg: '2rem', xl: '2rem',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& #active': {
      bgcolor: 'primary.light',
      boxShadow: '0px 0px 1px 0px rgba(0, 0, 0, .2)',
    },
  },
  postsAllPostsPostBox: {
    width: '100%',
    height: {
      xs: '15rem', sm: '15rem', md: '11.5rem', lg: '11.5rem', xl: '11.5rem',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    pl: {
      xs: '1rem', sm: '1rem', md: '2rem', lg: '2rem', xl: '2rem',
    },
    cursor: 'pointer',
  },
  postsAllPostsPostBoxInner: {
    width: '18rem',
    height: '22px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: '1rem',
    color: 'primary.contrastText',
    fontFamily: "'Inter', sans-serif",
  },
  postsAllPostsDivider: {
    width: '2px', height: '1.1rem', bgcolor: 'primary.contrastText', fontSize: '1.1rem', borderRadius: '5px',
  },
  postsAllPostsP: {
    width: '80%',
    mb: '1rem',
    color: 'primary.contrastText',
    fontSize: {
      xs: '1.5rem', sm: '1.5rem', md: '1.5rem', lg: '1.2rem', xl: '1.5rem',
    },
    fontWeight: 700,
    fontFamily: "'Sen', sans-serif",
  },
  testimonialsMain: {
    width: '100%',
    height: {
      xs: '85vh', sm: '67vh', md: '80vh', lg: '45vh', xl: '60vh',
    },
    p: {
      xs: '0 1rem', sm: '0 5rem', md: '0 5rem', lg: '0 5rem', xl: '0 5rem',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mb: '8rem',
  },
  testimonialsFirstGrid: {
    display: 'flex',
    flexDirection: {
      xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row',
    },
    justifyContent: 'center',
    alignItems: 'center',
  },
  testimonialsTextBox: {
    width: '100%',
    height: {
      xs: '35vh', sm: '35vh', md: '37vh', lg: '45vh', xl: '60vh',
    },
    pl: {
      xs: '3rem', sm: '6rem', md: '5rem', lg: '2rem', xl: '5rem',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    pb: {
      xs: '1rem',
      sm: '1rem',
      md: '3rem',
      lg: '3rem',
      xl: 0,
    },
  },
  testimonialsFirstP: {
    fontFamily: "'Inter', sans-serif",
    color: 'secondary.primary',
    fontWeight: 600,
    letterSpacing: '3px',
    mb: '1.5rem',
    textTransform: 'uppercase',
    fontSize: '1.2rem',
  },
  testimonialsH3: {
    width: {
      xs: '100%', sm: '70%', md: '25rem', lg: '22rem', xl: '21.5rem',
    },
    fontSize: {
      xs: '1rem', sm: '1.6rem', md: '1.5rem', lg: '2rem', xl: '2.25rem',
    },
    fontWeight: 700,
    lineHeight: {
      xs: '25px', sm: '45px', md: '48px', lg: '40px', xl: '48px',
    },
    mb: '1rem',
    fontFamily: "'Sen', sans-serif",
  },
  testimonialsSecondP: {
    width: {
      xs: '100%', sm: '70%', md: '35rem', lg: '28rem', xl: '24rem',
    },
    color: '#6D6E76',
    lineHeight: {
      xs: '28px', sm: '28px', md: '28px', lg: '30px', xl: '28px',
    },
    fontSize: {
      xs: '0.8rem', sm: '01rem', md: '1.2rem', lg: '1rem', xl: '1.2rem',
    },
    mb: '1rem',
    fontFamily: "'Inter', sans-serif",
  },
  testimonialsDivider: {
    height: '70%',
    width: '2px',
    alignSelf: 'center',
    bgcolor: '#6D6E76',
    opacity: '0.3',
    borderRadius: '3px',
    display: {
      xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block',
    },
  },
  testimonialsTestimonialCard: {
    width: '100%',
    height: {
      xs: '26rem',
      sm: '23rem',
      md: '25rem',
      lg: '100%',
      xl: '90%',
    },
    p: {
      xs: '1rem 3rem 3rem',
      sm: '1rem 6rem 5rem',
      md: '1rem 6rem 5rem',
      lg: '5rem 6rem',
      xl: '5rem 6rem',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  testimonialsFirstH4: {
    width: {
      xs: '100%', sm: '28rem', md: '28rem', lg: '28rem', xl: '28rem',
    },
    height: '8rem',
    fontWeight: 700,
    lineHeight: '40px',
    fontSize: {
      xs: '1rem', sm: '1.4rem', md: '1.5rem', lg: '1.4rem', xl: '1.5rem',
    },
    fontFamily: "'Sen', sans-serif",
  },
  testimonialsPersonalCard: {
    width: '100%',
    display: 'flex',
    flexDirection: {
      xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row',
    },
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2rem',
  },
  testimonialsPersonalCardInner: {
    width: '18rem',
    height: '4.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  testimonialsPersonalInfo: {
    width: '70%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  testimonialsSecondH4: {
    width: '15rem',
    fontWeight: 700,
    fontFamily: "'Sen', sans-serif",
  },
  testimonialsThirdP: {
    lineHeight: '1.8rem',
    color: '#6D6E76',
    fontFamily: "'Inter', sans-serif",
  },
  testimonialsArrowsBox: {
    width: {
      xs: '90%', sm: '30%', md: '20%', lg: '30%', xl: '20%',
    },
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  testimonialsArrowsBoxFirstAvatar: {
    width: '3rem',
    height: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'secondary.contrastText',
  },
  testimonialsArrowsBoxSecondAvatar: {
    width: '4rem',
    height: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'secondary.main',
  },
};
