import { CssBaseline } from '@mui/material'
import './App.css'
import GameIntro from './components/game-intro/GameIntro'


// import { useSelector } from "react-redux";
// import { RootState } from "../store/store";

// const playerHand = useSelector((state: RootState) => state.playersArr[0])
// // const dispatch = useDispatch();

function App() {

  return (
    <>
        <CssBaseline />
        <GameIntro />
    </>
  )
}

export default App
