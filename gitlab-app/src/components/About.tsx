import React from "react";
import {Grid} from "@mui/material";
import './component-css/About.css';


export default function About() {
    return (
        <Grid className="about"
              container
              sx={{
                  flexFlow: 'nowrap',
                  textAlign: 'center',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '50vh',
                  width: 'auto'
              }}
        >
            <h2
                style={{
                    fontSize: "40px",
                    fontWeight: "normal",
                    letterSpacing: "2px",
                    marginTop: "20px",
                    marginBottom: "0px",
                }}
            >
                About us
            </h2>
            <p
                style={{
                    justifyContent: 'center',
                    overflow: 'hidden',
                    fontSize: "20px",
                    letterSpacing: "1.5px",
                    fontWeight: "normal",
                    marginTop: "1px",
                    lineHeight: "1.5",
                    marginBottom: "10px",
                    width: '70%'
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                egestas
                felis eget elementum placerat. Pellentesque malesuada ipsum nec
                dui
                maximus lobortis. Pellentesque eget placerat metus, in pulvinar
                mi.
                Vestibulum rhoncus sapien eu pulvinar convallis.{" "}
            </p>
        </Grid>
    );
}
