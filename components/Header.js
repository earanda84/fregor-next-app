import ModalLogin from "./Modal"

export default function Header() {
  return (
    <>
    <div className="header">
      <header className="hidden md:grid md:bg-lime-700/30 md:px-20 py-1">

        <p onClick={click} className='cursor-pointer px-5 py-3 text-xl mx-auto bg-transparent border-transparent text-gray-500 hover:bg-lime-700/50 hover:text-white focus:pointer-events-auto rounded-md' >
          Ingresa a tú cuenta
        </p>

        {modalOn && <ModalLogin setModalOn={setModalOn} setChoice={setChoice} />}

      </header>
</div>
    </>
  )
}
