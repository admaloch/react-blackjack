import { NavLink } from 'react-router-dom'; // Correct import
import './GameIntro.css';
import { useDispatch } from 'react-redux';
import { updateIsGameActive, updateIsMenuShown } from '../../store/game-data/GameDataSlice';

export default function GameIntro() {
  
  const dispatch = useDispatch();
  const btnHandler = () =>{
    dispatch(updateIsGameActive())
    dispatch(updateIsMenuShown());
  }

  return (
    <div className="game-intro game-container">
      <h1>Welcome to the Blackjack table</h1>
      <button 
      className="game-btn"
      onClick={btnHandler}
      >
        <NavLink to="/addPlayers">Start Game</NavLink>
      </button>
    </div>
  );
}
