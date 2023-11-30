import { CssBaseline } from '@mui/material'
import { PlayersArrProvider } from './store/player-context/PlayersArrContext'
import './App.css'
import IntroComponent from './components/UI/IntroComponent'
import { DealerObjProvider } from './store/dealer-context/DealerObjContext'

function App() {

  return (
    <PlayersArrProvider>
      <DealerObjProvider>
        <CssBaseline />
        <IntroComponent />
      </DealerObjProvider>
    </PlayersArrProvider>
  )
}

export default App
