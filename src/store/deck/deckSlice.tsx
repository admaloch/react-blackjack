import { createSlice } from "@reduxjs/toolkit";

interface CardObjInterface {
  card: string;
  value: number;
  suits: number[];
}



const initialState: CardObjInterface[] = [
  { card: '1', value: 1, suits: [6,6,6,6]},
  { card: '2', value: 2, suits: [6,6,6,6]},
  { card: '3', value: 3, suits: [6,6,6,6]},
  { card: '4', value: 4, suits: [6,6,6,6]},
  { card: '5', value: 5, suits: [6,6,6,6]},
  { card: '6', value: 6, suits: [6,6,6,6]},
  { card: '7', value: 7, suits: [6,6,6,6]},
  { card: '8', value: 8, suits: [6,6,6,6]},
  { card: '9', value: 9, suits: [6,6,6,6]},
  { card: '10', value: 10, suits: [6,6,6,6]},
  { card: 'jack', value: 10, suits: [6,6,6,6]},
  { card: 'queen', value: 10, suits: [6,6,6,6]},
  { card: 'king', value: 10, suits: [6,6,6,6]},
  { card: 'ace', value: 11, suits: [6,6,6,6]},
]

const deckSlice = createSlice({
  name: 'dealer-obj',
  initialState,
  reducers: {
    updateDeck: (state, action) => {
      state === action.payload
    }
  },
})

export const { updateDeck } = deckSlice.actions


export default deckSlice.reducer



// const [deck, setDeck] = useState<CardObjInterface[]>(initialState);
// const [numCardsLeft, setNumCardsLeft] = useState(336);

// useEffect(() => {
//   const remainingCards = deck.reduce(
//     (acc, card) => acc + card.diamonds + card.clubs + card.hearts + card.spades,
//     0
//   );
//   setNumCardsLeft(remainingCards);
// }, [deck]);


