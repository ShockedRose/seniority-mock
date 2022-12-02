import { renderHook } from '@testing-library/react-hooks'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { CharacterList, Character } from '../../utils/interfaces/character'
import { useCharacters } from './use-characters'

const axiosMock = new MockAdapter(axios)

describe('useCharacter suite', () => {
  beforeEach(() => {
    axiosMock.onGet().reply(200, mockedCharacterList)
  })
  const mockedCharacter: Character = {
    id: 1,
    name: 'Rick',
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
    image: 'imgur',
    location: {
      name: 'the moon',
      url: 'top secret'
    }
  }

  const mockedCharacterList: Partial<CharacterList> = {
    results: [mockedCharacter]
  }

  it('should render', () => {
    const { result } = renderHook(() => useCharacters())

    expect(result.current.characters).toEqual([])
  })

  it('should retrieve a list of rick and morty characters', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCharacters())

    await waitForNextUpdate()

    expect(result.current.characters[0].name).toEqual('Rick')
  })
})
