import AssessmentIcon from '@mui/icons-material/Assessment';
import { IconWithPopper } from './Icons';

export function PlayerStatsIcon() {
    return (
        <IconWithPopper
            icon={(style) => <AssessmentIcon sx={style} />}
            text="Player Stats"
        />
    );
}