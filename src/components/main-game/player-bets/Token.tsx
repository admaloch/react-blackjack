
import { useDispatch } from 'react-redux';
import { clickTokenUpdate } from '../../../store/player-arr/PlayersArrSlice';

interface TokenProps {
    number: number;
    currPlayerIndex: number;
}

export default function Token({ number, currPlayerIndex }: TokenProps) {
    const dispatch = useDispatch();

    return (
        <div
            id={`token${number}`}
            onClick={() => dispatch(clickTokenUpdate({ index: currPlayerIndex, number: number }))}
        >
            {number}
        </div>
    );
}
