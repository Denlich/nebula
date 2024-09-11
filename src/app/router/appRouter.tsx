import { createBrowserRouter } from 'react-router-dom';
import { UserRouter } from './userRouter';
import { AdminRouter } from './adminRouter';

export const appRouter = createBrowserRouter(
  window.isCurrentHostEqualsCore ? UserRouter : AdminRouter
);
