import Character from "./Character"
import { useCharacterStore } from "../store"
import type ICharacter from "../types/character"

function Characters() {
  const characters = useCharacterStore(state => state.characters)

  return (
    <>
      {characters.map((character: ICharacter) => (
        <Character key={character.name} character={character} />
      ))}
    </>
  )
}

export default Characters