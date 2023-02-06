import { FC, lazy, Suspense } from 'react';
import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack//react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Spinner } from './components/Spinner';
import { theme } from './theme';
import './App.css';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const AllPostsPage = lazy(() => import('./pages/AllPostsPage'));
const SinglePostPage = lazy(() => import('./pages/SinglePostPage'));
const AboutPage = lazy(() => import('./pages/AboutUsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const AuthorPage = lazy(() => import('./pages/AuthorPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicy'));

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
        <Suspense fallback={<Spinner />}>
          <div className="App">
            <RouterProvider router={router} />
          </div>
        </Suspense>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
