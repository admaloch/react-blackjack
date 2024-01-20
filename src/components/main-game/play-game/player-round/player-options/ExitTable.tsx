import { useDispatch, useSelector } from 'react-redux';
import { ExitTableIconWithPopper } from '../../../../UI/icons/ExitTableIconWithPopper'
import { RootState } from '../../../../../store/store';
import PlayerIndexProps from '../../../../../models/PlayerIndexProps';
import { removePlayer } from '../../../../../store/player-arr/playersArrSlice';
import { addInactivePlayer } from '../../../../../store/inactive-players/InactivePlayersSlice';
import { useEffect } from 'react';

export default function ExitTable({ playerIndex }: PlayerIndexProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const inactivePlayers = useSelector((state: RootState) => state.inactivePlayers);
    const currPlayer = playersArr[playerIndex]

    const dispatch = useDispatch();

    const exitTableHandler = () => {
        dispatch(removePlayer({ name: currPlayer.name }))
        dispatch(addInactivePlayer({ ...currPlayer }))
    }

    useEffect(() => {
        console.log(playersArr)
        console.log(inactivePlayers)
    }, [inactivePlayers, playersArr])

    return (
        <div
            onClick={exitTableHandler}
            className="exit-table-icon">
            <ExitTableIconWithPopper placement="top" />
        </div>
    )
}
