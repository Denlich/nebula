import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { Routes } from './routes';

const HomePage = lazy(() =>
  import('@/pages/user/home').then((module) => ({ default: module.HomePage }))
);

export const UserRouter: RouteObject[] = [
  {
    path: Routes.HOME,
    element: <HomePage />,
  },
];
