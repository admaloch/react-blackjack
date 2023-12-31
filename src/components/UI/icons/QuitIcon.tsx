import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconWithPopper } from './Icons';

export function QuitGameIcon() {
    return (
        <IconWithPopper
            icon={(style) => <HighlightOffIcon sx={style} />}
            text="Quit game"
        />
    );
}