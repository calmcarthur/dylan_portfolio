import { isSanityConfigured, sanityClient } from "./sanity";
import { fallbackData } from "./fallback";
import type { Project, Short, SiteSettings } from "./types";

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!isSanityConfigured) return fallbackData.settings;
  try {
    const data = await sanityClient.fetch<SiteSettings | null>(
      `*[_type == "siteSettings"][0]{
        name,
        tagline,
        heroSubcopy,
        aboutPortrait,
        aboutBio,
        selectedClients,
        contactEmail,
        instagramHandle,
        tiktokHandle,
        youtubeUrl,
        linkedinUrl
      }`,
    );
    return data ?? fallbackData.settings;
  } catch {
    return fallbackData.settings;
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  if (!isSanityConfigured) return fallbackData.featuredProjects;
  try {
    const data = await sanityClient.fetch<Project[]>(
      `*[_type == "project" && featured == true]
        | order(coalesce(featuredOrder, 999) asc, publishedAt desc){
          _id, title, "slug": slug.current, shortDescription, thumbnail,
          role, client, year, videoUrl, externalUrl
        }`,
    );
    return data?.length ? data : fallbackData.featuredProjects;
  } catch {
    return fallbackData.featuredProjects;
  }
}

export async function getAllProjects(): Promise<Project[]> {
  if (!isSanityConfigured) return fallbackData.projects;
  try {
    const data = await sanityClient.fetch<Project[]>(
      `*[_type == "project"] | order(publishedAt desc){
        _id, title, "slug": slug.current, shortDescription, thumbnail,
        role, client, year, videoUrl, externalUrl, publishedAt
      }`,
    );
    return data?.length ? data : fallbackData.projects;
  } catch {
    return fallbackData.projects;
  }
}

export async function getAllShorts(): Promise<Short[]> {
  if (!isSanityConfigured) return fallbackData.shorts;
  try {
    const data = await sanityClient.fetch<Short[]>(
      `*[_type == "short"] | order(publishedAt desc){
        _id, title, platform, postUrl, thumbnail, handle, publishedAt
      }`,
    );
    return data?.length ? data : fallbackData.shorts;
  } catch {
    return fallbackData.shorts;
  }
}
