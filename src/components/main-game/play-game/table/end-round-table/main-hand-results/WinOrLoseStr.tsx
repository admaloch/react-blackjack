import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../store/store";
import { PlayerInterfaceProps } from "../../../../../../models/PlayerProps";
import { useEffect } from "react";
import {  updateWinOrLose } from "../../../../../../store/player-arr/playersArrSlice";

export default function WinOrLoseStr({ player }: PlayerInterfaceProps) {
    const dispatch = useDispatch()
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const { isRoundActive, isMainResultsActive } = useSelector((state: RootState) => state.gameData);
    const { roundResults, name, wonInsuranceRound } = player
    const { mainResults } = roundResults

    useEffect(() => {
        if (isMainResultsActive && isRoundActive && roundResults.mainResults === '' && !wonInsuranceRound) {
            setTimeout(() => {
                dispatch(updateWinOrLose({ player, dealerObj }))
            }, 2000);
        }
    }, [dealerObj, dispatch, player, roundResults, isRoundActive, isMainResultsActive, wonInsuranceRound])
    
    let winOrLoseStr: string = ''
    if (mainResults === 'Won') winOrLoseStr = `${name} won!`
    else if (mainResults === 'Lost') winOrLoseStr = 'Dealer won!'
    else if (mainResults === 'Push') winOrLoseStr = 'Push!'
    else winOrLoseStr = ""

    return (winOrLoseStr !== '' &&
        <p>{winOrLoseStr}</p>
    )
}