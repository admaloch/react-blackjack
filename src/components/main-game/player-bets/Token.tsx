import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { updatePlayer } from '../../../store/player-arr/playersArrSlice';
import { updatePlayerTokens } from './updatePlayerTokens';

interface TokenProps {
    number: number;
    currPlayerIndex: number;
    setIsBetValid: (input: boolean) => void;

}

export default function Token({ number, currPlayerIndex, setIsBetValid }: TokenProps) {
    const dispatch = useDispatch();
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const player = playersArr[currPlayerIndex]
    const { currBet, bank } = player

    const tokenClickHandler = (input: number) => {
        if (player.currBet >= player.minBet) {
            setIsBetValid(true);
        } else {
            setIsBetValid(false);
        }
        dispatch(updatePlayer({
            ...player,
            currBet: currBet + input,
            bank: bank - input,
            currTokens: updatePlayerTokens(bank - input)
        }));
    };

    const tokenId = `token${number}`

    return (
        <div
            id={tokenId}
            onClick={() => tokenClickHandler(number)}>
            {number}
        </div>
    );
}
