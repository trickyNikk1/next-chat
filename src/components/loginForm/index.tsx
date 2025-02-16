'use client'

import { AuthForm } from '@/ui/authForm'
import { fields } from './data'
import { login } from '@/app/actions/auth'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormValues } from '@/ui/authForm/types'
import axios from 'axios'

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await axios.post('/api/auth/login', data)
      console.log('Login successful: ', response)
    } catch (error) {
      console.error('Login failed: ', error)
    }
  }

  return (
    <AuthForm
      fields={fields}
      action={login}
      title="Login"
      linkText="Don't have an account?"
      linkHref="/signup"
      linkLabel="Sign up"
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
      errors={errors}
    />
  )
}
