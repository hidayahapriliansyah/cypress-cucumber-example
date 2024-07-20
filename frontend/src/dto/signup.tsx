import z from 'zod'

export const signupRequestSchema = z.object({
  email: z.string().email(),
  name: z.string()
    .min(3, 'Name must contain at least 3 character(s)')
    .max(50, 'Name must contain at most 50 character(s)')
    .trim()
})

export type SignupRequest = z.infer<typeof signupRequestSchema>