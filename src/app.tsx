import './app.scss'
import { APP_CONSTANTS } from './constants/app-constants'
import { Header } from './components/organisms/header/header'
import { usePlayers } from './hooks/use-players/use-players'

function App() {
  const { players } = usePlayers()
  return (
    <div className="app">
      <Header title={APP_CONSTANTS.APP_TITLE} />
      {players.map((player) => {
        return <p key={player.id}>{player.firstName}</p>
      })}
    </div>
  )
}

export default App
