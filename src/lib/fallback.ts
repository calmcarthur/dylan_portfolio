import type { Project, Short, SiteSettings } from "./types";

const placeholder = (seed: string, w = 1600, h = 900) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;

const featuredProjects: Project[] = [
  {
    title: "Last Run",
    slug: "last-run",
    shortDescription:
      "A short-form documentary following an aging marathoner's final attempt at Boston.",
    thumbnail: { url: placeholder("dylan-last-run") },
    role: "Director / Editor",
    client: "Independent",
    year: 2025,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Friday Night Lights, Re-Lit",
    slug: "friday-night",
    shortDescription:
      "A season inside a Texas high school football program rebuilding after tragedy.",
    thumbnail: { url: placeholder("dylan-fnl", 1600, 1000) },
    role: "Cinematographer",
    client: "ESPN Films",
    year: 2024,
    videoUrl: "https://vimeo.com/76979871",
  },
  {
    title: "Tip-Off",
    slug: "tip-off",
    shortDescription:
      "Branded film capturing the first 24 hours of a rookie's NBA debut.",
    thumbnail: { url: placeholder("dylan-tipoff", 1600, 1100) },
    role: "Director",
    client: "Nike",
    year: 2024,
    videoUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
  },
];

const projects: Project[] = [
  ...featuredProjects,
  {
    title: "Walk-On",
    slug: "walk-on",
    shortDescription:
      "Profile of a D-III walk-on quarterback who started under the lights at Lambeau.",
    thumbnail: { url: placeholder("dylan-walkon", 1600, 900) },
    role: "Director / DP",
    client: "The Players' Tribune",
    year: 2023,
    videoUrl: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
  },
  {
    title: "Quiet Hours",
    slug: "quiet-hours",
    shortDescription:
      "An intimate look at the pre-dawn training rituals of an Olympic swimmer.",
    thumbnail: { url: placeholder("dylan-quiet", 1600, 900) },
    role: "Editor",
    client: "Red Bull",
    year: 2023,
  },
];

const shorts: Short[] = [
  {
    title: "Sideline angle from the title game.",
    platform: "instagram",
    postUrl: "https://www.instagram.com/p/CxampleA/",
    thumbnail: { url: placeholder("dylan-short-1", 720, 1280) },
    handle: "dylanquinn",
  },
  {
    title: "Behind the lens with the Bulls media team.",
    platform: "tiktok",
    postUrl: "https://www.tiktok.com/@dylanquinn/video/0000000000000000000",
    thumbnail: { url: placeholder("dylan-short-2", 720, 1280) },
    handle: "dylanquinn",
  },
  {
    title: "Halftime cutdown — 60 seconds.",
    platform: "youtube",
    postUrl: "https://www.youtube.com/shorts/abc12345",
    thumbnail: { url: placeholder("dylan-short-3", 720, 1280) },
    handle: "dylanquinn",
  },
  {
    title: "Color grading a bowl game in real time.",
    platform: "instagram",
    postUrl: "https://www.instagram.com/p/CxampleB/",
    thumbnail: { url: placeholder("dylan-short-4", 720, 1280) },
    handle: "dylanquinn",
  },
  {
    title: "First snap of the playoffs.",
    platform: "tiktok",
    postUrl: "https://www.tiktok.com/@dylanquinn/video/0000000000000000001",
    thumbnail: { url: placeholder("dylan-short-5", 720, 1280) },
    handle: "dylanquinn",
  },
  {
    title: "B-roll dump from media day.",
    platform: "youtube",
    postUrl: "https://www.youtube.com/shorts/xyz67890",
    thumbnail: { url: placeholder("dylan-short-6", 720, 1280) },
    handle: "dylanquinn",
  },
  {
    title: "Late-night edit bay session.",
    platform: "instagram",
    postUrl: "https://www.instagram.com/p/CxampleC/",
    thumbnail: { url: placeholder("dylan-short-7", 720, 1280) },
    handle: "dylanquinn",
  },
  {
    title: "Locker room cooldown, unscripted.",
    platform: "tiktok",
    postUrl: "https://www.tiktok.com/@dylanquinn/video/0000000000000000002",
    thumbnail: { url: placeholder("dylan-short-8", 720, 1280) },
    handle: "dylanquinn",
  },
];

const settings: SiteSettings = {
  name: "Dylan Quinn",
  tagline: "Sports Media Director & Cinematographer",
  heroSubcopy:
    "Documentaries, branded films, and short-form storytelling for the moments that don't make the highlight reel.",
  selectedClients: [
    "ESPN Films",
    "Nike",
    "The Players' Tribune",
    "Red Bull",
    "Bleacher Report",
    "Big Ten Network",
  ],
  contactEmail: "hello@dylanquinn.example.com",
  instagramHandle: "dylanquinn",
  tiktokHandle: "dylanquinn",
  youtubeUrl: "https://youtube.com/@dylanquinn",
  linkedinUrl: "https://linkedin.com/in/dylanquinn",
};

export const fallbackData = {
  featuredProjects,
  projects,
  shorts,
  settings,
};
