import { useSelector } from 'react-redux';
import { PlayerInterface } from '../../../../../../models/PlayerProps'
import { RootState } from '../../../../../../store/store';
import Insurance from '../insurance/Insurance';
import BjBustOrStay from '../../../../../results-components/BjBustOrStay';
import WinOrLoseStr from './WinOrLoseStr';
import EarningsOrLosses from './EarningsOrLosses';

export interface PlayerProps {
    player: PlayerInterface;
}

export default function PlayerHandDetails({ player }: PlayerProps) {

    const { isSplitResultsActive, isRoundActive } = useSelector((state: RootState) => state.gameData);

    const { hand, bank, currBet } = player
    const { cardSum } = hand

    

    return (
        <>
        <p>Sum: {cardSum}</p>
            <p>Bank: {bank}</p>
            {currBet !== 0 && <p>Bet: {currBet}</p>}
           
                
           
            {/* <Insurance player={player} /> */}
            <BjBustOrStay player={player} mainOrSplit='main' />


            <WinOrLoseStr player={player} />
            {/* <EarningsOrLosses player={player} /> */}


        </>
    )
}
