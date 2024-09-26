import React, { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { Routes } from './routes';

const DashboardPage = lazy(() =>
  import('@/pages/admin/dashboard').then((module) => ({
    default: module.DashboardPage,
  }))
);

export const AdminRouter: RouteObject[] = [
  {
    path: Routes.HOME,
    element: <Navigate to={Routes.DASHBOARD} />,
  },
  {
    path: Routes.DASHBOARD,
    element: <DashboardPage />,
  },
];
