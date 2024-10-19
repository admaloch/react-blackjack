import ExitTableIcon from '../../../assets/ExitTable';
import { IconWithPopper } from './IconsWithPopper';
import IconProps from './IconWithPopperProps';

export function ExitTableIconWithPopper({ placement = 'bottom' }: IconProps) {
    return (
        <IconWithPopper
            icon={() => <ExitTableIcon />}
            text="Leave table"
            placement={placement}
        />
    );
}