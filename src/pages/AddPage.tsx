import { useState } from "react"
import { createCharacter } from "../services/characters";

function AddPage() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    birthdate: "",
    work: "",
    otherWork: "",
    status: "",
    gender: "",
    height: "",
    nicknames: "",
    catchphrases: "",
    actor: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // if (!formData.name || !formData.status) {
    //   alert("El nombre y el estado son obligatorios")
    //   return
    // }

    createCharacter(formData).then((r) => {
      console.log(r)
      alert("Personaje añadido correctamente")
    }).catch((e) => {
      console.error(e)
      alert("Ha ocurrido un error")
    })
  }

  return (
    <section className="flex flex-col gap-2 md:mx-28 mx-6 mt-6">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold">Añadir personaje</h1>
        <p className="text-gray-500">Añade un personaje a la API.</p>
      </header>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">*Nombre:</label>
          <input className="p-2 rounded-md border bg-white" type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="image">Imagen:</label>
          <input className="p-2 rounded-md border bg-white" type="file" name="image" id="image" value={formData.image} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="birthdate">Fecha de Nacimiento:</label>
          <input className="p-2 rounded-md border bg-white" type="text" name="birthdate" id="birthdate" value={formData.birthdate} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="work">Ocupación:</label>
          <input className="p-2 rounded-md border bg-white" type="text" name="work" id="work" placeholder="Separar por coma" value={formData.work} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="otherWork">Otra ocupación:</label>
          <input className="p-2 rounded-md border bg-white" type="text" name="otherWork" id="otherWork" placeholder="Separar por coma" value={formData.otherWork} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="status">*Estado:</label>
          <select className="p-2 rounded-md border bg-white" name="status" id="status" value={formData.status} onChange={handleChange}>
            <option value="VIVO">Vivo</option>
            <option value="MUERTO">Muerto</option>
            <option value="LUCHITO">Luchito</option>
            <option value="DESCONOCIDO">Desconocido</option>
            <option value="DESAPARECIDO">Desaparecido</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="gender">*Género:</label>
          <select className="p-2 rounded-md border bg-white" name="gender" id="gender" value={formData.gender} onChange={handleChange}>
            <option value="HOMBRE">Hombre</option>
            <option value="MUJER">Mujer</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="height">Altura:</label>
          <input className="p-2 rounded-md border bg-white" type="text" name="height" id="height" placeholder="166" value={formData.height} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="nicknames">Apodos:</label>
          <input className="p-2 rounded-md border bg-white" type="text" name="nicknames" id="nicknames" placeholder="Separar por coma" value={formData.nicknames} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="catchphrases">Frases:</label>
          <input className="p-2 rounded-md border bg-white" type="text" name="catchphrases" id="catchphrases" placeholder="Separar por coma" value={formData.catchphrases} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="actor">Actor:</label>
          <input className="p-2 rounded-md border bg-white" type="text" name="actor" id="actor" placeholder="Separar por coma" value={formData.actor} onChange={handleChange} />
        </div>
        <button className="p-2 rounded-md bg-blue-500 hover:bg-blue-600 mt-4 text-white font-semibold" type="submit">Añadir</button>
      </form>
    </section>
  )
}

export default AddPage