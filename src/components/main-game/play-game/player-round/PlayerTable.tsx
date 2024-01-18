import Cards from '../display-cards/Cards';
import './PlayerTable.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import PlayerOptions from './player-options/PlayerOptions';
import PlayerDetails from './PlayerDetails';
import SplitCardPreview from './player-options/SplitCardPreview';
import { useEffect } from 'react';
import useDrawCards from '../../draw-cards-hook/useDrawCards';

interface PlayerTableProps {
    playerIndex: number;
    endRound: () => void;
}



function PlayerTable({ playerIndex, endRound }: PlayerTableProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const playerDraw = useDrawCards('player', playerIndex);

    // let isSplitCardShown = false

    // if (currPlayer.isPlayerSplit) {
    //     isSplitCardShown = true
    // }

    useEffect(() => {
        if (playersArr[playerIndex].hand.cards.length === 0) {
            setTimeout(() => {
                playerDraw()
            }, 1200);
        }
        if (playersArr[playerIndex].hand.cards.length === 1) {
            setTimeout(() => {
                playerDraw()
            }, 500);
        }
    }, [playersArr]);



    return (
        <div className="player-table">
            <PlayerOptions
                endRound={endRound}
                playerIndex={playerIndex}
            />
            <div className="player-header">
                <h4>{currPlayer.name}&nbsp;</h4>
                {currPlayer.splitBet > 0 &&
                    <h4> split: Round 1</h4>
                }
            </div>

            <PlayerDetails playerIndex={playerIndex} />
            <Cards
                cardUrlVals={currPlayer.hand.cardUrlVals}
            />
            {playersArr[playerIndex].splitHand.cards.length > 0 &&
                <SplitCardPreview
                    playerIndex={playerIndex}
                />
            }



            {/* <ExitTable /> */}
        </div>
    )
}

export default PlayerTable;