import { Seo } from '@/components/Seo'
import Image from 'next/image'
import {
  ChatBubbleOvalLeftEllipsisIcon,
  UsersIcon,
  Squares2X2Icon,
  CalendarDaysIcon,
  VideoCameraIcon,
  Cog6ToothIcon,
  BellIcon
} from '@heroicons/react/24/outline'

const perfil = 'https://github.com/IsaacGSS.png'

export default function Home() {
  return (
    <>
      <Seo title='hello' />
      <header
        id='navManuHeader'
        className='flex flex-col bg-stone-900 w-16 h-screen text-white text-center items-center justify-between py-10'
      >
        <div id='mainHeader' className='flex flex-col gap-12'>
          <p id='iconL' className='font-roboto text-6xl text-indigo-500'>
            L
          </p>
          <div id='menuHeader' className='flex flex-col items-center  gap-6'>
            <Squares2X2Icon className='w-16 h-6 hover:text-indigo-600 hover:border-l-2 border-indigo-600' />
            <VideoCameraIcon className='w-16 h-6 hover:text-indigo-600 hover:border-l-2 border-indigo-600' />
            <ChatBubbleOvalLeftEllipsisIcon className='w-16 h-6 hover:text-indigo-600 hover:border-l-2 border-indigo-600' />
            <UsersIcon className='w-16 h-6 hover:text-indigo-600 hover:border-l-2 border-indigo-600' />
            <CalendarDaysIcon className='w-16 h-6 hover:text-indigo-600 hover:border-l-2 border-indigo-600' />
          </div>
        </div>

        <div id='perfilHeader' className='flex flex-col items-center gap-12'>
          <div className='flex flex-col items-center gap-6'>
            <BellIcon className='w-16 h-6 hover:text-indigo-600 hover:border-l-2 border-indigo-600' />
            <Cog6ToothIcon className='w-16 h-6 hover:text-indigo-600 hover:border-l-2 border-indigo-600' />
          </div>

          <div className='w-10 h-10 rounded-full bg-white'>
            <Image
              className='w-10 h-10 rounded-full bg-white'
              src={perfil}
              width={40}
              height={40}
              unoptimized
              alt='foto de perfil'
            />
          </div>
        </div>
      </header>
    </>
  )
}
// rectangle-group
