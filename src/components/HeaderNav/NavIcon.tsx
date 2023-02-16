import Link from 'next/link'

import {
  ChatBubbleOvalLeftEllipsisIcon,
  UsersIcon,
  Squares2X2Icon,
  CalendarDaysIcon,
  VideoCameraIcon,
  Cog6ToothIcon,
  BellIcon
} from '@heroicons/react/24/outline'

export const HomeIcon = () => {
  return (
    <Link href='/'>
      <Squares2X2Icon
        // fill=''
        className='w-16 h-6 md:hover:fill-none hover:fill-indigo-600 hover:mr-1 hover:text-indigo-600 hover:border-l-4 border-indigo-600 '
      />
    </Link>
  )
}

export const VideoChatIcon = () => {
  return (
    <Link href='/'>
      <VideoCameraIcon className='w-16 h-6 md:hover:fill-none hover:fill-indigo-600 hover:mr-1 hover:text-indigo-600 hover:border-l-4 border-indigo-600' />
    </Link>
  )
}

export const ChatinboxIcon = () => {
  return (
    <Link href='/app/chatinInbox'>
      <ChatBubbleOvalLeftEllipsisIcon className='w-16 h-6 md:hover:fill-none hover:fill-indigo-600 hover:mr-1 hover:text-indigo-600 hover:border-l-4 border-indigo-600' />
    </Link>
  )
}

export const PerfiIcon = () => {
  return (
    <Link href='/'>
      <UsersIcon className='w-16 h-6 md:hover:fill-none hover:fill-indigo-600 hover:mr-1 hover:text-indigo-600 hover:border-l-4 border-indigo-600' />
    </Link>
  )
}

export const HabitosIcon = () => {
  return (
    <Link href='/'>
      <CalendarDaysIcon className='w-16 h-6 md:hover:fill-none hover:fill-indigo-600 hover:mr-1 hover:text-indigo-600 hover:border-l-4 border-indigo-600' />
    </Link>
  )
}

export const NotificationIcon = () => {
  return (
    <Link href='/'>
      <BellIcon className='w-16 h-6 md:hover:fill-none hover:fill-indigo-600 hover:mr-1 hover:text-indigo-600 hover:border-l-4 border-indigo-600' />
    </Link>
  )
}

export const ConfigurationIcon = () => {
  return (
    <Link href='/'>
      <Cog6ToothIcon className='w-16 h-6 md:hover:fill-none  hover:fill-indigo-600 hover:mr-1 hover:text-indigo-600 hover:border-l-4 border-indigo-600' />
    </Link>
  )
}
