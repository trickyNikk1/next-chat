import { ChatLink } from '@/components/chatList/chatLink'
import { NewChatButton } from '@/ui/newChatButton'

export const ChatList = () => {
  return (
    <ul className="relative w-full border-r border-gray-200 h-full overflow-y-auto bg-white">
      <li>
        <ChatLink href="/chats/1" name="John Doe" lastMessage="Hello, how are you?" lastMessageDate="2021-01-01" />
      </li>
      <li className="absolute bottom-10 right-10">
        <NewChatButton />
      </li>
    </ul>
  )
}
