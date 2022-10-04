import { Grid, TypographyProps, } from "@mui/material";
import GitLabRepo from "./GitLabRepo";
import InputForm from "./forms/InputForm";
import "./component-css/GitLabRepoDataLoader.css";

/* Loads GitLab data from a repo*/
function GitLabRepoDataLoader(props: TypographyProps) {
    return (
        <Grid container id="container">
            <Grid
                id="input"
                sx={{ width: '100%', alignItems: 'center' }}

            >
                <h2>Repo Input</h2>
                <hr />

                <InputForm />
            </Grid>
            <Grid id="repoTable">
                <h2>Repo Data Table</h2>
                <hr />
                <GitLabRepo />
            </Grid>
        </Grid>
    );
}

export default GitLabRepoDataLoader;
