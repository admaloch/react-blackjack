import { useState, Dispatch, SetStateAction } from "react";
import ProviderProps from "../../models/ProviderProps";

interface PlayerObjInterface {
    name: string;
    hand: string[];
    handValues: number[];
    sum: number;
    isBlackjack: boolean;
    bank: number;
    bet: number;
    minBet: number;
    betDoubled: boolean;
    isPlayerActive: boolean;
    betOptions: string[];
    roundsWon: number;
}

export interface PlayersArrContextProps {
    playersArr: PlayerObjInterface[];
    setPlayersArr: Dispatch<SetStateAction<PlayerObjInterface[]>>;
}

const defaultPlayersArr: PlayerObjInterface[] = [
    {
        name: '',
        hand: [],
        handValues: [],
        sum: 0,
        isBlackjack: false,
        bank: 1000,
        bet: 0,
        minBet: 5,
        betDoubled: false,
        isPlayerActive: false,
        betOptions: ['$5', '$25', '$50', '$100', '$500', '$1000', 'All'],
        roundsWon: 0,
    }
];

export const PlayersArrContext = createContext<PlayersArrContextProps>({
    playersArr: defaultPlayersArr,
    setPlayersArr: () => { },
});

export function PlayersArrProvider({ children }: ProviderProps): JSX.Element {
    const [playersArr, setPlayersArr] = useState<PlayerObjInterface[]>(defaultPlayersArr);
    return (
        <PlayersArrContext.Provider value={{ playersArr, setPlayersArr }}>
            {children}
        </PlayersArrContext.Provider>
    );
}


