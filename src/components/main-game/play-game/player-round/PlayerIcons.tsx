import { DrawCardsIconWithPopper } from '../../../UI/icons/DrawCardsIconWithPopper'

export default function PlayerIcons() {

    const drawCardsHandler = () =>{
console.log('clicked')
    }

    return (
        <div className='icons'>
            <div
                onClick={drawCardsHandler}
                className="draw-cards-icon">
                <DrawCardsIconWithPopper placement='right' />
            </div>
        </div>
    )
}
