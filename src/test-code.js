import { useDispatch, useSelector } from 'react-redux';
import { PlayerInterface } from '../../../../models/PlayerProps'
import { RootState } from '../../../../store/store';
import { updateIsInsuranceRoundComplete } from '../../../../store/game-data/GameDataSlice';
import { useEffect, useState } from 'react';
import { delay } from '../../../../utils/Utility';
import { updatePlayer } from '../../../../store/player-arr/playersArrSlice';

export interface PlayerProps {
    player: PlayerInterface;
}

export default function InsuranceResults({ player }: PlayerProps) {

    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const dispatch = useDispatch()
    const { cardNumVals } = dealerObj.hand

    const { isDealerCardRevealed, isDealerRoundActive } = useSelector((state: RootState) => state.gameData);

    const [insuranceResults, setInsuranceResults] = useState({
        status: '',
        class_: 'insurance-msg',
        isComplete: false,
    })

    useEffect(() => {
        async function changeInsuranceResults() {
            await delay(4000)
            if (isDealerCardRevealed && player.insuranceBet !== 0) {
                if (cardNumVals[0] === 10 && cardNumVals[1] === 11) {
                    setInsuranceResults({
                        status: "Won!",
                        class_: 'insurance-msg win-color revealed',
                        isComplete: true,
                    })
                } else {
                    setInsuranceResults({
                        status: "Lost!",
                        class_: 'insurance-msg lose-color revealed',
                        isComplete: true,
                    })
                }
            }
        }
        changeInsuranceResults()
    }, [isDealerCardRevealed, cardNumVals, player])

    useEffect(() => {
        async function updateInsuranceHand() {
            await delay(2500)
            if (insuranceResults.isComplete && player.insuranceBet !== 0) {
                if (insuranceResults.status === 'Won!') {
                    dispatch(updatePlayer({
                        ...player,
                        bank: player.bank + player.insuranceBet + player.currBet,
                        wonInsuranceRound: true,
                        insuranceBet: 0,
                        currBet: 0,
                    }));
                } else {
                    dispatch(updatePlayer({
                        ...player,
                        insuranceBet: 0,
                    }));
                }
            }
        }
        updateInsuranceHand()
    }, [insuranceResults, player, dispatch])

    useEffect(() => {
        if (isDealerRoundActive && insuranceResults.isComplete && player.insuranceBet === 0 && insuranceResults.status !== '') {

            dispatch(updateIsInsuranceRoundComplete())
        }
    }, [insuranceResults, dispatch, player, isDealerRoundActive])



    return (
        <>

            <p
                className={`${insuranceResults.class_} hide-item ${insuranceResults.status !== '' ? 'reveal-item' : ''}`}
            >
                Insurance {insuranceResults.status}
            </p >



        </>
    )
}
