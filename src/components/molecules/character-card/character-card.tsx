import { FC } from 'react'
import CardHeader from '../../atoms/card-header/card-header'
import CardBody from '../../atoms/card-body/card-body'

interface CharacterCardProps {
  name: string
  status: string
  species: string
  genre: string
  image: string
}

const CharacterCard: FC<CharacterCardProps> = (props) => {
  return (
    <div className="character-card">
      <CardHeader {...props} />
      <CardBody {...props} />
    </div>
  )
}

export default CharacterCard
