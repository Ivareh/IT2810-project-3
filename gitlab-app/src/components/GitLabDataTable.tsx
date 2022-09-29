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


class GitLabDataTable extends React.Component<{}, {datatype: string, data: CommitItem[]}> {

  constructor(datatype : string) {
    super(datatype);
    if(datatype) {
      if(datatype === "commit") {
        this.state = {datatype: "commit", getData("commit"): CommitItem[]};
      } else if(datatype === "issue") {
        this.state = {datatype: "issue"};
      }
      data = this.getData(this.state.datatype);
    } else {
  throw new Error("Invalid input on constructor(" + datatype + ", ), datatype must be either commit or issue")
    }
  }
  
  
  getData (datatype: string): CommitItem[] | IssueItem[] {
    if(datatype === "commit") {
      const commits = localStorage.getItem("commits");
      const initialValueIssues = JSON.parse(commits);
      const commitsData = initialValueIssues
      /*
      
      */
      let desiredParametersList : CommitItem[] = {} as CommitItem[];
  
      let desiredParametersString : string[] = ["id", "title", "author_name", "committer_name", "committed_date"]
      Object.keys(commitsData).forEach((key, index:number) => {
      let desiredParameters : CommitItem = {} as CommitItem;
      for(let i = 0; i < desiredParametersString.length; i++) {
        desiredParameters[commitsdata[key][desiredParametersString[i]]] = commitsData[key][desiredParametersString[i]]
      }
      console.log(desiredParameters)
      desiredParametersList.push(desiredParameters)
      }
      return desiredParametersList

    // throw new Error("Invalid input on getData(" + datatype + "), datatype must be either commit or issue")
  }



  printData (): void {
    if (localStorage.getItem('commits') || localStorage.getItem('issues')) {
        console.log(this.data.length);
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
    const isCommit = this.state.datatype === "commit";
    const isIssue = this.state.datatype === "issue";
  
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
              {this.commits.map((commit =>
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

