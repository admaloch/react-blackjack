// useUpdateStore.ts
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { sendStoreData } from './storeActions';

export const useUpdateStore = () => {
    const dispatch: AppDispatch = useDispatch();
    const store = useSelector((state: RootState) => state);

    const updateStore = () => {
        dispatch(sendStoreData(store));
    };

    return updateStore;
};
