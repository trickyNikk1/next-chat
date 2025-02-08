'use client'

import { AuthForm } from '@/ui/authForm'
import { fields } from './data'
import { login } from '@/app/actions/auth'

export const LoginForm: React.FC = () => {
  return (
    <AuthForm
      fields={fields}
      action={login}
      title="Login"
      linkText="Don't have an account?"
      linkHref="/signup"
      linkLabel="Sign up"
    />
  )
}
