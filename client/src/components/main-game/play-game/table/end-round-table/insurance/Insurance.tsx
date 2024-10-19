import InsuranceResults from './InsuranceResults';
import { PlayerInterface } from '../../../../../../models/PlayerProps';

export interface PlayerProps {
    player: PlayerInterface;
}

export default function Insurance({ player }: PlayerProps) {
    const { insuranceBet } = player

    return (
        <>
            {insuranceBet !== 0 &&
                <p>Insurance: {player.insuranceBet}</p>
            }
            <InsuranceResults player={player} />
        </>
    )
}
