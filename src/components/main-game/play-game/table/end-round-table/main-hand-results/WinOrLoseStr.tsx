import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../store/store";
import { PlayerInterfaceProps, RoundResultsProps } from "../../../../../../models/PlayerProps";
import { useEffect } from "react";
import { delay } from "../../../../../../utils/Utility";
import { updatePlayer } from "../../../../../../store/player-arr/playersArrSlice";
import playerWonOrLostFunc from "../../../../../../utils/playerWonOrLostFunc";

export default function WinOrLoseStr({ player }: PlayerInterfaceProps) {
    const dispatch = useDispatch()
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const { isRoundActive, isMainResultsActive } = useSelector((state: RootState) => state.gameData);
    const { roundResults, name, wonInsuranceRound } = player
    const { mainResults } = roundResults
    // const allPlayersWonInsurance = playersArr.every(x => x.wonInsuranceRound)


    useEffect(() => {
        let isMounted = true
        async function updateWinOrLose() {
            
            if (isMounted) {
                if (isMainResultsActive && isRoundActive && roundResults.mainResults === '' && !wonInsuranceRound) {
                    // console.log('win or lose str ran')
                    await delay(2000)
                    const winOrLoseStr = playerWonOrLostFunc(player, dealerObj, 'main')
                    const newRoundResults: RoundResultsProps = { ...roundResults, mainResults: winOrLoseStr }
                    const isRoundWonChanged = winOrLoseStr === 'Won' ? player.roundsWon + 1 : player.roundsWon
                    dispatch(updatePlayer({
                        ...player,
                        roundResults: newRoundResults,
                        roundsWon: isRoundWonChanged,
                    }))
                }
            }
        }
        updateWinOrLose()
        return () => { isMounted = false }
    }, [dealerObj, dispatch, player, roundResults, isRoundActive, isMainResultsActive])

    let winOrLoseStr: string = ''
    if (mainResults === 'Won') winOrLoseStr = `${name} won!`
    else if (mainResults === 'Lost') winOrLoseStr = 'Dealer won!'
    else if (mainResults === 'Push') winOrLoseStr = 'Push!'
    else winOrLoseStr = ""

    return (winOrLoseStr !== '' &&
        <p>{winOrLoseStr}</p>
    )
}