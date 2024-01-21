import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import './ExitTable.css'
import PlayerIndexProps from "../../../../models/PlayerIndexProps";
import { PlayerInterface } from "../../../../models/PlayerProps";
import ExitTableModal from "./ExitTableModal";


export default function ExitTable({ playerIndex }: PlayerIndexProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => setIsModalOpen(false)
    const [playerWhoLeft, setPlayerWhoLeft] = useState<PlayerInterface | null>(null);

    useEffect(() => {
        const playerLeftTable = playersArr.find(player => player.playerLeftTable);
        if (playerLeftTable) {
            setPlayerWhoLeft(playerLeftTable);
            setIsModalOpen(true);
        }
    }, [playersArr]);

    if (!playerWhoLeft) return;

    return (

        <ExitTableModal
            playerIndex={playerIndex}
            playerWhoLeft={playerWhoLeft}
            closeModal={closeModal}
            isModalOpen={isModalOpen}

        />

    );
}
