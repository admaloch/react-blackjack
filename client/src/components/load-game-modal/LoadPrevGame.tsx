import { useNavigate } from "react-router";
import Modal from "../UI/modal/Modal";
import "./LoadPrevGame.css";
import { useDispatch } from "react-redux";
import { setDeck } from "../../store/deck/deckSlice";
import { updatePlayersFromPrevGame } from "../../store/player-arr/PlayersArrSlice";
import { setInactivePlayers } from "../../store/inactive-players/InactivePlayersSlice";
import { AppDispatch } from "../../store/store";
import useUpdateGameSessionApi from "../../store/api/useUpdateGameSessionApi";
import { returnToPrevGame } from "../../store/game-data/GameDataSlice";
import { PlayerInterface } from "../../models/PlayerProps";
import CardObjInterface from "../../models/CardProps";
import { ModalContentProps } from "../../models/ModalProps";
import { emptyHand } from "../../models/PlayerProps";

interface LoadPrevGameProps extends ModalContentProps {
  playersArr: PlayerInterface[];
  deck: CardObjInterface[];
  inactivePlayers: PlayerInterface[];
}

export default function LoadPrevGame({
  closeModal,
  open,
  playersArr,
  deck,
  inactivePlayers,
}: LoadPrevGameProps) {
  const { deleteGameSessionHandler } = useUpdateGameSessionApi();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  if (!playersArr) return null;

  const updatedPlayersArr = playersArr
    .filter((player) => player.bank >= 5)
    .map((player) => {
      return {
        ...player,
        hand: emptyHand,
        splitHand: emptyHand,
        minBet: player.bank >= player.currBet ? player.currBet : 5,
        splitBet: 0,
        beginningRoundBank: player.bank,
      };
    });

  if (!updatedPlayersArr.length) {
    deleteGameSessionHandler();
    return null;
  }

  const yesClickHandler = () => {
    dispatch(returnToPrevGame());
    dispatch(updatePlayersFromPrevGame(updatedPlayersArr));
    dispatch(setDeck(deck));
    dispatch(setInactivePlayers(inactivePlayers));
    navigate("/placeBets");
  };

  const noClickHandler = () => {
    closeModal();
    deleteGameSessionHandler();
  };

  return (
    <Modal
      closeModal={closeModal}
      open={open}
      isTimer={false}
      isCloseOnClick={false}
    >
      <div className="prev-game-modal">
        <h2>There is a previous game. Would you like to continue?</h2>
        <div className="btn-container">
          <button
            aria-label="Return to previous game"
            onClick={yesClickHandler}
            className="game-btn"
          >
            Yes
          </button>
          <button
            aria-label="Start new game"
            onClick={noClickHandler}
            className="game-btn"
          >
            No
          </button>
        </div>
      </div>
    </Modal>
  );
}
