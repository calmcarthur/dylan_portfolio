import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId =
  import.meta.env.PUBLIC_SANITY_PROJECT_ID ||
  process.env.PUBLIC_SANITY_PROJECT_ID ||
  "demo-project";

const dataset =
  import.meta.env.PUBLIC_SANITY_DATASET ||
  process.env.PUBLIC_SANITY_DATASET ||
  "production";

export default defineConfig({
  name: "dylan-quinn-portfolio",
  title: "Dylan Quinn Portfolio",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
