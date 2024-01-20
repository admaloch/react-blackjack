import PlayerIndexProps from '../../../../../models/PlayerIndexProps';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DrawCardsIconWithPopper } from '../../../../UI/icons/DrawCardsIconWithPopper';
import { delay } from '../../../../../utils/Utility';
import usePlayerDrawCard from '../../../draw-cards-hook/usePlayerDrawCard';
export default function DrawCards({ playerIndex }: PlayerIndexProps) {

    const playerDraw = usePlayerDrawCard(playerIndex)

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
