import { NavLink } from 'react-router-dom';
import './GameIntro.css';
import { useDispatch, useSelector } from 'react-redux';
import { startAddPlayers } from '../../store/game-data/GameDataSlice';
import { RootState } from '../../store/store';

export default function GameIntro() {
  const gameData = useSelector((state: RootState) => state.gameData);
  const dispatch = useDispatch();

  return (
    <div className="game-intro game-container">
      <h1>Welcome to the Blackjack table</h1>
      <NavLink to="/addPlayers">
        <button className="game-btn" onClick={() => dispatch(startAddPlayers())}>
          Start Game
        </button>
      </NavLink>
    </div>
  );
}