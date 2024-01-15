import * as z from "zod";
export const signUpValidation = z.object({
  name: z.string().min(5, { message: "Too short name" }),
  username: z.string().min(5, { message: "Too short username" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});
