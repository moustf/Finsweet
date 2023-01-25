import { FC } from 'react';
import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack//react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { theme } from './theme';
import { LandingPage } from './pages/LandingPage';
import { AllPostsPage } from './pages/allPostsPage';
import { SinglePostPage } from './pages/singlePostPage';
import { AboutPage } from './pages/AboutUsPage';
import { CategoryPage } from './pages/CategoryPage';
import { AuthorPage } from './pages/AuthorPage';
import { ContactUsPage } from './pages/ContactUsPage';

export const App: FC = () => {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/all-posts',
      element: <AllPostsPage />,
    },
    {
      path: '/post',
      element: <SinglePostPage />,
    },
    {
      path: '/about',
      element: <AboutPage />,
    },
    {
      path: '/category',
      element: <CategoryPage />,
    },
    {
      path: '/author',
      element: <AuthorPage />,
    },
    {
      path: '/contact',
      element: <ContactUsPage />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
