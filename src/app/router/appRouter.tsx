import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { Routes } from './routes';

export const appRouter = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <HomePage />,
  },
]);
