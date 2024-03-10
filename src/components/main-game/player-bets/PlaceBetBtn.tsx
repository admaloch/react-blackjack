import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useNavigate } from "react-router";
import { updatePlayer } from "../../../store/player-arr/playersArrSlice";
import { updateGameObj } from "../../../store/game-data/GameDataSlice";

interface PlaceBetBtnProps {
    currPlayerIndex: number;
    moveToNextPlayer: () => void;
    setIsModalOpen: (input: boolean) => void;
}

export default function PlaceBetBtn({ setIsModalOpen, currPlayerIndex, moveToNextPlayer }: PlaceBetBtnProps) {

    const [initialDeckAmount, setInitialDeckAmount] = useState(0)
    const gameData = useSelector((state: RootState) => state.gameData);
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const deck = useSelector((state: RootState) => state.deck);
    const player = playersArr[currPlayerIndex]

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deckSuitSumsArr = deck.map(card => card.suits.reduce((p, c) => p + c))
    const currDeckSum = deckSuitSumsArr.reduce((p, c) => p + c)
    const isShuffleNeeded = currDeckSum < initialDeckAmount / 2

    console.log('curr deck sum', currDeckSum)
    console.log('init deck amount', initialDeckAmount)

    useEffect(() => {
        if (initialDeckAmount === 0) {
            setInitialDeckAmount(currDeckSum)
        }
    }, [currDeckSum, initialDeckAmount])

    const nextPlayerHandler = () => {
        dispatch(updatePlayer({ ...player, minBet: player.currBet }));
        if (playersArr.length - 1 !== currPlayerIndex) {
            moveToNextPlayer();
        } else {
            if (isShuffleNeeded) {
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