import { renderHook } from '@testing-library/react-hooks'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Player } from '../../services/player/player.service'
import { usePlayers } from './use-players'

const mock = new MockAdapter(axios)

const playerListMocked: Player[] = [
  {
    firstName: 'Cristiano',
    lastName: 'Ronaldo',
    attack: 50,
    defense: 80,
    idPosition: 1,
    idAuthor: 4,
    image: 'somewhere',
    skills: 20,
    id: 20
  },
  {
    firstName: 'Jhonathan',
    lastName: 'Durbis',
    attack: 80,
    defense: 40,
    idPosition: 2,
    idAuthor: 2,
    image: 'somewhere',
    skills: 10,
    id: 10
  }
]

describe('usePlayer suite', () => {
  beforeEach(() => {
    mock.onGet().reply(200, playerListMocked)
  })

  it('should render', () => {
    const { result } = renderHook(() => usePlayers())

    expect(result.current.players).toEqual([])
  })

  it('should retrieve a list of players', async () => {
    const { result, waitForNextUpdate } = renderHook(() => usePlayers())

    await waitForNextUpdate()

    expect(result.current.players[1].firstName).toEqual('Jhonathan')
  })
})
