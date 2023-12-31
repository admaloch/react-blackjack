import Modal from '../UI/modal/Modal'
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import PlayerStatsItem from './PlayerStatsItem';
import './PlayeStatsModal.css'

interface PlayerStatsProps {
    open: boolean;
    closeModal: () => void;
}

export default function PlayerStatsModal({ closeModal, open }: PlayerStatsProps) {
    const playerDataArr = useSelector((state: RootState) => state.playersArr);
    const currRound = useSelector((state: RootState) => state.gameData.roundsPlayed);


    return (
        <Modal
            closeModal={closeModal}
            open={open}
        >
            <div className="modal-content-container">
                <h3>Player Stats</h3>
                <h4>Current Round: {currRound}</h4>

                <ul>
                    {playerDataArr.map((player) => (
                        <PlayerStatsItem
                            key={player.name}
                            name={player.name}
                            bank={player.bank}
                            roundsWon={player.roundsWon}
                        />
                    ))}
                </ul>

            </div>
        </Modal>
    )
}
