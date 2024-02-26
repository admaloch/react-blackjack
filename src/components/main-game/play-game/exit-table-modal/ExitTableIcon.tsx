import { useDispatch } from 'react-redux';
import { ExitTableIconWithPopper } from '../../../UI/icons/ExitTableIconWithPopper'
import { delay } from '../../../../utils/Utility';
import { updatePlayer } from '../../../../store/player-arr/playersArrSlice';
import { PlayerInterface } from '../../../../models/PlayerProps';

interface ExitTableIconProps {
    currPlayer: PlayerInterface;
    closeModalHandler: () => void;
}

export default function ExitTableIcon({ currPlayer, closeModalHandler }: ExitTableIconProps) {
    const dispatch = useDispatch();

    const exitTableHandler = async () => {
        closeModalHandler()
        await delay(200)
        dispatch(updatePlayer({ ...currPlayer, playerLeftTable: true }))
    }

    return (

        <div
            onClick={exitTableHandler}
            className="exit-table-icon">
            <ExitTableIconWithPopper placement="top" />
        </div>

    )
}
