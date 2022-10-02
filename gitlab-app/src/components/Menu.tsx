
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, ThemeProvider, Typography } from '@mui/material';
import GitLabTheme from '../themes/GitLabTheme';
import { useNavigate, useLocation } from 'react-router-dom';
import { grey } from '@mui/material/colors';


/* This component is from https://mui.com/material-ui/react-menu/ with some customization */
export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [buttonFlag, setButtonFlag] = React.useState(true);

  const location = useLocation().pathname.toString();
  const isDataLoader = location === "/";
  const isGitLabRepo = location === "/gitlab-repo";

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setButtonFlag(!buttonFlag);
  };

  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
    setButtonFlag(!buttonFlag);
  };

  const handleCloseWithPath = (path: String) => {
    setAnchorEl(null);
    setButtonFlag(!buttonFlag);
    if(path !== "[object%20Object]")
      navigate("" + path);
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
          <MenuItem onClick={(e) => handleCloseWithPath("/")}>
            {isDataLoader ? (
              <Typography fontWeight={500}>GitLab Repo Dataloader</Typography>
            ) : (
              <Typography>GitLab Repo Dataloader</Typography>
            )}
          </MenuItem>
        </Menu>

      </ThemeProvider>
    </div>
  );
}