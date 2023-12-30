import "./AddPlayers.css"
import PlayerForm from "./PlayerForm"
import PlayerList from "./PlayerList"

export default function AddPlayers() {

    return (
        <div className="add-players">
            <div className="form-container">
                <h1>Enter your name to join the game</h1>
                <PlayerForm />
            </div>
            <PlayerList/>

        </div>
    )
}