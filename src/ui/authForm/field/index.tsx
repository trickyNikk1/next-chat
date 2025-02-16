import { IFormFieldProps } from '../types'

export const Field: React.FC<IFormFieldProps> = ({
  name,
  label,
  type,
  placeholder,
  validationOptions,
  register,
  error,
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <input
        className={`h-10 rounded-md p-2 text-black focus:outline-none shadow-md  transition-shadow duration-500  ${
          error
            ? 'shadow-red-500 focus:shadow-red-500 active:shadow-md active:shadow-red-500 hover:shadow-red-500'
            : 'focus:shadow-blue-500 active:shadow-blue-500 hover:shadow-blue-500'
        }`}
        type={type}
        placeholder={placeholder}
        {...register(name, validationOptions)}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  )
}
