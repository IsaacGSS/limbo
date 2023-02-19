import { User } from '../../api/Users'
import { useEffect, useState } from 'react'
import { UserPerfil } from '../common/UserPerfil'

import {
  ChatinboxIcon,
  HomeIcon,
  VideoChatIcon,
  PerfiIcon,
  HabitosIcon,
  NotificationIcon,
  ConfigurationIcon
} from './NavIcon'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export const HeaderNav = () => {
  // Esta sendo usado o type Any para evitar descrever todo o tipo descrevendo toda Arary
  const [user, setUser] = useState<any>({})
  const [isActive, setIsActive] = useState(true)
  const onclick = () => setIsActive(!isActive)

  useEffect(() => {
    setUser(User)
  }, [])

  return (
    <header
      aria-hidden={isActive}
      id='navManuHeader'
      className='max-md:aria-hidden:-left-16 fixed z-10 max-md:aria-hidden:bg-transparent left-0 transition-all overflow-hidden w-16 flex  flex-col md:bg-stone-900 bg-transparent h-screen md:text-white text-slate-900 text-center items-center justify-between py-5
  '
    >
      <div onClick={onclick} id='mainHeader' className='flex flex-col gap-6'>
        <div
          id='iconL'
          className='font-Amita text-6xl text-indigo-500 invisible md:visible'
        >
          L
        </div>

        {isActive ? (
          <Bars3Icon className='left-5 md:hidden top-5 w-7 h-8 text-black  fixed z-10' />
        ) : (
          <XMarkIcon className='left-5  md:hidden top-5 w-7 h-8 text-black fixed z-10' />
        )}

        <div id='menuHeader' className='flex flex-col items-center  gap-6'>
          <HomeIcon />
          <VideoChatIcon />
          <ChatinboxIcon />
          <PerfiIcon />
          <HabitosIcon />
        </div>
      </div>

      <div id='perfilHeader' className='flex flex-col items-center gap-8'>
        <div className='flex flex-col items-center gap-6'>
          <NotificationIcon />
          <ConfigurationIcon />
        </div>

        <hr className='w-8 h-1 hidden md:block' />

        <UserPerfil
          profilePicture={user.profilePicture}
          nickname={user.nickname}
          urlGithub={user.urlGithub}
        />
      </div>
    </header>
  )
}
