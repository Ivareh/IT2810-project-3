import {Container, Typography, Button, Grid} from "@mui/material"
import {Box} from "@mui/system"
import FilterFormCommit from "./filter/FilterFormCommit"
import FilterFormIssue from "./filter/FilterFormIssue"
import {useEffect, useState} from 'react'
import GitLabCommitTable from "./tables/GitLabCommitTable"
import {getCommitData, getIssueData} from "./custom-functions/GetData"
import GitLabIssueTable from "./tables/GitLabIssueTable"
import FilterFormProps from "./filter/FilterFormCommit"
import { filterByAuthor, filterByCommitter, filterByDate, filterByTitle } from "./filter/FilterCommitData"

/* Displays Git Lab Data after it is loaded in a table with parameters*/
function GitLabRepo() {
  const [showCommits, setShowCommits] = useState(false);
  const [showIssues, setShowIssues] = useState(false);
  const [commitData, setCommitData] = useState([]);
  const [issueData, setIssueData] = useState([]);
  const [filterType, setFilterType] = useState("title");
  const [filterValue, setFilterValue] = useState('');


    const getValues = (filterType: string, filterValue : string) => {
        setCommitData(getCommitData());
        try{
            if(filterValue && filterType) {
                switch(filterType) {
                    case "":
                        setCommitData(getCommitData())
                        break;
                    case "title":
                        setCommitData(filterByTitle(getCommitData(), filterValue));
                        break;
                    case "author_name":
                        setCommitData(filterByAuthor(getCommitData(), filterValue));
                        break;
                    case "committer_name":
                        setCommitData(filterByCommitter(getCommitData(), filterValue));
                        break;
                    case "committed_date":
                        setCommitData(filterByDate(getCommitData(), filterValue));
                        break;
                }
            } else {
                setCommitData(getCommitData())
            }
        } catch(e) {
            setCommitData([])
            setFilterOnType("")
            setFilterOnValue("")
            console.log("Coudln't find data");
        }
        sessionStorage.setItem("filterOnType", filterType);
        sessionStorage.setItem("filterOnValue", filterValue);
    }

    function handleShowCommits() {
        try {
            setFilterOnKind("commits");
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

    function handleShowIssues() {
        try {
            setFilterOnKind("issues");
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
            <Grid container direction={"row"} spacing={20} wrap={"nowrap"}
                  justifyContent={"center"} mb={10}>
                <Grid item>
                    <Button variant="contained"
                            onClick={() => handleShowCommits()}>Commits</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained"
                            onClick={() => handleShowIssues()}>Issues</Button>
                </Grid>
            </Grid>

            {showCommits && <Box mb={28}>
                <Container maxWidth="lg">
                    <Typography mb={5} variant="h5" fontWeight={"bold"}
                                align="left">Commits</Typography>
                    <Box maxWidth={"40%"}>
                        <FilterFormCommit
                            handleClick={getValues}
                        />
                    </Box>
                    <GitLabCommitTable data={commitData}/>
                </Container>
            </Box>}

            {showIssues && <Box mb={28}>
                <Container maxWidth="lg">
                    <Typography mb={5} variant="h5" fontWeight={"bold"}
                                align="left">Issues</Typography>
                    <Box maxWidth={"40%"}>
                        <FilterFormIssue handleClick={getValues}/>
                    </Box>
                    <GitLabIssueTable data={issueData}/>
                </Container>
            </Box>}
        </>
    )
}

export default GitLabRepo