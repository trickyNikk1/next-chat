'use client'

import Form from 'next/form'
import { Field } from './field'
import { IAuthFormProps } from './types'
import { SubmitButton } from './submitButton'
import { AuthFormLink } from './link'

export const AuthForm: React.FC<IAuthFormProps> = ({
  fields,
  action,
  title,
  linkText,
  linkHref,
  linkLabel,
  register,
  handleSubmit,
  errors,
}) => {
  return (
    <Form
      className="mx-auto my-auto sm:w-[400px] w-[80%] flex flex-col gap-6 p-10 rounded-md bg-white/20"
      action={action}
      onSubmit={handleSubmit}
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
