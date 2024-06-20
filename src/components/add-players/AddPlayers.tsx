import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./AddPlayers.css"
import PlayerForm from "./PlayerForm"
import PlayerList from "./PlayerList"
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { startBetRound } from '../../store/game-data/GameDataSlice';
import BGSection from "../UI/sections/BGSection";
import Wrapper from "../UI/wrapper/Wrapper";

export default function AddPlayers() {

    const dispatch = useDispatch();
    const playerDataArr = useSelector((state: RootState) => state.playersArr);

    const startbetRoundBtn = () => {
        console.log('this ran')
        dispatch(startBetRound())
        document.body.requestFullscreen();
    }

    return (
        <BGSection bgClass="card-image">

            <Wrapper>
                <h2>Enter your name to join the game</h2>
                <PlayerForm />
            </Wrapper>
            {playerDataArr.length > 0 && <PlayerList />}
            {playerDataArr.length > 0 &&
                <div className="start-game-btn">
                    <NavLink to="/playGame">
                        <button
                            onClick={() => startbetRoundBtn()}
                            className="game-btn"
                        >
                            Start Game
                        </button>
                    </NavLink>
                </div>
            }
        </BGSection>
    )
}