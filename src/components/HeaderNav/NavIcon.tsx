import Link from 'next/link'

import {
  ChatBubbleOvalLeftEllipsisIcon,
  UsersIcon,
  Squares2X2Icon,
  CalendarDaysIcon,
  VideoCameraIcon,
  Cog6ToothIcon,
  BellIcon
} from '@heroicons/react/20/solid'

export const HomeIcon = () => {
  return (
    <Link href='/'>
      <Squares2X2Icon className='w-16 h-6 border-indigo-600 text-stone-200   hover:text-stone-400 hover:p-0.5 aria-selected:border-l-4 aria-selected:text-indigo-600 aria-selected:mr-1' />
    </Link>
  )
}

export const VideoChatIcon = () => {
  return (
    <Link href='/'>
      <VideoCameraIcon className='w-16 h-6 border-indigo-600 text-stone-200   hover:text-stone-400 hover:p-0.5 aria-selected:border-l-4 aria-selected:text-indigo-600 aria-selected:mr-1' />
    </Link>
  )
}

export const ChatinboxIcon = () => {
  return (
    <Link href='/app/chatinInbox'>
      <ChatBubbleOvalLeftEllipsisIcon className='w-16 h-6 border-indigo-600 text-stone-200   hover:text-stone-400 hover:p-0.5 aria-selected:border-l-4 aria-selected:text-indigo-600 aria-selected:mr-1' />
    </Link>
  )
}

export const PerfiIcon = () => {
  return (
    <Link href='/'>
      <UsersIcon className='w-16 h-6 border-indigo-600 text-stone-200   hover:text-stone-400 hover:p-0.5 aria-selected:border-l-4 aria-selected:text-indigo-600 aria-selected:mr-1' />
    </Link>
  )
}

export const HabitosIcon = () => {
  return (
    <Link href='/'>
      <CalendarDaysIcon className='w-16 h-6 border-indigo-600 text-stone-200   hover:text-stone-400 hover:p-0.5 aria-selected:border-l-4 aria-selected:text-indigo-600 aria-selected:mr-1' />
    </Link>
  )
}

export const NotificationIcon = () => {
  return (
    <Link href='/'>
      <BellIcon className='w-16 h-6 border-indigo-600 text-stone-200   hover:text-stone-400 hover:p-0.5 aria-selected:border-l-4 aria-selected:text-indigo-600 aria-selected:mr-1' />
    </Link>
  )
}

export const ConfigurationIcon = () => {
  return (
    <Link href='/'>
      <Cog6ToothIcon className='w-16 h-6 border-indigo-600 text-stone-200   hover:text-stone-400 hover:p-0.5 aria-selected:border-l-4 aria-selected:text-indigo-600 aria-selected:mr-1' />
    </Link>
  )
}
