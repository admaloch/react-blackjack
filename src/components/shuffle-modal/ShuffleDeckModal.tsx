import Modal from '../UI/modal/Modal'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import './ShuffleDeckModal.css'
import ModalTimer from '../modal-timer/ModalTimer';
import { beginPlayerRound } from '../../store/game-data/GameDataSlice';
import { useNavigate } from 'react-router';

interface ShuffleDeckModalProps {
    open: boolean;
    closeModal: () => void;
}

export default function ShuffleDeckModal({ closeModal, open }: ShuffleDeckModalProps) {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const closeShuffleModalHandler = async () => {
        closeModal()
        dispatch(beginPlayerRound())
        navigate("/startRound");
    }

    return (
        <Modal
            closeModal={closeModal}
            open={open}
            isTimer={true}
        >
            <div className="shuffle-deck-modal">
                <h2>Dealer shuffling Deck...</h2>
                <ModalTimer timeout={4000} onTimeout={closeShuffleModalHandler} />
            </div>
        </Modal>
    )
}
