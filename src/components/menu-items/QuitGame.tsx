import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function QuitGame() {
  const [hovered, setHovered] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const canBeOpen = hovered && Boolean(anchorEl);
  const id = canBeOpen ? 'quit-game-popper' : undefined;

  return (
    <div
      className="icon-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <HighlightOffIcon sx={{ fontSize: 30, marginLeft: 1 }} />

      <Popper id={id} open={canBeOpen} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box
              sx={{
                border: 1,
                p: 1,
                bgcolor: 'background.paper',
                borderRadius: 2, // Border radius
                paddingTop: .2, // Slight padding on the top
                paddingBottom: .2, // Slight padding on the bottom
                paddingRight: 2, // More padding on the right
                paddingLeft: 2, // More padding on the left
                marginTop: 1.5,
              }}
            >
              Quit game
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
