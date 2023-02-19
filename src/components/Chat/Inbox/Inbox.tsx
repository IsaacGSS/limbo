import Users from 'json/usuarios.json'
import { userPosition } from '../../../api/Users'
import { Cardinbox } from './Cardinbox'
import { useEffect, useState } from 'react'
import {
  MagnifyingGlassIcon,
  PencilSquareIcon
} from '@heroicons/react/24/outline'

export const Inbox = () => {
  const Messages = [
    ...Users.user.slice(0, userPosition),
    ...Users.user.slice(userPosition + 1)
  ]
  const [profileMessages, setProfileMessages] = useState<any>([])

  useEffect(() => {
    setProfileMessages(Messages)
  }, [])

  return (
    <section className=' hidden md:flex flex-col gap-4 min-h-screen md:w-1/3 p-1 bg-stone-800 bg-opacity-90 text-white border-r-2 border-stone-600'>
      <div className='flex flex-row justify-between mx-2 my-5'>
        <h2 className='text-xl font-medium hidden md:block'>Inbox</h2>
        <span className='flex gap-2'>
          <MagnifyingGlassIcon className='w-5' />
          <PencilSquareIcon className='w-5' />
        </span>
      </div>

      {/* inclusao de funcao de usuarios e grupos */}
      {/* <div>
        </div> */}

      <ul className='flex flex-col gap'>
        {profileMessages.map((e: any, key: any) => (
          <Cardinbox
            key={key}
            link={e.url.Github}
            name={e.name}
            profilePicture={e.url.Github}
          />
        ))}
      </ul>
    </section>
  )
}
