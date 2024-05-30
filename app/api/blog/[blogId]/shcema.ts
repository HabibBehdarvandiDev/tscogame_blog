import { z } from "zod";

export const BlogSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  authorId: z.number(),
  approved: z.boolean(),
});

export const PartialBlogSchema = BlogSchema.partial();
