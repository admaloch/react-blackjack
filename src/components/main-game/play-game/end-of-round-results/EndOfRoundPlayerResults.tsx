import { RootState } from '../../../../store/store';
import { useSelector } from 'react-redux';
import PlayerResults from './PlayerResults';

export default function EndOfRoundPlayerResults() {
    const playersArr = useSelector((state: RootState) => state.playersArr);

    return (
        <>
           
            <ul className="player-round-results">
                {playersArr.map(player => (
                    <PlayerResults
                        key={player.name}
                        player={player}
                    />
                ))}
            </ul>
        </>
    )
}
