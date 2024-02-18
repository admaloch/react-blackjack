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
    const { splitBet, bank } = player;
    const { isComplete } = player.roundResults
    const { cardUrlVals, cardSum } = player.splitHand


    return (
        <>

            <PlayerHand cardUrlVals={cardUrlVals} />
            <p>Sum: {cardSum}</p>
            <p>Bank: {bank}</p>
            {splitBet !== 0 && <p>Split bet: {splitBet}</p>}

            <BjBustOrStay player={player} mainOrSplit='split' />
            <SplitWinOrLoseStr player={player} />
            {/* <SplitMoneyEarnedOrLost player={player} /> */}
        </>
    );
}
