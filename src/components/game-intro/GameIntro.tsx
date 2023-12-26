import { useState, ChangeEvent } from 'react';
import './GameIntro.css';

export default function GameIntro() {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="game-intro">
      <h1>Welcome to the Blackjack table</h1>
      <form>
        <input placeholder="Enter Name" type="text" value={inputValue} onChange={handleChange} />
        <button>Add Player</button>

      </form>
    </div>
  );
}
