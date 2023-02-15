export const Mensseng = ({ mensagem }: any) => {
  return (
    <>
      {mensagem && (
        <div className=' p-1.5 my-1 mx-2 rounded-tl-xl rounded-bl-xl rounded-br-xl flex flex-col items-end bg-emerald-500'>
          <p>{mensagem}</p>
        </div>
      )}
    </>
  )
}
