import axios from 'axios'
import { CharacterList } from '../../utils/interfaces/character'

const API_URL = process.env.REACT_APP_API_URL as string

export default class CharacterService {
  static async getCharacters() {
    const response = await axios.get<CharacterList>(`${API_URL}/player`)
    return response.data
  }
}
