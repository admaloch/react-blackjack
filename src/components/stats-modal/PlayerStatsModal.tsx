import Modal from '../UI/modal/Modal'
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import PlayerStatsItem from './PlayerStatsItem';
import './PlayeStatsModal.css'
import { delay } from '../../utils/Utility';

interface PlayerStatsProps {
    open: boolean;
    closeModal: () => void;
}

export default function PlayerStatsModal({ closeModal, open }: PlayerStatsProps) {
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currRound = useSelector((state: RootState) => state.gameData.roundsPlayed);

    const closeModalHandler = async () => {
        await delay(200)
        closeModal()
    }

    return (
        <Modal
            closeModal={closeModal}
            open={open}
        >
            <div className="stats-modal-container">
                <h3>Player Stats</h3>
                <h4>Current Round: {currRound}</h4>

                <ul>
                    {playersArr.map((player) => (
                        <PlayerStatsItem
                            key={player.name}
                            player={player}
                        />
                    ))}
                </ul>
                <div
                    onClick={closeModalHandler}
                    className="game-btn">
                    Return to game
                </div>
                

            </div>
        </Modal>
    )
}
