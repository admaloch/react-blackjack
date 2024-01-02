import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { updatePlayer } from '../../../store/player-arr/playersArrSlice';
import { updatePlayerTokens } from './updatePlayerTokens';
import Token from './Token';
interface TokensProps {
    currPlayerIndex: number;
}

export default function Tokens({ currPlayerIndex }: TokensProps) {

    const dispatch = useDispatch();
    const playersArr = useSelector((state: RootState) => state.playersArr);

    const allTokensHandler = () => {
        const updatedBet = playersArr[currPlayerIndex].currBet + playersArr[currPlayerIndex].bank
        const updatedTokens = updatePlayerTokens(0)
        dispatch(updatePlayer({ ...playersArr[currPlayerIndex], bank: 0, currBet: updatedBet, currTokens: updatedTokens }));
    }


    return (
        <div className="tokens-container">
            {playersArr[currPlayerIndex].currTokens
                .map((item) => (
                    <Token key={item} number={item} currPlayerIndex={currPlayerIndex} />
                ))}
            {playersArr[currPlayerIndex].bank > 0 &&
                <div
                    onClick={allTokensHandler}
                    className="all-tokens">All</div>
            }
        </div>
    );
}
