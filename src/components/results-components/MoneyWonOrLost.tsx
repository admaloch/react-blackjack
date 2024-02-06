
import { PlayerInterfaceProps } from '../../models/PlayerProps';

export default function MoneyWonOrLost({ player }: PlayerInterfaceProps) {

    const { bank, beginningRoundBank } = player

    let moneyWonOrLostStr: string = ''
    if (bank > beginningRoundBank) {
        moneyWonOrLostStr = `Money earned: $${bank - beginningRoundBank}`
    } else if (bank < beginningRoundBank) {
        moneyWonOrLostStr = `Money lost: $${beginningRoundBank - bank}`
    } else {
        moneyWonOrLostStr = 'Broke even'
    }



    return (
        <p>{moneyWonOrLostStr}</p>
    )
}
