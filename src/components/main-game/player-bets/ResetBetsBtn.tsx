import { useDispatch } from 'react-redux';
import { updateTokens } from '../../../store/player-arr/playersArrSlice';
import { ResetIconWithPopper } from '../../UI/icons/ResetIconWithPopper';

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

