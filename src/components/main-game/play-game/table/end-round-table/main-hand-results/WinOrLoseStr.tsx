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
    const { isSplitResultsActive } = useSelector((state: RootState) => state.gameData);
    const { roundResults, name } = player
    const { mainResults } = roundResults

    useEffect(() => {
        let isMounted = true; // Variable to track if the component is still mounted
      
        async function updateWinOrLose() {
          if (roundResults.mainResults === '') {
            await delay(2000);
      
            // Check if the component is still mounted before updating state
            if (isMounted) {
              const winOrLoseStr = playerWonOrLostFunc(player, dealerObj, 'main');
              const newRoundResults: RoundResultsProps = { ...roundResults, mainResults: winOrLoseStr };
              dispatch(updatePlayer({ ...player, roundResults: newRoundResults }));
            }
          }
        }
      
        updateWinOrLose();
      
        // Cleanup function
        return () => {
          isMounted = false; // Set to false when the component is unmounted
        };
      }, [dealerObj, dispatch, player, roundResults]);
      

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
