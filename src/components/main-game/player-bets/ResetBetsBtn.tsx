import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { updatePlayer } from '../../../store/player-arr/playersArrSlice';
import { updatePlayerTokens } from './updatePlayerTokens';
import { ResetIconWithPopper } from '../../UI/icons/ResetIconWithPopper';

interface ResetBetsBtnProps {
    currPlayerIndex: number;
}

export default function ResetBetsBtn({ currPlayerIndex }: ResetBetsBtnProps) {

    const dispatch = useDispatch();
    const playersArr = useSelector((state: RootState) => state.playersArr);

    const resetHandler = () => {
        const updatedBank = playersArr[currPlayerIndex].bank + playersArr[currPlayerIndex].currBet
        const updatedTokens = updatePlayerTokens(updatedBank)
        dispatch(updatePlayer({ ...playersArr[currPlayerIndex], bank: updatedBank, currBet: 0, currTokens: updatedTokens }));
    };

    return (
        <div className='reset-tokens' onClick={resetHandler}>
            <ResetIconWithPopper placement='top' />
        </div>
    );
}

