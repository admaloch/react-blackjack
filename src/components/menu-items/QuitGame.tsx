import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { QuitIconWithPopper } from "../UI/icons/QuitIconWithPopper";
import { RootState } from "../../store/store";
import { addInactivePlayers } from "../../store/inactive-players/InactivePlayersSlice";

export default function QuitGame() {
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const quitGameHandler = () => {
    dispatch(addInactivePlayers(playersArr))
    navigate("/finalResults");
  };

  return (
    <div onClick={quitGameHandler}>
      <QuitIconWithPopper />
    </div>
  );
}
