import { useDispatch, useSelector } from 'react-redux';
import { PlayerInterface } from '../../../../../../models/PlayerProps'
import { RootState } from '../../../../../../store/store';
import { useEffect, useState } from 'react';
import { delay } from '../../../../../../utils/Utility';
import { updatePlayer } from '../../../../../../store/player-arr/playersArrSlice';

export interface PlayerProps {
    player: PlayerInterface;
}

export default function InsuranceResults({ player }: PlayerProps) {

    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const dispatch = useDispatch()
    const { cardNumVals } = dealerObj.hand



    const { isDealerCardRevealed } = useSelector((state: RootState) => state.gameData);

    const [insuranceResults, setInsuranceResults] = useState({
        status: '',
        class_: 'insurance-msg',
        isComplete: false,
    })

    useEffect(() => {
        let isMounted = true;
        async function changeInsuranceResults() {
            if (isMounted) {
                await delay(4000);
                if (isDealerCardRevealed && player.insuranceBet !== 0) {
                    if (cardNumVals[0] === 10 && cardNumVals[1] === 11) {
                        setInsuranceResults({
                            status: "Won!",
                            class_: 'insurance-msg win-color revealed',
                            isComplete: true,
                        });
                    } else {
                        setInsuranceResults({
                            status: "Lost!",
                            class_: 'insurance-msg lose-color revealed',
                            isComplete: true,
                        });
                    }
                }
            }
        }
        changeInsuranceResults();
        return () => { isMounted = false }
    }, [isDealerCardRevealed, cardNumVals, player])

    useEffect(() => {
        const { bank, insuranceBet, currBet, splitBet } = player
        let isMounted = true;
        async function updateInsuranceHand() {
            if (isMounted) {
                await delay(2500)
                if (insuranceResults.isComplete && player.insuranceBet !== 0) {
                    if (insuranceResults.status === 'Won!') {
                        dispatch(updatePlayer({
                            ...player,
                            bank: bank + insuranceBet + currBet + splitBet,
                            wonInsuranceRound: true,
                            insuranceBet: 0,
                            currBet: 0,
                            splitBet: 0,
                        }));
                    } 
                    else {
                        dispatch(updatePlayer({
                            ...player,
                            insuranceBet: 0,
                        }));
                    }
                }
            }
        }
        updateInsuranceHand()
        return () => { isMounted = false }
    }, [insuranceResults, player, dispatch])

    return (
        <>
            {insuranceResults.status !== '' &&
                <p className={insuranceResults.class_}>Insurance {insuranceResults.status}</p>
            }
        </>
    )
}
