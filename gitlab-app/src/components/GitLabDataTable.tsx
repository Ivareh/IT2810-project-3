import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  TableCell
} from '@mui/material';
import {useEffect, useState} from 'react';
import SampleCommitData from './data/SampleCommitData';
import {CommitItem, DataItem, IssueItem} from "./interface/DataFormat"
import {filterById, filterByTitle, filterByAuthor, filterByCommitter, filterByDate} from "./FilterCommitData"
import React from "react";

export type GitLabDataTableProps = {datatype: string}

class GitLabDataTable extends React.Component<GitLabDataTableProps, {datatype: string, data: DataItem[] }> {
  
  constructor(props: GitLabDataTableProps) {
    super(props);
    this.state = {datatype: props.datatype, data: this.getData(props.datatype)}
  }

  getData (datatype: string): DataItem[] {
    if(datatype === "commit") {
      const commits = localStorage.getItem("commits");
      const initialValueIssues = JSON.parse(commits);
      const commitsData = initialValueIssues

      let desiredParametersCommitItemList : CommitItem[] = {} as CommitItem[];
      let desiredKeys = ["id", "title", "author_name", "committer_name", "committed_date"]
      commitsData.forEach((commit : any) => {
        let desiredParametersValues : Array<string> = [];
        Object.keys(commit).forEach((key, index) => {
          if(desiredKeys.includes(key)) {
            desiredParametersValues.push(commit[key]);
          }
        })
        console.log("DESIREDPARAMETERVALUES:")
        console.log(desiredParametersValues)
        const desiredParametersCommit = {
          id: desiredParametersValues[0],
          title: desiredParametersValues[1],
          author_name: desiredParametersValues[2],
          committer_name: desiredParametersValues[3],
          committed_date: desiredParametersValues[4]
        } as unknown
        const desiredParametersCommitItem : CommitItem = desiredParametersCommit as CommitItem
        console.log("DESIREDPARAMETERSCOMMITITEM:")
        console.log(desiredParametersCommitItem)
        desiredParametersCommitItemList[commitsData.indexOf(commit)] = desiredParametersCommitItem
  })
  console.log("DESIREDPARAMETERSCOMMITITEMLIST:")
  console.log(desiredParametersCommitItemList)
  return desiredParametersCommitItemList
  }
throw new Error("Invalid input on getData(" + datatype + "), datatype must be either commit or issue")
}

  printData(): void {
    if (localStorage.getItem('commits') || localStorage.getItem('issues')) {
        // the code under shows size of local storage.
        // https://stackoverflow.com/questions/4391575/how-to-find-the-size-of-localstorage
        let _lsTotal = 0, _xLen, _x;
        for (_x in localStorage) {
            if (!localStorage.hasOwnProperty(_x)) {
                continue;
            }
            _xLen = ((localStorage[_x].length + _x.length) * 2);
            _lsTotal += _xLen;
            console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB")
        }
        console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
    } else {
        alert('Data not loaded.')
    }
  }


  render () {
    let commits : CommitItem[]
    let isCommit : boolean = false
    let issues : IssueItem[]
    let isIssue : boolean = false
    if(this.state.datatype === "commit") {
      commits = [this.state.data as CommitItem[]].flat()
      isCommit = true
    } else if (this.state.datatype === "issue") {
      issues = [this.state.data as IssueItem[]].flat()
      isIssue = true
    } else { 
      throw new Error("Invalid input on render(" + this.state.datatype + "), datatype must be either commit or issue")
    }

    return(
    <TableContainer component={Paper} sx={{maxHeight: 400}}>
    <button onClick={() => this.printData()}>Print data size</button>
      <Table aria-label="simple table" stickyHeader>
          <TableHead>
              <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Author name</TableCell>
                  <TableCell>Committer name</TableCell>
                  <TableCell align='center'>Committed date</TableCell>
              </TableRow>
          </TableHead>
          if(isCommit) {
            <TableBody>
              {commits.map((commit =>
                    <TableRow
                        key={commit.id}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell width={600}>{commit.title}</TableCell>
                        <TableCell>{commit.author_name}</TableCell>
                        <TableCell>{commit.committer_name}</TableCell>
                        <TableCell
                            align='center'>{commit.committed_date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
          }

      </Table>
  </TableContainer>
    )
  }
}


export default GitLabDataTable

