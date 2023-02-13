import { User } from '../api/Users'
import { useEffect, useState } from 'react'
import { UserPerfil } from '../components/common/UserPerfil'
import {
  ChatBubbleOvalLeftEllipsisIcon,
  UsersIcon,
  Squares2X2Icon,
  CalendarDaysIcon,
  VideoCameraIcon,
  Cog6ToothIcon,
  BellIcon
} from '@heroicons/react/24/outline'

export const HeaderNav = () => {
  // Esta sendo usado o type Any para evitar descrever todo o tipo descrevendo toda Arary
  const [user, setUser] = useState<any>({})

  useEffect(() => {
    setUser(User)
  }, [])

  return (
    <>
      <header
        id='navManuHeader'
        className='w-16 flex flex-col absolute  bg-stone-900  h-screen text-white text-center items-center justify-between py-5'
      >
        <div id='mainHeader' className='flex flex-col gap-12'>
          <p id='iconL' className='font-Amita text-6xl text-indigo-500'>
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

          <UserPerfil
            profilePicture={user.profilePicture}
            nickname={user.nickname}
            urlGithub={user.urlGithub}
          />
        </div>
      </header>
    </>
  )
}
// rectangle-group
