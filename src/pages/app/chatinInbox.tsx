import { Seo } from '@/components/common/Seo'
import { Chat } from '../../components/Chat/Chat'

export default function ChatinInbox() {
  return (
    <>
      <Seo title='chat' />

      <main className='h-screen pl-16 flex justify-center bg-stone-500'>
        <Chat />
      </main>
    </>
  )
}
