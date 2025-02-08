'use client'

import { AuthForm } from '@/ui/authForm'
import { fields } from './data'
import { signup } from '@/app/actions/auth'

export const SignupForm: React.FC = () => {
  return (
    <AuthForm
      fields={fields}
      action={signup}
      title="Sign up"
      linkText="Already have an account?"
      linkHref="/login"
      linkLabel="Login"
    />
  )
}
