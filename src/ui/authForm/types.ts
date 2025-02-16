import { FormEventHandler } from 'react'
import { FieldErrors, RegisterOptions, UseFormRegister } from 'react-hook-form'

export interface IFormField {
  name: string
  label: string
  type: string
  placeholder: string
  validationOptions?: RegisterOptions
}

export interface IFormFieldProps extends IFormField {
  register: UseFormRegister<FormValues>
  error?: string
}

export interface IAuthFormProps {
  fields: IFormField[]
  action: NonNullable<string | ((formData: FormData) => void | Promise<void>) | undefined>
  title: string
  linkText: string
  linkHref: string
  linkLabel: string
  register: UseFormRegister<FormValues>
  handleSubmit: FormEventHandler<HTMLFormElement>
  errors: FieldErrors<FormValues>
}

export interface IAuthFormLinkProps {
  text: string
  href: string
  label: string
}

export type FormValues = {
  [K in IFormField['name']]: string
}
