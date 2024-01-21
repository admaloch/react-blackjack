import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { QuitIconWithPopper } from "../UI/icons/QuitIconWithPopper";
import { RootState } from "../../store/store";
import { addInactivePlayers } from "../../store/inactive-players/InactivePlayersSlice";
import { resetPlayersArr } from "../../store/player-arr/playersArrSlice";
import { updateIsMenuShown } from "../../store/game-data/GameDataSlice";

export default function QuitGame() {
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const quitGameHandler = () => {
    dispatch(addInactivePlayers(playersArr))
    dispatch(resetPlayersArr())
    dispatch(updateIsMenuShown());
    navigate("/finalResults");
  };

  return (
    <div onClick={quitGameHandler}>
      <QuitIconWithPopper />
    </div>
  );
}
