import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useNavigate } from "react-router";
import { updatePlayer } from "../../../store/player-arr/playersArrSlice";
import { updateGameObj } from "../../../store/game-data/GameDataSlice";
import { shuffleDeckState } from "../../../store/deck/deckSlice";

interface PlaceBetBtnProps {
    currPlayerIndex: number;
    moveToNextPlayer: () => void;
    setIsModalOpen: (input: boolean) => void;
}

export default function PlaceBetBtn({ setIsModalOpen, currPlayerIndex, moveToNextPlayer }: PlaceBetBtnProps) {

    const gameData = useSelector((state: RootState) => state.gameData);
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
                dispatch(shuffleDeckState())
                setIsModalOpen(true)
            } else {
                dispatch(updateGameObj(
                    {
                        ...gameData,
                        isBetRoundActive: false,
                        isPlayerRoundActive: true,
                        isRoundActive: true,
                    }
                ))
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