// custom hooks for createGameSession, updateGameSession, deleteGameSession in backend api
import {
  useCreateGameSessionMutation,
  useDeleteGameSessionMutation,
  useUpdateGameSessionMutation,
} from "./gameSessionsApiSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Cookies from "js-cookie";

const useUpdateGameSessionApi = () => {
  const [createGameSession] = useCreateGameSessionMutation();
  const [updateGameSession] = useUpdateGameSessionMutation();
  const [deleteGameSession] = useDeleteGameSessionMutation();

  const sessionId = Cookies.get('blackjack-session-id');

  const playersArr = useSelector((state: RootState) => state.playersArr);
  const inactivePlayers = useSelector(
    (state: RootState) => state.inactivePlayers
  );
  const dealerObj = useSelector((state: RootState) => state.dealerObj);
  const gameData = useSelector((state: RootState) => state.gameData);
  const deck = useSelector((state: RootState) => state.deck);

  const createGameSessionHandler = async () => {
    try {
      const response = await createGameSession({
        playersArr,
        inactivePlayers,
        dealerObj,
        gameData,
        deck,
      }).unwrap();
      console.log(
        `Game session created with session id#: ${response.gameSession._id}`
      );
      const sessionId = response.gameSession._id;
      Cookies.set("blackjack-session-id", sessionId, { expires: 365 });
    } catch (e) {
      console.error("Failed to create game session:", e);
    }
  };

  const updateGameSessionHandler = async () => {
    // Create game session here with state
    try {
      const response = await updateGameSession({
        playersArr,
        inactivePlayers,
        dealerObj,
        gameData,
        deck,
        id: sessionId,
      }).unwrap();
      console.log(`Game session id#: ${response.gameSession._id} updated`);
    } catch (e) {
      console.error("Failed to update game session:", e);
    }
  };

  const deleteGameSessionHandler = async () => {
    // Create game session here with state
    try {
      const response = await deleteGameSession({
        playersArr,
        inactivePlayers,
        dealerObj,
        gameData,
        deck,
      }).unwrap();
      console.log(`Game session id#: ${response.gameSession._id} updated`);
    } catch (e) {
      console.error("Failed to update game session:", e);
    }
  };

  return {
    createGameSessionHandler,
    updateGameSessionHandler,
    deleteGameSessionHandler,
  };
};

export default useUpdateGameSessionApi;
