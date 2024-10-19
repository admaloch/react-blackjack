import { useDispatch } from 'react-redux';
import { TrashcanIconWithPopper } from '../UI/icons/TrashcanIconWithPopper';
import { removePlayer } from '../../store/player-arr/PlayersArrSlice';
interface PlayerProps {
    name: string;
}
export default function Player({ name }: PlayerProps) {
    const dispatch = useDispatch();
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1)

    return (
        <li>
            {formattedName}
            <div
                onClick={()=>dispatch(removePlayer({ name: name }))}
                className="delete-icon">
                <TrashcanIconWithPopper placement='right' />
            </div>
        </li >
    )
}
