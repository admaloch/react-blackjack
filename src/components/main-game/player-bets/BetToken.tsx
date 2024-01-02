import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePlayer } from '../../../store/player-arr/playersArrSlice';
import { arraysEqual } from '../../../utils/Utility';

interface BetTokenProps {
    number: number;
    tokenClickHandler: (number: number) => void;
}

export default function BetToken({ number, tokenClickHandler }: BetTokenProps) {
    const dispatch = useDispatch();
    const playersArr = useSelector((state: RootState) => state.playersArr);


    

    
    return (
        <div
        className="betting-token"
        onClick={() => tokenClickHandler(number)}>
            {number}
        </div>
    );
}
