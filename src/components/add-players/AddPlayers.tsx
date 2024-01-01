import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./AddPlayers.css"
import PlayerForm from "./PlayerForm"
import PlayerList from "./PlayerList"
import Button from "../UI/button/Button";
import { NavLink } from "react-router-dom";


export default function AddPlayers() {

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
                    <Button>
                        <NavLink to="/playGame">Start Game</NavLink>
                    </Button>
                </div>
            }
        </div>
    )
}