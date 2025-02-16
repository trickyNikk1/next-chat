'use client'

import { useParams } from 'next/navigation'
import { Chat } from '@/components/chat'
export default function ChatPage({ params }: { params: { id: string } }) {
  const { id } = useParams()
  return <Chat />
}
