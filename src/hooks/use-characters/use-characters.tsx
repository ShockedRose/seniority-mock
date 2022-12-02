import { useEffect, useState } from 'react'
import CharacterService from '../../services/character/character.service'
import { Character } from '../../utils/interfaces/character'

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([])

  const getCharacters = async () => {
    try {
      const response = await CharacterService.getCharacters()
      setCharacters(response.results)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return {
    characters
  }
}
