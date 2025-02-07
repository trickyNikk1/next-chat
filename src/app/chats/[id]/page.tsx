'use client'

import { useParams } from 'next/navigation'

export default function ChatPage({ params }: { params: { id: string } }) {
  const { id } = useParams()
  return (
    <div>
      <h1>Chat page: {id}</h1>
    </div>
  )
}
