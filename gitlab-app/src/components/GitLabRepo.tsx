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
import { CommitKey, IssueKey } from "./interface/DataFormat";

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
            case CommitKey.TITLE:
              setCommitData(
                filterByCommit(getCommitData(), CommitKey.TITLE, filterValue)
              );
              break;
            case CommitKey.AUTHOR_NAME:
              setCommitData(
                filterByCommit(
                  getCommitData(),
                  CommitKey.AUTHOR_NAME,
                  filterValue
                )
              );
              break;
            case CommitKey.COMMITTER_NAME:
              setCommitData(
                filterByCommit(
                  getCommitData(),
                  CommitKey.COMMITTER_NAME,
                  filterValue
                )
              );
              break;
            case CommitKey.COMMITTED_DATE:
              setCommitData(
                filterByCommit(
                  getCommitData(),
                  CommitKey.COMMITTED_DATE,
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
          console.log(filterType, filterValue);
          console.log("ABOVE IS ISSUE FILTER");
          switch (filterType) {
            case "":
              setIssueData(getIssueData());
              break;
            case IssueKey.TITLE:
              setIssueData(
                filterByIssue(getIssueData(), IssueKey.TITLE, filterValue)
              );
              break;
            case IssueKey.DESCRIPTION:
              setIssueData(
                filterByIssue(getIssueData(), IssueKey.DESCRIPTION, filterValue)
              );
              break;
            case IssueKey.STATE:
              setIssueData(
                filterByIssue(getIssueData(), IssueKey.STATE, filterValue)
              );
              break;
            case IssueKey.CREATED_AT:
              setIssueData(
                filterByIssue(getIssueData(), IssueKey.CREATED_AT, filterValue)
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
      console.log(e);
      console.log("Coudln't find data");
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
        console.log(e);
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
