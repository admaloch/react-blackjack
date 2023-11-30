import { usePlayersArrContext } from "../../store/player-context/PlayerContextUtils";


export default function IntroComponent() {
  const { playersArr } = usePlayersArrContext();

  console.log(playersArr);

  return <div>Hello</div>;
}