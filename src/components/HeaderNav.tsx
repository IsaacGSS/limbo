import Users from '../../json/usuarios.json'
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
  // userPosition:
  // 0 = isaac
  // 1 = Guilherme
  // 2 = Matheus

  const userPosition = 1

  const User = {
    name: Users.user[userPosition].name,
    surname: Users.user[userPosition].surname,
    nickname: Users.user[userPosition].nickname,
    urlGithub: Users.user[userPosition].urlGithub,
    profilePicture: `${Users.user[userPosition].urlGithub}.png`
  }

  return (
    <>
      <header
        id='navManuHeader'
        className='flex flex-col absolute left-0 bg-stone-900 w-16 h-screen text-white text-center items-center justify-between py-5'
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

          <UserPerfil
            profilePicture={User.profilePicture}
            nickname={User.nickname}
          />
        </div>
      </header>
    </>
  )
}
// rectangle-group
