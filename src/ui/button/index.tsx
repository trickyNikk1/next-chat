interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 transition-colors duration-300 "
      {...props}
    >
      {children}
    </button>
  )
}
