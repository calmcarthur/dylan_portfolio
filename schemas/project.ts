import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Long-Form Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      description:
        "One or two sentences. Shown on the Work page next to the thumbnail.",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(280),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail / Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      description: "e.g. Director, Editor, Cinematographer, Producer.",
      type: "string",
    }),
    defineField({
      name: "client",
      title: "Client / Outlet",
      type: "string",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (rule) => rule.min(2000).max(2100),
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      description:
        "Paste a YouTube or Vimeo URL. The site will embed it automatically.",
      type: "url",
    }),
    defineField({
      name: "externalUrl",
      title: "External Link (optional)",
      description: "If the work lives somewhere besides YouTube/Vimeo.",
      type: "url",
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      description: "Featured projects rotate through the homepage hero.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "featuredOrder",
      title: "Homepage Order",
      description:
        "Lower numbers appear first in the homepage rotation. Leave blank if not featured.",
      type: "number",
    }),
    defineField({
      name: "publishedAt",
      title: "Publish Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Featured order",
      name: "featuredOrderAsc",
      by: [
        { field: "featured", direction: "desc" },
        { field: "featuredOrder", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "client",
      media: "thumbnail",
      featured: "featured",
    },
    prepare({ title, subtitle, media, featured }) {
      return {
        title,
        subtitle: featured ? `[FEATURED] ${subtitle ?? ""}` : subtitle ?? "",
        media,
      };
    },
  },
});
