import Link from 'next/link'
import { IAuthFormLinkProps } from '../types'

export const AuthFormLink: React.FC<IAuthFormLinkProps> = ({ href, label, text }) => {
  return (
    <span className="text-sm text-gray-500 text-center">
      {text}{' '}
      <Link className="text-blue-500" href={href}>
        {label}
      </Link>
    </span>
  )
}
