import { Button } from '@/ui/button'

export const ChatInput = () => {
  return (
    <form className="grid grid-cols-[5fr_1fr] gap-2 p-4 pb-8">
      <input className="rounded-md p-2 text-gray-950 focus:outline-none" type="text" name="message" />
      <Button type="submit">Send</Button>
    </form>
  )
}
