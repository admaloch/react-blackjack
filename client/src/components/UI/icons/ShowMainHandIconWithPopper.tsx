import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';import { IconWithPopper } from './IconsWithPopper';
import IconProps from './IconWithPopperProps';
export function ShowMainHandIconWithPopper({ placement = 'top' }: IconProps) {
    return (
        <IconWithPopper
            icon={(style) => <ArrowCircleLeftIcon sx={style} />}
            text="Show main hand"
            placement={placement}
        />
    );
}