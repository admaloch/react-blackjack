import { useDispatch } from "react-redux";
import { PlayerInterfaceProps } from "../../../../../../models/PlayerProps";
import { useEffect } from "react";
import { delay } from "../../../../../../utils/Utility";
import { updatePlayer } from "../../../../../../store/player-arr/playersArrSlice";
import { endRoundResults } from "../../../../../../store/game-data/GameDataSlice";
import { current } from "@reduxjs/toolkit";

export default function MoneyWonOrLost({ player }: PlayerInterfaceProps) {
    const dispatch = useDispatch()

    useEffect(() => {
        let isMounted = true; // Variable to track if the component is still mounted
      
        async function updateHandsWithResults() {
          const { hand, splitHand, wonInsuranceRound, bank, currBet, roundResults } = player;
          const { cardSum, cardUrlVals } = hand;
          const { mainResults, isComplete } = roundResults;
          const playerHasBJ = cardSum === 21 && cardUrlVals.length === 2;
      
          if (mainResults && !wonInsuranceRound && !isComplete) {
            await delay(2000);
      
            // Check if the component is still mounted before updating state
            if (isMounted) {
              let newBank = 0;
              if (mainResults === 'Won') newBank = playerHasBJ ? bank + (currBet * 2.5) : bank + (currBet * 2);
              else if (mainResults === 'Push') newBank = bank + currBet;
              else newBank = bank;
      
              const isRoundComplete = splitHand.cards.length === 0;
      
              const newRoundResObj = { ...roundResults, isComplete: isRoundComplete };
              dispatch(updatePlayer({ ...player, bank: newBank, currBet: 0, roundResults: newRoundResObj }));
              dispatch(endRoundResults());
            }
          }
        }
      
        updateHandsWithResults();
      
        // Cleanup function
        return () => {
          isMounted = false; // Set to false when the component is unmounted
        };
      }, [dispatch, player]);
      

    const { bank, beginningRoundBank, currBet } = player
    const { mainResults } = player.roundResults

    let moneyWonOrLost: string = ''
    if (mainResults === 'Won') {
        moneyWonOrLost = `Money earned: ${bank - beginningRoundBank}`
    } else if (mainResults === 'Lost') {
        moneyWonOrLost = `Money lost: ${beginningRoundBank - bank}`
    }

    return (
        <>
            {moneyWonOrLost !== '' && currBet === 0 &&
                <p>{moneyWonOrLost}</p>
            }
        </>

    )
}
