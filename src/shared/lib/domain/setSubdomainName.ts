import { env } from '@/shared/lib';

export const setSubdomainName = (subDomain: string) => {
  // Create a new URL object with the updated values
  const updatedURL = new URL(window.location.href);

  updatedURL.hostname = `${subDomain}.${env.VITE_FRONTEND_CORE_HOSTNAME}`;

  // Navigate to the updated URL
  window.location.href = updatedURL.href;
};
