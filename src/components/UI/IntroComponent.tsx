import { useDealerObjContext } from "../../store/dealer-context/DealerContextUtils";
import { usePlayersArrContext } from "../../store/player-context/PlayerContextUtils";


export default function IntroComponent() {
  const { playersArr } = usePlayersArrContext();
  const { dealerObj } = useDealerObjContext();

  console.log(playersArr);
  console.log(dealerObj);

  return <div>Hello</div>;
}