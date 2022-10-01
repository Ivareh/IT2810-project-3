import { Container, Typography, Button } from "@mui/material"
import { Box } from "@mui/system"
import FilterFormCommit from "./FilterFormCommit"
import FilterFormIssue from "./FilterFormIssue"
import { useState } from 'react'
import GitLabCommitTable from "./GitLabCommitTable"
import { getCommitData, getIssueData } from "./custom-functions/GetData"
import GitLabIssueTable from "./GitLabIssueTable"

/* Displays Git Lab Data after it is loaded in a table with parameters*/
function GitLabRepo() {
  const [showCommits, setShowCommits] = useState(true);
  const [showIssues, setShowIssues] = useState(false);
  return (

    <Container maxWidth="lg">
      <Box mt={10} >
        <Typography align="left" variant="h4" fontWeight={500} gutterBottom > GitLab Repo </Typography>

        <>
          <Button variant = "contained" onClick={() => setShowCommits(prev => !prev)}>view commits</Button>
          {showCommits && <Box>
            <FilterFormCommit/>
            <h2>Commits</h2>
            <Box border={1} mb={10} width="sm">
            {/* Table to display data */}
            <GitLabCommitTable data={getCommitData()}/>
        </Box>
          </Box>}
        </>

        <>
        <Button variant = "contained" onClick={() => setShowIssues(prev => !prev)}>view issues</Button>
          {showIssues && <Box>
            <FilterFormIssue/>
            <h2>Issues</h2>
            <Box border={1} width="sm">
            {/* Table to display data */}
            <GitLabIssueTable data={getIssueData()}/>
        </Box>
          </Box>}
        </>

      </Box>
    </Container>
  )
}

export default GitLabRepo