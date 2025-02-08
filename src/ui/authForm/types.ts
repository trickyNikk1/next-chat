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

  action: (formData: FormData) => Promise<void>
  title: string
  linkText: string
  linkHref: string
  linkLabel: string
}

export interface IAuthFormLinkProps {
  text: string
  href: string
  label: string
}

export type FormValues = {
  [K in IFormField['name']]: string
}
