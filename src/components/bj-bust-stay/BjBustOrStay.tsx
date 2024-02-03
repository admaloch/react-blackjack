import { DealerObjInterface, PlayerInterface } from "../../models/PlayerProps";

interface BjBustOrStayProps {
    playerInput: PlayerInterface | DealerObjInterface;
}

export default function BjBustOrStay({ playerInput }: BjBustOrStayProps) {


    const { cardUrlVals, cardSum } = playerInput.hand

    const isBlackjack = cardSum === 21 && cardUrlVals.length === 2 ? true : false

    let resultsString: React.ReactNode = '';
    if (isBlackjack) {
        resultsString = <p className='win-color'>BlackJack!</p>;
    } else if (cardSum > 21) {
        resultsString = <p className='lose-color'>Bust!</p>;
    } else {
        resultsString = <p className='stay-color'>Stay!</p>;

    }


    return <div>{ resultsString }</div> 
}
