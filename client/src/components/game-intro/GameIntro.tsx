import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startAddPlayers } from "../../store/game-data/GameDataSlice";
import Wrapper from "../UI/wrapper/Wrapper";
import BGSection from "../UI/sections/BGSection";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { AppDispatch } from "../../store/store";
import LoadPrevGame from "../load-game-modal/LoadPrevGame";
import { useLazyGetGameSessionByIdQuery } from "../../store/api/gameSessionsApiSlice";
import MainLoadAnimation from "../UI/load-animations/MainLoadAnimation";

let initLoad = true;

export default function GameIntro() {
  const [triggerGetGameSession, { data, isLoading }] =
    useLazyGetGameSessionByIdQuery();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  const dispatch: AppDispatch = useDispatch();

  const clickHandler = () => {
    dispatch(startAddPlayers());
  };

  useEffect(() => {
    async function checkIfPrevSession() {
      const sessionId = Cookies.get("blackjack-session-id");
      if (initLoad && sessionId) {
        try {
          await triggerGetGameSession(sessionId);
          setIsModalOpen(true);
        } catch (error) {
          console.error("Error grabbing data:", error);
        }
        initLoad = false;
      }
    }
    checkIfPrevSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let content = null;

  if (isLoading) {
    content = <MainLoadAnimation />;
  } else {
    content = (
      <Wrapper>
        <h1>Welcome to the Blackjack Table</h1>
        <NavLink to="/addPlayers">
          <button className="game-btn" onClick={clickHandler}>
            Start Game
          </button>
        </NavLink>
        <LoadPrevGame
          closeModal={closeModal}
          open={isModalOpen}
          playersArr={data?.playersArr}
          deck={data?.deck}
          inactivePlayers={data?.inactivePlayers}
        />
      </Wrapper>
    );
  }

  return <BGSection bgClass="card-image">{content}</BGSection>;
}
