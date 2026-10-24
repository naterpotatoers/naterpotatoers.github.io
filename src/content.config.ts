import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const entries = (name: string) =>
  defineCollection({
    loader: glob({ pattern: "**/*.md", base: `./src/content/${name}` }),
    schema: z.object({
      title: z.string(),
      org: z.string().optional(),
      date: z.coerce.string().optional(),
      location: z.string().optional(),
      url: z.url().optional(),
      tags: z.array(z.string()).default([]),
      order: z.number(),
    }),
  });

const contact = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/contact" }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    url: z.string(),
    order: z.number(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/about" }),
  schema: z.object({
    name: z.string(),
    designation: z.string(),
    location: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  jobs: entries("jobs"),
  projects: entries("projects"),
  education: entries("education"),
  books: entries("books"),
  contact,
  about,
};
