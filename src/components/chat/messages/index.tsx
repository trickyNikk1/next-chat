import { Message } from '@/types'

export const Messages = ({ messages }: { messages: Message[] }) => {
  return (
    <ul className="h-full flex flex-col gap-4 overflow-y-auto overflow-x-hidden">
      {messages.map((message) => (
        <li className="flex flex-col gap-2 p-4 m-4" key={message.id}>
          <p
            className={`p-4 ${
              message.isUser
                ? 'text-right bg-slate-700 rounded-2xl rounded-ee-none'
                : 'text-left bg-zinc-700  rounded-2xl rounded-ss-none'
            }`}
          >
            {message.content}
          </p>
          <p className={`text-sm text-gray-500 ${message.isUser ? 'text-right' : 'text-left'}`}>
            {message.createdAt.toLocaleString()}
          </p>
        </li>
      ))}
    </ul>
  )
}
