import { DrawCardsIconWithPopper } from "../../../UI/icons/DrawCardsIconWithPopper"
import { useDispatch } from 'react-redux';
import { updatePlayer } from "../../../../store/player-arr/playersArrSlice";
import { useSelector } from 'react-redux';
import { RootState } from "../../../../store/store";
import drawCards from "../../draw-cards-hook/drawCards";

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExitTable from "./ExitTable";

interface PlayerIconsProps {
    playerIndex: number;
    endRound: () => void;
}

export default function PlayerIcons({ playerIndex, endRound }: PlayerIconsProps) {
    const deck = useSelector((state: RootState) => state.deck);
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const { hand } = currPlayer
    const dispatch = useDispatch();

    const doubleUpStyle = {
        display: hand.cards.length > 2 && currPlayer.bank >= currPlayer.currBet
            ? 'none'
            : 'block',
    };



    const drawCardsHandler = () => {
        const newPlayerHand = drawCards(hand, deck);
        setTimeout(() => {
            dispatch(updatePlayer({
                ...currPlayer,
                hand: newPlayerHand,
            }));
        }, 250);
    }

    const doubleUpHandler = () => {
        const newPlayerHand = drawCards(hand, deck);
        setTimeout(() => {
            dispatch(updatePlayer({
                ...currPlayer,
                hand: newPlayerHand,
                currBet: currPlayer.currBet * 2,
                bank: currPlayer.bank - currPlayer.currBet,
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
            <div className="current-options">
                <div className="player-btn-container">
                    <button
                        style={doubleUpStyle}
                        onClick={doubleUpHandler}
                        className="game-btn double-btn">Double Down
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

            <ExitTable />
        </>
    )
}
