import { isSanityConfigured, urlFor } from "./sanity";
import type { SanityImage, ShortPlatform } from "./types";

export function imageUrl(
  image: SanityImage | undefined,
  opts: { width?: number; height?: number; quality?: number } = {},
): string | undefined {
  if (!image) return undefined;
  if (image.url) return image.url;
  if (!isSanityConfigured) return undefined;
  let builder = urlFor(image);
  if (opts.width) builder = builder.width(opts.width);
  if (opts.height) builder = builder.height(opts.height);
  if (opts.quality) builder = builder.quality(opts.quality);
  return builder.auto("format").fit("max").url();
}

export function getYouTubeId(url: string | undefined): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname.startsWith("/shorts/")) {
        return u.pathname.split("/")[2] ?? null;
      }
      if (u.pathname === "/watch") return u.searchParams.get("v");
      if (u.pathname.startsWith("/embed/")) {
        return u.pathname.split("/")[2] ?? null;
      }
    }
    if (u.hostname === "youtu.be") {
      return u.pathname.slice(1) || null;
    }
  } catch {
    return null;
  }
  return null;
}

export function getVimeoId(url: string | undefined): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname.includes("vimeo.com")) {
      const parts = u.pathname.split("/").filter(Boolean);
      const id = parts[parts.length - 1];
      return /^\d+$/.test(id) ? id : null;
    }
  } catch {
    return null;
  }
  return null;
}

export function getEmbedUrl(videoUrl: string | undefined): string | null {
  const yt = getYouTubeId(videoUrl);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt}`;
  const vm = getVimeoId(videoUrl);
  if (vm) return `https://player.vimeo.com/video/${vm}`;
  return null;
}

export function platformLabel(platform: ShortPlatform): string {
  switch (platform) {
    case "instagram":
      return "Instagram";
    case "tiktok":
      return "TikTok";
    case "youtube":
      return "YouTube";
  }
}
