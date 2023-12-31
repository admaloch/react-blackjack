import Button from '../UI/button/Button';
import { NavLink } from 'react-router-dom'; // Correct import
import './GameIntro.css';

export default function GameIntro() {
  return (
    <div className="game-intro">
      <h1>Welcome to the Blackjack table</h1>
      <Button>
        <NavLink to="/addPlayers">Start Game</NavLink>
      </Button>
    </div>
  );
}
