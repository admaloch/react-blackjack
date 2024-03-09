import { useState } from "react";
import { StatsIconWithPopper } from "../UI/icons/StatsIconWithPopper";
import PlayerStatsModal from "../stats-modal/PlayerStatsModal";


export default function PlayerStats() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)



  return (
    <>
      <div
        onClick={openModal}>
        <StatsIconWithPopper />
      </div>
      <PlayerStatsModal
        open={isModalOpen}
        closeModal={closeModal}
        openModal={openModal}
      />
    </>
  )
}
