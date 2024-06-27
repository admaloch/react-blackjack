// hook for updating firebase store

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { sendStoreData } from './storeActions';

export const useUpdateStore = () => {
    const dispatch = useDispatch();
    const store = useSelector((state: RootState) => state);
    const updateStore = () => {
        dispatch(sendStoreData(store))
    }
    return updateStore
};

