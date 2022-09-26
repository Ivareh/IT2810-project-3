import React from "react";
import { Grid } from "@mui/material";

export default function Upload() {
  return (
    <Grid container flexGrow={1} alignItems="flex-start" height={"80vh"}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        
      >
        <Grid className="upload"
        container
        item
        direction="column"
        width={1 / 2}
        alignItems="center">
          <h2
            style={{
              fontSize: "25px",
              fontWeight: "normal",
              letterSpacing: "2px",
              marginTop: "40px",
              marginBottom: "0px",
            }}
          >
            Upload Repo
          </h2>
        </Grid>
        <Grid className="gitlabRepo"
         container
         item
         direction="column"
         width={1 / 2}
         alignItems="center">
          <h2
            style={{
              fontSize: "25px",
              fontWeight: "normal",
              letterSpacing: "2px",
              marginTop: "40px",
              marginBottom: "0px",
            }}
          >
            GitLab Repo Data
          </h2>
        </Grid>
      </Grid>
    </Grid>
  );
}
