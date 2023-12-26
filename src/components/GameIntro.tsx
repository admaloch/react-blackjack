
import { useDealerObjContext } from "../store/dealer-context/DealerContextUtils";
import { useDeckContext } from "../store/deck-context/DeckContextUtils";
import { usePlayersArrContext } from "../store/player-context/PlayerContextUtils";



export default function GameIntro() {
  const { playersArr } = usePlayersArrContext()
  const { dealerObj } = useDealerObjContext()
  const { deck } = useDeckContext()

  console.log(playersArr);
  console.log(dealerObj);
  console.log(deck);


  return <div>Hello</div>;
}