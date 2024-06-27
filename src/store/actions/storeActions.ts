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
import { getOrCreateCookie } from "../../utils/cookieUtils";

// Define Store Interface
interface storeInterface {
    dealerObj: DealerObjInterface;
    playersArr: PlayerInterface[];
    deck: CardObjInterface[];
    gameData: GameDataProps;
    inactivePlayers: PlayerInterface[];
}

const firebaseUrlBase = 'https://blackjack-2c434-default-rtdb.firebaseio.com';

export const fetchStoreData = (): ThunkAction<void, RootState, unknown, Action<string>> => {
    const userId = getOrCreateCookie('blackjack-user');
    return async (dispatch) => {
        const updatedUrl = `${firebaseUrlBase}/blackjack/${userId}.json`;
        const fetchData = async () => {
            const response = await fetch(updatedUrl);
            if (!response.ok) {
                throw new Error('Could not fetch data');
            }
            const data = await response.json();
            return data;
        };
        try {
            const data = await fetchData();
            // console.log('fetched data:', data)
            if (data && data.playersArr && data.playersArr.length > 0) {
                // const updatedPlayers = [...data.playersArr].map(p)

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


export const sendStoreData = (store: storeInterface): ThunkAction<void, RootState, unknown, Action<string>> => {
    const userId = getOrCreateCookie('blackjack-user');

    return async () => {
        const updatedUrl = `${firebaseUrlBase}/blackjack/${userId}.json`;
        try {
            const response = await fetch(updatedUrl, {
                method: "PUT",
                body: JSON.stringify(store),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };
};
export const deleteStoreData = (): ThunkAction<void, RootState, unknown, Action<string>> => {
    const userId = getOrCreateCookie('blackjack-user');
    return async () => {
        const updatedUrl = `${firebaseUrlBase}/blackjack/${userId}.json`;
        try {
            const response = await fetch(updatedUrl, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };
};


