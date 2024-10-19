// useUpdateStore.ts
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { sendStoreData } from './storeActions';
import { storeInterface } from './storeActions';

export const useUpdateStore = () => {
    const dispatch: AppDispatch = useDispatch();
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const deck = useSelector((state: RootState) => state.deck);
    const gameData = useSelector((state: RootState) => state.gameData);
    const inactivePlayers = useSelector((state: RootState) => state.inactivePlayers);

    const store: storeInterface = {
        dealerObj,
        playersArr,
        deck,
        gameData,
        inactivePlayers,
    };

    const updateStore = () => {
        dispatch(sendStoreData(store));
    };

    return updateStore;
};
