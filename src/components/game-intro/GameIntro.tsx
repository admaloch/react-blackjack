import { NavLink } from 'react-router-dom';
import './GameIntro.css';
import { useDispatch } from 'react-redux';
import { startAddPlayers } from '../../store/game-data/GameDataSlice';
import backgroundImage from '../../assets/background-img.jpg';

const divStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  height: '100vh', // or any height you want
  width: '100vw',  // or any width you want
  backgroundRepeat: 'no-repeat',
  margin: 0,
  padding: 0,
};

export default function GameIntro() {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(startAddPlayers())
  }

  return (
    <div style={divStyle} className='photo-container'>
      <div className="game-intro game-container">
        <div className="intro-content">
          <h1>Welcome to the Blackjack Table</h1>
          <NavLink to="/addPlayers">
            <button className="game-btn" onClick={clickHandler}>
              Start Game
            </button>
          </NavLink>
        </div>
      </div>
    </div>

  );
}