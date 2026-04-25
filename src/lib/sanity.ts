import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";

export const isSanityConfigured =
  !!projectId && projectId !== "demo-project";

export const sanityClient = createClient({
  projectId: projectId || "demo-project",
  dataset,
  apiVersion: "2024-10-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: unknown) {
  return builder.image(source as never);
}
