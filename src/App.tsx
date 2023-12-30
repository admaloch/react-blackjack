
import './App.css'
import GameIntro from './components/game-intro/GameIntro'
import AddPlayers from './components/add-players/AddPlayers'
import { CssBaseline } from '@mui/material'

// import { useSelector } from "react-redux";
// import { RootState } from "../store/store";

// const playerHand = useSelector((state: RootState) => state.playersArr[0])
// // const dispatch = useDispatch();

function App() {

  return (
    <>
        <CssBaseline />
        {/* <GameIntro /> */}
        <AddPlayers/>
    </>
  )
}

export default App
