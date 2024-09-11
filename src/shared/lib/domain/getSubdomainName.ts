import { env } from '@/shared/lib';

export const getSubdomainName = (): string | null => {
  if (
    window.location.hostname.includes(`.${env.VITE_FRONTEND_CORE_HOSTNAME}`)
  ) {
    console.log(window.location.hostname);
    return window.location.hostname.replace(
      `.${env.VITE_FRONTEND_CORE_HOSTNAME}`,
      ''
    );
  }

  return null;
};
