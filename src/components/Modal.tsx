function Modal() {
  return (
    <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-30">
      <dialog open className="bg-white p-4 rounded-md">
        <h1 className="text-2xl font-semibold">Iniciar sesión</h1>
        <form className="flex flex-col gap-2 mt-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input className="border p-2" type="email" name="email" id="email" placeholder="hola@email.com" required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input className="border p-2" type="password" name="password" id="password" placeholder="******" required />
          </div>
          <button className="bg-blue-400 p-2 rounded-md w-full text-white mt-4 hover:bg-blue-500">Iniciar Sessión</button>
          <button type="button" className="bg-red-400 p-2 rounded-md w-full text-white mt-1 hover:bg-red-500">Cancelar</button>
        </form>
      </dialog>
    </div>
  )
}

export default Modal