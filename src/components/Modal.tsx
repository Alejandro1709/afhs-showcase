import { useState } from "react"
import useModal from "../hooks/useModal"
import { handleLogin } from "../services/auth"

function Modal() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { isModalOpen, closeModal } = useModal()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    handleLogin(email, password).then(() => {
      console.log('Done')
      setLoading(false)

      return closeModal()
    }).catch((e) => {
      console.error(e)
      setError(e.message)
    })
  };

  return (
    <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-30">
      <dialog open={isModalOpen} className="bg-white p-4 rounded-md">
        <h1 className="text-2xl font-semibold">Iniciar sesión</h1>
        {error && <p className="text-red-500">{error}</p>}
        {loading && <p className="text-blue-500">Cargando...</p>}
        <form className="flex flex-col gap-2 mt-2" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input className="border p-2" type="email" name="email" id="email" placeholder="hola@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input className="border p-2" type="password" name="password" id="password" placeholder="******" required value={password} minLength={6} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button disabled={loading} className="bg-blue-400 p-2 rounded-md w-full text-white mt-4 hover:bg-blue-500">Iniciar Sessión</button>
          <button type="button" className="bg-red-400 p-2 rounded-md w-full text-white mt-1 hover:bg-red-500" onClick={closeModal}>Cancelar</button>
        </form>
      </dialog>
    </div>
  )
}

export default Modal