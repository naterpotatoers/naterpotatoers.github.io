import { defineCollection, z } from "astro:content";

const entries = () =>
  defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      org: z.string().optional(),
      date: z.coerce.string().optional(),
      location: z.string().optional(),
      url: z.string().url().optional(),
      tags: z.array(z.string()).default([]),
      order: z.number(),
    }),
  });

const contact = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    url: z.string(),
    order: z.number(),
  }),
});

const about = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    designation: z.string(),
    location: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  jobs: entries(),
  projects: entries(),
  education: entries(),
  books: entries(),
  contact,
  about,
};
