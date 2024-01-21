import { NavLink } from 'react-router-dom'
import Modal from '../UI/modal/Modal'
import ExitTableBtn from '../main-game/play-game/exit-table-modal/ExitTableModalBtn'

export default function FinalResults() {

  const exitGameHandler = () => {
    <NavLink to="/playGame">Start Game</NavLink>
  }

  return (
    <Modal
      closeModal={exitGameHandler}
      open={isModalOpen}
    >

      <div className="exit-table-modal">
        <h2>{playerWhoLeft.name} left the table</h2>
        <ul>
          <li>Current bank: ${playerWhoLeft.bank}</li>
          <li>Rounds won: {playerWhoLeft.roundsWon}</li>
        </ul>

        <button
          onClick={exitGameHandler}
          className="game-btn">
          Return to main menu
        </button>
      </div>

    </Modal>
  )
}
