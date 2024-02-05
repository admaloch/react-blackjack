import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import './NextRoundBtn.css';
import { updateAllPlayers } from '../../../../../../store/player-arr/playersArrSlice';
import { PlayerInterface } from '../../../../../../models/PlayerProps';
import { delay } from '../../../../../../utils/Utility';
import { increaseRoundsPlayed } from '../../../../../../store/game-data/GameDataSlice';
import { useNavigate } from 'react-router';

export default function NextRoundBtn() {
    const { roundsPlayed } = useSelector((state: RootState) => state.gameData);
    const playersArr = useSelector((state: RootState) => state.playersArr);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const endGameHandler = async () => {
        await delay(300)
        dispatch(increaseRoundsPlayed());
        const updatedPlayersArr = playersArr.map((player: PlayerInterface) => {
            return {
                ...player,
                hand: {
                    cards: [],
                    cardUrlVals: [],
                    cardNumVals: [],
                    cardSum: 0,
                    isBlackjack: false,
                },
                splitHand: {
                    cards: [],
                    cardUrlVals: [],
                    cardNumVals: [],
                    cardSum: 0,
                    isBlackjack: false,
                },
                currBet: player.minBet <= player.bank ? player.minBet : 5,
                insuranceBet: 0,
                wonInsuranceRound: false,
                splitBet: 0,
                isPlayerSplit: false,
                isDoubleDown: false,
                roundResults: {
                    mainResults: '',
                    splitResults: '',
                    isComplete: false,
                },
            };
        });


        dispatch(updateAllPlayers(updatedPlayersArr));
        navigate('/placeBets');
    };

    return (
        <div onClick={endGameHandler} className="btn-container">
            <button className="game-btn">Start Round {roundsPlayed + 1}</button>
        </div>
    );
}
