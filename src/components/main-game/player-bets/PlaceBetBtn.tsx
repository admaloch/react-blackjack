import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useNavigate } from "react-router";
import { beginPlayerRound } from "../../../store/game-data/GameDataSlice";
import { resetDeck } from "../../../store/deck/deckSlice";
import { updatePlayer } from "../../../store/player-arr/PlayersArrSlice";

interface PlaceBetBtnProps {
    currPlayerIndex: number;
    moveToNextPlayer: () => void;
    setIsModalOpen: (input: boolean) => void;
}

export default function PlaceBetBtn({ setIsModalOpen, currPlayerIndex, moveToNextPlayer }: PlaceBetBtnProps) {
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const deck = useSelector((state: RootState) => state.deck);
    const player = playersArr[currPlayerIndex]
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const deckSuitSumsArr = deck.map(card => card.suits.reduce((p, c) => p + c))
    const currDeckSum = deckSuitSumsArr.reduce((p, c) => p + c)
    const isShuffleNeeded = currDeckSum < 104 / 2

    const nextPlayerHandler = () => {
        dispatch(updatePlayer({ ...player, minBet: player.currBet }));
        if (playersArr.length - 1 !== currPlayerIndex) {
            moveToNextPlayer();
        } else {
            if (isShuffleNeeded) {
                dispatch(resetDeck())
                setIsModalOpen(true)
            } else {
                dispatch(beginPlayerRound())
                navigate("/startRound");
            }
        }
    };

    return (
        <button className='game-btn' onClick={nextPlayerHandler}>
            Place Bet
        </button>
    );
}