import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../store/store";
import { PlayerInterfaceProps, RoundResultsProps } from "../../../../../../models/PlayerProps";
import { useEffect } from "react";
import { delay } from "../../../../../../utils/Utility";
import { updatePlayer, updateWinOrLose } from "../../../../../../store/player-arr/playersArrSlice";
import playerWonOrLostFunc from "../../../../../../utils/playerWonOrLostFunc";

export default function WinOrLoseStr({ player }: PlayerInterfaceProps) {
    const dispatch = useDispatch()
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const { isRoundActive, isMainResultsActive } = useSelector((state: RootState) => state.gameData);
    const { roundResults, name, wonInsuranceRound } = player
    const { mainResults } = roundResults

    useEffect(() => {
        let isMounted = true
        async function winOrLoseFunc() {
            if (isMounted) {
                if (isMainResultsActive && isRoundActive && roundResults.mainResults === '' && !wonInsuranceRound) {
                    await delay(2000)
                    dispatch(updateWinOrLose({ player, dealerObj }))
                }
            }
        }
        winOrLoseFunc()
        return () => { isMounted = false }
    }, [dealerObj, dispatch, isMainResultsActive, isRoundActive, player, roundResults.mainResults, wonInsuranceRound])

    let winOrLoseStr: string = ''
    if (mainResults === 'Won') winOrLoseStr = `${name} won!`
    else if (mainResults === 'Lost') winOrLoseStr = 'Dealer won!'
    else if (mainResults === 'Push') winOrLoseStr = 'Push!'
    else winOrLoseStr = ""

    return (winOrLoseStr !== '' &&
        <p>{winOrLoseStr}</p>
    )
}