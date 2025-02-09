import { useState } from "react";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { emptyPlayerItem } from "../../models/PlayerProps";
import { addPlayer } from "../../store/player-arr/PlayersArrSlice";

export default function PlayerForm() {
  const playerArr = useSelector((state: RootState) => state.playersArr);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>("");
  const [isNameValid, setIsNameValid] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("Please enter a valid name");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isNameValid =
      inputValue.trim().length > 0 &&
      playerArr.length < 5 &&
      !playerArr.some(
        (player) =>
          player.name.toLowerCase() === inputValue.trim().toLowerCase(),
      );

    if (isNameValid) {
      const formattedName =
        inputValue.trim().charAt(0).toUpperCase() + inputValue.trim().slice(1);
      dispatch(addPlayer({ ...emptyPlayerItem, name: formattedName }));
      setInputValue("");
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
      if (inputValue.trim().length === 0) {
        setErrorMsg("Valid names must have at least 1 character");
      } else if (playerArr.length === 5) {
        setErrorMsg("Only 5 players can join");
      } else {
        setErrorMsg(
          `There is already a player named ${inputValue}. Try adding a distinguishing feature like a last name`,
        );
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          className={`name-input ${!isNameValid ? "error" : ""}`}
          type="text"
          placeholder="Enter Name"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button className="game-btn">Add Player</button>
      </div>
      {!isNameValid && <span className="error-message">{errorMsg}</span>}
    </form>
  );
}
