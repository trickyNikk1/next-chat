import { ChatList } from '@/components/chatList'

export default function ChatsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid grid-cols-[2fr_3fr] h-screen max-w-screen-lg mx-auto bg-gray-900">
      <div className="grid grid-rows-[auto_1fr] border-r border-gray-200">
        <h1 className="h-16 text-2xl font-bold p-4">Next chat</h1>
        <ChatList />
      </div>
      <div className="h-full">{children}</div>
    </main>
  )
}
