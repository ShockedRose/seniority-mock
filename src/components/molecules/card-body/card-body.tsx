import { FC } from 'react'
import { Button } from '../../atoms/button/button'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'
import './card-body.scss'

export interface CardBodyProps {
  id: number
  status: string
  species: string
  gender: string
}

const CardBody: FC<CardBodyProps> = (props) => {
  return (
    <div className="card-body">
      <div className="card-body__bottom-info">
        <div className="card-body__info-wrapper">
          <div className="card-body__info-container">
            <span>Status</span>
            <span>{props.status}</span>
          </div>
          <div className="card-body__info-container">
            <span>Species</span>
            <span>{props.species}</span>
          </div>
          <div className="card-body__info-container">
            <span>Gender</span>
            <span>{props.gender}</span>
          </div>
        </div>
        {/* <div className="card-body__buttons-wrapper">
          <Button onClick={() => addActivePlayer(id)}>
            <img className="card-body__icon" src={EditIcon} alt="delete-icon" />
          </Button>
          <Button onClick={() => deletePlayer(id)}>
            <img className="card-body__icon" src={DeleteIcon} alt="delete-icon" />
          </Button>
        </div> */}
      </div>
    </div>
  )
}

export default CardBody
