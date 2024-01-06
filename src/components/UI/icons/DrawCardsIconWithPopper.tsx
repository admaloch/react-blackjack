import AddCardsIcon from '../../../assets/add-cards-icon.svg'
import { IconWithPopper } from './IconsWithPopper';
import IconProps from './IconWithPopperProps';

export function DrawCardsIconWithPopper({ placement = 'bottom' }: IconProps) {
    return (
        <IconWithPopper
            icon={() => <AddCardsIcon />}
            text="Draw card"
            placement={placement}
        />
    );
}