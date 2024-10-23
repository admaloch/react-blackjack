import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import { delay } from '../../../../../../utils/Utility';
import { resetGameData } from '../../../../../../store/game-data/GameDataSlice';
import { useNavigate } from 'react-router';
import { resetDealer } from '../../../../../../store/dealer-obj/dealerObjSlice';
import EmptyBankModal from '../../../empty-bank-modal/EmptyBankModal';
import { useState } from 'react';
import { updateAllPlayers } from '../../../../../../store/player-arr/PlayersArrSlice';

export default function NextRoundBtn() {

    const [isPlayersBrokeModal, setIsPlayersBrokeModal] = useState(false)
    const closePlayerBrokeModal = () => setIsPlayersBrokeModal(false)
    const { roundsPlayed } = useSelector((state: RootState) => state.gameData);
    const playersArr = useSelector((state: RootState) => state.playersArr);

    const areAllPlayersBroke = playersArr.every((player) => player.bank + player.currBet < 5);
    const areAnyPlayersBroke = playersArr.some(player => player.bank < 5)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const finalBtnHandler = async () => {
        await delay(300)
        if (areAnyPlayersBroke) {
            setIsPlayersBrokeModal(true)
        } else {
            navigate('/placeBets');
            dispatch(resetGameData(areAllPlayersBroke))
        }
        dispatch(updateAllPlayers());
        dispatch(resetDealer())
    };


    const btnText = areAllPlayersBroke ? 'View final results' : `Start Round ${roundsPlayed + 1}`

    return (
        <>
            <button onClick={finalBtnHandler} className="game-btn">{btnText}</button>
            <EmptyBankModal
                closePlayerBrokeModal={closePlayerBrokeModal}
                isPlayersBrokeModal={isPlayersBrokeModal}
            />
        </>
    );
}
