import React from "react";
import { Grid, Typography} from "@mui/material";

export default function Footer() {
    return (
        <Grid container marginTop={10} flexGrow={1} alignItems="flex-end">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          height="fit-content"
          sx={{py: 1}}
        >
          <Grid
            container
            item
            direction="column"
            width={1 / 2}
            alignItems="center"
          >
            <Typography variant="body2">GitLab Repo © Team 62</Typography>
          </Grid>
          <Grid
            container
            item
            direction="column"
            width={1 / 2}
            alignItems="center"
          >
            <Typography variant="body2">
              Check us out on{' '}
              <a
                href="https://gitlab.stud.idi.ntnu.no/it2810-h22/Team-62/it2810-h22-team-62"
                target="_blank"
                rel="noreferrer"
              >
                GitLab
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
}