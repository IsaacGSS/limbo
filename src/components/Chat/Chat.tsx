import { useState, useEffect, useRef } from 'react'
import { Mensseng } from './mensseng'
import {
  MicrophoneIcon,
  PhotoIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline'

export const Chat = () => {
  const dateToday = new Date()

  let setHr = dateToday.getHours().toString()
  let setMin = dateToday.getMinutes().toString()

  let hr = setHr.length == 1 ? '0' + setHr : setHr
  let min = setMin.length == 1 ? '0' + setMin : setMin

  const [mensagem, setMensagem] = useState<any>()
  const [chatMensagem, setChatMensagem] = useState<any>([])
  const [time, setTime] = useState<any>([])

  let valor = 0

  const messagesContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setChatMensagem(chatMensagem)
    setTime(time)

    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [mensagem])

  const sendByEnter = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      functionForShipping()
    }
  }
  const functionForShipping = () => {
    mensagem == !mensagem ? mensagem : chatMensagem.push(mensagem),
      time.push({ hr, min })

    setMensagem('')
  }

  return (
    <section className='relative h-screen w-screen flex flex-col md:justify-end justify-between bg-stone-500'>
      <div
        ref={messagesContainerRef}
        className='flex flex-col items-end  overflow-y-auto pt-3 pb-20'
      >
        {chatMensagem.length > 0 &&
          chatMensagem.map((e: any, key: any) => (
            <Mensseng key={key} mensagem={e} time={time} i={valor++} />
          ))}
      </div>

      <div className='bottom-0 absolute right-0 w-full flex justify-center overflow-y-auto scroll-smooth'>
        <div className='flex flex-row justify-between items-center  w-11/12 h-16 m-4 p-2 bg-stone-800 rounded-lg shadow-lg shadow-neutral-700'>
          <textarea
            className='resize-none h-auto outline-none w-10/12  mx-2 bg-transparent placeholder:italic text-stone-50'
            name=''
            id='inputMensage'
            rows={1}
            placeholder='menssage...'
            value={mensagem}
            autoComplete='on'
            autoCorrect='on'
            onKeyDown={sendByEnter}
            onChange={e => {
              setMensagem(e.target.value)
            }}
          ></textarea>
          {/* <input
            className='outline-none w-10/12 min-h-14 mx-2 bg-transparent placeholder:italic text-stone-50 '
            placeholder='menssage...'
            type='text'
            value={mensagem}
            id=''
          /> */}
          <div className='flex flex-row justify-center items-center '>
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
                functionForShipping()
              }}
            >
              <PaperAirplaneIcon className='text-white w-6 -rotate-45 m-1.5' />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
