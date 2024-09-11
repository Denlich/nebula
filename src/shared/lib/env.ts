import { ZodError, z } from 'zod';

/**
 * ✅ DX Best practice (Type safe env variables)
 * Validate env variables with zod
 */
const envVariablesSchema = z.object({
  VITE_API_ENDPOINT: z.string().url(),
  VITE_FRONTEND_CORE_HOSTNAME: z.string(),
});

// eslint-disable-next-line import/no-mutable-exports
let env: z.infer<typeof envVariablesSchema>;

try {
  env = envVariablesSchema.parse(import.meta.env);
} catch (err) {
  console.error(
    'Env vars is invalid, check schema in the "@/shared/lib/env.ts"'
  );

  if (err instanceof ZodError) {
    console.error(err.errors);
  }

  throw err;
}

export { env };
