import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function GameIntro() {



const playersInfo = useSelector((state: RootState) => state.playersArr)
const dealerInfo = useSelector((state: RootState) => state.dealerObj)
const deck = useSelector((state: RootState) => state.deck)
console.log('players info', playersInfo)
console.log('dealer info', dealerInfo)
console.log('deck', deck)



  return <div>Hello</div>;
}