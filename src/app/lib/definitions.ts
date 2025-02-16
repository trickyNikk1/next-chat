import { z } from 'zod'

export const SignupFormSchema = z.object({
  name: z.string().min(1, { message: 'Name must be at least 1 character.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
})

export type FormState = {
  errors?: {
    name?: string[]
    email?: string[]
    password?: string[]
  }
  message?: string | null
}

export type FieldErrors = {
  name?: string[]
  email?: string[]
  password?: string[]
}
