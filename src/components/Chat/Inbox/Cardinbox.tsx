import Image from 'next/image'
import Link from 'next/link'
export const Cardinbox = ({ name, profilePicture, link }: any) => {
  return (
    <>
      {name && (
        <li className='mx-1.5 px-2'>
          <Link href={link} target='_blank'>
            <div className='flex flex-row gap-2 py-3'>
              <Image
                className='w-10 rounded-full'
                src={profilePicture + '.png'}
                alt={name}
                width={40}
                height={40}
                unoptimized
              />
              <h3 className=''>{name}</h3>
            </div>
          </Link>
        </li>
      )}
    </>
  )
}
