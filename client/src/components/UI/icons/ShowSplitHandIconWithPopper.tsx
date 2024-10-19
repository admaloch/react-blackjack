import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { IconWithPopper } from './IconsWithPopper';
import IconProps from './IconWithPopperProps';
export function ShowSplitHandIconWithPopper({ placement = 'top' }: IconProps) {
    return (
        <IconWithPopper
            icon={(style) => <ArrowCircleRightIcon sx={style} />}
            text="Show split hand"
            placement={placement}
        />
    );
}