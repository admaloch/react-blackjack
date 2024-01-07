import Modal from "../../../UI/modal/Modal";
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { useState, useEffect } from 'react';







interface EndOfTurnModalProps {
    playerIndex: number;

}



export default function EndOfTurnModal({ playerIndex }: EndOfTurnModalProps) {
    const playersArr = useSelector((state: RootState) => state.playersArr);
    // const { hand } = playersArr[playerIndex]

    const [isModalOpen, setIsModalOpen] = useState(false)
    // const [modalContents, setIsModalContents] = useState()

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    let modalContents = 'end of turn'


    // if (hand.cardSum > 21) {
    //     modalContents = "Player Bust"
    //     setIsModalOpen(true)
    // }
    // if (hand.cards.length === 2 && hand.cardSum === 21) {
    //     modalContents = "BlackJack"
    //     setIsModalOpen(true)
    // }



    const playerDataArr = useSelector((state: RootState) => state.playersArr);
    const currRound = useSelector((state: RootState) => state.gameData.roundsPlayed);


    return (
        <Modal
            closeModal={closeModal}
            open={isModalOpen}
        >
            <div className="end-turn-modal">
                <h2>{modalContents}</h2>
            </div>
        </Modal>
    )
}
