import { z } from "zod";

export const MessageSchema = z.object({
  fromUserId: z.number(),
  toUserId: z.number(),
  title: z.string(),
  message: z.string(),
});
