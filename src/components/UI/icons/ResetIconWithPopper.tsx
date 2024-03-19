import { IconWithPopper } from './IconsWithPopper';
import IconProps from './IconWithPopperProps';
import RefreshIcon from '@mui/icons-material/Refresh';
export function ResetIconWithPopper({ placement = 'bottom' }: IconProps) {
    return (
        <IconWithPopper
            icon={(style) => <RefreshIcon sx={style} />}
            text="Reset bet"
            placement={placement}
        />
    );
}