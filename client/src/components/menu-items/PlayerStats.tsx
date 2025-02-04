import { useState } from "react";
import { StatsIconWithPopper } from "../UI/icons/StatsIconWithPopper";
import PlayerStatsModal from "../stats-modal/PlayerStatsModal";

export default function PlayerStats() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        className="remove-default-btn-style"
        aria-label="player stats"
        onClick={openModal}
      >
        <StatsIconWithPopper />
      </button>
      <PlayerStatsModal open={isModalOpen} closeModal={closeModal} />
    </>
  );
}
