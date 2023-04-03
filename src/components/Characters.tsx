import { useQuery } from "@tanstack/react-query"
import { getCharacters } from "../services/characters"
import Character from "./Character"
import type ICharacter from "../types/character"

function Characters() {
  //const queryClient = useQueryClient()

  const query = useQuery({ queryKey: ["characters"], queryFn: getCharacters })

  return (
    <>
      {query.data?.map((character: ICharacter) => (
        <Character key={character.id} character={character} />
      ))}
    </>
  )
}

export default Characters