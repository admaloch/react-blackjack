import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startAddPlayers } from '../../store/game-data/GameDataSlice';
import Wrapper from '../UI/wrapper/Wrapper';
import BGSection from '../UI/sections/BGSection';
import { fetchStoreData } from '../../store/actions/storeActions';
import { useEffect, useState } from 'react';
import { RootState } from '../../store/store';
import LoadPrevGame from '../load-game-modal/loadPrevGame';

let initLoad = true

export default function GameIntro() {
  const playersArr = useSelector((state: RootState) => state.playersArr);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false)

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(startAddPlayers())
  }

  useEffect(() => {

    const fetchDataAndCheckActiveGame = async () => {
      if (initLoad) {


        try {
          await dispatch(fetchStoreData());
          if (playersArr.length > 0) {
            setIsModalOpen(true)
          }
        } catch (error) {
          console.error('Error fetching or checking data:', error);
        }
        initLoad = false
      }
    };

    fetchDataAndCheckActiveGame();

  }, [dispatch, playersArr.length]);



  return (
    <BGSection bgClass='card-image'>
      <Wrapper>
        <h1>Welcome to the Blackjack Table</h1>
        <NavLink to="/addPlayers">
          <button className="game-btn" onClick={clickHandler}>
            Start Game
          </button>
        </NavLink>
        <LoadPrevGame closeModal={closeModal} open={isModalOpen} />
      </Wrapper>
    </BGSection>


  );
}