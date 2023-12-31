import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconWithPopper } from './Icons';

export function TrashcanIcon() {
    return (
        <IconWithPopper
            icon={(style) => <DeleteForeverIcon sx={style} />}
            text="Leave table"
            placement='right'
        />
    );
}