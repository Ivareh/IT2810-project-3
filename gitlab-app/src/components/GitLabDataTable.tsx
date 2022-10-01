import {CommitItem, DataItem, IssueItem} from "./interface/DataFormat"
import React from "react";
import {getCommitData, getData, getIssueData} from "./custom-functions/GetData";
import GitLabCommitTable from './GitLabCommitTable';
import GitLabIssueTable from "./GitLabIssueTable";
import { Box, Container } from "@mui/material";

export type GitLabDataTableProps = {datatype: string}

class GitLabDataTable extends React.Component<GitLabDataTableProps, {datatype: string, data: DataItem[] }> {
  
  constructor(props: GitLabDataTableProps) {
    super(props);
    this.state = {datatype: props.datatype, data: getData(props.datatype)}
  }


  render () {
    let commits : CommitItem[]
    let isCommit : boolean = false
    let issues : IssueItem[]
    let isIssue : boolean = false
    let commitList : Array<CommitItem>

    if(this.state.datatype === "commit") {
      commits = this.state.data as CommitItem[]
      commitList = Object.values(commits)
      isCommit = true
    } else if (this.state.datatype === "issue") {
      issues = [this.state.data as IssueItem[]].flat()
      isIssue = true
    } else { 
      throw new Error("Invalid input on render(" + this.state.datatype + "), datatype must be either commit or issue")
    }
    return(
      <Container>
        <Box mb={20} border={1} width="sm" >
         <GitLabCommitTable data={getCommitData()}></GitLabCommitTable>
        </Box>
        <Box mb={5}>
          <GitLabIssueTable data={getIssueData()}></GitLabIssueTable>
        </Box>
      </Container>
    )
  }
}


export default GitLabDataTable

