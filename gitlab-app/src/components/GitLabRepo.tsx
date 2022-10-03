import { Container, Button, Grid } from "@mui/material"
import { Box } from "@mui/system"
import FilterFormCommit from "./filter/FilterFormCommit"
import FilterFormIssue from "./filter/FilterFormIssue"
import { useEffect, useState } from 'react'
import GitLabCommitTable from "./tables/GitLabCommitTable"
import { getCommitData, getIssueData } from "./custom-functions/GetData"
import GitLabIssueTable from "./tables/GitLabIssueTable"


/* Displays Git Lab Data after it is loaded in a table with parameters*/
function GitLabRepo() {
  const [showCommits, setShowCommits] = useState(false);
  const [showIssues, setShowIssues] = useState(false);
  const [commitData, setCommitData] = useState([]);
  const [issueData, setIssueData] = useState([]);
  const [filterType, setFilterType] = useState("title");
  const [filterValue, setFilterValue] = useState('');

  function handleShowCommits() {
    try {
      setCommitData(getCommitData());
      setShowCommits(true);
      setShowIssues(false);
    } catch (e) {
      if(e instanceof TypeError) {
        alert("Load some data before trying to show it");
        console.log("No data loaded yet");
        console.log(e)
      } else {
        throw e
      }
    }
}
  
  function handleShowIssues() {
    try {
      setIssueData(getIssueData());
      setShowCommits(false);
      setShowIssues(true);
    } catch (TypeError) {
      alert("Load some data before trying to show it");
      console.log("No data loaded yet");
    }
  }

  useEffect(() => {
    console.log("GitLabRepo"); 
  });

  return (
    <>  
      
      {showCommits && <Box mb={5}>
      <Container maxWidth="lg">
        <Box maxWidth={"50%"}>
          <FilterFormCommit/>
        </Box>
        <GitLabCommitTable data={commitData}/>
      </Container> 
      </Box>}

      {showIssues && <Box mb={5}>
          <Container maxWidth="lg">
            <Box maxWidth={"50%"}>
              <FilterFormIssue/>
            </Box>
          <GitLabIssueTable data={issueData}/>
        </Container> 
        </Box>}

        <Grid container direction={"row"} spacing={10} wrap={"nowrap"} justifyContent={"center"} mb={1}>
        <Grid item>
          <Button variant="contained" onClick={() => handleShowCommits()}>Commits</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => handleShowIssues()}>Issues</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default GitLabRepo