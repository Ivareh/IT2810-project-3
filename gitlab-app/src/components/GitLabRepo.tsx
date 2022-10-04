import { Button, Container, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import FilterFormCommit from "./forms/FilterFormCommit"
import FilterFormIssue from "./forms/FilterFormIssue"
import { useState } from 'react'
import GitLabCommitTable from "./tables/GitLabCommitTable"
import { getCommitData, getIssueData } from "./custom-functions/GetData"
import GitLabIssueTable from "./tables/GitLabIssueTable"
import { filterByCommit } from "./filters/FilterCommitData"
import { filterByIssue } from "./filters/FilterIssueData"
import { CommitKey, IssueKey } from "./interface/DataFormat"
import './component-css/GitLabRepo.css'

/* Displays Git Lab Data after it is loaded in a table with parameters*/
function GitLabRepo() {
    const [showCommits, setShowCommits] = useState(false);
    const [showIssues, setShowIssues] = useState(false);
    const [commitData, setCommitData] = useState([]);
    const [issueData, setIssueData] = useState([]);

    /* Gets filtertype and value and filters the data if there are any filters. If there are no filters, it displays all data.
    Stores the filtered data in the state variable commitData and issueData 
    * @param filterType: string
    * @param filterValue: string
    * */
    const getValues = (filterType: string, filterValue: string) => {
        sessionStorage.setItem("filterOnType", filterType);
        sessionStorage.setItem("filterOnValue", filterValue);
        try {
            if (sessionStorage.getItem("filterOnKind") === "commits") {
                if (filterValue && filterType) {
                    switch (filterType) {
                        case "":
                            setCommitData(getCommitData())
                            break;
                        case CommitKey.TITLE:
                            setCommitData(filterByCommit(getCommitData(), CommitKey.TITLE, filterValue));
                            break;
                        case CommitKey.AUTHOR_NAME:
                            setCommitData(filterByCommit(getCommitData(), CommitKey.AUTHOR_NAME, filterValue));
                            break;
                        case CommitKey.COMMITTER_NAME:
                            setCommitData(filterByCommit(getCommitData(), CommitKey.COMMITTER_NAME, filterValue));
                            break;
                        case CommitKey.COMMITTED_DATE:
                            setCommitData(filterByCommit(getCommitData(), CommitKey.COMMITTED_DATE, filterValue));
                            break;
                    }
                } else {
                    setCommitData(getCommitData())
                }
            } else if (sessionStorage.getItem("filterOnKind") === "issues") {
                if (filterValue && filterType) {
                    switch (filterType) {
                        case "":
                            setIssueData(getIssueData())
                            break;
                        case IssueKey.TITLE:
                            setIssueData(filterByIssue(getIssueData(), IssueKey.TITLE, filterValue))
                            break;
                        case IssueKey.DESCRIPTION:
                            setIssueData(filterByIssue(getIssueData(), IssueKey.DESCRIPTION, filterValue))
                            break;
                        case IssueKey.STATE:
                            setIssueData(filterByIssue(getIssueData(), IssueKey.STATE, filterValue))
                            break;
                        case IssueKey.CREATED_AT:
                            setIssueData(filterByIssue(getIssueData(), IssueKey.CREATED_AT, filterValue))
                            break;
                    }
                } else {
                    setIssueData(getIssueData())
                }
            }
        } catch (e) {
            setCommitData([])
            setIssueData([])
            console.log(e)
            console.log("Couldn't find data");
        }
    }

    // Sets state to either show or hide the commit table
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
                console.log(e)
            } else {
                throw e
            }
        }
    }

    // Sets state to either show or hide the issue table
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
            <Grid id="button" container direction={"row"} spacing={15} wrap={"nowrap"}
                justifyContent={"center"} mb={10}>
                <Grid item>
                    <Button variant="contained"
                        sx={{ marginTop: '25px' }}
                        onClick={() => handleShowCommits()}>Commits</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained"
                        sx={{ marginTop: '25px' }}
                        onClick={() => handleShowIssues()}>Issues</Button>
                </Grid>
            </Grid>

            {showCommits && <Box mb={28}>
                <Container id="commits" maxWidth="lg">
                    <Typography mb={5} variant="h5" fontWeight={"bold"}
                        align="left">Commits</Typography>
                    <Box maxWidth={"70%"}>
                        <FilterFormCommit
                            handleClick={getValues}
                        />
                    </Box>
                    <GitLabCommitTable data={commitData} />
                </Container>
            </Box>}

            {showIssues && <Box mb={28}>
                <Container id="issue" maxWidth="lg">
                    <Typography mb={5} variant="h5" fontWeight={"bold"}
                        align="left">Issues</Typography>
                    <Box maxWidth={"70%"}>
                        <FilterFormIssue handleClick={getValues} />
                    </Box>
                    <GitLabIssueTable data={issueData} />
                </Container>
            </Box>}
        </>
    )
}

export default GitLabRepo
