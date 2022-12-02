import './app.scss'
import { APP_CONSTANTS } from './constants/app-constants'
import { Header } from './components/organisms/header/header'
import { useCharacters } from './hooks/use-characters/use-characters'
import CharacterCard from './components/molecules/character-card/character-card'

function App() {
  const { characters } = useCharacters()
  return (
    <div className="app">
      <Header title={APP_CONSTANTS.APP_TITLE} />
      {characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />
      })}
    </div>
  )
}

export default App
