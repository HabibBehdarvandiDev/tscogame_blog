import { z } from "zod";

const LoginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export { LoginSchema };
