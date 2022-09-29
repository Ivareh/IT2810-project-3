import { Container, Typography, Button } from "@mui/material"
import { Box } from "@mui/system"
import GitLabCommitDataTable from "./GitLabCommitDataTable"
import GitLabIssueDataTable from "./GitLabIssueDataTable"
import FilterForm from "./FilterForm"
/* import {CommitItem} from "./interface/DataFormat" */


/* Displays Git Lab Data after it is loaded in a table with parameters*/
function GitLabRepo() {
  return (

    <Container maxWidth="lg">
      <Box mt={10} >
        <Typography align="left" variant="h4" fontWeight={500} gutterBottom > GitLab Repo </Typography>

        <Box>
          <h2>Filter</h2>
          <Box>
            <FilterForm/>
          </Box>
          <Box my={1} display="flex" justifyContent="flex-end">
            <Button variant="contained">Filter</Button>
          </Box>
        </Box>

        <Box my={1} display="flex" justifyContent="space-evenly">
          <Button variant="contained">View Commits</Button>
          <Button variant="contained">View Issues</Button>
        </Box>

        <h2>Commits</h2>
        <Box border={1} mb={10} width="sm">
          {/* Table to display data */}
          <GitLabCommitDataTable/>
        </Box>
        <h2>Issues</h2>
        <Box border={1} width="sm">
          <GitLabIssueDataTable/>
        </Box>
 
      </Box>
    </Container>
  )
}


export default GitLabRepo