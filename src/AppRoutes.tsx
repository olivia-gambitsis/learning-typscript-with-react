import { useRoutes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { AppLayout } from './Pages/AppLayout';
import { NotFoundPage } from './pages/NotFoundPage';
import { FC } from 'react';

export const AppRoutes: FC = () =>
  useRoutes([
    { path: '/', element: <AppLayout />, children: [{ path: '/', element: <AppIndexPage /> }] },
    { path: '*', element: <NotFoundPage /> },
  ]);
