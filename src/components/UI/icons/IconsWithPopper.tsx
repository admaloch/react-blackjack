import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import './IconsWithPopper.css'
import IconProps from './IconWithPopperProps';

interface IconWithPopperProps extends IconProps {
  icon: React.ComponentType<{ sx?: React.CSSProperties }>;
  text: string;
}

export function IconWithPopper({ icon: IconComponent, text, placement = 'bottom' }: IconWithPopperProps) {
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
  const id = canBeOpen ? 'icon-popper' : undefined;

  return (
    <div
      className="icon-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <IconComponent />
      <Popper placement={placement} id={id} open={canBeOpen} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box
              sx={{
                border: 1,
                p: 1,
                bgcolor: 'background.paper',
                borderRadius: 2,
                paddingTop: 0.2,
                paddingBottom: 0.2,
                paddingRight: 2,
                paddingLeft: 2,
                marginTop: 1.5,
              }}
            >
              {text}
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
