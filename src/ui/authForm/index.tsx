'use client'

import Form from 'next/form'
import { Field } from './field'
import { IFormFieldProps, IAuthFormProps, FormValues } from './types'
import { SubmitButton } from './submitButton'
import { AuthFormLink } from './link'
import { Path, useForm, UseFormRegister, SubmitHandler } from 'react-hook-form'

export const AuthForm: React.FC<IAuthFormProps> = ({ fields, action, title, linkText, linkHref, linkLabel }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <Form
      className="mx-auto my-auto sm:w-[400px] w-[80%] flex flex-col gap-6 p-10 rounded-md bg-white/20"
      action={action}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl font-bold text-center">{title}</h1>

      {fields.map((field) => (
        <Field key={field.name} register={register} {...field} error={errors[field.name]?.message} />
      ))}

      <SubmitButton label="Submit" />
      <AuthFormLink text={linkText} href={linkHref} label={linkLabel} />
    </Form>
  )
}
