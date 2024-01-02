import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { updatePlayer } from '../../../store/player-arr/playersArrSlice';
import { updatePlayerTokens } from './updatePlayerTokens';

interface TokenProps {
    number: number;
    currPlayerIndex: number;
}

export default function Token({ number, currPlayerIndex }: TokenProps) {
    const dispatch = useDispatch();
    const playersArr = useSelector((state: RootState) => state.playersArr);

    const tokenClickHandler = (input: number) => {
        const updatedBet = playersArr[currPlayerIndex].currBet + input
        const updatedBank = playersArr[currPlayerIndex].bank - input
        const updatedTokens = updatePlayerTokens(updatedBank)
        dispatch(updatePlayer({ ...playersArr[currPlayerIndex], currBet: updatedBet, bank: updatedBank, currTokens: updatedTokens }));
    };
    
    return (
        <div
        className="betting-token"
        onClick={() => tokenClickHandler(number)}>
            {number}
        </div>
    );
}
