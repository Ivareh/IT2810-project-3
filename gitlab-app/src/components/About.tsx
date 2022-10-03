import React from "react";
import { Grid } from "@mui/material";
import './About.css';


export default function About() {
  return (
    <Grid className="about"
      container
      justifyContent="center"
      height={"40vh"}
      sx={{ width: "70%", margin: "0 auto"}}
    >
      <h2
        style={{
          fontSize: "40px",
          fontWeight: "normal",
          letterSpacing: "2px",
          marginTop: "40px",
          marginBottom: "0px",
        }}
      >
        About us
      </h2>
      <p
        style={{
          fontSize: "20px",
          letterSpacing: "1.5px",
          fontWeight: "normal",
          marginTop: "1px",
          lineHeight: "1.5",
          marginBottom: "0px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas
        felis eget elementum placerat. Pellentesque malesuada ipsum nec dui
        maximus lobortis. Pellentesque eget placerat metus, in pulvinar mi.
        Vestibulum rhoncus sapien eu pulvinar convallis.{" "}
      </p>
    </Grid>
  );
}
