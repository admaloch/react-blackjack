import { useNavigate } from "react-router";
import Modal from "../UI/modal/Modal";
import "./LoadPrevGame.css";
import { useDispatch } from "react-redux";
import { setDeck } from "../../store/deck/deckSlice";
import {
  setPlayers,
  updateAllPlayers,
} from "../../store/player-arr/PlayersArrSlice";
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

  console.log("bank", playersArr[0].bank);
  console.log("currBet", playersArr[0].currBet);
  console.log("minBet", playersArr[0].minBet);
  console.log("beginningRoundBank", playersArr[0].beginningRoundBank);

  const updatedPlayersArr = playersArr.map((player) => {
    const updatedBank = player.currBet
      ? player.bank - player.currBet
      : player.bank;

    const updatedMinBet = player.currBet >= player.bank ? player.currBet : 5;

    return {
      ...player,
      hand: emptyHand,
      splitHand: emptyHand,
      // beginningRoundBank: player.bank,
      // bank: player.bank - player.currBet,
      // minBet: updatedMinBet,
      currBet: 0,
      splitBet: 0,
      
      // minBet: updatedMinBet,
      // beginningRoundBank: player.bank,
    };
  });

  const yesClickHandler = () => {
    dispatch(returnToPrevGame());
    dispatch(updateAllPlayers(updatedPlayersArr));
    // dispatch(resetDealer())
    // dispatch(setPlayers(updatedPlayersArr));
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
          <button onClick={yesClickHandler} className="game-btn">
            Yes
          </button>
          <button onClick={noClickHandler} className="game-btn">
            No
          </button>
        </div>
      </div>
    </Modal>
  );
}
