import { useDispatch, useSelector } from 'react-redux';
import './EmptyBankModal.css'
import Modal from '../../../UI/modal/Modal';
import { RootState } from '../../../../store/store';
import { useEffect, useState } from 'react';
import EmptyBankModalResults from './EmptyBankModalResults';
import { useNavigate } from 'react-router';
import { removePlayers } from '../../../../store/player-arr/playersArrSlice';
import { addInactivePlayers } from '../../../../store/inactive-players/InactivePlayersSlice';

interface EmptyBankModalProps {
    closePlayerBrokeModal: () => void;
    isPlayersBrokeModal: boolean;
}

export default function EmptyBankModal({ closePlayerBrokeModal, isPlayersBrokeModal }: EmptyBankModalProps) {
    const navigate = useNavigate();
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const areAllPlayersBroke = playersArr.every(player => player.bank < 5)
    const brokePlayers = playersArr.filter(player => player.bank < 5)
    const dispatch = useDispatch();

    const closeModalHandler = () => {
        closePlayerBrokeModal()
        modalResultsFunc()
    }

    // finishing up modal - remove player/players when modal
    const modalResultsFunc = () => {
        if (!areAllPlayersBroke) {

            dispatch(removePlayers(brokePlayers))
            dispatch(addInactivePlayers(brokePlayers))
            navigate('/placeBets');
        } else {
            navigate('/finalResults');
        }
    }


    return (
        <Modal
            closeModal={closeModalHandler}
            open={isPlayersBrokeModal}
            isTimer={true}
        >
            <EmptyBankModalResults
                closeModal={closeModalHandler}
            />
        </Modal>
    )
}
