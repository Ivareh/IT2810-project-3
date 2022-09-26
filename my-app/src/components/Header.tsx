import { Grid } from "@mui/material";
import React from "react";
import imageToAdd from "../assets/images/pnglogo.png";
import background from "../assets/images/bakgrunnsbilde.jpg";

export default function Header() {
  return (
    <Grid
      className="header"
      height={"100vh"}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid
        className="navigationMenu"
        container
        spacing={0}
        direction="column"
        justifyContent="center"
      >
        <Grid
          display="flex"
          alignItems={"center"}
          justifyContent="right"
          style={{ height: "150px" }}
          container
          spacing={0}
        >
          <img
            src={imageToAdd}
            alt="logo"
            style={{ height: "160px", position: "absolute", left: 30, top: 10 }}
          />
          <Grid
            item
            marginRight={10}
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "thin",
              fontSize: "19px",
              letterSpacing: "2px",
            }}
          >
            About us
          </Grid>
          <Grid
            item
            marginRight={10}
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "thin",
              fontSize: "19px",
              letterSpacing: "2px",
            }}
          >
            Upload Repo
          </Grid>
          <Grid
            item
            marginRight={10}
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "thin",
              fontSize: "19px",
              letterSpacing: "2px",
            }}
          >
            GitLab Repo Data
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        display="flex"
        position="absolute"
        alignItems={"center"}
        justifyContent="center"
      >
        <h1
          style={{
            marginTop: "90px",
            marginBottom: "0px",
            textDecoration: "none",
            color: "#ff5c40",
            fontWeight: "bold",
            fontSize: "70px",
            letterSpacing: "1.5px",
          }}
        >
          GitLab Repo
        </h1>
        <p
          style={{
            letterSpacing: "2px",
            textDecoration: "none",
            color: "white",
            fontSize: "20px",
            fontWeight: "thin",
          }}
        >
          Helps you visualize your GitLab data
        </p>
      </Grid>
    </Grid>
  );
}
