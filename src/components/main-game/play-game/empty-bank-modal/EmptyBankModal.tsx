import { useSelector } from 'react-redux';
import './EmptyBankModal.css'
import Modal from '../../../UI/modal/Modal';
import { RootState } from '../../../../store/store';
import { useState } from 'react';
import EmptyBankModalResults from './EmptyBankModalResults';
import { useNavigate } from 'react-router';

interface EmptyBankModalProps {
    closePlayerBrokeModal: () => void;
    isPlayersBrokeModal: boolean;
}

export default function EmptyBankModal({ closePlayerBrokeModal, isPlayersBrokeModal }: EmptyBankModalProps) {
    const navigate = useNavigate();
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const areAllPlayersBroke = playersArr.every(player => player.bank < 5)

    const closeModalHandler = () => {
        closePlayerBrokeModal()
        modalResultsFunc()
    }

    // finishing up modal - remove player/players when modal closes
    const modalResultsFunc = () => {
        if (!areAllPlayersBroke) {
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
