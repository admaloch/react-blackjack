import { useSelector } from 'react-redux';
import './RoundResultsModal.css'
import Modal from '../../../UI/modal/Modal';
import EndOfRoundDealerResults from './EndOfRoundDealerResults';
import EndOfRoundPlayerResults from './EndOfRoundPlayerResults';
import { RootState } from '../../../../store/store';
import { useEffect, useState } from 'react';

export default function EmptyBankModal() {
    const { isRoundActive, isBetRoundActive, isGameIntro  } = useSelector((state: RootState) => state.gameData);


    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        const isModalShown = !isRoundActive && !isBetRoundActive && !isGameIntro
        async function openEmptyBankModal() {
            if (isModalShown) {
                setIsModalOpen(true)
            }
        }
    })





    return (
        <Modal
            closeModal={ }
            open={ }
            isTimer={true}
        >

        </Modal>
    )
}
