import { useEffect, useState, useRef } from "react";
import { updateIsGameActive } from "../../../../../../store/game-data/GameDataSlice";
import Modal from "../../../../../UI/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../store/store";

interface LeaveTableModalProps {
    changeToNextPlayer: () => void;
}

export default function ExitTableModal({ changeToNextPlayer }: LeaveTableModalProps) {
    const inactivePlayers = useSelector((state: RootState) => state.inactivePlayers);
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const initialRenderRef = useRef(true);

    const closeModal = () => {
        setIsModalOpen(false);
        if (playersArr.length !== 0) {
            changeToNextPlayer();
        } else {
            dispatch(updateIsGameActive());
        }
    };

    useEffect(() => {
        // Skip the initial render
        if (initialRenderRef.current) {
            initialRenderRef.current = false;
            return;
        }

        // Run the logic when inactivePlayers changes
        setIsModalOpen(true);

        // Clean-up function if needed
        return () => {
            // Clean-up logic if needed
        };
    }, [inactivePlayers]);

    return (
        <Modal
            closeModal={closeModal}
            open={isModalOpen}
        >
            <h3>Player left table</h3>
        </Modal>
    );
}
