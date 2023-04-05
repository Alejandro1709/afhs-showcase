function AddPage() {
  return (
    <section className="flex flex-col gap-2 md:mx-28 mx-6 mt-6">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold">Añadir personaje</h1>
        <p className="text-gray-500">Añade un personaje a la API.</p>
      </header>
      <form className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">*Nombre:</label>
          <input className="p-2 rounded-md border bg-white" type="text" name="name" id="name" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="image">Imagen:</label>
          <input className="p-2 rounded-md border bg-white" type="file" name="image" id="image" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="birthdate">Fecha de Nacimiento:</label>
          <input className="p-2 rounded-md border bg-white" type="text" name="birthdate" id="birthdate" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="work">Ocupación:</label>
          <input className="p-2 rounded-md border bg-white" type="text" name="work" id="work" placeholder="Separar por coma" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="otherWork">Otra ocupación:</label>
          <input className="p-2 rounded-md border bg-white" type="text" name="otherWork" id="otherWork" placeholder="Separar por coma" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="status">*Estado:</label>
          <select className="p-2 rounded-md border bg-white" name="status" id="status">
            <option value="VIVO">Vivo</option>
            <option value="MUERTO">Muerto</option>
            <option value="LUCHITO">Luchito</option>
            <option value="DESCONOCIDO">Desconocido</option>
            <option value="DESAPARECIDO">Desaparecido</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="gender">*Género:</label>
          <select className="p-2 rounded-md border bg-white" name="gender" id="gender">
            <option value="HOMBRE">Hombre</option>
            <option value="MUJER">Mujer</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="height">Altura:</label>
          <input className="p-2 rounded-md border bg-white" type="text" name="height" id="height" placeholder="166" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="nicknames">Apodos:</label>
          <input className="p-2 rounded-md border bg-white" type="text" name="nicknames" id="nicknames" placeholder="Separar por coma" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="catchphrases">Frases:</label>
          <input className="p-2 rounded-md border bg-white" type="text" name="catchphrases" id="catchphrases" placeholder="Separar por coma" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="actior">Actor:</label>
          <input className="p-2 rounded-md border bg-white" type="text" name="actior" id="actior" placeholder="Separar por coma" />
        </div>
        <button className="p-2 rounded-md bg-blue-500 hover:bg-blue-600 mt-4 text-white font-semibold" type="submit">Añadir</button>
      </form>
    </section>
  )
}

export default AddPage