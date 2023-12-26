import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function GameIntro() {

  const playerHand = useSelector((state: RootState) => state.playersArr[0])
  // const dispatch = useDispatch();

  console.log(playerHand)

  return <div>Hello</div>;
}