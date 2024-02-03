import { useDispatch, useSelector } from 'react-redux';
import { PlayerInterface } from '../../../../models/PlayerProps'
import { RootState } from '../../../../store/store';
import { updateIsInsuranceRoundComplete } from '../../../../store/game-data/GameDataSlice';
import { useEffect } from 'react';
import InsuranceResults from './insurance/InsuranceResults';
import FinalPlayerResult from './main-hand-results/MainHandFinalRes';

export interface PlayerProps {
    player: PlayerInterface;
}

export default function Insurance({ player }: PlayerProps) {

    const dispatch = useDispatch()

    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const { isInsuranceRoundComplete, isDealerRoundActive, isSplitResultsActive, isRoundActive } = useSelector((state: RootState) => state.gameData);

    const { hand, bank, currBet, insuranceBet } = player
    const { cardUrlVals, cardSum } = hand

    useEffect(() => {

        if (isDealerRoundActive && dealerObj.hand.cardNumVals[1] !== 11 && !isInsuranceRoundComplete) {
            dispatch(updateIsInsuranceRoundComplete())
        }
    }, [dealerObj, dispatch, isInsuranceRoundComplete, isDealerRoundActive])


 


    return (
        <>

      

            {insuranceBet !== 0 &&
                <p>Insurance: {insuranceBet}</p>
            }

            <InsuranceResults player={player} />
          

        </>
    )
}
