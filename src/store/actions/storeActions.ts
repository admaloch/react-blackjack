import { ThunkAction } from "redux-thunk";
import CardObjInterface from "../../models/CardProps";
import { DealerObjInterface, PlayerInterface } from "../../models/PlayerProps";
import { GameDataProps } from "../game-data/GameDataProps";
import { RootState } from "../store";
import { Action } from "@reduxjs/toolkit";
import { setPlayers } from "../player-arr/PlayersArrSlice";
import { setInactivePlayers } from "../inactive-players/InactivePlayersSlice";
import { setDeck } from "../deck/deckSlice";
import { setDealer } from "../dealer-obj/dealerObjSlice";

// Define Store Interface
interface storeInterface {
    dealerObj: DealerObjInterface;
    playersArr: PlayerInterface[];
    deck: CardObjInterface[];
    gameData: GameDataProps;
    inactivePlayers: (PlayerInterface | null)[];
}

const firebaseUrl = 'https://blackjack-2c434-default-rtdb.firebaseio.com/state.json';

export const fetchStoreData = (): ThunkAction<void, RootState, unknown, Action<string>> => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(firebaseUrl);
            if (!response.ok) {
                throw new Error('Could not fetch data');
            }
            const data = await response.json();
            return data;
        };
        try {
            const data = await fetchData();
            console.log('fetched data:', data)
            if (data.playersArr && data.playersArr.length > 0) {
                dispatch(setDealer(data.dealerObj));
                dispatch(setPlayers(data.playersArr));
                dispatch(setDeck(data.deck));
                dispatch(setInactivePlayers(data.inactivePlayers));
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
};

// Thunk Action to Send Store Data
export const sendStoreData = (store: storeInterface): ThunkAction<void, RootState, unknown, Action<string>> => {
    return async () => {
        // try {
        //     const response = await fetch(firebaseUrl, {
        //         method: "PUT",
        //         body: JSON.stringify(store),
        //         headers: {
        //             "Content-Type": "application/json"
        //         }
        //     });
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }
        // } catch (error) {
        //     console.error('Error saving data:', error);
        // }

        console.log('sendStore data ran')
    };
};



