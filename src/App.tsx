import { CssBaseline } from '@mui/material'
import { PlayersArrProvider } from './store/player-context/PlayersArrContext'
import './App.css'
import GameIntro from './components/GameIntro'
import { DealerObjProvider } from './store/dealer-obj/dealerObjSlice'

function App() {

  return (
    <PlayersArrProvider>
      <DealerObjProvider>
        <CssBaseline />
        <GameIntro />
      </DealerObjProvider>
    </PlayersArrProvider>
  )
}

export default App
