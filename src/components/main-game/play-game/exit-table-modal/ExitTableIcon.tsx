import { useDispatch } from 'react-redux';
import { ExitTableIconWithPopper } from '../../../UI/icons/ExitTableIconWithPopper'
import { delay } from '../../../../utils/Utility';
import { updatePlayer } from '../../../../store/player-arr/playersArrSlice';
import { PlayerInterface } from '../../../../models/PlayerProps';

interface ExitTableIconProps {
    currPlayer: PlayerInterface;
    closeStatsModal: () => void;
    openStatsModal: () => void;
}

export default function ExitTableIcon({ currPlayer, closeStatsModal, openStatsModal }: ExitTableIconProps) {
    const dispatch = useDispatch();

    const exitTableHandler = async () => {
        closeStatsModal()
        await delay(200)
        dispatch(updatePlayer({ ...currPlayer, playerLeftTable: true }))
        await delay(1900)
        openStatsModal()
    }

    return (

        <div
            onClick={exitTableHandler}
            className="exit-table-icon">
            <ExitTableIconWithPopper placement="top" />
        </div>

    )
}
