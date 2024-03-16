import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import './NextRoundBtn.css';
import { updateAllPlayers } from '../../../../../../store/player-arr/playersArrSlice';
import { delay } from '../../../../../../utils/Utility';
import { resetGameData, updateGameObj } from '../../../../../../store/game-data/GameDataSlice';
import { useNavigate } from 'react-router';
import { resetDealer } from '../../../../../../store/dealer-obj/dealerObjSlice';
import EmptyBankModal from '../../../empty-bank-modal/EmptyBankModal';
import { useState } from 'react';

export default function NextRoundBtn() {
    const [isPlayersBrokeModal, setIsPlayersBrokeModal] = useState(false)
    const closePlayerBrokeModal = () => setIsPlayersBrokeModal(false)
    const { roundsPlayed } = useSelector((state: RootState) => state.gameData);
    const gameData = useSelector((state: RootState) => state.gameData);
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const areAllPlayersBroke = playersArr.every(player => player.bank < 5)
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

    return (
        <>

            <button onClick={finalBtnHandler} className="game-btn">Start Round {roundsPlayed + 1}</button>

            <EmptyBankModal
                closePlayerBrokeModal={closePlayerBrokeModal}
                isPlayersBrokeModal={isPlayersBrokeModal}
            />
        </>

    );
}
