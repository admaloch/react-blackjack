import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { QuitIconWithPopper } from "../UI/icons/QuitIconWithPopper";
import { RootState } from "../../store/store";
import { addInactivePlayers } from "../../store/inactive-players/InactivePlayersSlice";
import {
  endIsGameActive,
  resetGame,
} from "../../store/game-data/GameDataSlice";
import { resetDealer } from "../../store/dealer-obj/dealerObjSlice";
import { resetPlayersArr } from "../../store/player-arr/PlayersArrSlice";
import useUpdateGameSessionApi from "../../store/api/useUpdateGameSessionApi";

export default function QuitGame() {
  const { deleteGameSessionHandler } = useUpdateGameSessionApi();

  const playersArr = useSelector((state: RootState) => state.playersArr);
  const { isBetRoundActive, isAddPlayersRound, roundsPlayed } = useSelector(
    (state: RootState) => state.gameData,
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const quitGameHandler = () => {
    deleteGameSessionHandler();
    revertBetAfterQuit();
    dispatch(resetPlayersArr());
    dispatch(resetDealer());
    dispatch(endIsGameActive());
    handleQuitNavigation();
  };

  //if you quit during bet round your money is returned
  const revertBetAfterQuit = () => {
    if (isBetRoundActive) {
      const updatedPlayersArr = playersArr.map((player) => {
        return {
          ...player,
          bank: player.beginningRoundBank,
          currBet: 0,
        };
      });
      dispatch(addInactivePlayers(updatedPlayersArr));
    } else {
      dispatch(addInactivePlayers(playersArr));
    }
  };

  const handleQuitNavigation = () => {
    if ((roundsPlayed === 1 && isBetRoundActive) || isAddPlayersRound) {
      navigate("/");
      dispatch(resetGame());
    } else {
      navigate("/finalResults");
    }
  };

  return (
    <div aria-label="quit game" onClick={quitGameHandler}>
      <QuitIconWithPopper />
    </div>
  );
}
