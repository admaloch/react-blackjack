import { useState, createContext, Dispatch, SetStateAction } from "react";
import ProviderProps from "../../models/ProviderProps";

interface CardObjInterface {
    card: string,
    value: number,
    diamonds: number,
    clubs: number,
    hearts: number,
    spades: number,
}

const defaultDeck: CardObjInterface[] = [
    { card: '1', value: 1, diamonds: 6, clubs: 6, hearts: 6, spades: 6 },
    { card: '2', value: 2, diamonds: 6, clubs: 6, hearts: 6, spades: 6 },
    { card: '3', value: 3, diamonds: 6, clubs: 6, hearts: 6, spades: 6 },
    { card: '4', value: 4, diamonds: 6, clubs: 6, hearts: 6, spades: 6 },
    { card: '5', value: 5, diamonds: 6, clubs: 6, hearts: 6, spades: 6 },
    { card: '6', value: 6, diamonds: 6, clubs: 6, hearts: 6, spades: 6 },
    { card: '7', value: 7, diamonds: 6, clubs: 6, hearts: 6, spades: 6 },
    { card: '8', value: 8, diamonds: 6, clubs: 6, hearts: 6, spades: 6 },
    { card: '9', value: 9, diamonds: 6, clubs: 6, hearts: 6, spades: 6 },
    { card: '10', value: 10, diamonds: 6, clubs: 6, hearts: 6, spades: 6 },
    { card: 'jack', value: 10, diamonds: 6, clubs: 6, hearts: 6, spades: 6 },
    { card: 'queen', value: 10, diamonds: 6, clubs: 6, hearts: 6, spades: 6 },
    { card: 'kink', value: 10, diamonds: 6, clubs: 6, hearts: 6, spades: 6 },
    { card: 'ace', value: 11, diamonds: 6, clubs: 6, hearts: 6, spades: 6 },
]

export interface DeckContextProps {
    deck: CardObjInterface[];
    setDeck: Dispatch<SetStateAction<CardObjInterface[]>>;
}

export const DeckContext = createContext<DeckContextProps>({
    deck: defaultDeck,
    setDeck: () => { },
});

export function DeckProvider({ children }: ProviderProps): JSX.Element {
    const [deck, setDeck] = useState<CardObjInterface[]>(defaultDeck);
    
    
    return (
        <DeckContext.Provider value={{ deck, setDeck }}>
            {children}
        </DeckContext.Provider>
    );
}

