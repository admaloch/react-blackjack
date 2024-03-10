import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { updatePlayer } from '../../../store/player-arr/playersArrSlice';
import { updatePlayerTokens } from './updatePlayerTokens';
import Token from './Token';
interface TokensProps {
    currPlayerIndex: number;
    setIsBetValid: (input: boolean) => void;
}

export default function Tokens({ currPlayerIndex, setIsBetValid }: TokensProps) {

    const dispatch = useDispatch();
    const playersArr = useSelector((state: RootState) => state.playersArr);

    const allTokensHandler = () => {
        const updatedBet = playersArr[currPlayerIndex].currBet + playersArr[currPlayerIndex].bank
        const updatedTokens = updatePlayerTokens(0)
        dispatch(updatePlayer({ ...playersArr[currPlayerIndex], bank: 0, currBet: updatedBet, currTokens: updatedTokens }));
    }

    const allTokensClass = playersArr[currPlayerIndex].bank > 0
        ? "all-tokens"
        : "all-tokens disabled"


    return (
        <div className="tokens-container">
            {playersArr[currPlayerIndex].currTokens
                .map((item) => (
                    <Token 
                    key={item} number={item} 
                    currPlayerIndex={currPlayerIndex} 
                    setIsBetValid={setIsBetValid}

                    />
                ))}
            <div
                onClick={allTokensHandler}
                className={allTokensClass}>All
            </div>


        </div>
    );
}
