import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import './NextRoundBtn.css'

export default function NextRoundBtn() {

    const { roundsPlayed } = useSelector((state: RootState) => state.gameData);

    return (
        <div className="btn-container">
            <button className='game-btn'>Start Round {roundsPlayed + 1}</button>
        </div>

    )
}
