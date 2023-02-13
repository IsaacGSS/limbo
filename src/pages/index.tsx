import { Seo } from '@/components/common/Seo'

export default function Home() {
  return (
    <>
      <Seo title='Home' />
      <div className='h-screen pl-16 flex justify-center items-center bg-stone-800'>
        <h1 className='text-5xl text-white'>Home</h1>
      </div>
    </>
  )
}
