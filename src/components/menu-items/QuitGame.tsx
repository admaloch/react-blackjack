import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { QuitIconWithPopper } from "../UI/icons/QuitIconWithPopper";
import { RootState } from "../../store/store";
import { addInactivePlayers } from "../../store/inactive-players/InactivePlayersSlice";
import { resetPlayersArr } from "../../store/player-arr/playersArrSlice";
import { endIsGameActive } from "../../store/game-data/GameDataSlice";
import { resetDealer } from "../../store/dealer-obj/dealerObjSlice";

export default function QuitGame() {
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const { isBetRoundActive } = useSelector((state: RootState) => state.gameData);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const quitGameHandler = () => {
    if (isBetRoundActive) {
      const updatedPlayersArr = playersArr.map(player => {
        return {
          ...player,
          bank: player.beginningRoundBank,
          currBet: 0,
        }
      })
      dispatch(addInactivePlayers(updatedPlayersArr))
    } else {
      dispatch(addInactivePlayers(playersArr))
    }
    dispatch(resetPlayersArr())
    dispatch(resetDealer())
    dispatch(endIsGameActive())
    navigate("/finalResults");
  };

  return (
    <div onClick={quitGameHandler}>
      <QuitIconWithPopper />
    </div>
  );
}
