import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import FinalPlayerStats from './FinalPlayerStats';
import { PlayerInterface } from '../../models/PlayerProps';
import './FinalResults.css'
import { resetGame } from '../../store/game-data/GameDataSlice';
import { resetInactivePlayers } from '../../store/inactive-players/InactivePlayersSlice';
import { resetDeck } from '../../store/deck/deckSlice';
import BGSection from '../UI/sections/BGSection';
import Wrapper from '../UI/wrapper/Wrapper';

export default function FinalResults() {
  const inactivePlayers = useSelector((state: RootState) => state.inactivePlayers);
  const gameData = useSelector((state: RootState) => state.gameData);

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const resultsPageBtnHandler = () => {
    dispatch(resetGame())
    dispatch(resetInactivePlayers())
    dispatch(resetDeck())
    navigate("/");
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }

  return (
    <BGSection bgClass='bright-lights'>
      <Wrapper>

        <h2>Game Over</h2>
        <h3>Final results:</h3>
        <h4>Total rounds played: {gameData.roundsPlayed}</h4>
        <h4>Player stats:</h4>
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
      </Wrapper>
    </BGSection>
  )
}
