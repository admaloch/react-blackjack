
import {  PlayerInterfaceProps } from '../../models/PlayerProps';

export default function MoneyWonOrLost({player}: PlayerInterfaceProps) {

    const { bank, beginningRoundBank } = player
    const { splitResults } = player.roundResults

    let moneyWonOrLostStr: string = ''

    if (splitResults === 'Won') {
        moneyWonOrLostStr = `Money earned: ${bank - beginningRoundBank}`
    } else if (splitResults === 'Lost') {
        moneyWonOrLostStr = `Money lost: ${beginningRoundBank - bank}`
    } else {
        moneyWonOrLostStr = ''
    }

    return (
        <p>{moneyWonOrLostStr}</p>
    )
}
