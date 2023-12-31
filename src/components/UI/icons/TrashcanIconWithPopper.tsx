import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconWithPopper } from './IconsWithPopper';
import IconProps from './IconWithPopperProps';

export function TrashcanIconWithPopper({ placement = 'bottom' }: IconProps) {
    return (
        <IconWithPopper

            icon={(style) => <DeleteForeverIcon sx={style} />}
            text="Leave table"
            placement={placement}


        />
    );
}