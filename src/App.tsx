import { FC } from 'react';
import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack//react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { theme } from './theme';
import { LandingPage } from './pages/LandingPage';
import { AllPostsPage } from './pages/allPostsPage';
import { SinglePostPage } from './pages/singlePostPage';
import { BlogPage } from './pages/BlogPage';

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
      path: '/blog',
      element: <BlogPage />,
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
