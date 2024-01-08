import { DrawCardsIconWithPopper } from "../../../UI/icons/DrawCardsIconWithPopper"
import { useDispatch } from 'react-redux';
import { updatePlayer } from "../../../../store/player-arr/playersArrSlice";
import { useSelector } from 'react-redux';
import { RootState } from "../../../../store/store";
import drawCards from "../../draw-cards-hook/drawCards";
import { ExitTableIconWithPopper } from "../../../UI/icons/ExitTableIconWithPopper";

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface PlayerIconsProps {
    playerIndex: number;
    endRound: () => void;
}

export default function PlayerIcons({ playerIndex, endRound }: PlayerIconsProps) {
    const deck = useSelector((state: RootState) => state.deck);
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const dispatch = useDispatch();

    const doubleUpStyle = {
        display: playersArr[playerIndex].hand.cards.length > 2 ? 'none' : 'block',
    };

    const drawCardsHandler = () => {
        const newPlayerHand = drawCards(playersArr[playerIndex].hand, deck);
        setTimeout(() => {
            dispatch(updatePlayer({
                ...playersArr[playerIndex],
                hand: newPlayerHand,
            }));
        }, 250);
    }

    const doubleUpHandler = () => {
        const newPlayerHand = drawCards(playersArr[playerIndex].hand, deck);
        setTimeout(() => {
            dispatch(updatePlayer({
                ...playersArr[playerIndex],
                hand: newPlayerHand,
                currBet: playersArr[playerIndex].currBet * 2,
                bank: playersArr[playerIndex].bank - playersArr[playerIndex].currBet,
                isDoubleUp: true,
            }));
        }, 350);
    }

    const stayBtnHandler = () => {
        setTimeout(() => {
            endRound()
        }, 350)
    }

    return (
        <>
            <div className="other-options">
                <div className="player-btn-container">
                    <button
                        style={doubleUpStyle}
                        onClick={doubleUpHandler}
                        className="game-btn double-btn">Double Down
                    </button>
                </div>
                <div className="player-btn-container">
                    <button
                        className="game-btn insurance-btn">Insurance
                    </button>
                </div>
            </div>

            <div className="player-btn-container">
                <button
                    onClick={stayBtnHandler}
                    className="game-btn stay-btn">Stay
                </button>
            </div>

            <div
                onClick={drawCardsHandler}
                className="draw-cards-icon">
                <div className="plus-icon">
                    <AddCircleOutlineIcon />
                </div>
                <DrawCardsIconWithPopper placement="top" />
            </div>

            <div className="exit-table-icon">
                <ExitTableIconWithPopper placement="top" />
            </div>
        </>
    )
}
