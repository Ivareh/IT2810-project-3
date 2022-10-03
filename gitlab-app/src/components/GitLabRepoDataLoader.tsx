import {
  Box,
  Container,
  Typography,
  TypographyProps,
  Grid,
} from "@mui/material";
import GitLabRepo from "./GitLabRepo";
import InputForm from "./InputForm";
import "./GitLabRepoDataLoader.css";

/* Loads GitLab data from a repo*/
function GitLabRepoDataLoader(props: TypographyProps) {
  return (
      <Grid container id="container">
          <Grid id="input">
          <h2>Repo Input</h2>
          <InputForm />
        </Grid>
        <Grid id="repoTable">
        <h2>Repo Data Table</h2>
        <GitLabRepo />
        </Grid>
      </Grid>
  );
}

export default GitLabRepoDataLoader;
