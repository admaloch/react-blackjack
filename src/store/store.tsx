import { configureStore } from "@reduxjs/toolkit";
import dealerObjReducer from "./dealer-obj/dealerObjSlice";
import playersArrReducer from "./player-arr/PlayersArrSlice";
import deckReducer from "./deck/deckSlice";

export const store = configureStore({
    reducer: {
        dealerObj: dealerObjReducer,
        playersArr: playersArrReducer,
        deck: deckReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch