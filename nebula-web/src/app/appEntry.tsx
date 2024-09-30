import '@/shared/lib/domain/isCurrentHostEqualsCore';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { appRouter } from './router';
import './styles/base.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
