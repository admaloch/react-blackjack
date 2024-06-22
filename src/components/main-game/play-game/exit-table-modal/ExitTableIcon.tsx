import { ExitTableIconWithPopper } from '../../../UI/icons/ExitTableIconWithPopper'
import { PlayerInterfaceProps } from '../../../../models/PlayerProps';
import { useState } from 'react';
import ExitTableModal from './ExitTableModal';
import './ExitTable.css'

export default function ExitTableIcon({ player }: PlayerInterfaceProps) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => setIsModalOpen(false)
    const openModal = () => setIsModalOpen(true)

    return (
        <>
            <div
                onClick={openModal}
                className="exit-table-icon">
                <ExitTableIconWithPopper placement="top" />
            </div>
            <ExitTableModal
                player={player}
                closeModal={closeModal}
                isModalOpen={isModalOpen}
            />
        </>

    )
}