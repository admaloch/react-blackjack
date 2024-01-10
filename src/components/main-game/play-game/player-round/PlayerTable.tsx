import Cards from '../display-cards/Cards';
import './PlayerTable.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import PlayerOptions from './player-options/PlayerOptions';
import PlayerDetails from './PlayerDetails';
import SplitCardPreview from './player-options/SplitCardPreview';

interface PlayerTableProps {
    playerIndex: number;
    endRound: () => void;
}



export default function PlayerTable({ playerIndex, endRound }: PlayerTableProps) {
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]

    // let isSplitCardShown = false

    // if (currPlayer.isPlayerSplit) {
    //     isSplitCardShown = true
    // }



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
            {/* {playersArr[playerIndex].splitHand.cards.length > 0 &&
                <SplitCardPreview
                    playerIndex={playerIndex}
                />
            } */}



            {/* <ExitTable /> */}
        </div>
    )
}
