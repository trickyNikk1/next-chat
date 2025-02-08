export const fields = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Email',
    validationOptions: {
      required: 'Email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Invalid email address',
        required: true,
        maxLength: {
          value: 255,
          message: 'Email must be less than 255 characters',
        },
      },
    },
  },

  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Password',
    validationOptions: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must be at least 8 characters long',
      },
      maxLength: {
        value: 64,
        message: 'Password must be less than 64 characters',
      },
    },
  },
]
