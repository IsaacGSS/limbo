export const Mensseng = ({ mensagem, time, i }: any) => {
  return (
    <>
      {mensagem && (
        <div className='flex flex-col items-end mt-3 mx-2'>
          <div className='italic text-sm font-light mb-1.5 mr-0.5 text-stone-900'>
            <span>you</span>
          </div>
          <div className='max-w-sm text-sm p-2 rounded-tl-xl rounded-bl-xl rounded-br-xl flex flex-col break-all items-end bg-emerald-500'>
            <p>{mensagem}</p>
          </div>
          <div className='flex gap-0.5 text-xs font-light text-stone-700 mt-0.5 -mr-0.5'>
            <span>{time[i].hr}</span>
            <span>:</span>
            <span>{time[i].min}</span>
          </div>
        </div>
      )}
    </>
  )
}
