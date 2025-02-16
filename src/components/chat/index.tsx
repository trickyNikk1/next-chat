import { Button } from '@/ui/button'
import { ChatInput } from '@/components/chat/chatInput'
import { Messages } from '@/components/chat/messages'
import Form from 'next/form'

const chatDataMock = {
  name: 'John Doe',
  messages: [
    { id: 1, content: 'Hello, how are you?', isUser: true, createdAt: new Date() },
    { id: 2, content: 'I am fine, thank you!', isUser: false, createdAt: new Date() },
  ],
}

export const Chat = () => {
  const { name, messages } = chatDataMock
  return (
    <div className=" h-full grid grid-rows-[4rem_auto_6rem]">
      <div className="grid grid-cols-[1fr_auto] border-b border-gray-200">
        <h3 className="text-xl font-bold p-4">{name}</h3>
        <div className="flex gap-2 items-center p-4">
          <Button>Call</Button>
          <Button>Video</Button>
        </div>
      </div>
      <Messages messages={messages} />
      <ChatInput />
    </div>
  )
}
