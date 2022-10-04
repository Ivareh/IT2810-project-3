import {
    AppBar,
    AppBarProps,
    IconButton,
    ThemeProvider,
    Toolbar
} from '@mui/material'
import GitLabTheme from '../themes/GitLabTheme'
import GitLabIcon from './custom-icons/GitLabIcon'
import Menu from './Menu'
import { useNavigate } from 'react-router-dom'


/* Customised App Bar */
function GitLabAppBar(props: AppBarProps) {
    {
        const navigate = useNavigate()

        return (
            <ThemeProvider theme={GitLabTheme}>
                <AppBar>
                    <Toolbar>
                        <IconButton onClick={() => navigate("/")}>
                            <GitLabIcon htmlColor="#e24329" fontSize="large" />
                        </IconButton>
                        <Menu />
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        )
    }
}

export default GitLabAppBar