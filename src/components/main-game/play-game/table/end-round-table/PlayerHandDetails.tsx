import { useSelector } from 'react-redux';
import { PlayerInterface } from '../../../../../models/PlayerProps'
import { RootState } from '../../../../../store/store';
import FinalPlayerResult from './main-hand-results/MainHandFinalRes';
import Insurance from './insurance/Insurance';
import BjBustOrStay from '../../../../bj-bust-stay/BjBustOrStay';

export interface PlayerProps {
    player: PlayerInterface;
}

export default function PlayerHandDetails({ player }: PlayerProps) {

    const { isDealerRoundActive, isSplitResultsActive, isRoundActive } = useSelector((state: RootState) => state.gameData);

    const { hand, bank, currBet } = player
    const { cardSum } = hand

    return (
        <>
            <p>Bank: {bank}</p>
            {currBet !== 0 && <p>Bet: {currBet}</p>}
            {!isSplitResultsActive && isRoundActive &&
                <p>Sum: {cardSum}</p>
            }
            <Insurance player={player} />
            <BjBustOrStay playerInput={player} />
            {!isDealerRoundActive &&
                <FinalPlayerResult player={player} />}
        </>
    )
}
