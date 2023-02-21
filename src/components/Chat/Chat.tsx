import { useState, useEffect, useRef } from 'react'
import { Mensseng } from './mensseng'
import {
  MicrophoneIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
  PhotoIcon,
  DocumentIcon,
  CodeBracketIcon
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

  const [isSelected, setisSelected] = useState(false)
  const opcoesEnvioMensages = () => setisSelected(!isSelected)

  const [isCodeMessages, setisCodeMessages] = useState<any>([])
  const menssagesCode = () => {
    isCodeMessages.push('code')
    console.log(isCodeMessages)
  }

  const sendByEnter = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      functionForShipping()
    }
  }
  const functionForShipping = () => {
    mensagem == !mensagem ? '' : chatMensagem.push(mensagem.trim()),
      time.push({ hr, min })
    setisCodeMessages([])

    setMensagem([])
  }

  return (
    <section className='relative h-screen w-screen flex flex-col md:justify-end justify-between bg-stone-500'>
      <div
        ref={messagesContainerRef}
        className='flex flex-col items-end overflow-y-auto pt-3 pb-20'
      >
        {chatMensagem.length > 0 &&
          chatMensagem.map((e: any, key: any) => (
            <Mensseng
              key={key}
              mensagem={e}
              time={time}
              i={valor++}
              code={isCodeMessages}
            />
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
            spellCheck='true'
            autoCorrect='on'
            onKeyDown={sendByEnter}
            onChange={e => {
              setMensagem(e.target.value)
            }}
          ></textarea>

          <div className='flex flex-row justify-center items-center'>
            <span className='flex flex-row items-center justify-center'>
              <div
                aria-selected={isSelected}
                className='text-white fixed z-50 bottom-[68px] right-[136px] aria-selected:flex aria-selected:opacity-100 aria-selected:delay-[150ms] opacity-0  transition-all'
              >
                <div className='flex p-4 bg-blue-700 border border-blue-800 rounded-l-3xl rounded-tr-3xl'>
                  <PhotoIcon className='w-9 rounded-full p-2' />
                  <DocumentIcon className='w-9 rounded-full p-2' />
                  <CodeBracketIcon
                    onClick={menssagesCode}
                    className='w-9 rounded-full p-2'
                  />
                </div>
              </div>
              <div className='flex flex-row gap-1'>
                <span
                  onClick={opcoesEnvioMensages}
                  aria-selected={isSelected}
                  className='aria-selected:bg-blue-700 bg-transparent rounded-full'
                >
                  <PaperClipIcon className='text-stone-300 hover:text-white w-5 m-1' />
                </span>

                <span className='rounded-full active:bg-pink-500 active:text-black'>
                  <MicrophoneIcon className='text-stone-300 hover:text-white w-5 m-1' />
                </span>
              </div>
            </span>

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
