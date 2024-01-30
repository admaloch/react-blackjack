import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { useEffect, useState } from 'react';
import { delay } from '../../../../utils/Utility';



export default function DealerDetails() {

    const [showDealerData, setShowDealerData] = useState({
        isInsuranceEval: false,
        isBlackjack: false,
    })
    const dispatch = useDispatch()
    const { isDealerCardRevealed, isInsuranceRoundComplete, isDealerRoundActive } = useSelector((state: RootState) => state.gameData);
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const isPlayerInsured = playersArr.some(player => player.splitBet !== 0)
    const { name, hand } = dealerObj;
    const { cardSum, cardUrlVals } = hand


    useEffect(() => {
        async function showBlackJack() {
            await delay(1000)
            cardSum === 21 && cardUrlVals.length === 2 && isDealerCardRevealed
                && setShowDealerData((prevDataState) => {
                    return { ...prevDataState, isBlackjack: true }
                })

        }
        showBlackJack()
    }, [isDealerCardRevealed, cardUrlVals, cardSum])

    useEffect(() => {
        async function showIsInsuranceEval() {

            if (isDealerRoundActive) {
                await delay(1500)
                isDealerCardRevealed && isPlayerInsured
                    ? setShowDealerData((prevDataState) => {
                        return { ...prevDataState, isInsuranceEval: true }
                    })
                    : setShowDealerData((prevDataState) => {
                        return { ...prevDataState, isInsuranceEval: false }
                    })
            }
        }
        showIsInsuranceEval()
    }, [isPlayerInsured, isDealerCardRevealed, isDealerRoundActive])



    return (
        <div className="dealer-details">
            <h2>{name}</h2>
            <p className={`dealer-sum ${isDealerCardRevealed ? 'revealed' : ''}`}>Sum: {hand.cardSum}</p>
            {!isDealerRoundActive && showDealerData.isBlackjack &&
                <p className='win-color'>BlackJack!</p>
            }
            {!isDealerRoundActive && cardSum > 21 &&
                <p className='lose-color'>Bust!</p>
            }
            {!isDealerRoundActive && cardSum >= 17 && cardSum <= 21 &&
                <p>Dealer stays</p>
            }
            {!isInsuranceRoundComplete && showDealerData.isInsuranceEval &&
                <p>Evaluating insurance bets...</p>
            }
            {isInsuranceRoundComplete && isDealerRoundActive &&
                <p>Dealer drawing cards...</p>
            }

        </div>
    );
}
