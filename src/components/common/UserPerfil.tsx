import Image from 'next/image'
import { iUsuarioPerfil } from 'types/interface'

export const UserPerfil = ({ nickname, profilePicture }: iUsuarioPerfil) => {
  return (
    <>
      {nickname || profilePicture ? (
        <div className='w-full flex flex-col gap-3 rounded-full text-center'>
          <Image
            title={nickname}
            className='w-10 h-10 m-auto rounded-full bg-white'
            src={profilePicture ? profilePicture : ''}
            width={40}
            height={40}
            unoptimized
            alt='foto de perfil'
          />
          <p className='text-xs text-center break-words '>{nickname}</p>
        </div>
      ) : (
        <div>
          <div className='w-10 h-10 flex gap-1 rounded-full bg-white m-auto'></div>
          <p className='text-xs text-center break-words'>bem vindo</p>
        </div>
      )}
    </>
  )
}
