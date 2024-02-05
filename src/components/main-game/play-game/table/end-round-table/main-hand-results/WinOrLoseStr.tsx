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
    const { isRoundActive, isMainResultsActive } = useSelector((state: RootState) => state.gameData);
    const { roundResults, name } = player
    const { mainResults } = roundResults

    useEffect(() => {
        let isMounted = true
        async function updateWinOrLose() {
            if (isMounted) {
                if (isMainResultsActive && isRoundActive && roundResults.mainResults === '') {
                    await delay(2000)
                    const winOrLoseStr = playerWonOrLostFunc(player, dealerObj, 'main')
                    const newRoundResults: RoundResultsProps = { ...roundResults, mainResults: winOrLoseStr }
                    dispatch(updatePlayer({ ...player, roundResults: newRoundResults }))
                }
            }
        }
        updateWinOrLose()
        return  () => {isMounted = false}
    }, [dealerObj, dispatch, player, roundResults, isRoundActive, isMainResultsActive])

    let winOrLoseStr: string = ''
    if (mainResults === 'Won') winOrLoseStr = `${name} won!`
    else if (mainResults === 'Lost') winOrLoseStr = 'Dealer won!'
    else if (mainResults === 'Push') winOrLoseStr = 'Push!'
    else winOrLoseStr = ""


    return (
        <>
            {winOrLoseStr !== '' &&
                <p>{winOrLoseStr}</p>
            }
        </>

    )
}
