export type SanityImage = {
  asset?: { _ref?: string; _type?: string };
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: unknown;
  _type?: string;
  url?: string;
};

export type Project = {
  _id?: string;
  title: string;
  slug?: string;
  shortDescription?: string;
  thumbnail?: SanityImage;
  role?: string;
  client?: string;
  year?: number;
  videoUrl?: string;
  externalUrl?: string;
  publishedAt?: string;
};

export type ShortPlatform = "instagram" | "tiktok" | "youtube";

export type Short = {
  _id?: string;
  title: string;
  platform: ShortPlatform;
  postUrl: string;
  thumbnail?: SanityImage;
  handle?: string;
  publishedAt?: string;
};

export type SiteSettings = {
  name: string;
  tagline?: string;
  heroSubcopy?: string;
  aboutPortrait?: SanityImage;
  aboutBio?: string;
  selectedClients?: string[];
  contactEmail?: string;
  instagramHandle?: string;
  tiktokHandle?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
};
