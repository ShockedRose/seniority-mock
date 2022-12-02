import { render, screen } from '@testing-library/react'
import CardBody from './card-body'

describe('CardBody molecule', () => {
  const mockedCharacter = {
    id: 1,
    species: 'rat',
    status: 'death',
    gender: 'male'
  }

  it('should render', () => {
    render(<CardBody {...mockedCharacter} />)

    const characterSpecies = screen.getByText('rat')

    expect(characterSpecies).toBeInTheDocument()
  })

  it('should display the character species, status and gender', () => {
    render(<CardBody {...mockedCharacter} />)

    const characterSpecies = screen.getByText('rat')
    const characterStatus = screen.getByText('death')
    const characterGender = screen.getByText('male')

    expect(characterSpecies).toBeInTheDocument()
    expect(characterStatus).toBeInTheDocument()
    expect(characterGender).toBeInTheDocument()
  })
})
