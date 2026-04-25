import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import { loadEnv } from "vite";

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV ?? "development",
  process.cwd(),
  "",
);

const projectId = PUBLIC_SANITY_PROJECT_ID || "demo-project";
const dataset = PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  site: "https://dylanquinn.example.com",
  integrations: [
    sanity({
      projectId,
      dataset,
      useCdn: true,
      apiVersion: "2024-10-01",
      studioBasePath: "/studio",
    }),
    react(),
  ],
});
