import { render, screen } from '@testing-library/react'
import CardHeader from './card-header'

describe('CardHeader Atom', () => {
  const mockedCharacter = {
    name: 'Rick',
    image: 'imgur'
  }

  it('should render', () => {
    render(<CardHeader {...mockedCharacter} />)

    const characterName = screen.getByText('Rick')

    expect(characterName).toBeInTheDocument()
  })

  it('should display the character name and image', () => {
    render(<CardHeader {...mockedCharacter} />)

    const characterName = screen.getByText('Rick')
    const characterImage = screen.getByAltText('Rick-image')

    expect(characterName).toBeInTheDocument()
    expect(characterImage).toBeInTheDocument()
  })
})
