

import { removePlayer } from '../../store/player-arr/playersArrSlice';
import { useDispatch } from 'react-redux';
import { TrashcanIconWithPopper } from '../UI/icons/TrashcanIconWithPopper';

interface PlayerProps {
    name: string;
}

export default function Player({ name }: PlayerProps) {
    // delete player from game
    const dispatch = useDispatch();
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1)

    const removePlayerHandler = () => {
        dispatch(removePlayer({ name: name }))
    }

    return (
        <li>
            {formattedName}
            <div
                onClick={removePlayerHandler}
                className="delete-icon">
                <TrashcanIconWithPopper placement='right' />
            </div>
        </li >
    )
}
