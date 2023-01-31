/* eslint max-len: ["error", { "code": 180 }] */
import { FC, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { PostCard } from '../PostCard';
import { CategoryCard } from './CategoryCard';

import { TagCircle } from './TagCircle';
import { styles } from './styles';

export const MainSections: FC = () => {
  const [index, setIndex] = useState<number>(1);

  return (
    <Box
      component="section"
      sx={styles.mainSectionsMain}
    >
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={8}
          xl={8}
        >
          <Box
            sx={styles.mainSectionsCardsBox}
          >
            <PostCard
              page="category"
              img="https://i.ibb.co/y5ZBNpd/post1.png"
              title="Business"
              heading="Top 6 free website mockup tools 2022"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec."
            />
            <PostCard
              page="category"
              img="https://i.ibb.co/y5ZBNpd/post1.png"
              title="Business"
              heading="Step-by-step guide to choosing great font pairs"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec."
            />
            <PostCard
              page="category"
              img="https://i.ibb.co/y5ZBNpd/post1.png"
              title="Business"
              heading="Ten free foogle fonts that you should use"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec."
            />
            <PostCard
              page="category"
              img="https://i.ibb.co/y5ZBNpd/post1.png"
              title="Business"
              heading="What did I learn from doing 50+ design sprints?"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec."
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={4}
          xl={4}
        >
          <Box
            sx={styles.mainSectionsCategoriesBox}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={styles.mainSectionsCategoriesBoxH2}
            >
              Categories
            </Typography>
            <Box
              sx={styles.mainSectionsCategoriesCards}
            >
              <CategoryCard
                index={index}
                arrange={1}
                setIndex={setIndex}
                img="https://i.ibb.co/269VL4z/rocket-cat.png"
                title="Startup"
              />
              <CategoryCard
                index={index}
                arrange={2}
                setIndex={setIndex}
                img="https://i.ibb.co/kGsC9dV/bus-cat.png"
                title="Business"
              />
              <CategoryCard
                index={index}
                arrange={3}
                setIndex={setIndex}
                img="https://i.ibb.co/FzDN1g6/econ-cat.png"
                title="Economy"
              />
              <CategoryCard
                index={index}
                arrange={4}
                setIndex={setIndex}
                img="https://i.ibb.co/T8hVVM7/cyborg-cat.png"
                title="Technology"
              />
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
              }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={styles.mainSectionsTagsBox}
              >
                All Tags
              </Typography>
              <Box
                sx={styles.mainSectionsTagsCards}
              >
                <TagCircle id={1} text="Business" />
                <TagCircle id={2} text="Experience" />
                <TagCircle id={3} text="Screen" />
                <TagCircle id={4} text="Technology" />
                <TagCircle id={5} text="Marketing" />
                <TagCircle id={6} text="Life" />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
