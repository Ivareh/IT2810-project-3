import GitLabIcon from "./custom-icons/GitLabIcon";
import { Grid, IconButton } from "@mui/material";
import "./component-css/Header.css";

// Header of the application
function Header() {
    return (
        <Grid id="header">
            <Grid id="navigationMenu"
                container spacing={0}>
                <Grid id="logo" container spacing={0}>
                    {" "}
                    <IconButton id="icon">
                        <a rel="noopener noreferrer" href="https://gitlab.stud.idi.ntnu.no/it2810-h22/Team-62/it2810-h22-team-62"
                            target="_blank"><GitLabIcon htmlColor="#e24329"
                                fontSize="large" /></a>

                    </IconButton>

                </Grid>
            </Grid>
            <Grid
                id="mainText"
                container
                direction="column"
                display="flex"
                position="absolute"
                alignItems={"center"}
                justifyContent="center"
            >
                <h1>GitLab Repo</h1>
                <p>Helps you visualize your GitLab data</p>
            </Grid>
        </Grid>
    );
}

export default Header;
