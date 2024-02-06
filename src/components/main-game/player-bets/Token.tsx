import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { updatePlayer } from '../../../store/player-arr/playersArrSlice';
import { updatePlayerTokens } from './updatePlayerTokens';

interface TokenProps {
    number: number;
    currPlayerIndex: number;
}

export default function Token({ number, currPlayerIndex }: TokenProps) {
    const dispatch = useDispatch();
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const player = playersArr[currPlayerIndex]
    const { currBet, bank } = player




    const tokenClickHandler = (input: number) => {
        dispatch(updatePlayer({
            ...player,
            currBet: currBet + input,
            bank: bank - input,
            beginningRoundBank: bank - input,
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
