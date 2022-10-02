import { Container, Typography, Button, Grid } from "@mui/material"
import { Box } from "@mui/system"
import FilterFormCommit from "./filter/FilterFormCommit"
import FilterFormIssue from "./filter/FilterFormIssue"
import { useState } from 'react'
import GitLabCommitTable from "./tables/GitLabCommitTable"
import { getCommitData, getIssueData } from "./custom-functions/GetData"
import GitLabIssueTable from "./tables/GitLabIssueTable"

/* Displays Git Lab Data after it is loaded in a table with parameters*/
function GitLabRepo() {
  const [showCommits, setShowCommits] = useState(true);
  const [showIssues, setShowIssues] = useState(false);

  function handleShowCommits() {
    setShowCommits(true);
    setShowIssues(false);
  }
  
  function handleShowIssues() {
    setShowCommits(false);
    setShowIssues(true);
  }


  return (
    <>  
      <Grid container direction={"row"} spacing={20} wrap={"nowrap"} justifyContent={"center"} mb={10}>
        <Grid item>
          <Button variant="contained" onClick={() => handleShowCommits()}>Commits</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => handleShowIssues()}>Issues</Button>
        </Grid>
      </Grid>

      {showCommits && <Box mb={28}>
      <Container maxWidth="lg">
        <Typography mb={5} variant="h5" fontWeight={"bold"} align="left">Commits</Typography>
        <Box maxWidth={"40%"}>
          <FilterFormCommit/>
        </Box>
        <GitLabCommitTable data={getCommitData()}/>
      </Container> 
      </Box>}

      {showIssues && <Box mb={28}>
          <Container maxWidth="lg">
            <Typography mb={5} variant="h5" fontWeight={"bold"} align="left">Issues</Typography>
            <Box maxWidth={"40%"}>
              <FilterFormIssue/>
            </Box>
          <GitLabIssueTable data={getIssueData()}/>
        </Container> 
        </Box>}
    </>
  )
}

export default GitLabRepo