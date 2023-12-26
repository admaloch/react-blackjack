
import { createSlice } from "@reduxjs/toolkit";

 interface DealerObjInterface {
    name: string;
    hand: string[];
    handValues: number[];
    sum: number;
    isBlackjack: boolean;
}

//  interface DealerObjContextProps {
//     dealerObj: DealerObjInterface;
//     setDealerObj: Dispatch<SetStateAction<DealerObjInterface>>;
// }

const initialState: DealerObjInterface = {
    name: '',
    hand: [],
    handValues: [],
    sum: 0,
    isBlackjack: false,
}

const dealerObjSlice = createSlice({
    name: 'dealer-obj',
    initialState,
    reducers: {},
})


export default dealerObjSlice.reducer