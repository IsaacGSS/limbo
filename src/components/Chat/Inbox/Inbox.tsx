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
    ...Users.user.slice(userPosition + 2)
  ]
  const [profileMessages, setProfileMessages] = useState<any>([])

  useEffect(() => {
    setProfileMessages(Messages)
  }, [])

  return (
    <section className='select-none hidden md:flex flex-col gap-4 min-h-screen md:w-1/2 p-1 bg-stone-900 bg-opacity-90 text-white border-r-[3px] border-stone-700'>
      <div className='flex flex-row justify-between mx-2 my-5'>
        <h2 className='text-2xl font-medium hidden md:block'>Inbox</h2>
        <span className='flex gap-2'>
          <MagnifyingGlassIcon className='w-5' />
          <PencilSquareIcon className='w-5' />
        </span>
      </div>

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
