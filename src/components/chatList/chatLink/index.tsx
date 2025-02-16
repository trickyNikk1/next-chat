import { Avatar } from '@/ui/avatar'
import Link from 'next/link'

type ChatLinkProps = {
  href: string
  name: string
  lastMessage: string
  lastMessageDate: string
}

export const ChatLink = ({ href, name, lastMessage, lastMessageDate }: ChatLinkProps) => {
  return (
    <Link
      href={href}
      className="sm:h-[72px] grid sm:grid-cols-[40px_auto_auto] border-b border-gray-500 gap-2 p-4 overflow-hidden hover:border-l-8 hover:border-blue-500 transition-all duration-300 focus:border-l-8 focus:border-blue-500 active:border-l-8 active:border-green-500 "
    >
      <Avatar src="" name={name} />
      <div className="flex flex-col overflow-hidden">
        <h3 className="text-gray-900 font-bold overflow-hidden text-ellipsis">{name}</h3>
        <p className="text-gray-500 text-sm text-nowrap overflow-hidden text-ellipsis">{lastMessage}</p>
      </div>
      <p className="text-gray-500 text-sm text-nowrap overflow-hidden text-ellipsis text-right">{lastMessageDate}</p>
    </Link>
  )
}
