import Image from 'next/image'
import Link from 'next/link'
import { iUsuarioPerfil } from 'types/interface'

export const UserPerfil = ({
  nickname,
  profilePicture,
  urlGithub
}: iUsuarioPerfil) => {
  return (
    <>
      {nickname || profilePicture ? (
        <Link href={urlGithub}>
          <div className='w-full flex flex-col gap-3 text-center'>
            <Image
              className='w-11 h-11 m-auto rounded-xl bg-white'
              title={nickname}
              src={profilePicture ? profilePicture : ''}
              width={40}
              height={40}
              unoptimized
              alt='foto de perfil'
            />
            <p className='w-16 text-xs text-center break-words'>{nickname}</p>
          </div>
        </Link>
      ) : (
        <div>
          <div className='w-10 h-10 flex gap-1 rounded-full bg-white m-auto'></div>
          <p className='w-16 text-xs text-center break-words'>bem vindo</p>
        </div>
      )}
    </>
  )
}
