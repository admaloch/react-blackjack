

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { removePlayer } from '../../store/player-arr/playersArrSlice';
import { useDispatch } from 'react-redux';
import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';


interface PlayerProps {
    name: string;
}






export default function Player({ name }: PlayerProps) {


    // popper
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);


    const canBeOpen = open && Boolean(anchorEl);
    const deletePopperId = canBeOpen ? 'transition-popper' : undefined;


    const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };
    const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };


    // delete player from game
    const dispatch = useDispatch();
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1)


    const removePlayerHandler = () => {
        dispatch(removePlayer({ name: name }))
    }


    return (
        <li>
            {formattedName}
            <div
                onClick={removePlayerHandler}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                aria-describedby={deletePopperId}
                className="delete-icon">
                <DeleteForeverIcon />
            </div>
            <Popper
                placement="right"
                id={deletePopperId}
                open={open}
                anchorEl={anchorEl}
                transition
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Box
                            sx={{
                                border: 1,
                                p: 0.2,
                                bgcolor: 'background.paper',
                                borderRadius: 1, // Adjust the border-radius value as needed
                            }}
                        >
                            Remove player
                        </Box>
                    </Fade>
                )}
            </Popper>


        </li >
    )
}
