import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { HeaderNav } from '../components/HeaderNav'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='static'>
      <HeaderNav />
      <Component {...pageProps} />
    </div>
  )
}
