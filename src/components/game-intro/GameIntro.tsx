import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startAddPlayers } from '../../store/game-data/GameDataSlice';
import Wrapper from '../UI/wrapper/Wrapper';
import BGSection from '../UI/sections/BGSection';

export default function GameIntro() {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(startAddPlayers())

  }

  return (
    <BGSection bgClass='card-image'>
      <Wrapper>
        <h1>Welcome to the Blackjack Table</h1>
        <NavLink to="/addPlayers">
          <button className="game-btn" onClick={clickHandler}>
            Add Players
          </button>
        </NavLink>
      </Wrapper>
    </BGSection>


  );
}