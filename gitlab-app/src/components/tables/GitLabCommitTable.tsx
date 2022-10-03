import { ClassNames } from "@emotion/react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import React from "react";
import { useEffect, useState } from "react";
import { getCommitData } from "../custom-functions/GetData";
import { printData } from "../custom-functions/Print"
import { CommitItem, DataItem } from "../interface/DataFormat"


type CommitTableProps = {data: CommitItem[]}

class GitLabCommitTable extends React.Component<CommitTableProps> {

    render() {
      return (
      <TableContainer className="commitTable" component={Paper} sx={{maxHeight: 600}}>
      <Table aria-label="simple table" stickyHeader>
          <TableHead>
              <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Author name</TableCell>
                  <TableCell>Committer name</TableCell>
                  <TableCell align='center'>Committed date</TableCell>
              </TableRow>
          </TableHead>
            <TableBody>
              {this.props.data.map((commit =>
                    <TableRow
                        key={commit.id}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell width={600}>{commit.title}</TableCell>
                        <TableCell>{commit.author_name}</TableCell>
                        <TableCell>{commit.committer_name}</TableCell>
                        <TableCell
                            align='center' width={200}>{commit.committed_date.split("T")[0]}</TableCell>
                    </TableRow>
                ))}
            </TableBody>

      </Table>
  </TableContainer>
    
      )
  }
}

export default GitLabCommitTable