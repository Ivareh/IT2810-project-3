import { useNavigate } from "react-router-dom";
import GitLabIcon from "./custom-icons/GitLabIcon";
import { Grid, IconButton } from "@mui/material";
import "./Header.css";
import SwapModes from "./SwapModes";
import React from "react";

// Header of the application
function Header() {
  const navigate = useNavigate();
  return (
    <Grid id="header">
      <Grid id="navigationMenu" container spacing={0}>
        <Grid id="logo" container spacing={0}>
          {" "}
          <IconButton id="icon" onClick={() => navigate("/")}>
            <GitLabIcon htmlColor="#e24329" fontSize="large"></GitLabIcon>
          </IconButton>
          <Grid id="menu">
            <Grid>GitLab Repo</Grid>
            <Grid id="about" item marginRight={10}>
              About us
            </Grid>
            <Grid id="loader" item marginRight={10}>
              GitLab Repo Data
            </Grid>
          </Grid>
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
