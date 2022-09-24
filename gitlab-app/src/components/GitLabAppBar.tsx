import { AppBar, AppBarProps, ThemeProvider, Toolbar, Typography } from '@mui/material'
import GitLabTheme from '../themes/GitLabTheme'

/* Customised App Bar */
function GitLabAppBar(props: AppBarProps){ {
  return (
    <div>
        <ThemeProvider theme={GitLabTheme}>
            <AppBar>
                <Toolbar>
                <Typography variant="h6" align="center" color="white">
                    Gitlab Repo Dataloader
                </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    </div>
    
  )}
}

export default GitLabAppBar