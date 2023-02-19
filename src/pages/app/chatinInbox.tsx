import { Seo } from '@/components/common/Seo'
import { Chat } from '../../components/Chat/Chat'
import { Inbox } from '../../components/Chat/Inbox/Inbox'

export default function ChatinInbox() {
  return (
    <>
      <Seo title='chat' />

      <main className='h-full md:pl-16 flex flex-row justify-center bg-stone-500'>
        <Inbox />
        <Chat />
      </main>
    </>
  )
}
