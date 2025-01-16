import Modal from "../UI/modal/Modal";
import { useDispatch } from "react-redux";
import "./ShuffleDeckModal.css";
import ModalTimer from "../modal-timer/ModalTimer";
import { beginPlayerRound } from "../../store/game-data/GameDataSlice";
import { useNavigate } from "react-router";
import useUpdateGameSessionApi from "../../store/api/useUpdateGameSessionApi";

interface ShuffleDeckModalProps {
  open: boolean;
  closeModal: () => void;
}

export default function ShuffleDeckModal({
  closeModal,
  open,
}: ShuffleDeckModalProps) {
  const { updateGameSessionHandler } = useUpdateGameSessionApi();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const closeShuffleModalHandler = async () => {
    updateGameSessionHandler();
    closeModal();
    dispatch(beginPlayerRound());
    navigate("/startRound");
  };

  return (
    <Modal closeModal={closeModal} open={open} isTimer={true}>
      <div className="shuffle-deck-modal">
        <h2>Dealer shuffling Deck...</h2>
        <ModalTimer timeout={4000} onTimeout={closeShuffleModalHandler} />
      </div>
    </Modal>
  );
}
