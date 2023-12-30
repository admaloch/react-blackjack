import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./AddPlayers.css"
import PlayerForm from "./PlayerForm"
import PlayerList from "./PlayerList"
import Button from "../UI/button/Button";



export default function AddPlayers() {

    const playerDataArr = useSelector((state: RootState) => state.playersArr);

    return (
        <div className="add-players">
            <div className="form-container">
                <h1>Enter your name to join the game</h1>
                <PlayerForm />
            </div>
            {playerDataArr.length > 0 && <PlayerList />}
            
            {playerDataArr.length > 0 && 
            <div className="start-game-btn">
                <Button>Begin Game</Button>
            </div>
            }
        </div>
    )
}