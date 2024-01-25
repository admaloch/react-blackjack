import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';



export default function DealerDetails() {
    const { isDealerCardRevealed } = useSelector((state: RootState) => state.gameData);

    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const { name, hand } = dealerObj;

    return (
        <div className="dealer-details">
            <h2>{name}</h2>
            <p className={`dealer-sum ${isDealerCardRevealed ? 'revealed' : ''}`}>Sum: {hand.cardSum}</p>
        </div>
    );
}
