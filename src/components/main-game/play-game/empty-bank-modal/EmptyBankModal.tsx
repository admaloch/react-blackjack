import { useSelector } from 'react-redux';
import './EmptyBankModal.css'
import Modal from '../../../UI/modal/Modal';
import { RootState } from '../../../../store/store';
import { useEffect, useState } from 'react';
import EmptyBankModalResults from './EmptyBankModalResults';
import { delay } from '../../../../utils/Utility';

export default function EmptyBankModal() {
    const { isRoundActive, isBetRoundActive, isGameIntro } = useSelector((state: RootState) => state.gameData);
    const playersArr = useSelector((state: RootState) => state.playersArr);

    const [testIfPlayerBroke, setTestIfPlayerBroke] = useState({
        isModalOpen: false,
        hasCheckHappened: false,
    })

    useEffect(() => {
        let isMounted = true
        const areSomePlayersBroke = playersArr.some(player => player.bank < 5)

        const isModalOpenPossible = !isRoundActive && !isBetRoundActive && !isGameIntro && areSomePlayersBroke && !testIfPlayerBroke.hasCheckHappened

        async function openEmptyBankModal() {
            if (isMounted) {
                if (isModalOpenPossible) {
                    await delay(1000)
                    setTestIfPlayerBroke({
                        isModalOpen: true,
                        hasCheckHappened: true,
                    })
                }
            }
        }
        openEmptyBankModal()
        return () => { isMounted = false }
    }, [isBetRoundActive, isGameIntro, isRoundActive, playersArr, testIfPlayerBroke.hasCheckHappened])

    const closeModal = () => {
        setTestIfPlayerBroke(prevState => ({ ...prevState, isModalOpen: false }));
    };


    return (
        <Modal
            closeModal={closeModal}
            open={testIfPlayerBroke.isModalOpen}
            isTimer={true}
        >
            <EmptyBankModalResults
                closeModal={closeModal}
            />
        </Modal>
    )
}
