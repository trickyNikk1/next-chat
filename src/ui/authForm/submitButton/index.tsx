interface ISubmitButtonProps {
  label: string
}

export const SubmitButton: React.FC<ISubmitButtonProps> = ({ label }) => {
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 mt-4 transition-colors duration-500"
      type="submit"
    >
      {label}
    </button>
  )
}
