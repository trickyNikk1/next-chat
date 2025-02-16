'use client'

import { AuthForm } from '@/ui/authForm'
import { fields } from './data'
import { signup } from '@/app/actions/auth'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormValues } from '@/ui/authForm/types'
import axios from 'axios'

export const SignupForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await axios.post('/api/auth/signup', data)
      console.log('Signup successful: ', response)
    } catch (error) {
      console.error('Signup failed: ', error)
    }
  }

  return (
    <AuthForm
      fields={fields}
      action={signup}
      title="Sign up"
      linkText="Already have an account?"
      linkHref="/login"
      linkLabel="Login"
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
      errors={errors}
    />
  )
}
