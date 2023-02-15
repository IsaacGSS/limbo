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

          <hr className='w-8 h-1' />

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
