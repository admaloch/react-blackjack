import { CssBaseline } from '@mui/material'
import { PlayersArrProvider } from './store/player-context/PlayersArrContext'
import './App.css'
import IntroComponent from './components/UI/IntroComponent'

function App() {

  return (
    <PlayersArrProvider>
      <CssBaseline />
      <IntroComponent />
    </PlayersArrProvider>
  )
}

export default App
