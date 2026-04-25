import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Display Name",
      type: "string",
      initialValue: "Dylan Quinn",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline / Title",
      description: "Shown under the name on the homepage.",
      type: "string",
      initialValue: "Sports Media Director & Cinematographer",
    }),
    defineField({
      name: "heroSubcopy",
      title: "Hero Subcopy",
      description: "Optional short blurb shown beneath the tagline.",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "aboutPortrait",
      title: "About Page Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "aboutBio",
      title: "About Bio",
      description:
        "Plain text. Press Enter twice to start a new paragraph.",
      type: "text",
      rows: 8,
    }),
    defineField({
      name: "selectedClients",
      title: "Selected Clients / Outlets",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    }),
    defineField({
      name: "instagramHandle",
      title: "Instagram Handle",
      description: "Without the @.",
      type: "string",
    }),
    defineField({
      name: "tiktokHandle",
      title: "TikTok Handle",
      description: "Without the @.",
      type: "string",
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube Channel URL",
      type: "url",
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
