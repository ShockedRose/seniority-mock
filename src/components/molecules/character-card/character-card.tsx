import { FC } from 'react'
import CardHeader from '../../atoms/card-header/card-header'
import CardBody from '../card-body/card-body'
import { Character } from '../../../utils/interfaces/character'

interface CharacterCardProps {
  character: Character
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="character-card">
      <CardHeader {...character} />
      <CardBody {...character} />
    </div>
  )
}

export default CharacterCard
