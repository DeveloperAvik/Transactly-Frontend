import { z } from 'zod';

const emailSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type EmailSchema = z.infer<typeof emailSchema>;