import { env } from '@/shared/lib';

declare global {
  interface Window {
    isCurrentHostEqualsCore: boolean;
  }
}

window.isCurrentHostEqualsCore =
  env.VITE_FRONTEND_CORE_HOSTNAME === window.location.hostname;
