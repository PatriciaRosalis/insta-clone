import type { Config } from "drizzle-kit";

export default {
  driver: "mysql2",
  schema: "./db/schema/*",
  out: "./db/migrations",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  }
} satisfies Config;
