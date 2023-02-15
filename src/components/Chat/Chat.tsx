import { useState, useEffect } from 'react'
import { Mensseng } from './mensseng'
import {
  MicrophoneIcon,
  PhotoIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline'

export const Chat = () => {
  const [mensagem, setMensagem] = useState<any>()
  const [chatMensagem, setChatMensagem] = useState<any>([])

  useEffect(() => {
    setChatMensagem(chatMensagem)
  }, [chatMensagem])

  return (
    <>
      <section className='h-screen w-full flex flex-col '>
        <div className='h-full w-full flex flex-col items-end'>
          {chatMensagem &&
            chatMensagem.map((e: any, key: any) => (
              <Mensseng key={key} mensagem={e} />
            ))}
        </div>

        <div className='w-full flex justify-center'>
          <div className='flex flex-row justify-between items-center  w-11/12 min-h-14 m-4 p-2 bg-stone-800 rounded-lg shadow-lg shadow-neutral-700'>
            <input
              className='outline-none w-10/12 min-h-14 mx-2 bg-transparent placeholder:italic text-stone-50 '
              placeholder='menssage...'
              type='text'
              value={mensagem}
              id=''
              autoComplete='on'
              autoCorrect='on'
              onChange={(e: any) => {
                setMensagem(e.target.value)
                console.log('upa')
              }}
            />
            <div className='flex flex-row justify-center items-center'>
              <button>
                <MicrophoneIcon className='text-stone-400 hover:text-stone-100 w-5' />
              </button>

              <button>
                <PhotoIcon className='text-stone-400 hover:text-stone-100 w-5' />
              </button>

              <hr className='w-px h-5 border-none bg-stone-500 rotate-180 mx-2' />

              <button
                className='rounded-full bg-indigo-700'
                onClick={() => {
                  mensagem === '' ? '' : chatMensagem.push(mensagem)
                  setMensagem('')
                }}
              >
                <PaperAirplaneIcon className='text-white w-6 -rotate-45 m-1.5' />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
