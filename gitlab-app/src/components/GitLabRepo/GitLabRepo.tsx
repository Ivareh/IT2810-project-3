import { Container, Typography } from "@mui/material"
import { Box } from "@mui/system"
import GitLabDataTable from "../GitLabDataTable/GitLabDataTable"
import "./GitLabRepo.css"
/* import {CommitItem} from "./interface/DataFormat" */


/* Displays Git Lab Data after it is loaded in a table with parameters*/
function GitLabRepo() {
  return (
    <Container maxWidth="lg">
      <Box mt={10} >
        <Typography id="font" align="left" variant="h4" fontWeight={500} gutterBottom > GitLab Repo </Typography>
        <Box border={1} width="sm">
          {/* Table to display data */}
          <GitLabDataTable/>
        </Box>
      </Box>
    </Container>
  )
}


export default GitLabRepo