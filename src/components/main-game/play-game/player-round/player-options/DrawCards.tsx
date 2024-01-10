import { useDispatch } from 'react-redux';
import { updatePlayer } from "../../../../../store/player-arr/playersArrSlice";
import { useSelector } from 'react-redux';
import { RootState } from "../../../../../store/store";
import drawCards from "../../../draw-cards-hook/drawCards";
import PlayerIndexProps from '../../../../../models/PlayerIndexProps';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DrawCardsIconWithPopper } from '../../../../UI/icons/DrawCardsIconWithPopper';

export default function DrawCards({ playerIndex, drawCardsRef }: PlayerIndexProps) {
    const deck = useSelector((state: RootState) => state.deck);
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const { hand } = currPlayer
    const dispatch = useDispatch();

    const drawCardsHandler = () => {
        const newPlayerHand = drawCards(hand, deck);
        setTimeout(() => {
            dispatch(updatePlayer({
                ...currPlayer,
                hand: newPlayerHand,
            }));
        }, 250);
    }

    


    return (
        <div
            ref={drawCardsRef}
            onClick={drawCardsHandler}
            className="draw-cards-icon">
            <div className="plus-icon">
                <AddCircleOutlineIcon />
            </div>
            <DrawCardsIconWithPopper placement="top" />
        </div>
    )
}
