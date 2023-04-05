import { useState } from "react"
import { useCharacterStore } from "../store"

function ControlBar() {
  const [open, setOpen] = useState(false)

  const { initialCharacters } = useCharacterStore(state => state)

  const setCharacters = useCharacterStore(state => state.setCharacters)

  const filterCharacters = (filter: string) => {
    const filteredCharacters = initialCharacters.filter(character => character.name.toLowerCase().includes(filter.toLowerCase()))
    setCharacters(filteredCharacters)
  }

  return (
    <div className="flex relative items-center gap-2 md:w-2/4 w-[461px] mx-auto mt-4">
      <input type="text" placeholder="Escribe el nombre..." className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"  onChange={(e) => filterCharacters(e.target.value)}/>
      <button className="p-2 bg-white hover:bg-gray-200 border rounded-md border-gray-300" onClick={() => setOpen(!open)}>Filtrar</button>
      <dialog open={open} className="absolute p-2 bg-white border -right-80 md:-right-[95%] top-12 z-20 rounded-md border-gray-300">
        <div className="flex flex-row gap-2">
          <input type="checkbox" name="filter" id="filter1" />
          <label htmlFor="filter1">Vivo</label>
        </div>
        <div className="flex flex-row gap-2">
          <input type="checkbox" name="filter" id="filter2" />
          <label htmlFor="filter2">Muerto</label>
        </div>
        <div className="flex flex-row gap-2">
          <input type="checkbox" name="filter" id="filter3" />
          <label htmlFor="filter3">Hombre</label>
        </div>
        <div className="flex flex-row gap-2">
          <input type="checkbox" name="filter" id="filter4" />
          <label htmlFor="filter4">Mujer</label>
        </div>
      </dialog>
    </div>
  )
}

export default ControlBar