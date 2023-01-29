import { FC } from 'react';
import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack//react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { theme } from './theme';
import { LandingPage } from './pages/LandingPage';
import { AllPostsPage } from './pages/AllPostsPage';
import { SinglePostPage } from './pages/SinglePostPage';
import { AboutPage } from './pages/AboutUsPage';
import { BlogPage } from './pages/BlogPage';
import { AuthorPage } from './pages/AuthorPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicy';
import './App.css';

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
      path: '/blog',
      element: <BlogPage />,
    },
    {
      path: '/author',
      element: <AuthorPage />,
    },
    {
      path: '/contact',
      element: <ContactUsPage />,
    },
    {
      path: '/privacy',
      element: <PrivacyPolicyPage />,
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
