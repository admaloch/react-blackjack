import { useState, createContext, Dispatch, SetStateAction } from "react";
import ProviderProps from "../../models/ProviderProps";

export default interface DealerObjInterface {
    name: string;
    hand: string[];
    handValues: number[];
    sum: number;
    isBlackjack: boolean;
}

export interface DealerObjContextProps {
    dealerObj: DealerObjInterface;
    setDealerObj: Dispatch<SetStateAction<DealerObjInterface>>;
}

const defaultdealerObj: DealerObjInterface = {
        name: '',
        hand: [],
        handValues: [],
        sum: 0,
        isBlackjack: false,
    }


export const DealerObjContext = createContext<DealerObjContextProps>({
    dealerObj: defaultdealerObj,
    setDealerObj: () => { },
});

export function DealerObjProvider({ children }: ProviderProps): JSX.Element {
    const [dealerObj, setDealerObj] = useState<DealerObjInterface>(defaultdealerObj);
    return (
        <DealerObjContext.Provider value={{ dealerObj, setDealerObj }}>
            {children}
        </DealerObjContext.Provider>
    );
}