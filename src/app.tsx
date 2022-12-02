import './app.scss'
import { APP_CONSTANTS } from './constants/app-constants'
import { Header } from './components/organisms/header/header'
import { useCharacters } from './hooks/use-characters/use-characters'
import CharacterCard from './components/molecules/character-card/character-card'
import CardGrid from './components/organisms/card-grid/card-grid'

function App() {
  const { characters } = useCharacters()
  return (
    <div className="app">
      <Header title={APP_CONSTANTS.APP_TITLE} />
      <CardGrid characters={characters} />
    </div>
  )
}

export default App
