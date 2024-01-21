import { useDispatch, useSelector } from 'react-redux';
import { ExitTableIconWithPopper } from '../../../../UI/icons/ExitTableIconWithPopper'
import { RootState } from '../../../../../store/store';
import PlayerIndexProps from '../../../../../models/PlayerIndexProps';
import { delay } from '../../../../../utils/Utility';
import { updatePlayer } from '../../../../../store/player-arr/playersArrSlice';

export default function ExitTable({ playerIndex }: PlayerIndexProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]

    const dispatch = useDispatch();

    const exitTableHandler = async () => {
        await delay(300)
        dispatch(updatePlayer({ ...currPlayer, playerLeftTable: true }))
    }



    return (
        <>
            <div
                onClick={exitTableHandler}
                className="exit-table-icon">
                <ExitTableIconWithPopper placement="top" />
            </div>
        </>

    )
}
