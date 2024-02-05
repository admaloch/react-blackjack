import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./AddPlayers.css"
import PlayerForm from "./PlayerForm"
import PlayerList from "./PlayerList"
import { NavLink } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { updateIsPlayerStatsShown } from '../../store/game-data/GameDataSlice';


export default function AddPlayers() {
    const dispatch = useDispatch();
    const btnHandler = () => {
        dispatch(updateIsPlayerStatsShown());
    }
    const playerDataArr = useSelector((state: RootState) => state.playersArr);

    return (
        <div className="add-players game-container">
            <div className="form-container">
                <h2>Enter your name to join the game</h2>
                <PlayerForm />
            </div>
            {playerDataArr.length > 0 && <PlayerList />}

            {playerDataArr.length > 0 &&
                <div className="start-game-btn">
                    <NavLink to="/playGame">
                        <button
                            onClick={btnHandler}
                            className="game-btn"
                        >
                            Start Game
                        </button>
                    </NavLink>
                </div>
            }
        </div>
    )
}