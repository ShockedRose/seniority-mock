import { FC } from 'react'
import { Character } from '../../../utils/interfaces/character'
import CharacterCard from '../../molecules/character-card/character-card'
import './card-grid.scss'

export interface CardGridProps {
  characters: Character[]
}

const CardGrid: FC<CardGridProps> = ({ characters }) => {
  return (
    <section className={'card-grid'}>
      {characters.map((character) => {
        return <CharacterCard character={character} key={character.id} />
      })}
    </section>
  )
}

export default CardGrid
