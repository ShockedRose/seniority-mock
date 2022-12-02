import { render, screen } from '@testing-library/react'
import { Character } from '../../../utils/interfaces/character'
import CardGrid from './card-grid'

describe('CardGrid organism', () => {
  const mockedCharacterList: Character[] = [
    {
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
  ]
  it('should render', () => {
    render(<CardGrid characters={mockedCharacterList} />)

    const characterName = screen.getByText('Rick')

    expect(characterName).toBeInTheDocument()
  })

})
