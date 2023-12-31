import AssessmentIcon from '@mui/icons-material/Assessment';
import { IconWithPopper } from './IconsWithPopper';
import IconProps from './IconWithPopperProps';

export function StatsIconWithPopper({ placement = 'bottom' }: IconProps) {
    return (
        <IconWithPopper
            icon={(style) => <AssessmentIcon sx={style} />}
            text="Player Stats"
            placement={placement}
        />
    );
}