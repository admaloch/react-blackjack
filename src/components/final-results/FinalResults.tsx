import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import FinalPlayerStats from './FinalPlayerStats';
import { PlayerInterface } from '../../models/PlayerProps';
import './FinalResults.css'

export default function FinalResults() {
  const inactivePlayers = useSelector((state: RootState) => state.inactivePlayers);
  const gameData = useSelector((state: RootState) => state.gameData);

  const navigate = useNavigate();

  const resultsPageBtnHandler = () => {
    navigate("/");
  }

  return (
    <div className="final-results game-container">
      <div className="results-container">
        <h2>Final results:</h2>

        <h3>Total rounds played: {gameData.roundsPlayed}</h3>
        <h3>Player stats:</h3>
        <ul>
          {inactivePlayers.length > 0 &&
            (inactivePlayers as PlayerInterface[]).map(player => (
              <FinalPlayerStats
                key={player.name}
                player={player} />
            ))
          }
        </ul>


        <button
          onClick={resultsPageBtnHandler}
          className="game-btn">
          Return to main menu
        </button>

      </div>


    </div>
  )
}
