import { AppBar, AppBarProps, IconButton, ThemeProvider, Toolbar, Typography } from '@mui/material'
import GitLabTheme from '../themes/GitLabTheme'
import GitLabIcon from './GitLabIcon'
import Menu from './Menu'

/* Customised App Bar */
function GitLabAppBar(props: AppBarProps){ {
  return (
    <div>
        <ThemeProvider theme={GitLabTheme}>
            <AppBar>
                <Toolbar>
                  <IconButton>
                    <GitLabIcon htmlColor="#e24329" fontSize="large"></GitLabIcon>
                  </IconButton>
                  <Menu></Menu>
                  <Typography variant="h6" align="center" color="white" sx={{marginLeft:2}}>
                      GitLab Repo Dataloader
                  </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    </div>
    
  )}
}

export default GitLabAppBar