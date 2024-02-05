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
    const player = playersArr[currPlayerIndex]

    const resetHandler = () => {
        const currBank = player.bank + player.currBet - player.minBet
        
        const updatedTokens = updatePlayerTokens(currBank)
        dispatch(updatePlayer({ ...player, bank: currBank, currBet: player.minBet, currTokens: updatedTokens }));
    };

    return (
        <div className='reset-tokens' onClick={resetHandler}>
            <ResetIconWithPopper placement='top' />
        </div>
    );
}

