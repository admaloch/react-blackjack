import Cards from '../display-cards/Cards';
import './PlayerTable.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import PlayerOptions from './player-options/PlayerOptions';
import PlayerDetails from './PlayerDetails';
import SplitCardPreview from './player-options/SplitCardPreview';
import { useEffect } from 'react';
import usePlayerDrawCard from '../../draw-cards-hook/usePlayerDrawCard';

interface PlayerTableProps {
    playerIndex: number;
    endRound: () => void;
}

function PlayerTable({ playerIndex, endRound }: PlayerTableProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const dealerObj = useSelector((state: RootState) => state.dealerObj);

    const { hand, splitHand, splitBet, name } = playersArr[playerIndex]
    const playerDraw = usePlayerDrawCard(playerIndex)

    useEffect(() => {
        if (dealerObj.hand.cards.length === 2) {
            if (hand.cards.length === 0 || hand.cards.length === 1) {
                setTimeout(() => {
                    playerDraw()
                }, 300);
            }
        }

    }, [hand, dealerObj, playerDraw]);

    const handText = splitHand.cards.length === 1 ? '1st hand' : '2nd hand'

    return (
        <div className="player-table">
            <PlayerOptions
                endRound={endRound}
                playerIndex={playerIndex}
            />
            <div className="player-header">
                <h4>{name}&nbsp;</h4>
                {splitBet > 0 &&
                    <h4> split: {handText}</h4>
                }
            </div>

            <PlayerDetails playerIndex={playerIndex} />
            <Cards
                cardUrlVals={hand.cardUrlVals}
            />
            {playersArr[playerIndex].splitHand.cards.length > 0 &&
                <SplitCardPreview
                    playerIndex={playerIndex}
                />
            }
        </div>
    )
}

export default PlayerTable;