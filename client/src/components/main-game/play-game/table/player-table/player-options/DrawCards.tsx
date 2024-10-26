import PlayerIndexProps from '../../../../../../models/PlayerIndexProps';
import { DrawCardsIconWithPopper } from '../../../../../UI/icons/DrawCardsIconWithPopper';
import { delay } from '../../../../../../utils/Utility';
import usePlayerDrawCard from '../../../../draw-cards-hook/usePlayerDrawCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';

export default function DrawCards({ playerIndex }: PlayerIndexProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const { isDoubleDown, hand } = playersArr[playerIndex]
    const playerDraw = usePlayerDrawCard(playerIndex)

    const drawCardsHandler = async () => {
        await delay(200)
        playerDraw()
    }

    let drawCardClass
    if (hand.cards.length < 2
        || isDoubleDown
        || hand.cardSum === 21 && hand.cards.length === 2
        || hand.cardSum > 21
    ) {
        drawCardClass = 'draw-cards-icon disabled'
    } else {
        drawCardClass = 'draw-cards-icon'
    }

    return (
        <div aria-label='draw card'
            onClick={drawCardsHandler}
            className={drawCardClass}>
            <DrawCardsIconWithPopper placement="top" />
        </div>
    )
}
