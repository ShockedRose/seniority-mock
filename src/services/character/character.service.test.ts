import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import CharacterService from './character.service'
import { CharacterList, Character } from '../../utils/interfaces/character'

const axiosMock = new MockAdapter(axios)

describe('Character Service', () => {
  beforeEach(() => {
    axiosMock.onGet().reply(200, mockedCharacterList)
  })
  const mockedCharacter: Character = {
    name: 'john',
    origin: {
      name: 'the moon',
      url: 'top secret'
    },
    species: 'rat',
    status: 'death',
    type: '',
    url: '',
    gender: 'male',
    created: 'yesterday',
    episode: ['55'],
    id: 1,
    image: 'imgur',
    location: {
      name: 'the moon',
      url: 'top secret'
    }
  }

  const mockedCharacterList: Partial<CharacterList> = {
    results: [mockedCharacter]
  }

  it('should get a list of characters', async () => {
    const characters = await CharacterService.getCharacters()
    expect(characters.results).toBeInstanceOf(Array)
    expect(characters.results[0]).toEqual(mockedCharacter)
  })
})
