import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_REOWN_PROJECT_ID: z.string(),
  },
  emptyStringAsUndefined: true,
  experimental__runtimeEnv: {
    NEXT_PUBLIC_REOWN_PROJECT_ID: process.env.NEXT_PUBLIC_REOWN_PROJECT_ID,
  },
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },
  skipValidation: Boolean(process.env.SKIP_ENV_VALIDATION),
});
