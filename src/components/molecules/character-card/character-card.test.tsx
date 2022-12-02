import { fireEvent, render, screen } from '@testing-library/react'
import { Character } from '../../../utils/interfaces/character'
import CharacterCard from './character-card'

describe('Character card molecule', () => {
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

  it('should render', () => {
    render(<CharacterCard character={mockedCharacter} />)

    const characterName = screen.getByText('Rick')

    expect(characterName).toBeInTheDocument()
  })

  it('should display all character info', () => {
    render(<CharacterCard character={mockedCharacter} />)

    const characterName = screen.getByText('Rick')
    const characterSpecies = screen.getByText('rat')
    const characterGender = screen.getByText('male')
    const characterStatus = screen.getByText('death')

    expect(characterName).toBeInTheDocument()
  })

  //   it('should run a function on click', () => {

  //     const clickHandler = jest.fn()

  //     renderButton({ text: 'bottom text(intended joke)', onClick: clickHandler })

  //     const button = screen.getByText('bottom text(intended joke)')

  //     fireEvent.click(button)

  //     expect(clickHandler).toHaveBeenCalled()
  //   })
})
