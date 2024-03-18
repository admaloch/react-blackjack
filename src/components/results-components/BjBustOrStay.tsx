import { PlayerInterface } from "../../models/PlayerProps";

interface BjBustOrStayProps {
    player: PlayerInterface;
    mainOrSplit: string;
}

export default function BjBustOrStay({ player, mainOrSplit = 'main' }: BjBustOrStayProps) {

    const currentHand = mainOrSplit === 'main' ? player.hand : player.splitHand
    const { cardUrlVals, cardSum } = currentHand

    const isBlackjack = cardSum === 21 && cardUrlVals.length === 2 ? true : false

    let resultsString: React.ReactNode = '';
    if (isBlackjack) {
        resultsString = <p className='win-color'>BlackJack!</p>;
    } else if (cardSum > 21) {
        resultsString = <p className='lose-color'>Bust!</p>;
    } else {
        resultsString = <p className='stay-color'>Stay!</p>;

    }

    return <div>{resultsString}</div>
}
