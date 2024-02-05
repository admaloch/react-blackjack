import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import InsuranceResults from './InsuranceResults';
import { beginInsuranceRound, endInsuranceRound, updateIsInsuranceRoundComplete } from '../../../../../../store/game-data/GameDataSlice';
import { RootState } from '../../../../../../store/store';
import { PlayerInterface } from '../../../../../../models/PlayerProps';

export interface PlayerProps {
    player: PlayerInterface;
}

export default function Insurance({ player }: PlayerProps) {

    const dispatch = useDispatch()

    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const { isInsuranceRoundComplete, isDealerRoundActive } = useSelector((state: RootState) => state.gameData);

    const { insuranceBet } = player

    



    return (
        <>
            {insuranceBet !== 0 &&
                <p>Insurance: {insuranceBet}</p>
            }
            <InsuranceResults player={player} />
        </>
    )
}
