import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import "./RoundNum.css";
import { delay } from "../../../utils/Utility";
import { useNavigate } from "react-router";
import BGSection from "../../UI/sections/BGSection";
import { useEffect } from "react";
import preFetchCards from "../../../utils/prefetch-cards/prefetchCards";

export default function StartRound() {
  const navigate = useNavigate();
  const currRound = useSelector(
    (state: RootState) => state.gameData.roundsPlayed,
  );

  useEffect(() => {
    const playGame = async () => {
      await delay(1500);
      navigate("/placeBets");
    };
    playGame();
  }, [navigate]);

  //loading cards can be laggy during gameplay sometimes so prefetch them is necessary
  useEffect(() => {
    preFetchCards();
  }, []);

  return (
    <BGSection bgClass="dark-background main-game">
      <h2>Begin Round {currRound}</h2>
    </BGSection>
  );
}
