import { Link } from "react-router-dom"
import { useCharacterStore } from "../store"

function ControlBar() {
  const { initialCharacters } = useCharacterStore(state => state)

  const setCharacters = useCharacterStore(state => state.setCharacters)

  const filterCharacters = (filter: string) => {
    const filteredCharacters = initialCharacters.filter(character => character.name.toLowerCase().includes(filter.toLowerCase()))
    setCharacters(filteredCharacters)
  }

  return (
    <div className="flex justify-center items-center gap-2 w-[450px] md:mx-auto mt-2 md:mt-4">
      <input type="text" placeholder="Escribe el nombre..." className="w-2/4 md:w-full p-2 border border-gray-300 md:rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" onChange={(e) => filterCharacters(e.target.value)} />
      <Link to="/nuevo-personaje" className="p-2 bg-white hover:bg-gray-200 border rounded-md border-gray-300">Añadir</Link>
    </div>
  )
}

export default ControlBar