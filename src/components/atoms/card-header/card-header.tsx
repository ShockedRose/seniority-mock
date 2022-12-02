import { FC } from 'react'
import './card-header.scss'

interface CardHeaderProps {
  image: string
  name: string
}

const CardHeader: FC<CardHeaderProps> = (props) => {
  return (
    <div className="card-header">
      <img
        role="img"
        className="card-header__image"
        src={props.image}
        alt={`${props.name}-image`}
      />
      <div className="card-header__info-wrapper">
        <span className="card-header__player-name">{props.name}</span>
      </div>
    </div>
  )
}

export default CardHeader
