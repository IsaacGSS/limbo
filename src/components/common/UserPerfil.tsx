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
          <div className='w-full flex flex-col gap-3 text-center invisible md:visible'>
            <Image
              className='w-11 h-11 m-auto rounded-xl bg-white'
              title={nickname}
              src={profilePicture ? profilePicture : ''}
              width={40}
              height={40}
              unoptimized
              alt='foto de perfil'
            />
          </div>
        </Link>
      ) : (
        <div>
          <div className='w-11 h-11 flex flex-col text-center invisible md:visible mb-2 rounded-xl bg-white m-auto'></div>
          <p className='w-16 text-xs text-center break-words'>bem vindo</p>
        </div>
      )}
    </>
  )
}
