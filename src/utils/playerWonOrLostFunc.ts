import { DealerObjInterface, PlayerInterface } from "../models/PlayerProps"

const playerWonOrLostFunc = (player: PlayerInterface, dealerObj: DealerObjInterface, mainOrSplit = 'main'): string => {
    const { wonInsuranceRound } = player
    const currHand = mainOrSplit === 'main' ? player.hand : player.splitHand
    const { cardSum, cardUrlVals } = currHand
    const playerHasBJ = cardSum === 21 && cardUrlVals.length === 2 ? true : false
    const dealerCardSum = dealerObj.hand.cardSum
    const didPlayerBust = cardSum > 21
    const didDealerBust = dealerObj.hand.cardSum > 21
    const dealerHasBJ = dealerObj.hand.cardSum === 21 && dealerObj.hand.cards.length === 2

    if (dealerHasBJ && wonInsuranceRound) {
        return 'Insured'
    } else if (playerHasBJ && !dealerHasBJ || !didPlayerBust && didDealerBust || !didPlayerBust && !didDealerBust && cardSum > dealerCardSum) {
        return 'Won'
    } else if (!playerHasBJ && dealerHasBJ || didPlayerBust && !didDealerBust || !didPlayerBust && !didDealerBust && cardSum < dealerCardSum) {
        return 'Lost'
    } else {
        return 'Push'
    }
}
export default playerWonOrLostFunc