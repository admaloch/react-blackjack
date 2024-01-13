import PlayerIndexProps from '../../../../../models/PlayerIndexProps';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DrawCardsIconWithPopper } from '../../../../UI/icons/DrawCardsIconWithPopper';
import useDrawCards from '../../../draw-cards-hook/useDrawCards';
import { delay } from '../../../../../utils/Utility';
export default function DrawCards({ playerIndex }: PlayerIndexProps) {

    const playerDraw = useDrawCards('player', playerIndex);

    const drawCardsHandler = async () => {
        await delay(200)
        playerDraw()
    }

    return (
        <div
            onClick={drawCardsHandler}
            className="draw-cards-icon">
            <div className="plus-icon">
                <AddCircleOutlineIcon />
            </div>
            <DrawCardsIconWithPopper placement="top" />
        </div>
    )
}
