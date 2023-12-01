import { useContext } from 'react';

import { DeckContext, DeckContextProps } from './DeckContext';

export function useDeckContext(): DeckContextProps {
    const deckContext = useContext(DeckContext);
    return deckContext;
}