import { PlayerInterface } from '../../../../../../models/PlayerProps'
import PlayerHand from '../main-hand-results/PlayerHand';
import BjBustOrStay from '../../../../../results-components/BjBustOrStay';
import SplitMoneyEarnedOrLost from './SplitMoneyEarnedOrLost';
import SplitWinOrLoseStr from './SplitWinOrLoseStr';

export interface PlayerProps {
    player: PlayerInterface;
    updatePlayerClass: (str: string) => void;
}

export default function SplitHandDetails({ player }: PlayerProps) {
    const { hand } = player
    const { isComplete } = player.roundResults
    const { cardUrlVals } = hand
    const { splitHand, splitBet, bank } = player;
    const { cardSum } = splitHand;
    const isBlackjack = cardSum === 21 && cardUrlVals.length === 2;

    return (
        <>
            <PlayerHand cardUrlVals={cardUrlVals} />
            <p>Bank: {bank}</p>
            {splitBet !== 0 && <p>Split bet: {splitBet}</p>}
            {!isComplete &&<p>Sum: {cardSum}</p>}
            <BjBustOrStay player={player} mainOrSplit='split' />
            {isBlackjack && <p className="blackjack win-color">BlackJack!</p>}
            {cardSum > 21 && <p className="lose-color">Bust!</p>}
            <SplitWinOrLoseStr player={player} />
            <SplitMoneyEarnedOrLost player={player} />
        </>
    );
}
