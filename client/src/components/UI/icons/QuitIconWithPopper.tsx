import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconWithPopper } from './IconsWithPopper';
import IconProps from './IconWithPopperProps';
export function QuitIconWithPopper({ placement = 'bottom' }: IconProps) {
    return (
        <IconWithPopper
            icon={(style) => <HighlightOffIcon sx={style} />}
            text="Quit game"
            placement={placement}
        />
    );
}