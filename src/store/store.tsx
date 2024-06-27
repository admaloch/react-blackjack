import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dealerObjReducer from './dealer-obj/dealerObjSlice';
import playersArrReducer from './player-arr/PlayersArrSlice';
import gameDataReducer from './game-data/GameDataSlice';
import deckReducer from './deck/deckSlice';
import InactivePlayerReducer from './inactive-players/InactivePlayersSlice';

export const store = configureStore({
    reducer: {
        dealerObj: dealerObjReducer,
        playersArr: playersArrReducer,
        deck: deckReducer,
        gameData: gameDataReducer,
        inactivePlayers: InactivePlayerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
