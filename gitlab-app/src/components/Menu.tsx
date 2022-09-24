
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, Typography } from '@mui/material';
import GitLabTheme from '../themes/GitLabTheme';


/* This component is from https://mui.com/material-ui/react-menu/ with some customization (added icon and adjusted menu text) */
export default function PositionedMenu() {
  var openMenu = false;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [buttonFlag, setButtonFlag] = React.useState(true);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setButtonFlag(!buttonFlag);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setButtonFlag(!buttonFlag);
  };

  return (
    <div>
      <ThemeProvider theme={GitLabTheme}>
      <Button 
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        color={buttonFlag ? "secondary" : "primary"}
        sx = {{backgroundColor: buttonFlag ? "primary" : "white", }}
        onClick={handleClick}
      >
        <MenuIcon fontSize="small" ></MenuIcon>
        <Typography variant="body2" fontSize="small" sx={{textTransform: "none", marginLeft:0.5}}>
            Menu
        </Typography>
    
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
          vertical: -16,
          horizontal: 0,
        }}
      >
        <MenuItem onClick={handleClose}>GitLab Repo</MenuItem>
        <MenuItem onClick={handleClose}>GitLab Repo Dataloader</MenuItem>
      </Menu>
      </ThemeProvider>
    </div>
  );
}