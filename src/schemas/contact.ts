import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter at least 2 characters.")
    .max(50, "Please keep your name under 50 characters."),
  email: z
    .string()
    .email("Please enter a valid email address.")
    .max(100, "Please keep your email under 100 characters."),
  subject: z
    .string()
    .min(4, "Please add a short subject.")
    .max(100, "Please keep the subject under 100 characters."),
  message: z
    .string()
    .min(10, "Please share a bit more detail.")
    .max(2000, "Please keep the message under 2000 characters."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
