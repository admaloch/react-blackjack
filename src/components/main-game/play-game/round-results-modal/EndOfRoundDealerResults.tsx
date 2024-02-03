import { RootState } from '../../../../store/store';
import { useSelector } from 'react-redux';

export default function EndOfRoundDealerResults() {
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const { cardUrlVals, cardSum } = dealerObj.hand
    const isBlackjack = cardSum === 21 && cardUrlVals.length === 2 ? true : false
    const isBust = cardSum > 21

    return (
        <div className="dealer-round-results">
            <h3> Dealer: </h3>
            <p style={{ marginLeft: '.5rem' }} > Final sum: {cardSum}</p>
            {isBlackjack && <p className='win-color'> -- Blackjack! </p>}
            {isBust && <p className='lose-color'> -- Bust!</p>}

        </div >


    )
}
