import { defineField, defineType } from "sanity";

export const short = defineType({
  name: "short",
  title: "Short / Social Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Caption / Title",
      description: "Short caption shown below the video card.",
      type: "string",
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "platform",
      title: "Platform",
      type: "string",
      options: {
        list: [
          { title: "Instagram", value: "instagram" },
          { title: "TikTok", value: "tiktok" },
          { title: "YouTube Shorts", value: "youtube" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "postUrl",
      title: "Public Post URL",
      description:
        "The full URL of the Instagram, TikTok, or YouTube Shorts post.",
      type: "url",
      validation: (rule) =>
        rule.required().uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail (vertical)",
      description:
        "Best in 9:16 portrait. Used as the card preview before the embed loads.",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "handle",
      title: "Handle / Account",
      description: "Optional. Defaults to Dylan's handle if blank.",
      type: "string",
    }),
    defineField({
      name: "publishedAt",
      title: "Publish Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      description:
        "Optional. Featured shorts may appear in the homepage rotation.",
      type: "boolean",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      platform: "platform",
      media: "thumbnail",
    },
    prepare({ title, platform, media }) {
      return {
        title,
        subtitle: platform ? platform.toUpperCase() : "",
        media,
      };
    },
  },
});
