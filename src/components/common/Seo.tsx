import Head from 'next/head'
import { iSeo } from 'types/interface'

export const Seo = ({ title, description, favicon }: iSeo) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link
        rel='shortcut icon'
        href={favicon ? favicon : 'letter-l.svg'}
        type='image/x-icon'
      />
    </Head>
  )
}
