import Modal from "../../../UI/modal/Modal";
import { PlayerInterface } from "../../../../models/PlayerProps";
import ExitTableContent from "./ExitTableContent";

interface ExitTableModalProps {
  player: PlayerInterface;
  closeModal: () => void;
  isModalOpen: boolean;
}

export default function ExitTableModal({
  player,
  closeModal,
  isModalOpen,
}: ExitTableModalProps) {
  return (
    <Modal closeModal={closeModal} open={isModalOpen} isTimer={true}>
      <ExitTableContent player={player} closeModal={closeModal} />
    </Modal>
  );
}
