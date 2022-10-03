import { Container, Typography, Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import FilterFormCommit from "./filter/FilterFormCommit";
import FilterFormIssue from "./filter/FilterFormIssue";
import { useState } from "react";
import GitLabCommitTable from "./tables/GitLabCommitTable";
import { getCommitData, getIssueData } from "./custom-functions/GetData";
import GitLabIssueTable from "./tables/GitLabIssueTable";
import { filterByCommit } from "./filter/FilterCommitData";
import { filterByIssue } from "./filter/FilterIssueData";
import { CommitKeys, IssueKeys } from "./interface/DataFormat";

/* Displays Git Lab Data after it is loaded in a table with parameters*/
function GitLabRepo() {
  const [showCommits, setShowCommits] = useState(false);
  const [showIssues, setShowIssues] = useState(false);
  const [commitData, setCommitData] = useState([]);
  const [issueData, setIssueData] = useState([]);

  const getValues = (filterType: string, filterValue: string) => {
    sessionStorage.setItem("filterOnType", filterType);
    sessionStorage.setItem("filterOnValue", filterValue);
    try {
      if (sessionStorage.getItem("filterOnKind") == "commits") {
        if (filterValue && filterType) {
          switch (filterType) {
            case "":
              setCommitData(getCommitData());
              break;
            case CommitKeys.TITLE:
              setCommitData(
                filterByCommit(getCommitData(), CommitKeys.TITLE, filterValue)
              );
              break;
            case CommitKeys.AUTHOR_NAME:
              setCommitData(
                filterByCommit(
                  getCommitData(),
                  CommitKeys.AUTHOR_NAME,
                  filterValue
                )
              );
              break;
            case CommitKeys.COMMITTER_NAME:
              setCommitData(
                filterByCommit(
                  getCommitData(),
                  CommitKeys.COMMITTER_NAME,
                  filterValue
                )
              );
              break;
            case CommitKeys.COMMITTED_DATE:
              setCommitData(
                filterByCommit(
                  getCommitData(),
                  CommitKeys.COMMITTED_DATE,
                  filterValue
                )
              );
              break;
          }
        } else {
          setCommitData(getCommitData());
        }
      } else if (sessionStorage.getItem("filterOnKind") == "issues") {
        if (filterValue && filterType) {
          switch (filterType) {
            case "":
              setIssueData(getIssueData());
              break;
            case IssueKeys.TITLE:
              setIssueData(
                filterByIssue(getIssueData(), IssueKeys.TITLE, filterValue)
              );
              break;
            case IssueKeys.DESCRIPTION:
              setIssueData(
                filterByIssue(getIssueData(), IssueKeys.DESCRIPTION, filterValue)
              );
              break;
            case IssueKeys.STATE:
              setIssueData(
                filterByIssue(getIssueData(), IssueKeys.STATE, filterValue)
              );
              break;
            case IssueKeys.CREATED_AT:
              setIssueData(
                filterByIssue(getIssueData(), IssueKeys.CREATED_AT, filterValue)
              );
              break;
          }
        } else {
          setIssueData(getIssueData());
        }
      }
    } catch (e) {
      setCommitData([]);
      setIssueData([]);
      console.log("Couldn't find data");
    }
  };

  function handleShowCommits() {
    try {
      sessionStorage.setItem("filterOnKind", "commits");
      setCommitData(getCommitData());
      setShowCommits(true);
      setShowIssues(false);
    } catch (e) {
      if (e instanceof TypeError) {
        alert("Load some data before trying to show it");
        console.log("No data loaded yet");
      } else {
        throw e;
      }
    }
  }

  function handleShowIssues() {
    try {
      sessionStorage.setItem("filterOnKind", "issues");
      setIssueData(getIssueData());
      setShowCommits(false);
      setShowIssues(true);
    } catch (TypeError) {
      alert("Load some data before trying to show it");
      console.log("No data loaded yet");
    }
  }

  return (
    <>
      <Grid
        container
        direction={"row"}
        spacing={20}
        wrap={"nowrap"}
        justifyContent={"center"}
        mb={10}
      >
        <Grid item>
          <Button variant="contained" onClick={() => handleShowCommits()}>
            Commits
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => handleShowIssues()}>
            Issues
          </Button>
        </Grid>
      </Grid>

      {showCommits && (
        <Box mb={28}>
          <Container maxWidth="lg">
            <Typography mb={5} variant="h5" fontWeight={"bold"} align="left">
              Commits
            </Typography>
            <Box maxWidth={"40%"}>
              <FilterFormCommit handleClick={getValues} />
            </Box>
            <GitLabCommitTable data={commitData} />
          </Container>
        </Box>
      )}

      {showIssues && (
        <Box mb={28}>
          <Container maxWidth="lg">
            <Typography mb={5} variant="h5" fontWeight={"bold"} align="left">
              Issues
            </Typography>
            <Box maxWidth={"40%"}>
              <FilterFormIssue handleClick={getValues} />
            </Box>
            <GitLabIssueTable data={issueData} />
          </Container>
        </Box>
      )}
    </>
  );
}

export default GitLabRepo;
