import { useDispatch } from 'react-redux';
import { ResetIconWithPopper } from '../../UI/icons/ResetIconWithPopper';
import { updateTokens } from '../../../store/player-arr/PlayersArrSlice';

interface ResetBetsBtnProps {
    currPlayerIndex: number;
}

export default function ResetBetsBtn({ currPlayerIndex }: ResetBetsBtnProps) {
    const dispatch = useDispatch();

    return (
        <div
            className='reset-tokens'
            onClick={() => dispatch(updateTokens({ index: currPlayerIndex, type: 'reset-tokens' }))}>
            <ResetIconWithPopper placement='top' />
        </div>
    );

}