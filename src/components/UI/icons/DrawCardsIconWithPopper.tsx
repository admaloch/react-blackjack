import DrawCardsIcon from '../../../assets/DrawCardsIcon'
import { IconWithPopper } from './IconsWithPopper';
import IconProps from './IconWithPopperProps';

export function DrawCardsIconWithPopper({ placement = 'bottom' }: IconProps) {
    return (
        <IconWithPopper
            icon={() => <DrawCardsIcon />}
            text="Draw card"
            placement={placement}
        />
    );
}