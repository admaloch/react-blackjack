import { RootState } from '../../../../store/store';
import { useSelector } from 'react-redux';
import ModalTimer from '../../../modal-timer/ModalTimer';
import BrokePlayer from './BrokePlayer';

interface EmptyBankModalResults {
    closeModal: () => void;
}

export default function EmptyBankModalResults({ closeModal }: EmptyBankModalResults) {
    const { roundsPlayed } = useSelector((state: RootState) => state.gameData);

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const brokePlayers = playersArr.filter(player => player.bank < 5)

    const modalString = playersArr.length > 1
        ? `Moving to round ${roundsPlayed + 1} bets...`
        : 'All players have left the table. Loading final results...'



    return (
        <div className="empty-bank-container">
            <ul className="empty-bank-list">
                {brokePlayers.map(player => (
                    <BrokePlayer
                        key={player.name}
                        player={player}
                    />
                ))}
            </ul>
            <ModalTimer timeout={2000} onTimeout={closeModal} />
            <p>{modalString}</p>
        </div>
    )
}
