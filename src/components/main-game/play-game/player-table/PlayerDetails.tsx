import PlayerIndexProps from '../../../../models/PlayerIndexProps';
import { RootState } from '../../../../store/store';
import { useSelector } from 'react-redux';



export default function PlayerDetails({ playerIndex }: PlayerIndexProps) {
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    return (
        <div className="player-info">
            <h5>Current Bank: ${currPlayer.bank}</h5>
            <h5>Main Bet: ${currPlayer.currBet}</h5>
            {currPlayer.splitBet > 0 &&
                < h5 > Split Bet: ${currPlayer.splitBet}</h5>
            }
            {currPlayer.insuranceBet > 0 &&
                < h5 > Insurance Bet: ${currPlayer.insuranceBet}</h5>
            }
            <h5>Card sum: {currPlayer.hand.cardSum}</h5>
        </div >
    )
}
