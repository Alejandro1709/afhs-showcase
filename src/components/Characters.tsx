import { useQuery } from "@tanstack/react-query"
import { getCharacters } from "../services/characters"
import type ICharacter from "../types/character"

function Characters() {
  //const queryClient = useQueryClient()

  const query = useQuery({ queryKey: ["characters"], queryFn: getCharacters })

  return (
    <>
      {query.data?.map((character: ICharacter) => (
        <article key={character.name} className='flex flex-col justify-center gap-1 w-[600px] md:w-[400px] p-4 cursor-pointer hover:scale-95 transition-all'>
          <header className='bg-white rounded-lg shadow-lg p-4 h-[260px]'>
            <img src={character.image} alt={character.name} className='rounded-lg h-full w-full bg-contain' draggable='false' />
          </header>
        </article>
      ))}
    </>
  )
}

export default Characters