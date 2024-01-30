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

    let dealerHeaderText: string | JSX.Element = name;
    if (!isDealerRoundActive && showDealerData.isBlackjack) {
        dealerHeaderText = <h2 className=' win-color'>{name} BlackJack!</h2>
    } else if (!isDealerRoundActive && cardSum > 21) {
        dealerHeaderText = <h2 className=' lose-color'>{name} Bust!</h2>
    } else if (!isDealerRoundActive && cardSum >= 17 && cardSum <= 21) {
        dealerHeaderText = <h2 className=' stay-color'>{name} Stays</h2>
    } else {
        dealerHeaderText = <h2 className=''>{name}</h2>
    }

  

    const revealInsuranceClass = !isInsuranceRoundComplete && showDealerData.isInsuranceEval
        ? 'hide-item reveal-item' : 'hide-item'

    const revealDrawCardsClass = isInsuranceRoundComplete && isDealerRoundActive
        ? 'hide-item reveal-item' : 'hide-item'

    const dealerStatusClass = isInsuranceRoundComplete
        ? "dealer-status dealer-status-reverse"
        : 'dealer-status'

    return (
        <div className="dealer-details">
            {dealerHeaderText}
            <p className={`hide-item ${isDealerCardRevealed ? 'reveal-item' : ''}`}>Sum: {hand.cardSum}</p>
            <div className={dealerStatusClass}>
                <h3 className={revealInsuranceClass}>Checking insurance bets...</h3>
                <h3 className={revealDrawCardsClass}>Dealer drawing cards...</h3>


            </div>



        </div>
    );
}
