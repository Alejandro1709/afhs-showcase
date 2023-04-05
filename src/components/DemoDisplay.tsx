import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCharacters } from '../services/characters'
import { useCharacterStore } from '../store'
import Characters from './Characters'

function DemoDisplay() {
  const query = useQuery({ queryKey: ["characters"], queryFn: getCharacters })

  const setCharacters = useCharacterStore(state => state.setCharacters)
  const setInitialCharacters = useCharacterStore(state => state.setInitialCharacters)

  useEffect(() => {
    if (query.data) {
      setCharacters(query.data)
      setInitialCharacters(query.data)
    }
  }, [query])

  return (
    <section className='flex flex-row justify-center flex-wrap w-full'>
      <Characters />
    </section>
  )
}

export default DemoDisplay